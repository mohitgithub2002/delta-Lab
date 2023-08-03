import { NextResponse } from "next/server";

async function getData(){
    let apiData =  await fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY",{  cache: 'no-store'  } )
    let jsonData =  await apiData.json()
    return jsonData;
} 

function highVolume(jsonData){
    const volumeCE = jsonData.map((element) => element.CE.totalTradedVolume );
    const volumePE = jsonData.map((element) => element.PE.totalTradedVolume );
    const maxVolCE= Math.max(...volumeCE);
    const maxVolPE= Math.max(...volumePE);
    return {
        maxVolCE: volumeCE.indexOf(maxVolCE),
        maxVolPE: volumePE.indexOf(maxVolPE),
    }
}

function highOI(jsonData){
    const OICE = jsonData.map((element) => element.CE.openInterest );
    const OIPE = jsonData.map((element) => element.PE.openInterest );
    const maxOICE= Math.max(...OICE);
    const maxOIPE= Math.max(...OIPE);
    return {
        maxOICE: OICE.indexOf(maxOICE),
        maxOIPE: OIPE.indexOf(maxOIPE),
    }
}

function sliceData(jsonData){ 
    let optionData = jsonData.filtered.data;
    
    const strikePrice = optionData.map((element) => element.strikePrice);
    
    
    let nvData = []
    
    let underlyingValue = jsonData.records.underlyingValue;
    underlyingValue =Math.trunc(underlyingValue / 50)*50;
    
    
    const indexOfUnderlyingValue = strikePrice.indexOf(underlyingValue);
    let i = indexOfUnderlyingValue - 9;
    let j = indexOfUnderlyingValue + 10;
    
    for(i; i<=j;i++){
        nvData.push(optionData[i])
    }
    
    return nvData;
}



export const GET = async(req, res)=>{
    try{
        let data  =  await getData();
        let slicedData = sliceData(data);
        let maxVolume = highVolume(slicedData);
        let maxOI = highOI(slicedData);
        
        return NextResponse.json({status: 200, body: {
            underlyingValue:data.records.underlyingValue,
            optionData: slicedData,
            maxVolCE: maxVolume.maxVolCE,
            maxVolPE: maxVolume.maxVolPE,
            maxOICE: maxOI.maxOICE,
            maxOIPE: maxOI.maxOIPE,
        }})

    }catch(err){
        return NextResponse.json({status: 500, body: {message: err.message}})
    }
}