// import { call, put, takeLatest } from "redux-saga/effects";
// import { getrequest, getsuccess } from "../../action/Actionsaga";
// import { GET_REQUEST } from "../../type/sagaTypes";
// import { getApidata } from "../../../service/Mockapi";


// function* fetchdata(){
//     console.log("fetch")
//     try{
//         const res=yield call(getApidata)
//         console.log(res)
//         yield put(getsuccess(res.data))
//     }catch(error){

//     }
    
// }

// function* watcherSaga(){
//     console.log("watcher")
//     yield takeLatest(getrequest,fetchdata)
// }
// export default watcherSaga;