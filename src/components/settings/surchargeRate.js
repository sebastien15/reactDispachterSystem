function SurchargeRate(params) {
    return(
        <div className="panel hidden" id="SurchargeRate">
            <header className="px-1 bg-blue-500 text-white">Surcharge Setting</header>
            <div className="flex flex-col p-2 w-5/12 mt-3  border border-blue-500">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border border-blue-500 bg-blue-400">
                            <td className="border-r border-blue-500 text-center font-bold p-1"></td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Post code</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1">Percentage %</td>
                            <td className="border-r border-blue-500 text-center font-bold p-1"></td>
                        </tr>
                        <tr className="border border-blue-500">
                            <td className="border-r border-blue-500 text-center">Mpv</td>
                            <td className="border-r border-blue-500 text-center">0</td>
                            <td className="border-r border-blue-500 text-center">0</td>
                            <td className="border-r border-blue-500 text-center">
                                <button className="border border-blue-500 w-full hover:bg-blue-300">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mt-8">
                    <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save Changes</button>
                    <button className="p-1 border border-blue-500 hover:bg-blue-500 hover:text-white">Save & Close</button>
                </div>
            </div>
        </div>
    );
}

export default SurchargeRate