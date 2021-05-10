import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CustomerList() {
    return(
        <div>
            <header className="bg-blue-900 text-white p-1 text-center">Customer List</header>
            <div className="mt-2 text-xs">
                <label className="mr-1">Search</label>
                <input className="border border-blue-500 mr-1"/>
                <select className="border border-blue-500 mr-1">
                    <option>name</option>
                </select>
                <button className="border border-blue-500 hover:bg-blue-500 hover:text-white p-1 mr-1">Find</button>
                <button className="border border-blue-500 hover:bg-blue-500 hover:text-white p-1">Show all Customer</button>
            </div>
            <div className="mt-2">
                <table className="w-full">
                    <tbody className="border border-blue-900">
                        <tr className="bg-blue-900 text-white  text-xs text-center">
                            <td className="border-r border-white">Name</td>
                            <td className="border-r border-white">Phone</td>
                            <td className="border-r border-white">Mobile No</td>
                            <td className="border-r border-white">Address</td>
                            <td className="border-r border-white"></td>
                            <td className="border-r border-white"></td>
                            <td className="border-r border-white"></td>
                        </tr>
                        <tr className="text-xs">
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900">1</td>
                            <td className="border-r border-blue-900 hover:bg-blue-100">
                                <button className="text-blue-400">
                                    Cancel booking
                                </button>
                            </td>
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

export default CustomerList;