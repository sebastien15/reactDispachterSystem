import { faAngleLeft, faAngleRight, faBookOpen, faCross, faFile, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { openModal } from "./SecondNav"

function FareModal() {
    return(
        <div id="fareModal" className=" w-6/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-1/4 m-auto hidden">
            <div className="flex justify-between">
                <h4 className="text-sm">Fares</h4>
                <span className="cursor-pointer font-extrabold" onClick={()=>{openModal("fareModal")}}>X</span>
            </div>
            <div className="flex justify-between text-sm mt-5 p-6">
                <div>
                    <label className="font-bold mr-2">Vehicle type:</label>
                    <select className="border border-blue-400 rounded-sm px-1">
                        <option>bmw</option>
                        <option>toyota</option>
                    </select>
                </div>
                <div>
                    <input className="mr-2" type="checkbox"/>
                    <label className="mr-2">Company wise</label>
                    <select className="mr-2">
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </div>
                <div className="border border-blue-400 p-3 text-sm">
                    <div className="flex">
                        <div className="w-1/2 p-4">
                            <div className="flex justify-between">
                                <label className="font-bold">From type:</label>
                                <select className="p-1  border border-blue-400 ">
                                    <option>froom type</option>
                                </select>
                            </div>
                            <div className="flex justify-between mt-2">
                                <label className="font-bold">From Location:</label>
                                <div>
                                    <select className="p-1 mr-1 border border-blue-400 ">
                                        <option>froom type</option>
                                    </select>
                                    <FontAwesomeIcon icon={faPlus} size="2x" className="text-blue-400 cursor-pointer border border-blue-400 rounded-md p-1 -mb-1"/>
                                </div>
                            </div>
                            <div className="flex mt-3">
                                <div className="flex flex-col w-1/5">
                                    <FontAwesomeIcon icon={faAngleLeft} size="3x" className="text-blue-400 cursor-pointer border border-blue-400 rounded-md px-1"/>
                                    <FontAwesomeIcon icon={faAngleRight} size="3x" className="text-blue-400 cursor-pointer border border-blue-400 rounded-md px-1"/>
                                </div>
                                <div className="border border-blue-400 p-2 min-h-10 w-3/5">
                                    <p className="bg-blue-100 p-1 cursor-pointer">hello seba</p>
                                </div>
                                <div className="flex flex-col align-middle  w-1/5">
                                    <FontAwesomeIcon icon={faTimes}  size="2x" className="ml-auto text-red-400 cursor-pointer border border-red-400 rounded-md px-1 my-auto"/>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 p-4">
                            <div className="flex justify-between">
                                <label className="font-bold">From type:</label>
                                <select className="p-1  border border-blue-400 ">
                                    <option>froom type</option>
                                </select>
                            </div>
                            <div className="flex justify-between mt-2">
                                <label className="font-bold">From Location:</label>
                                <div>
                                    <select className="p-1 mr-1 border border-blue-400 ">
                                        <option>froom type</option>
                                    </select>
                                    <FontAwesomeIcon icon={faPlus} size="2x" className="text-blue-400 cursor-pointer border border-blue-400 rounded-md p-1 -mb-1"/>
                                </div>
                            </div>
                            <div className="flex mt-3">
                                <div className="flex flex-col w-1/5">
                                    <FontAwesomeIcon icon={faAngleLeft} size="3x" className="text-blue-400 cursor-pointer border border-blue-400 rounded-md px-1"/>
                                    <FontAwesomeIcon icon={faAngleRight} size="3x" className="text-blue-400 cursor-pointer border border-blue-400 rounded-md px-1"/>
                                </div>
                                <div className="border border-blue-400 p-2 min-h-10 w-3/5">
                                    <p className="bg-blue-100 p-1 cursor-pointer">hello seba</p>
                                </div>
                                <div className="flex flex-col align-middle w-1/5">
                                    <FontAwesomeIcon icon={faTimes}  size="2x" className="ml-auto text-red-400 cursor-pointer border border-red-400 rounded-md px-1 my-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-8/12 p-1">
                            <div className="w-6/12 m-auto bg-blue-400 text-white p-1 text-sm">
                                <label>Fares &#163;:  </label>
                                <input className="p-1 "/>
                            </div>
                        </div>
                        <div className="w-4/12 text-right">
                            <button className="bg-blue-400 text-white hover:bg-blue-600 p-2 mr-1 mt-1 font-bold">
                                <FontAwesomeIcon icon={faPlus}/>
                                 ADD
                            </button>
                            <button className="bg-blue-400 text-white hover:bg-blue-600 p-2 mt-1 font-bold">
                                <FontAwesomeIcon icon={faFile}/>
                                 NEW
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-blue-400 p-3 text-sm mt-4">
                    <table className="w-full ">
                        <thead className="bg-blue-400">
                            <tr className="p-2">
                                <td className="border border-r-white">From Location</td>
                                <td className="border border-r-white">To Location</td>
                                <td className="border border-r-white">Fare &#163;</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="p-2">
                                <td className="border border-r-white">From Location</td>
                                <td className="border border-r-white">To Location</td>
                                <td className="border border-r-white">Fare &#163;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-2">
                    <button className="p-1 text-white bg-blue-400">Save & Close</button>
                    <button className="p-1 text-white bg-blue-400 ml-2">Save & New</button>
                </div>
        </div>
    );
}

export default FareModal;