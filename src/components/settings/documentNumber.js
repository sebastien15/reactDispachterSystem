function DocumentNumber(params) {
    return(
        <div className="panel hidden" id="DocumentNumber">
            <header className="px-1 bg-blue-500 text-white">Document Number Setting</header>
            <div className="flex flex-col p-2 w-5/12 mt-3  border border-blue-500">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border border-blue-500 bg-blue-400">
                            <td className="border-r border-blue-500 text-center font-bold p-1">Document</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Sub Company</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Prefix</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Start Number</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Last Number</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Auto...</td>
                        </tr>
                        <tr className="border border-blue-500">
                            <td className="border-r border-blue-500 text-center">Mpv</td>
                            <td className="border-r border-blue-500 text-center">0</td>
                            <td className="border-r border-blue-500 text-center">0</td>
                            <td className="border-r border-blue-500 text-center">0</td>
                            <td className="border-r border-blue-500 text-center">0</td>
                            <td className="border-r border-blue-500 text-center">
                                <input type="checkbox"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mt-8">
                    <button className="p-1 mr-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save Changes</button>
                    <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
                </div>
            </div>
        </div>
    );
}

export default DocumentNumber