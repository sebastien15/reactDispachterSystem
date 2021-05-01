
function BookingsTable(){
    return(
        <>
            <table className="w-full overflow-hidden border border-blue-500">
                <thead className="bg-blue-500 text-white text-xs p-2">
                    <tr>
                        <td className="border-r border-white"></td>
                        <td className="border-r border-white">Plot</td>
                        <td className="border-r border-white">Pickup date</td>
                        <td className="border-r border-white">Time</td>
                        <td className="border-r border-white">Passenger</td>
                        <td className="border-r border-white">Pickup point</td>
                        <td className="border-r border-white">Destination</td>
                        <td className="border-r border-white">Fare</td>
                        <td className="border-r border-white">A/C</td>
                        <td className="border-r border-white">veh</td>
                        <td className="border-r border-white">Updated by</td>
                        <td className="border-r border-white">Status</td>
                        <td className="border-r border-white">Drv</td>
                        <td className="border-r border-white"></td>
                        <td className="border-r border-white"></td>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr>
                        <td className="text-xs border-r border-white">2</td>
                        <td className="text-xs border-r border-white">3</td>
                        <td className="text-xs border-r border-white">4</td>
                        <td className="text-xs border-r border-white">5</td>
                        <td className="text-xs border-r border-white">6</td>
                        <td className="text-xs border-r border-white">7</td>
                        <td className="text-xs border-r border-white"></td>
                        <td className="text-xs border-r border-white"></td>
                        <td className="text-xs border-r border-white"></td>
                        <td className="text-xs border-r border-white"></td>
                        <td className="text-xs border-r border-white"></td>
                        <td className="text-xs border-r border-white"></td>
                        <td className="text-xs border-r border-white"></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default BookingsTable;