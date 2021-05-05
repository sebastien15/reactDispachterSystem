import Nav from './dashboard/nav';
import MapContainer from './dashboard/mapContainer';
import DriverOnBoarding from './dashboard/driverOnBoarding';
import DriverWaiting from './dashboard/driverWaiting';
import BookingsTable from './dashboard/bookingsTable';

function Dashboard(){
    return(
        <>
            <Nav/>
            <div className="flex mt-2 mb-2">
            <MapContainer/>
            <DriverOnBoarding/>
            <DriverWaiting/>
            </div>
            <BookingsTable/>
        </>
    )
}

export default Dashboard;