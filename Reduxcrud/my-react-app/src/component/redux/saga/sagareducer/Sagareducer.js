import * as Type from "../../type/Typesaga";
import { getApidata } from "../../../service/Mockapi";
import { takeLatest,takeEvery ,call ,put,delay} from "redux-saga/effects";
import { getrequest ,getsuccess,getfailure} from "../../action/Actionsaga";
function* get() {
  console.log("saga");
  try{
    const res = yield call(getApidata);
    console.log(res);
    const {data,status}=res
    if(status===200){
      yield delay(500)
      yield put({ type: 'GET_SUCCESS', payload: data });
    }
  }
  catch(error){

  }
}

export default function* StudentWatcherSaga() {
  console.log("watch")
  yield takeLatest(getrequest, get);
}
