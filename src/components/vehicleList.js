import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function VehicleList() {
    return(
        <div>
            <header className="bg-blue-900 text-white p-1 text-center">Vehicle List</header>
 
            <div className="mt-2">
                <table className="w-full">
                    <tbody className="border border-blue-900">
                        <tr className="bg-blue-900 text-white  text-xs text-center">
                            <td className="border-r border-white">Vehicle</td>
                            <td className="border-r border-white">Passengers</td>
                            <td className="border-r border-white">Luggages</td>
                            <td className="border-r border-white">Hand Luggages</td>
                            <td className="border-r border-white">Start Rate</td>
                            <td className="border-r border-white">No of Miles for Start Rate</td>
                            <td className="border-r border-white"></td>
                            <td className="border-r border-white"></td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900 hover:bg-blue-100">
                                <button className="text-blue-400">
                                    <FontAwesomeIcon icon={faEdit}/>
                                    Edit
                                </button>
                            </td>
                            <td className="border-r border-blue-900 hover:bg-blue-100">
                                <button className="text-red-500">
                                    <FontAwesomeIcon icon={faTrash}/>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default VehicleList;