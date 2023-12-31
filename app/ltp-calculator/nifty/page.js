'use client';
// Path: app\ltp-calculator\banknifty\page.js

import { useRouter } from 'next/navigation'
export default async function Calculator() {
    let chainData 
    const router = useRouter();
    const response =  await fetch("http://localhost:3000/api/ltp-calculator/nifty/nearatm",{ next: { revalidate: 10 } });
    const data = await response.json();
    chainData = data.body;

    const eventref = () => {
        router.refresh();
    }

    return(
        <div className="h-full flex-col items-end justify-center divide-y divide-blue-200">
            <section className="divide-y divide-dashed">
            <section >
                <div className="my-5">
                    <div className="flex gap-16 justify-center items-center h-full py-4 w-[1284px] max-w-[1284px] px-4 lg:px-0">
                        <button className=" border-white border-solid border-2 box-border h-10 w-28 shadow-lg bg-green-600 shadow-green-600 ">Nifty</button>
                        <button className="border-white border-solid border-2 box-border h-10 w-28 shadow-lg bg-red-600 shadow-red-600">Bank Nifty</button>
                        <button className="border-white border-solid border-2 box-border h-10 w-32 shadow-lg bg-yellow-600 shadow-yellow-600">Historical Data</button>

                    </div>
                </div>
            </section>
            <section  >
                <div className="flex items-center justify-start mx-10 my-10">
                    <input
                        className="border-white border-solid border-2 box-border h-10 w-56 mx-10 bg-gray-600 text-center"
                        type="text"
                        value = "NIFTY"
                        readOnly
                    >
                    </input>
                    <input
                        className="border-white border-solid border-2 box-border h-10 w-56 mx-10 bg-gray-600 text-center"
                        type="text"
                        value = {chainData.underlyingValue}
                        readOnly
                    >
                    </input>
                    <button 
                    
                    onClick={eventref}
                    href="/ltp-calculator/nifty"
                    className="border-white border-solid border-2 box-border h-10 w-28 mx-10 bg-blue-600"
                    >Refresh</button>
                </div>
            </section>
            </section>
            <section className="mt-6 overflow-auto">
            <div className="flex flex-col ">
            <div className="">
                <div className="inline-block min-w-full py-2 ">
                <div className="">
                    <table className="min-w-full text-left text-sm font-light border-solid border-2 border-white">
                    <tbody>
                        <tr className="border-b border-black bg-purple-600"></tr>
                    </tbody>
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-2 py-4 text-center ">
                            Vega
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Theta
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Gamma
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Delta
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            IV
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            OI chg
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            OI
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Volume
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Vol chg
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            LTP
                        </th>
                        <th scope="col" className="px-2 py-4 text-center bg-orange-500 ">
                            Strike Price
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            LTP
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Vol chg
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Volume
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            OI
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            OI chg
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            IV
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Delta
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Gamma
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Theta
                        </th>
                        <th scope="col" className="px-2 py-4 text-center">
                            Vega
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        {chainData.optionData.map((item, index)=>(
                            <tr key={index} className={`whitespace-nowrap px-2 py-1 text-center border-b dark:border-black` + `${(index==9) ?"border-b-8 border-red-800":"border-b border-black"}` }>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.vega}</td>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.callTheta}</td>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.gamma}</td>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.callDelta}</td>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.CE.impliedVolatility}</td>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.CE.changeinOpenInterest}</td>
                                <td className={`${(index<=9)?" bg-gray-500": " "} , ${(index===chainData.maxOICE)?" bg-blue-400":""}`}>{item.CE.openInterest}</td>
                                <td className={`${(index<=9)?" bg-gray-500": " "} , ${(index===chainData.maxVolCE)?" bg-red-500":""}`}>{item.CE.totalTradedVolume}</td>
                                <td className={`${(index<=9)?" bg-gray-500": "null "} , ${(Math.sign(item.CE.change) === -1)?" text-red-400":"text-green-300"}`}>{item.CE.change.toFixed(2)}</td>
                                <td className={(index<=9)?" bg-gray-500 ": " " }>{item.CE.lastPrice}</td>
                                <td className="whitespace-nowrap px-2 py-1 text-center bg-orange-500">{item.strikePrice}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.PE.lastPrice}</td>
                                <td className={`${(index>9)?" bg-gray-500 ": " null"} ,  ${(Math.sign(item.PE.change) === -1)?" text-red-400":"text-green-300"}`}>{item.PE.change.toFixed(2)}</td>
                                <td className={`${(index>9)?" bg-gray-500": " "} , ${(index===chainData.maxVolPE)?" bg-green-600":""}` }>{item.PE.totalTradedVolume}</td>
                                <td className={`${(index>9)?" bg-gray-500": " "} , ${(index===chainData.maxOIPE)?" bg-violet-600":""}`}>{item.PE.openInterest}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.PE.changeinOpenInterest}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.PE.impliedVolatility}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.putDelta}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.gamma}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.putTheta}</td>
                                <td className={(index>9)?" bg-gray-500 ": " " }>{item.vega}</td>
                            </tr>
                        ))}
                    </tbody>
                    
                    </table>
                </div>
                </div>
            </div>
            </div>
           </section>
        </div>
    )
}