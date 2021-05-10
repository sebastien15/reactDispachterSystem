function EmailAndNetwork(params) {
    return(
        <div className="panel hidden" id="EmailAndNetwork">
            <header className="px-1 bg-blue-500 text-white">Email Configuration</header>
            <div className="flex flex-col p-2 w-5/12 mt-3  border border-blue-500">
                <div className="text-sm">
                    <div className="flex">
                        <div className="w-6/12 p-1">
                            <div className="mt-1">
                                <label className="font-bold mr-1">SMTP Host:</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="mt-1">
                                <label className="font-bold mr-1">User Name:</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="mt-1">
                                <label className="font-bold mr-1">Password:</label>
                                <input className="border border-blue-500"/>
                            </div>
                        </div>
                        <div className="w-6/12 p-1">
                            <div className="mt-1">
                                <label className="font-bold mr-1">Port:</label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="mt-1">
                                <input type="checkbox"/>
                                <label className="font-bold mr-1">Enable Secure Connection</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <header className="bg-blue-500 text-white p-1">Mobile Booking Authorization Email</header>
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

export default EmailAndNetwork