import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserAlt, faUser, faBook, faSyncAlt, faMoneyBillWaveAlt, faCarSide, faBookOpen, faSignOutAlt,faCogs, faIdBadge} from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const triggleDroppDown = (e)=>{
    const clickedElement  = e.target
    let parentElement = clickedElement.nodeName === "path" ?  clickedElement.parentElement.parentElement : clickedElement
    let targetElement = parentElement.lastChild;
    let allDropDowns = document.querySelectorAll('.dropDown');
    try {
        for (let i = 0; i < allDropDowns.length; i++) {
            const element = allDropDowns[i];
            if (!element.classList.contains('hidden')) {
                 element.classList.add('hidden')
            }
        }
        targetElement.classList.toggle('hidden')

    } catch (error) {
        console.log(error.message)
    }
    // if (typeof targetElement !== 'undefined'){
    //     targetElement.classList.toggle('hidden')
    // }else{
    //     return false
    // }
    
}
export const openModal = (e)=>{
    const fareModal = document.querySelector("#"+e);
    fareModal.classList.toggle('hidden');
}

function SecondNav() {
    return(
            <div className="mt-4 w-full flex">
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/">
                    <FontAwesomeIcon icon={faCoffee} size="3x"/><br/>
                    Dashboard
                </Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#">
                    <FontAwesomeIcon icon={faBookOpen} size="3x" /><br/>
                    New Booking</Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center relative" onClick={triggleDroppDown} to="">
                    <FontAwesomeIcon icon={faBook} size="3x"/><br/>
                    Booking
                    <div className="dropDown flex flex-col p-2 w-32 absolute bg-white border-1 border-blue-400 rounded-sm hidden">
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/">Add new booking</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/">Booking List</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/">Trash bookings</Link>
                    </div>
                </Link>
                {/* <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" onClick={openFareModal}> */}
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/fare">
                    <FontAwesomeIcon icon={faMoneyBillWaveAlt} size="3x"/><br/>
                    Fares</Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#" onClick={triggleDroppDown}>
                    <FontAwesomeIcon icon={faUser} size="3x"/><br/>
                    Driver
                    <div className="dropDown flex flex-col p-2 w-32 absolute bg-white border-1 border-blue-400 rounded-sm hidden" >
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("addDriverModal")}} to="/">Add New Driver</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/driverList">Driver List</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("driverLoginModal")}}  to="/">Driver Login</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/driverLoginList">Driver Login List</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("addDriverShiftModal")}} to="/">Driver Shifts</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/leftDriverList">Inactive Driver List</Link>
                    </div>
                </Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#" onClick={triggleDroppDown}>
                    <FontAwesomeIcon icon={faSyncAlt} size="3x" /><br/>
                    Location
                    <div className="dropDown flex flex-col p-2 w-32 absolute bg-white border-1 border-blue-400 rounded-sm hidden" >
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("addLocationModal")}} to="/">Add New Location</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/locationList">Location List</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("addZoneModal")}}  to="/">Add New Zone</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/zoneList">Zone List</Link>
                    </div>
                </Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#" onClick={triggleDroppDown}>
                    <FontAwesomeIcon icon={faUserAlt} size="3x" /><br/>
                    Customer
                    <div className="dropDown flex flex-col p-2 w-32 absolute bg-white border-1 border-blue-400 rounded-sm hidden" >
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("addCustomerModal")}} to="/">Add New Customer</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/customerList">Customer List</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("add")}}  to="/">Add Lost Property</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/lostPropertyList">Lost Property List</Link>
                    </div>
                </Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#" onClick={triggleDroppDown}>
                    <FontAwesomeIcon icon={faCarSide} size="3x" /><br/>
                    Vehicle
                    <div className="dropDown flex flex-col p-2 w-32 absolute bg-white border-1 border-blue-400 rounded-sm hidden" >
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" onClick={()=>{openModal("addVehicleModal")}} to="/">Add Vehicle</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/vehicleList">Vehicle List</Link>
                    </div>    
                </Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#"  onClick={triggleDroppDown}>
                    <FontAwesomeIcon icon={faIdBadge} size="3x" /><br/>
                     Caller id
                    <div className="dropDown flex flex-col p-2 w-32 absolute bg-white border-1 border-blue-400 rounded-sm hidden" >
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/" onClick={()=>{openModal("callIdConfigModal")}}>Configurations</Link>
                        <Link className="cursor-pointer hover:bg-blue-400 hover:rounded-md py-1" to="/" onClick={()=>{openModal("callHistoryModal")}}>view call history</Link>
                    </div>   
                </Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/setting">
                    <FontAwesomeIcon icon={faCogs} size="3x" /><br/>
                    Settings</Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#">
                    <FontAwesomeIcon icon={faSyncAlt} size="3x" /><br/>
                    Refresh</Link>
                <Link className="p-1 text-blue-900 mr-2 text-xs cursor-pointer text-center" to="/#">
                    <FontAwesomeIcon icon={faSignOutAlt} size="3x" /><br/>
                    Log out</Link>
            </div>
    );
}

export default SecondNav; 