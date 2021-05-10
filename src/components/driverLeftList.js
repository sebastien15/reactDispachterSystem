
function DriverLeftList() {
    return(
        <div>
            <header className="bg-blue-900 text-white p-1 text-center">Left Driver List</header>
            {/* <div className="">
                label colors
            </div> */}
            <div className="mt-2">
                <table className="w-full">
                    <tbody className="border border-blue-900">
                        <tr className="bg-blue-900 text-white  text-xs text-center">
                            <td className="border-r border-white">No</td>
                            <td className="border-r border-white">Name</td>
                            <td className="border-r border-white">Vehicle No</td>
                            <td className="border-r border-white">Vehicle</td>
                            <td className="border-r border-white">MOT Expiry</td>
                            <td className="border-r border-white">MOT 2 Expiry</td>
                            <td className="border-r border-white">PHC Vehicle Expiry</td>
                            <td className="border-r border-white">Insurance Expiry</td>
                            <td className="border-r border-white">PHC Driver Expiry</td>
                            <td className="border-r border-white">License Expiry</td>
                            <td className="border-r border-white">Mobile No</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900 hover:bg-blue-100">
                                {/* <button className="text-blue-400">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    Edit
                                </button> */}
                            </td>
                            <td className="border-r border-blue-900 hover:bg-blue-100">
                                {/* <button className="text-red-500">
                                    <FontAwesomeIcon icon={faTrash}/>
                                    Delete
                                </button> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DriverLeftList;