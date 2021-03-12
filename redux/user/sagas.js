import { all, put, takeLatest } from 'redux-saga/effects'
import { LIST_USERS, CREATE_USER, DELETE_USER } from './constants'
import {
  listUsersSuccess,
  listUsersFail,
  createUserSuccess,
  createUserFail,
  deleteUserSuccess,
  deleteUserFail,
  clearErrMessage,
} from './actions'

function* loadUsers() {
  const res = yield fetch('/api/user')
  const data = yield res.json()
  if (data.success) {
    yield put(clearErrMessage())
    yield put(listUsersSuccess(data.users))
  } else {
    yield put(listUsersFail(data.message))
  }
}

function* createUser(action) {
  const res = yield fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: action.staffName }),
  })
  const data = yield res.json()
  if (data.success) {
    yield put(clearErrMessage())
    yield put(createUserSuccess(data.user))
  } else {
    yield put(createUserFail(data.message))
  }
}

function* deleteUser(action) {
  const res = yield fetch(`/api/user/${action.userId}`, {
    method: 'DELETE',
  })
  const data = yield res.json()
  if (data.success) {
    yield put(clearErrMessage())
    yield put(deleteUserSuccess(action.userId))
  } else {
    yield put(deleteUserFail(data.message))
  }
}

function* userWatcher() {
  yield all([
    takeLatest(LIST_USERS, loadUsers),
    takeLatest(CREATE_USER, createUser),
    takeLatest(DELETE_USER, deleteUser),
  ])
}

export default userWatcher
