
function FareDetails(params) {
    return(
        <div className="w-3/5">
            <div className="min-w-full text-center p-1 text-sm bg-blue-500 text-white">
                <header className="w-full">Fare Details For Vehicle Type: <span>Sallon</span></header>
            </div>
            {/* <div className="flex mt-2">
                <div>Fare List</div>
                <div>Mileage Setting</div>
            </div> */}
            <div className="mt-1 text-xs min-w-full">
                <table className="w-full">
                    <thead>
                        <tr className="text-center bg-blue-500 text-white">
                            <td>From Location</td>
                            <td>To Location</td>
                            <td>Fare &#163;</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>NW10</td>
                            <td>Heathrow Terminal 5</td>
                            <td>28.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FareDetails