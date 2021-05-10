function Pda(params) {
    return(
        <div className="panel hidden" id="Pda">
            <header className="pl-1 bg-blue-500 text-white">PDA Settings</header>
            <div className="flex mt-2 w-9/12 border border-blue-500">
                <div className="w-6/12 p-3">
                    <div className="text-sm mt-1 flex ">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Enable PDA</label>
                    </div>
                    <div className="text-sm mt-1 flex ">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Enable Arrival Booking Text</label>
                    </div>
                    <div className="text-sm mt-1 flex ">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Send Dispatch Text To Driver</label>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Sin Bin Timer</label>
                        <div>
                            <input type="number" className=" border border-blue-500"/>
                            <label className="font-bold">(In mins)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Job Offer Request Timeout </label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In mins)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Plot Job Expiry Interval 1</label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In mins)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Plot Job Expiry Interval 2</label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In mins)</label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <label className="font-bold">Show Expired Jobs Before</label>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(Hours)</label>
                        </div>
                    </div>
                </div>
                <div className="w-6/12 p-3">
                    <div className="text-sm mt-1 flex justify-between">
                        <input type="checkbox" className="mr-1"/>
                        <label className="font-bold">Enable AutoDespatch Job </label>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <label className="font-bold">Nearest Distance </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In mins) </label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <label className="font-bold">Least Est. time </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In Mins) </label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <label className="font-bold">Auto Retry </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In Mins) </label>
                        </div>
                    </div>
                    <div className="text-sm mt-1 flex justify-between">
                        <div>
                            <label className="font-bold">Before Due </label>
                        </div>
                        <div>
                            <input type="number" className="border border-blue-500"/>
                            <label className="font-bold">(In Mins) </label>
                        </div>
                    </div>
                    <div className="mt-3 border border-blue-800">
                        <header className="bg-blue-800 text-white px-1">Bidding</header>
                        <div className=" p-2 text-sm">
                            <div className="mt-1">
                                <input className="mr-1" type="radio"/>
                                <label className="font-bold">Fastest Finger</label>
                            </div>
                            <div className="mt-1">
                                <input className="mr-1" type="radio"/>
                                <label className="font-bold">Nearest Driver</label>
                            </div>
                            <div className="mt-1">
                                <input className="mr-1" type="radio"/>
                                <label className="font-bold">Longest waiting in Queue</label>
                            </div>
                            <div className="text-sm mt-1 flex justify-between">
                                <div>
                                    <label className="font-bold">Elapsed Time </label>
                                </div>
                                <div>
                                    <input type="number" className="border border-blue-500"/>
                                    <label className="font-bold">(In Mins) </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-8">
                        <button className="mr-1 p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save Changes</button>
                        <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pda