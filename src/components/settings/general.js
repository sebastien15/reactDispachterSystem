function General(params) {
    return(
        <div className="panel" id="General">
            <header className="pl-1 bg-blue-500 text-white">Policy</header>
            <div className="flex mt-2 w-9/12 border border-blue-500">
                <div className="w-6/12 p-3">
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Driver Expiry Notice</label>
                        <div>
                            <input type="number" className=" border border-blue-500"/>
                            <label className="font-bold">(In days)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Booking Expiry Notice</label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In mins)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Airport Booking Expiry Notice</label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In mins)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Airport Pickup Charges</label>
                        <input type="number" className="w-3/12 border border-blue-500"/>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Driver Commision per booking</label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">%</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Driver Monthly Rent</label>
                        <input type="number" className="w-3/12 border border-blue-500"/>
                    </div>
                    <div className="text-sm mt-1 flex ">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Pick Commission From charges</label>
                    </div>
                    <div className="text-sm mt-1 flex ">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">No commission in Account Jobs</label>
                    </div>
                    <div className="text-sm mt-1 flex ">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Round Mileage Fares</label>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Apply Start Rate Within </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">Miles</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Show booking other charges</label>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Credit Card Extra Charges</label>
                        <input type="number" className="w-3/12 border border-blue-500"/>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Credit Card Extra Charges</label>
                        <input type="number" className="w-3/12 border border-blue-500"/>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Discount For Return Journey</label>
                        <input type="number" className="w-3/12 border border-blue-500"/>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Discount For W/R Journey</label>
                        <input type="number" className="w-3/12 border border-blue-500"/>
                    </div>
                </div>
                <div className="w-6/12 p-3">
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable PDI </label>
                        </div>
                        <div>
                            <label className="font-bold">Paging Size</label>
                            <input type="number" className="border border-blue-500"/>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable Booking Quotation </label>
                        </div>
                        <div>
                            <label className="font-bold">Grid Row Size</label>
                            <input type="number" className="border border-blue-500"/>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable OnBoard Driver </label>
                        </div>
                        <div>
                            <label className="font-bold">Cash Call Charges </label>
                            <input type="number" className="border border-blue-500"/>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex">
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable Peak OffPeak Time Fare </label>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable Advance Booking Text </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">After Mins </label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex">
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable Passenger Text</label>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Enable Booking Due Alert</label>
                        </div>
                        <div>
                            <input type="checkbox" className="mr-1"/>
                            <label className="font-bold">Auto Calculate Fares</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <label className="font-bold">To day's Booking </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">Hour(s) </label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <label className="font-bold">Recent Booking </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">In Day(s) </label>
                        </div>
                    </div>
                    <div className="mt-3 border border-blue-800">
                        <header className="bg-blue-800 text-white px-1">Web Booking</header>
                        <div className=" p-2 text-sm justify-between">
                            <div className="flex">
                                <div>
                                    <input className="mr-1" type="checkbox"/>
                                    <label className="mr-1 font-bold">Enable Web Booking</label>
                                    <input type="number"/>
                                </div>
                                <div>
                                    <input className="mr-1" type="checkbox"/>
                                    <label className="font-bold">Web Accounts</label>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <input className="mr-1" type="checkbox"/>
                                    <label className="font-bold">Web Booking Authorization</label>
                                </div>
                                <div>
                                    <input className="mr-1" type="checkbox"/>
                                    <label className="font-bold">Mobile Booking Authorization</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-8">
                        <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save Changes</button>
                        <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default General