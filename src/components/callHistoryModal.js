import { openModal} from "./SecondNav";

function CallHistoryModal() {
    return(
        <div id="callHistoryModal" className=" w-7/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-72 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Call History</span>
                <span className="text-base font-bold -mt-1 cursor-pointer" onClick={()=>{openModal("callHistoryModal")}}>X</span>
            </div>
            
            <div className="mt-4">
                    <div className="flex">
                        <div className="w-5/12 text-xs p-2">
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold"> From Date</label>
                                <input type="date" className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Name</label>
                                <input className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Line</label>
                                <input className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                        </div>
                        <div className="w-5/12 text-xs p-2">
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">To Date</label>
                                <input type="date" className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Phone No</label>
                                <input className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">STN</label>
                                <input className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                        </div>
                        <div className="w-2/12 text-xs p-1">
                            <button className="p-1 px-2 mt-4 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">View call history</button>
                            <button className="p-1 mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">View missed calls</button>
                        </div>
                    </div>
                    <div className="p-1">
                        <header className=" p-1 text-sm text-white bg-blue-400">Call History</header>                         
                        <div className="border border-blue-400 flex justify-between text-sm p-2">
                            <table className="w-full">
                                <tbody className="text-xs">
                                    <tr className="border border-blue-500">
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">Sno</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">Name</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">Phone No</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">Call Date Time</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">Line</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">STN</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500">Duration</td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500"></td>
                                        <td className=" bg-blue-200 p-2 border-r border-blue-500"></td>
                                    </tr>
                                    <tr className="border border-blue-500">
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500">0</td>
                                        <td className="border-r border-blue-500 ">
                                            <button className="border border-blue-500 hover:bg-blue-500 hover:text-white p-2 w-full">Cancel Booking</button>
                                        </td>
                                        <td className=" border-r border-blue-500 ">
                                            <button className="border border-blue-500 hover:bg-blue-500 hover:text-white p-2 w-full">Add Customer</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </div>
    )

}
export default CallHistoryModal;