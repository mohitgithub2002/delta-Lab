import { NextResponse } from "next/server";

async function getData(){
    let apiData =  await fetch("https://www.nseindia.com/api/option-chain-indices?symbol=NIFTY")
    let jsonData =  await apiData.json()
    
    return jsonData;
}

export const GET = async(req, res)=>{
    try{
        let data  =  await getData();
        
        return NextResponse.json({status: 200, body: {
            underlyingValue:data.records.underlyingValue,
            optionData: data.filtered.data,
        }})

    }catch(err){
        return NextResponse.json({status: 500, body: {message: err.message}})
    }
}