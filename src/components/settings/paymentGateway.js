function PaymentGateway(params) {
    return(
        <div className="panel hidden" id="PaymentGateway">
            <header className="px-1 bg-blue-500 text-white">Payment Gateway Details</header>
            <div className="flex flex-col p-2 w-5/12 mt-3  border border-blue-500">
                <div className="text-sm">
                    <div>
                        <label className="font-bold mr-1">Gateway: </label>
                        <select className="border border-blue-500">
                            <option>select</option>
                        </select>
                    </div>
                    <div className="mt-2 flex">
                        <div className="w-8/12 border border-blue-500 p-2">
                            <div className="flex">
                                <label className="w-2/3 font-bold mr-1">Merchant Id: </label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex">
                                <label className="w-2/3 font-bold mr-1">Password: </label>
                                <input className="border border-blue-500"/>
                            </div>
                            <div className="flex">
                                <label className="w-2/3 font-bold mr-1">Gateway Id: </label>
                                <input className="border border-blue-500"/>
                            </div>
                        </div>
                        <div className="w-4/12 p-4">
                            <button className="p-1 mr-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Add</button>
                            <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Clear</button>
                        </div>
                    </div>
                    <div className="mt-2">
                        <table className="w-full text-sm">
                            <tbody>
                                <tr className="border border-blue-500 bg-blue-400">
                                    <td className="border-r border-blue-500 text-center font-bold p-1"></td>
                                    <td className="border-r border-blue-500 text-center font-bold p-1">Gateway</td>
                                    <td className="border-r border-blue-500 text-center font-bold p-1">Merchand Id</td>
                                    <td className="border-r border-blue-500 text-center font-bold p-1">Password</td>
                                    <td className="border-r border-blue-500 text-center font-bold p-1">URL</td>
                                    <td className="border-r border-blue-500 text-center font-bold p-1">Gateway ID</td>
                                </tr>
                                <tr className="border border-blue-500">
                                    <td className="border-r border-blue-500 text-center">Mpv</td>
                                    <td className="border-r border-blue-500 text-center"></td>
                                    <td className="border-r border-blue-500 text-center"></td>
                                    <td className="border-r border-blue-500 text-center">
                                    </td>
                                    <td className="border-r border-blue-500 text-center">0</td>
                                    <td className="border-r border-blue-500 text-center">7.00</td>
                                </tr>
                            </tbody>
                        </table>
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

export default PaymentGateway