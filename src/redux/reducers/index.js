import counterReducer from './counter';
import loggedReducer from './isLoggedin'

import {combineReducers} from 'redux'


const rootReducer = combineReducers({
    counter: counterReducer,
    logged: loggedReducer
})


export default rootReducer;