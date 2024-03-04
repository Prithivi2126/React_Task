import {applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga' 
import rootsaga from "./saga";
const sagaMiddleware=createSagaMiddleware()
 const store=createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
       
    )
)
sagaMiddleware.run(rootsaga)
export default store;