
function Nav(){
    return(
        <>
            <div className="bg-yellow-600 flex text-white text-sm p-1 font-bold">
                <div className="w-4/12">
                    <button className="mr-1 cursor-pointer bg-yellow-500 p-1">Hide Drivers</button>
                    <button className="mr-1 cursor-pointer bg-yellow-500 p-1">Hide Booking</button>
                    <button className="mr-1 cursor-pointer bg-yellow-500 p-1">Lost Property/Complaints</button>
                </div>
                <div className="text-center w-8/12">
                    <h5>Today's Booking</h5>
                </div>
            </div>
        </>
    );
}

export default Nav;