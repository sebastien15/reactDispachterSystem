import CarSection from './fare/carSection'
import FareDetails from './fare/fareDetails'
import Nav from './fare/nav'

function Fare(params) {
    return(
        <div>
            <Nav/>
            <div className="flex mt-4">
                <CarSection/>
                <FareDetails/>
            </div>
        </div>
    )
}

export default Fare;