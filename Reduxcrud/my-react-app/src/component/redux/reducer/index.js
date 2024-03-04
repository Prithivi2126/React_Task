import { combineReducers } from "redux"
import Reduxreducer from "./reduxreducer/Reduxreducer"
import Reducersaga from "./reducersaga/Reducersaga"
const rootReducer = combineReducers({
    Reduxreducer, Reducersaga
})
export default rootReducer