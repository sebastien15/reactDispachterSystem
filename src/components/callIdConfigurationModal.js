import { openModal} from "./SecondNav";

function CallIdConfigModal() {
    return(
        <div id="callIdConfigModal" className=" w-7/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-72 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Call Id Configurations</span>
                <span className="text-base font-bold -mt-1 cursor-pointer" onClick={()=>{openModal("callIdConfigModal")}}>X</span>
            </div>
            <div className="mt-2 bg-blue-500 text-center text-white">
                <header>Call</header>
            </div>
            <div className="mt-2 text-xs">
                <nav>
                    <button className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Call Id</button>
                    <button className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Payment Gateway Details</button>
                </nav>
            </div>
            <div className="text-sm mt-4">
                <header className="p-1 bg-blue-900 text-white">Caller Id Settings</header>
                <div className="flex mt-2">
                    <label className="mr-2 font-bold">Select Type:</label>
                    <div className="mr-2">
                        <input type="checkbox"/>
                        <label>Analog</label>
                    </div>
                    <div className="mr-2">
                        <input type="checkbox"/>
                        <label>Digital TAPI</label>
                    </div>
                    <div className="mr-2">
                        <input type="checkbox"/>
                        <label>Voip SIP</label>
                    </div>
                    <div>
                        <input type="checkbox"/>
                        <label>File Based CLF</label>
                    </div>
                </div>
                <div className="mt-2 text-xs">
                    <nav>
                        <button className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Analog</button>
                        <button className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Digital TAPI</button>
                        <button className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">Voip SIP</button>
                        <button className="p-1 mr-1 cursor-pointer border border-blue-400 hover:bg-blue-400 hover:text-white">File Based CLI</button>
                    </nav>
                </div>
                <div>
                    <div className="flex mt-3">
                        <div className="mr-3">
                            <input type="radio" className="mr-1"/>
                            <label>Serial port</label>
                        </div>
                        <div>
                            <input type="radio" className="mr-1"/>
                            <label>Ethernet</label>
                        </div>
                    </div>
                    <div className="border border-blue-500 p-3">
                        not finished
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallIdConfigModal;