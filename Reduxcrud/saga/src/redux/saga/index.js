
import { all } from 'redux-saga/effects'
import watchersaga from './sagaPage/studentsaga'
export default function* rootsaga(){
    yield all([watchersaga()])
}