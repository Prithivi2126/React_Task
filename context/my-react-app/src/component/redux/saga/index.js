import { all } from 'redux-saga/effects'
import watchersaga from './sagapage/studentsaga'

export default function* rootsaga(){
    yield all([watchersaga()])
}