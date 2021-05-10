function Sms(params) {
    return(
        <div className="panel hidden" id="Sms">
            <header className="px-1 bg-blue-500 text-white">SMS Settings </header>
            <div className="flex flex-col p-2 w-5/12 mt-3  border border-blue-500">
                <div className="text-sm">
                    <div className="flex justify-between">
                        <div className=" w-4/12 flex justify-between">
                            <div>
                                <input type="radio"/>
                                <label className="ml-1 font-bold">SMS A</label>
                            </div>
                            <div>
                                <input type="radio"/>
                                <label className="ml-1 font-bold">SMS B</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <input type="checkbox"/>
                                <label className="ml-1 font-bold">Read SMS</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 text-sm">
                        <nav>
                            <button className="mr-1 bg-blue-200 p-1">SMS A</button>
                            <button className="mr-1 bg-blue-200 p-1">SMS B</button>
                        </nav>
                        <div className="flex mt-1">
                            <div className="w-6/12 p-1">
                                <div>
                                    <label className="font-bold mr-1">User name</label>
                                    <input className="border border-blue-500"/>
                                </div>
                                <div className="mt-1">
                                    <label className="font-bold mr-1">Passsword</label>
                                    <input className="border border-blue-500"/>
                                </div>
                            </div>
                            <div className="w-6/12 p-1">
                                <div>
                                    <label className="font-bold mr-1">Api key</label>
                                    <input className="border border-blue-500"/>
                                </div>
                                <div className="mt-1">
                                    <label className="font-bold mr-1">Sender name</label>
                                    <input className="border border-blue-500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <header className="bg-blue-500 text-white p-1">Dispatch text for driver</header>
                        <div className="mt-2 flex">
                            <div className="w-8/12 border border-blue-500 p-2">
                                <textarea className="p-1 w-full h-full">lorem3adffasfasfasfsafs</textarea>
                            </div>
                            <div className="w-4/12 p-4 flex flex-col">
                                <label className="font-bold">Tags:</label>
                                <select className="mt-1 border border-blue-500">
                                    <option>select</option>
                                </select>
                                <button className="mt-1 p-1 mr-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Get Tag</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <label className="bg-blue-500 text-white p-1">Network Configuration</label>
                        <div className="p-1 mt-3">
                            <label className="font-bold mr-1">Shared Network Path</label>
                            <input className="border border-blue-500 mr-1"/>
                            <label className="font-bold ">Format eg: \\server\\shared</label>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-8">
                    <button className="p-1 mr-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save Changes</button>
                    <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
                </div> 
            </div>
        </div>
    );
}

export default Sms