import { openModal } from "./SecondNav"

function AddZoneModal() {
    return(
        <div id="addZoneModal" className=" w-6/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-1/4 m-auto hidden">
            <div className="flex justify-between">
                <h4 className="text-sm">Add Zone</h4>
                <span className="cursor-pointer font-extrabold" onClick={()=>{openModal("addZoneModal")}}>X</span>
            </div>
            <div className=" mt-3 text-sm">
                <div className="p-1">
                    <div className="flex justify-between">
                        <label className="font-bold mr-2">Zone name:</label>
                        <input className="border border-blue-400 rounded-sm px-1"/>
                    </div>
                    <div className="border border-blue-500 mt-2 text-sm">
                        <header className="bg-blue-500 text-white ">Associate Post code</header>
                        <div className="p-1 mt-2">
                            <div className="flex justify-between">
                                <div>
                                    <label>Post code</label>
                                    <input className="border border-blue-500"/>
                                </div>
                                <div>
                                    <button className="px-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Add</button>
                                    <button className="px-1 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">New</button>
                                </div>
                            </div>
                            <div className=" mt-2 w-full">
                                    <table className="min-w-full">
                                        <tbody>
                                            <tr className="bg-blue-500">
                                                <td className="text-white border-r border-blue-900">Post code</td>
                                                <td className=" border-r border-blue-900" ></td>
                                            </tr>
                                            <tr>
                                                <td className="border-r border-blue-900">2</td>
                                                <td>1</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                    <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-2 w-4/12 m-auto mt-3">Save</button>
                </div>
            </div>
        </div>
    );
}

export default AddZoneModal;