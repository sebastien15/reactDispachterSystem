import General from "./settings/general"
import FareSetting from "./settings/fares"
import CallerId from "./settings/callerId"
import CompanyInfo from "./settings/companyInformation"
import DocumentNumber from "./settings/documentNumber"
import EmailAndNetwork from "./settings/emaiAndNetwork"
import Map from "./settings/map"
import PaymentGateway from "./settings/paymentGateway"
import Pda from "./settings/pda"
import Sms from "./settings/sms"
import SurchargeRate from "./settings/surchargeRate"

const trigglePanel = (id)=>{
    const panels = document.querySelectorAll('.panel');
    let givenId = id

    for (let i = 0; i < panels.length; i++) {
        const element = panels[i];
        // if (condition) {
            
        // }
        if (!element.classList.contains('hidden'))
        {
            element.classList.add('hidden')
        } 
        if (element.id ===  givenId) {
            element.classList.remove('hidden')
        }
    }
}
function Setting(params) {
    return(
        <div>
            <nav className="flex text-sm mt-3">
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("General")}}>General</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("CompanyInfo")}}>Company information</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("CallerId")}}>Caller Id</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("Sms")}}>Sms</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("FareSetting")}}>Fares</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("EmailAndNetwork")}}>Email & Network Settings</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("Map")}}>Map</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("Pda")}}>PDA</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("SurchargeRate")}}>Surcharge Rates</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("DocumentNumber")}}>Document Numbers</button>
                <button className="p-1 mr-1 border border-blue-500 bg-blue-200" onClick={()=>{trigglePanel("PaymentGateway")}}>Payment Gateway Details</button>
            </nav>
            <div className="mt-1">
                <General/>
                <FareSetting/>
                <CallerId/>
                <CompanyInfo/>
                <DocumentNumber/>
                <EmailAndNetwork/>
                <Map/>
                <PaymentGateway/>
                <Pda/>
                <Sms/>
                <SurchargeRate/>
            </div>
        </div>
    )
}

export default Setting;