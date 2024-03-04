import { all } from 'redux-saga/effects'
import StudentWatcherSaga from './sagareducer/Sagareducer'

export default function* rootsaga() {
   console.log("rootsaga")
   yield all([StudentWatcherSaga()])
  }