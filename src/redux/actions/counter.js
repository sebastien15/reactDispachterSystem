import {INCREMENT_COUNTER,DECREMENT_COUNTER} from './actionTypes'

const incrementCounter = (objPassed) =>{
    return{
        type: INCREMENT_COUNTER,
        payload: objPassed
    }
}

const decrementCounter = () =>{
    return{
        type: DECREMENT_COUNTER
    }
}

export {incrementCounter,decrementCounter}