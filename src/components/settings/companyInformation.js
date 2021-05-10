function CompanyInfo(params) {
    return(
        <div className="panel hidden" id="CompanyInfo">
            <header className="px-1 bg-blue-500 text-white">Company Information</header>
            <div className="flex w-7/12 mt-3  border border-blue-500">
                <div className="w-6/12 text-sm p-3">
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Name</label>
                        <input className="border border-blue-500"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Tel No</label>
                        <input className="border border-blue-500"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Emergency Contact No</label>
                        <input className="border border-blue-500"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Email</label>
                        <input type="email" className="border border-blue-500"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Fax</label>
                        <input className="border border-blue-500"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Website</label>
                        <input className="border border-blue-500"/>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Address</label>
                        <textarea className="border border-blue-500"></textarea>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Bg Color</label>
                        <input className="border border-blue-500"/>
                        <button>Pick Color</button>
                        <button>Clear Color</button>
                    </div>
                    <div className="flex justify-between mt-1">
                        <label className="font-bold">Map Icon</label>
                        <select className="border border-blue-500">
                            <option>Diamond</option>
                        </select>
                    </div>
                    <div className="flex justify-end mt-36">
                        <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save Changes</button>
                        <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
                    </div>
                </div>
                <div className="w-6/12 text-sm p-3">
                    <div className="w-6/12 border border-blue-500">
                        <header className="bg-blue-500 p-1">Photo</header>
                        <div className="h-28"></div>
                        <div className="flex justify-center">
                            <button className="px-2 border border-blue-500 text-blue-500">Browser</button>
                            <button className="px-2 border border-blue-500 text-blue-500">Preview</button>
                            <button className="px-2 border border-blue-500 text-blue-500">Clear</button>
                        </div>
                    </div>
                    <div className="border border-blue-500 mt-4">
                        <header className="bg-blue-500 p-1">Bank Account Details</header>
                        <div className="p-1">
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">Sort Code</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">Account No</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">Account Title</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">Bank</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">Company Number</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">VAT Number</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">IBAN</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <label className="font-bold">BLC</label>
                                <input className="border border-blue-500"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyInfo