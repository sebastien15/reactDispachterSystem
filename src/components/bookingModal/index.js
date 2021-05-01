function Index() {
    return(
        <div className="absolute bg-blue-300 border border-blue-400">
            <div className="flex bg-blue-300 justify-end p-1">
                <span>X</span>
            </div>
            <div className="flex justify-center py-2">
                <h4 className="mr-2">Booking</h4>
                <div>Local</div>
            </div>
            <nav className="flex justify-between p-2">
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Base</button>
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Airports</button>
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Hospital</button>
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Job History</button>
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Multi Booking</button>
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Stations</button>
                <button className="mr-1 p-1 text-blue-800 bg-blue-300 hover:bg-blue-400">Send Email</button>
            </nav>
        </div>
    );
}

export default Index;