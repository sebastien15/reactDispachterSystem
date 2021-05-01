import '../App.css';

function TopNav() {
    return(
        <div className="flex pt-1">
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">File</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">View</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Booking</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Finance</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">User managment</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Plotting</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Reports</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Managment</a>
            <a className="p-1 text-blue-900 mr-1 text-xs cursor-pointer ">Help</a>
        </div>
    );
}

export default TopNav; 