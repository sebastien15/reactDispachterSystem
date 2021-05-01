function RouteSuggestion(params) {
    return(
        <div>
            <div className="flex">
                <div className="w-4/12">
                    <div className="flex justify-between">
                        <label>From</label>
                        <select>
                            <option>kigali</option>
                            <option>Nyagatovu</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Pickup notes</label>
                        <input />
                    </div>
                    <div className="flex justify-between">
                        <label>Pickup point</label>
                        <input />
                    </div>
                    <div className="flex justify-between">
                        <label>Vehicle Type</label>
                        <select>
                            <option>Sallon</option>
                        </select>
                        <button>Multi Vehicle</button>
                    </div>
                    <div className="flex justify-between">
                        <label>Journey Type</label>
                        <input type="radio"/><label>one way</label>
                        <input type="radio"/><label>return</label>
                        <input type="radio"/><label>W/R</label>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <label>Passsenger</label>
                            <input/>
                        </div>
                        <div className="flex">
                            <label>Luggages</label>
                            <input/>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <input type="checkbox"/>
                        <label>Account</label>
                        <select disabled>
                            <option>=</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Department</label>
                        <select>
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                </div>
                <div className="w-4/12">
                    <div className="flex justify-between">
                        <label>To</label>
                        <select>
                            <option>address</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label>Dest. notes</label>
                        <input/>
                    </div>
                    <div className="flex justify-between">
                        <label>Destination</label>
                        <input/>
                    </div>
                    <div className="flex justify-between">
                        <label>Customer name</label>
                        <input type="text"/>
                    </div>
                    <div className="flex justify-between">
                        <label>Telephone no</label>
                        <input/>
                    </div>
                    <div className="flex justify-between">
                        <label>Mobile no</label>
                        <input/>
                    </div>
                    <div className="flex justify-between">
                        <label>Email</label>
                        <input/>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex">
                            <label>Date</label>
                            <input type="date"/>
                        </div>
                        <div className="flex">
                            <label>Time</label>
                            <input type="time"/>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <label>Driver</label>
                        <select >
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </div>
                </div>
                <div className="w-4/12"></div>
            </div>
            <div className="flex">
                <div className="w-4/12">
                    <label>Special requirements</label>
                    <textarea></textarea>
                </div>
                <div className="w-8/12 bg-blue-200 p-3">
                    <h6 className="bg-blue-800 text-white">Actions</h6>
                    <div className="flex">
                        <button>Save Booking</button>
                        <button>Print</button>
                        <button>Cancel Booking</button>
                        <button>EXIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RouteSuggestion;