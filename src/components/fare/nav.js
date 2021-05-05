import { faCopy, faDownload, faEdit, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {openModal} from "../../components/SecondNav"


function Nav() {
    return(
        <div className="text-sm mt-2">
            <div className="rounded-sm bg-blue-900 text-white text-center p-2">
                <h1>Fares List</h1>
            </div>
            <div className="flex text-sm font-sm mt-3">
                <a className="p-1 border border-blue-400 rounded-sm mr-1 cursor-pointer text-xs hover:bg-blue-400 hover:text-white"
                    onClick={()=>{openModal("fareModal")}}
                >
                    <FontAwesomeIcon icon={faPlus} size="1x" className="mr-1"/>
                    New Fare
                </a>
                <a className="p-1 border border-blue-400 rounded-sm mr-1 cursor-pointer text-xs hover:bg-blue-400 hover:text-white">
                    <FontAwesomeIcon icon={faEdit} size="1x" className="mr-1"/>
                    Edit Fare
                </a>
                <a className="p-1 border border-blue-400 rounded-sm mr-1 cursor-pointer text-xs hover:bg-blue-400 hover:text-white">
                    <FontAwesomeIcon icon={faCopy} size="1x" className="mr-1"/>
                    Copy the Current Fare
                </a>
                <a className="p-1 border border-blue-400 rounded-sm mr-1 cursor-pointer text-xs hover:bg-blue-400 hover:text-white">
                    <FontAwesomeIcon icon={faDownload} size="1x" className="mr-1"/>
                    Export Fares To web
                </a>
            </div>
        </div>
    )
}

export default Nav;