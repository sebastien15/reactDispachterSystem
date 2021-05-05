import { openModal} from "./SecondNav";

function DriverShiftModal() {
    return(
        <div id="addDriverShiftModal" className=" w-7/12 bg-white rounded-md border border-blue-400 absolute p-2 top-24 left-72 m-auto hidden">
            <div className="flex justify-between text-xs">
                <span>Driver shift</span>
                <span className="text-base font-bold -mt-1 cursor-pointer" onClick={()=>{openModal("addDriverShiftModal")}}>X</span>
            </div>
            <div className="mt-2 bg-blue-500 text-center text-white">
                <header>Driver Shift</header>
            </div>
        </div>
    )
}

export default DriverShiftModal