import { legacy_createStore as createStore, compose } from "redux";
import rootReducer from "./reducer";
import createSagaMiddleware from 'redux-saga'  
import { applyMiddleware } from "@reduxjs/toolkit";
import rootsaga from "./saga/index";
const saga = createSagaMiddleware()
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
 
 saga.run(rootsaga)

