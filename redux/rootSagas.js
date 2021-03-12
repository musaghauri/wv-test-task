import { fork, all } from 'redux-saga/effects'
import userSagas from './user/sagas'

export default function* rootSagas() {
  yield all([fork(userSagas)])
}
