import Link from "next/link";

export default function Calculator() {
    return(
        <div className="h-full flex-col items-end justify-center divide-y divide-blue-200">
            <section>
            <section >
                <div>
                    <div className="flex gap-16 justify-center items-center h-full py-4 w-[1284px] max-w-[1284px] px-4 lg:px-0">
                        <button className=" border-white border-solid border-2 box-border h-10 w-28 shadow-lg bg-green-600 shadow-green-600 ">Nifty</button>
                        <button className="border-white border-solid border-2 box-border h-10 w-28 shadow-lg bg-red-600 shadow-red-600">Bank Nifty</button>
                        <button className="border-white border-solid border-2 box-border h-10 w-32 shadow-lg bg-yellow-600 shadow-yellow-600">Historical Data</button>

                    </div>
                </div>
            </section>
            <section >
                <div className="flex items-end justify-end mx-10">
                    <button className="border-white border-solid border-2 box-border h-10 w-28 bg-blue-600">Refresh</button>
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
                        <tr className="border-b dark:border-neutral-500">

                        </tr>   
                    </tbody>
                    <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                        <th scope="col" className="px-2 py-4 ">
                            Vega
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Theta
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Gamma
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Delta
                        </th>
                        <th scope="col" className="px-2 py-4">
                            IV
                        </th>
                        <th scope="col" className="px-2 py-4">
                            OI chg
                        </th>
                        <th scope="col" className="px-2 py-4">
                            OI
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Volume
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Vol chg
                        </th>
                        <th scope="col" className="px-2 py-4">
                            LTP
                        </th>
                        <th scope="col" className="px-2 py-4 bg-orange-600 text-center">
                            Strike Price
                        </th>
                        <th scope="col" className="px-2 py-4">
                            LTP
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Vol chg
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Volume
                        </th>
                        <th scope="col" className="px-2 py-4">
                            OI
                        </th>
                        <th scope="col" className="px-2 py-4">
                            OI chg
                        </th>
                        <th scope="col" className="px-2 py-4">
                            IV
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Delta
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Gamma
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Theta
                        </th>
                        <th scope="col" className="px-2 py-4">
                            Vega
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4 text-center">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
                        <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        <td className="whitespace-nowrap px-2 py-4">Cell</td>
                        </tr>
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