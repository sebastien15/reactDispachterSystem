import { openModal} from "./SecondNav";

function DriverLoginModal() {
    return(
        <div id="driverLoginModal" className=" w-6/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-1/4 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Driver Login</span>
                <span className="text-base font-bold -mt-1 cursor-pointer"  onClick={()=>{openModal("driverLoginModal")}}>X</span>
            </div>
            <div className="mt-2 bg-blue-500 text-center text-white">
                <header>Driver Login</header>
            </div>
            <div className="flex text-sm mt-3">
                <div className="w-1/5">
                    <h3>Select Driver(s)</h3>
                </div>
                <div className="w-4/5">
                    <table className="w-full">
                        <tbody className="border-blue-400">
                            <tr className="bg-blue-400 text-sm text-white">
                                <td className="border-r border-blue-400"></td>
                                <td className="border-r border-blue-400">Driver</td>
                                <td className="border-r border-blue-400">Vehicle</td>
                            </tr>
                            <tr className="border-b border-l  border-blue-400">
                                <td className="border-r border-blue-400">
                                    <input type="checkbox"/>
                                </td>
                                <td className="border-r border-blue-400">seba</td>
                                <td className="border-r border-blue-400">Sallon</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-end mt-2">
                <button className="border border-blue-400 hover:bg-blue-400 hover:text-white p-1 text-sm mr-1">Login</button>
                <button className="border border-blue-400 hover:bg-blue-400 hover:text-white p-1 text-sm">Cancel</button>
            </div>
        </div>
    )
}
export default DriverLoginModal;