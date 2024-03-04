import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../type/type";
import { deletedata, fetchData, getApidata, postData, putdata } from "../../../Service/api";
import { deleteDataSuccess, getDataSuccess, getapiDataSuccess, postDataSuccess, putDataSuccess } from "../../action/action";

function* fetchSaga(){
    console.log("sagaFetch");
    try{
        const res=yield call(fetchData)
        console.log(res)
        const {data,status}=res
        console.log(status)
        console.log(data)
        yield put(getDataSuccess(data))
        
    }catch(error){
        console.error("Error in fetchSaga:", error);
    }
}

function* postSaga( {payload}){
    try{
        const res=yield call(postData,payload)
        console.log(res)
        const {data,status}=res
        console.log(status)
        console.log(data)
        yield put(postDataSuccess(data))
        
    }catch(error){
        console.error("Error in post:", error);
    }
}

function* deleteSaga({payload} ){
    try{
        const res=yield call(deletedata,payload)
        console.log(res)
        const {data,status}=res
        console.log(status)
        console.log(data)
        yield put(deleteDataSuccess(data))
        
    }catch(error){
        console.error("Error in delete:", error);
    }
}
function* getapiSaga({payload} ){
    try{
        const res=yield call(getApidata,payload)
        console.log(res)
        const {data,status}=res
        console.log(status)
        console.log(data)
        yield put(getapiDataSuccess(data))
        
    }catch(error){
        console.error("Error in fetchid:", error);
    }
}
function* putSaga(action ){
    try{
        const res=yield call(putdata,action.payload,action.payload.id)
        console.log(res)
        const {data,status}=res
        console.log(status)
        console.log(data)
        yield put(putDataSuccess(data))  
    }catch(error){
        console.error("Error in put:", error);
    }
}

function* watchersaga(){
    console.log("watch");
    yield takeLatest(types.GET_REQUEST,fetchSaga)
    yield takeLatest(types.POST_REQUEST,postSaga)
    yield takeLatest(types.DELETE_REQUEST,deleteSaga)
    yield takeLatest(types.GETAPI_REQUEST,getapiSaga)
    yield takeLatest(types.PUT_REQUEST,putSaga)
}

export default watchersaga;