import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openModal} from "./SecondNav";

function DriverModal() {
    return(
        <div id="addDriverModal" className=" w-7/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-72 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Driver</span>
                <span className="text-base font-bold -mt-1 cursor-pointer" onClick={()=>{openModal("addDriverModal")}}>X</span>
            </div>
            <div className="mt-2 bg-blue-500 text-center text-white">
                <header>Driver</header>
            </div>
            <div className="mt-2 text-xs">
                <nav>
                    <a className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Driver Info</a>
                    <a className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Driver Shifts</a>
                    <a className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Vehicle History</a>
                </nav>
            </div>
            <div className="flex mt-2">
                <div className="w-9/12">
                    <div className="border border-blue-400 p-1">
                        <header className="p-1 text-sm text-white bg-blue-400">Login Details</header>
                        <div className="flex justify-between text-sm p-2">
                            <div>
                                <label className="mr-1">Driver No</label>
                                <input className="border border-blue-400"/>
                            </div>
                            <div>
                                <input type="checkbox" className="mr-1"/>
                                <label>Has PDA</label>
                            </div>
                            <div>
                                <input type="checkbox" className="mr-1"/>
                                <label>Rent Paid</label>
                            </div>
                            <div>
                                <input type="checkbox" className="mr-1"/>
                                <label>Active</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-6/12 text-xs p-2">
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Driver Name</label>
                                <input className="w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Email</label>
                                <input className="w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Telephone No</label>
                                <input className="w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Address</label>
                                <textarea className="w-7/12 border border-blue-400"></textarea>
                            </div>
                        </div>
                        <div className="w-6/12 text-xs p-2">
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Date of Birth</label>
                                <input type="date" className="w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Mobile No</label>
                                <input className="w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">NI</label>
                                <input className="w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Driver Type</label>
                                <select className="w-7/12 border border-blue-400">
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-6/12 font-bold">Driver Monthly rent</label>
                                <select className="w-6/12 border border-blue-400">
                                    <option>select</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-3/12">
                    <div className="border border-blue-400 p-2">
                        <header className="p-1">Photo</header>
                        <footer className="flex text-xs">
                            <button className="border border-blue-400 p-1 mr-1">Browse</button>
                            <button className="border border-blue-400 p-1 mr-1">Preview</button>
                            <button className="border border-blue-400 p-1">Browse</button>
                        </footer>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-6/12 p-1">
                    <header className="text-sm font-bold bg-blue-600 text-white">Expiry Details</header>
                    <div>
                        <table>
                            <tbody className="text-xs">
                                <tr className="bg-blue-200">
                                    <td className="border-r border-white">Expiry date</td>
                                    <td className="border-r border-white">Document Title</td>
                                    <td className="border-r border-white">File N..</td>
                                    <td className="border-r border-white"></td>
                                    <td className="border-r border-white"></td>
                                    <td className="border-r border-white"></td>
                                </tr>
                                <tr className="">
                                    <td className="border-l border-r border-blue-200"></td>
                                    <td className="border-r border-blue-200">PHC Vehicle</td>
                                    <td className="border-r border-blue-200">MOT</td>
                                    <td className="border-r border-blue-200">
                                        <button>Clear</button>
                                    </td>
                                    <td className="border-r border-blue-200">
                                        <button>Browse</button>
                                    </td>
                                    <td className="border-r border-blue-200">
                                        <button>View</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="w-6/12 text-xs p-1">
                    <header className="text-sm font-bold bg-blue-600 text-white">Availability</header>
                    <div>
                        <div>
                            <div className="flex justify-between mt-1">
                                <div className="">
                                    <label>Became Available</label>
                                    <select>
                                        <option>select</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label className="ml-1">End Driver</label>
                                </div>
                            </div>
                            <div className="flex justify-between mt-1 mb-1">
                                <div className="">
                                    <label>Ending Date:</label>
                                    <select>
                                        <option>select</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="border border-blue-400 p-1 hover:bg-blue-400 hover:text-white mr-1">
                                        <FontAwesomeIcon icon={faPlus}/>
                                        Add
                                    </button>
                                    <button className="border border-blue-400 p-1 hover:bg-blue-400 hover:text-white">
                                        New
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border border-blue-400">
                            <table className="w-full">
                                <tbody>
                                    <tr className="bg-blue-900 text-white">
                                        <td className="border border-white">Become Available</td>
                                        <td className="border border-white">Expiry date</td>
                                        <td className="border border-white"></td>
                                    </tr>
                                    <tr className="border-b border-blue-900">
                                        <td className="border-r border-blue-900">1</td>
                                        <td className="border-r border-blue-900">2</td>
                                        <td className="border-r border-blue-900"></td>
                                    </tr>
                                    <tr className="border-b border-blue-900">
                                        <td className="border-r border-blue-900">1</td>
                                        <td className="border-r border-blue-900">2</td>
                                        <td className="border-r border-blue-900"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex mt-2">
                <div className="w-3/5 text-xs">
                    <header className="font-bold text-sm bg-blue-600 text-white">Assigned Vehicle</header>
                    <div className="flex justify-between mt-2">
                        <div>
                            <label className="font-bold">Assigned on</label>
                            <input type="date"/>
                        </div>
                        <div>
                            <label className="font-bold">End on</label>
                            <input type="date"/>
                        </div>
                        <div>
                            <button className="text-xs p-1 border border-blue-400 hover:bg-blue-400 hover:text-white">End vehicle</button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2 p-1">
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Vehicle Type</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Color</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Vehicle Make</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Vehicle No</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Owner</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Vehicle Model</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 p-1 pt-20 ">
                    <div className="flex justify-between">
                        <button className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white">Print</button>
                        <button className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white">Save & New</button>
                        <button className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white">Save & Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DriverModal