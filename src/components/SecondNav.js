import {BrowserRouter as Router, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { moneyBillWaveAlt } from '@fortawesome/free-solid-svg-i/cons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

function SecondNav() {
    return(
        <Router className="flex pt-1">
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
            <FontAwesomeIcon icon={faCoffee} size="3x"/><br/>
                Dashboard</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                New Booking</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Booking</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i>             
                {/* <FontAwesomeIcon icon={moneyBillWaveAlt} size="3x"/><br/> */}
                Fares</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Driver</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Location</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Customer</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Vehicle</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Caller id</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Settings</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Refresh</Link>
            <Link className="p-1 text-blue-900 mr-1 text-xs cursor-pointer" to="/dashboard">
                <i className="fa fa-"></i> 
                Log out</Link>
        </Router>
    );
}

export default SecondNav; 