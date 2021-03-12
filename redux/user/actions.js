import {
  LIST_USERS,
  LIST_USERS_SUCCESS,
  LIST_USERS_FAIL,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_ERROR_MESSAGE,
} from './constants'

export function listUsers() {
  return {
    type: LIST_USERS,
  }
}

export function listUsersSuccess(data) {
  return {
    type: LIST_USERS_SUCCESS,
    data,
  }
}

export function listUsersFail(err) {
  return {
    type: LIST_USERS_FAIL,
    err,
  }
}

export const createUser = (staffName) => ({
  type: CREATE_USER,
  staffName,
})

export function createUserSuccess(data) {
  return {
    type: CREATE_USER_SUCCESS,
    data,
  }
}

export function createUserFail(err) {
  return {
    type: CREATE_USER_FAIL,
    err,
  }
}

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  userId,
})

export function deleteUserSuccess(userId) {
  return {
    type: DELETE_USER_SUCCESS,
    userId,
  }
}

export function deleteUserFail(err) {
  return {
    type: DELETE_USER_FAIL,
    err,
  }
}

export function clearErrMessage() {
  return {
    type: CLEAR_ERROR_MESSAGE,
  }
}
