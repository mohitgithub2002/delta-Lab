import { NextResponse } from "next/server";

async function getData(){
    let apiData =  await fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY",{  cache: 'force-cache'  } )
    let jsonData =  await apiData.json()
    return jsonData;
}  
function sliceData(jsonData){ 
    let optionData = jsonData.filtered.data;
    
    const strikePrice = optionData.map((element) => element.strikePrice);
    
    
    let nvData = []
    
    let underlyingValue = jsonData.records.underlyingValue;
    underlyingValue =Math.round(underlyingValue / 50)*50;
    
    
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
        
        
        
        return NextResponse.json({status: 200, body: {
            underlyingValue:data.records.underlyingValue,
            optionData: slicedData,
        }})

    }catch(err){
        return NextResponse.json({status: 500, body: {message: err.message}})
    }
}