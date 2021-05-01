
function DriverWaiting(){
    return(
        <div className="p-1 w-3/12 ">
            <div className="p-1 border border-green-300">
                <div className=" bg-green-300">
                    <h6 className="text-xs text-white bg-green-500 p-1">Driver onBoard</h6>
                    <table className="text-xs w-full">
                        <thead>
                            <tr>
                                <td className="border-r border-white">No</td>
                                <td className="border-r border-white">Vehicle</td>
                                <td>OnJob</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DriverWaiting;