import '../App.css';

function TopNav() {
    return(
        <div className="flex pt-1">
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">File</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">View</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Booking</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Finance</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">User managment</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Plotting</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Reports</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Managment</button>
            <button className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Help</button>
        </div>
    );
}

export default TopNav; 