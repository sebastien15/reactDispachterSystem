import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DriverLoginList() {
    return(
        <div>
            <header className="bg-blue-900 text-white p-1 text-center">Driver Login List</header>
            <div className="mt-2 flex">
                <button className="p-1 font-semibold mr-1 text-xs border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Logout Selected Driver(s)</button>
                <div className="ml-3 mr-3 text-xs">
                    <label className="p-1 font-semibold text-blue-900 mr-1 text-sm">Search</label>
                    <input className="border border-blue-900 p-1 mr-1"/>
                    <select className="border border-blue-900 p-1 mr-1">
                        <option>Driver No</option>
                    </select>
                    <button className="p-1 font-semibold mr-1 text-xs border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
                        <FontAwesomeIcon icon={faSearch}/>
                        Find
                    </button>
                </div>
                <button className="p-1 font-semibold mr-1 text-xs border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">Show all</button>
            </div>
            <div className="mt-4 w-5/12 text-sm">
                <table className="w-full">
                    <tbody>
                        <tr className="bg-blue-700 text-white">
                            <td className="border-r border-blue-900 p-1"><input type="checkbox" disabled className="bg-white"/></td>
                            <td className="border-r border-blue-900 p-1">Driver No</td>
                            <td className="border-r border-blue-900 p-1">Name</td>
                            <td className="border-r border-blue-900 p-1">Login Date-Time</td>
                            <td className="border-r border-blue-900 p-1"></td>
                        </tr>
                        <tr className="text-xs border border-blue-900 hover:bg-blue-200">
                            <td className="border-r border-blue-900 p-1"><input type="checkbox"/></td>
                            <td className="border-r border-blue-900 p-1">07</td>
                            <td className="border-r border-blue-900 p-1">thavaganesh Kanagaratnam</td>
                            <td className="border-r border-blue-900 p-1">23/16/2015 10:30</td>
                            <td><button className="p-1 border border-blue-900 hover:bg-blue-900 hover:text-white w-full">Log out</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DriverLoginList;