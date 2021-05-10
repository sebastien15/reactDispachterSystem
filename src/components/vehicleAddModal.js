import { openModal } from "./SecondNav"

function AddVehicleModal() {
    return(
        <div id="addVehicleModal" className=" w-7/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-72 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Vehicle</span>
                <span className="text-base font-bold -mt-1 cursor-pointer" onClick={()=>{openModal("addVehicleModal")}}>X</span>
            </div>
            <div className="mt-2 bg-blue-500 text-center text-white">
                <header>Vehicle</header>
            </div>
            <div className="flex mt-2">
                <div className="w-9/12">
                    <div className="flex">
                        <div className="w-8/12 text-xs p-2">
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">Vehicle Type</label>
                                <input className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">No of passengers</label>
                                <input type="number" className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">No of Luggages</label>
                                <input type="number" className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                            <div className="flex mt-1">
                                <label className="w-5/12 font-bold">No of hand luggages</label>
                                <input type="number" className="pl-1 w-7/12 border border-blue-400"/>
                            </div>
                        </div>
                    </div>
                    <div className="p-1">
                        <div className="flex">
                            <header className=" w-3/12 p-1 text-sm text-white bg-blue-400">Peak off Peak wise</header>
                            <div className="flex text-xs pl-2">
                                <div className="w-4/12">
                                    <label className="mr-1">Start rate</label>
                                    <input className=" w-3/12 border border-blue-500"/>
                                </div>
                                <div className="w-8/12">
                                    <label>No of Miles for Start rate</label>
                                    <input type="number" className="mr-1 ml-1 w-3/12 border border-blue-500"/>
                                    <span>Miles</span>
                                </div>
                            </div>
                        </div>
                        <div className="border border-blue-400 flex justify-between text-sm p-2">
                            <div className="p-1 text-xs w-2/12">
                                <div className="flex"> 
                                    <label className="mr-1">From</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                                <div className="flex mt-1">
                                    <label className="mr-1">From</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                            </div>
                            <div className="p-1 text-xs w-2/12">
                                <div className="flex"> 
                                    <label className="mr-1">To</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                                <div className="flex mt-1"> 
                                    <label className="mr-1">To</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                            </div>
                            <div className="p-1 text-xs w-3/12">
                                <div className="flex"> 
                                    <label className="mr-1">Start rate</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                                <div className="flex mt-1"> 
                                    <label className="mr-1">Start rate</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                            </div>
                            <div className="p-1 text-xs w-5/12">
                                <div className="flex"> 
                                    <label className="mr-1">No miles for start rate</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
                                <div className="flex mt-1"> 
                                    <label className="mr-1">No miles for start rate</label>
                                    <input type="number" className="w-5/12 border border-blue-400"/>
                                </div>
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
            
            <div className="flex mt-2">
                {/* <div className="w-3/5 text-xs">
                    <div className="flex">
                        <div className="w-1/2 p-1">
                            <div className="flex text-xs mt-1">
                                <label className="w-1/2 font-bold">Vehicle Model</label>
                                <input className="w-/12 border border-blue-400"/>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="w-2/5 p-1 pt-5 ">
                    <div className="flex justify-between">
                        <button className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white">Save & New</button>
                        <button className="p-2 border border-blue-700 hover:bg-blue-700 hover:text-white">Save & Close</button>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default AddVehicleModal;