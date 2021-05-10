import { openModal } from "./SecondNav"

function AddLocationModal() {
    return(
        <div id="addLocationModal" className=" w-6/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-1/4 m-auto hidden">
            <div className="flex justify-between">
                <h4 className="text-sm">Add Location</h4>
                <span className="cursor-pointer font-extrabold" onClick={()=>{openModal("addLocationModal")}}>X</span>
            </div>
            <div className="flex mt-3 text-sm">
                <div className="w-3/5 p-1">
                    <div className="flex justify-between">
                        <label className="font-bold mr-2">Location name:</label>
                        <input className="border border-blue-400 rounded-sm px-1"/>
                    </div>
                    <div className="mt-1 flex justify-between">
                        <label className="font-bold mr-2">Location type:</label>
                        <select className="border border-blue-400 rounded-sm px-1">
                            <option>bmw</option>
                            <option>toyota</option>
                        </select>
                    </div>
                    <div className="mt-1 flex justify-between">
                        <label className="font-bold mr-2 mb-auto">Address</label>
                        <textarea className="border border-blue-400 rounded-sm px-1"></textarea>
                    </div>
                    <div className="mt-1 flex justify-between">
                        <label className="font-bold mr-2">Zone:</label>
                        <select className="border border-blue-400 rounded-sm px-1">
                            <option>bmw</option>
                            <option>toyota</option>
                        </select>
                    </div>
                    <div className="mt-1 flex justify-between">
                        <label className="font-bold mr-2"> Extra Charges &#163;:</label>
                        <input className="border border-blue-400 rounded-sm px-1"/>
                    </div>
                </div>
                <div className="w-2/5 p-2">
                    <div>
                        <input className="mr-2" type="checkbox"/>
                        <label className="mr-2"> Shortcut Key</label>
                        <input className="mr-2" disabled/>
                    </div>
                    <div>
                        <label className="mr-2"> Post code</label>
                        <input className="mr-2" disabled/>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white mr-1">Save & New</button>
                <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
            </div>
        </div>
    );
}

export default AddLocationModal;