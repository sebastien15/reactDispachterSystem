import { openModal } from "./SecondNav"

function AddCustomerModal() {
    return(
        <div id="addCustomerModal" className=" w-6/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-1/4 m-auto hidden">
            <div className="flex justify-between">
                <h4 className="text-sm">Add Customer</h4>
                <span className="cursor-pointer font-extrabold" onClick={()=>{openModal("addCustomerModal")}}>X</span>
            </div>
            <div className="flex mt-3 text-sm">
                <div className="w-6/12 p-1">
                    <div className="flex justify-between mt-1">
                        <label className="font-bold mr-2">Name:</label>
                        <input className="border border-blue-400 rounded-sm px-1"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold mr-2">Email:</label>
                        <input className="border border-blue-400 rounded-sm px-1"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold mr-2">Tel No:</label>
                        <input className="border border-blue-400 rounded-sm px-1"/>
                    </div>
                </div>
                <div className="w-6/12 p-2">
                    <div className="flex justify-start mt-1">
                        <input className="mr-2" type="checkbox"/>
                        <label className="mr-2"> Black List</label>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="mr-2">Mobile No </label>
                        <input className="border border-blue-400 rounded-sm px-1" />
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="mr-2">Fax </label>
                        <input className="border border-blue-400 rounded-sm px-1" />
                    </div>
                </div>
            </div>
            <header className="bg-blue-500 text-white text-sm mt-2">Address information</header>
            <div className="border border-blue-500 p-1 text-sm ">
                <div className="flex">
                    <label className="w-1/5">Door no</label>
                    <input className="border border-blue-500"/>
                </div>
                <div className="flex mt-1">
                    <label className="w-1/5">Address 1:</label>
                    <input className="border border-blue-500"/>
                </div>
                <div className="flex mt-1">
                    <label className="w-1/5">Address 2:</label>
                    <input className="border border-blue-500"/>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button className="p-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white mr-1">Save & New</button>
                <button className="p-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
            </div>
        </div>
    );
}

export default AddCustomerModal;