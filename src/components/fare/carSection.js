import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarSection() {
    return(
        
        <div className="w-2/5 p-1">
         <div>
             <table className="w-full text-xs border border-blue-600">
                 <thead>
                     <tr className="bg-blue-600 text-white p-1">
                         <td className="border-r border-white">Vehicle Type</td>
                         <td className="border-r border-white">Company</td>
                         <td></td>
                     </tr>
                 </thead>
                 <tbody>
                     <tr className="p-1 cursor-pointer hover:bg-blue-300 hover:text-white">
                         <td className="border-r border-white">Sallon</td>
                         <td className="border-r border-white">Estate</td>
                         <td>
                             <button className="text-red-500 cursor-pointer">
                                 <FontAwesomeIcon icon={faTrash}/>    
                             </button>    
                         </td>
                     </tr>
                 </tbody>
             </table>
         </div>
     </div>
    )
}

export default CarSection;