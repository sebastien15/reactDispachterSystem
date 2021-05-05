import { openModal} from "./SecondNav";

function DriverShiftModal() {
    return(
        <div id="addDriverShiftModal" className=" w-7/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-72 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Driver shift</span>
                <span className="text-base font-bold -mt-1 cursor-pointer" onClick={()=>{openModal("addDriverShiftModal")}}>X</span>
            </div>
            <div className="mt-2 bg-blue-500 p-1 text-center text-white">
                <header>Driver Shift</header>
            </div>
            <div className="flex justify-between text-xs mt-2">
                <div>
                    <label>Driver</label>
                    <select className="p-1 ml-1 border border-500">
                        <option>Select</option>
                    </select>
                </div>
                <div className="">
                    <label>Shifts</label>
                    <select className="p-1 ml-1 border border-500 ">
                        <option>Select</option>
                    </select>
                </div>
            </div>
            <div className="mt-2 bg-blue-700 text-sm text-center text-white">
                <header>Driver shifts</header>
            </div>
            <div className="flex justify-between text-xs mt-2">
                <div>
                    <label>From time</label>
                    <select>
                        <option>select</option>
                    </select>
                </div>
                <div>
                    <label>To time</label>
                    <select>
                        <option>select</option>
                    </select>
                </div>
                <div>
                    <button className="p-1 hover:bg-blue-500 hover:text-white border border-blue-500 mr-2">Add</button>
                    <button className="p-1 hover:bg-blue-500 hover:text-white border border-blue-500 mr-2">New</button>
                </div>
            </div>
            <div className="mt-4">
                <table className="w-full">
                    <tbody>
                        <tr className="bg-blue-500 border border-blue-500 text-white text-xs  text-center">
                            <td className=" border-r border-blue-500"p-1 >Shifts</td>
                            <td className=" border-r border-blue-500"p-1 >From Time</td>
                            <td className=" border-r border-blue-500"p-1 >To Time</td>
                            <td className=" border-r border-blue-500"p-1 ></td>
                        </tr>
                        <tr className="text-xs border border-blue-500 text-center">
                            <td className=" border-r border-blue-500"p-1 >Shifts</td>
                            <td className=" border-r border-blue-500"p-1 >From Time</td>
                            <td className=" border-r border-blue-500"p-1 >To Time</td>
                            <td className=" border-r border-blue-500"p-1 ></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4">
                <button className="mr-2 px-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Save</button>
                <button className="mr-2 px-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Exit</button>
            </div>
        </div>
    )
}

export default DriverShiftModal