import {FARE_MODAL_CLOSE,FARE_MODAL_OPEN} from './actionTypes';

const openFareModal = ()=>{
    return{
        type: FARE_MODAL_OPEN
    }
}
const closeFareModal = ()=>{
    return{
        type: FARE_MODAL_CLOSE
    }
}

export {openFareModal,closeFareModal} 