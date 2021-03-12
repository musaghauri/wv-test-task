import {
  LIST_USERS_SUCCESS,
  LIST_USERS_FAIL,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_ERROR_MESSAGE,
} from './constants'

export const initialState = {
  users: [],
  errMessage: '',
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIST_USERS_SUCCESS:
      return { ...state, users: action.data }
    case LIST_USERS_FAIL:
      return { ...state, errMessage: action.err }
    case CREATE_USER_SUCCESS:
      return { ...state, users: [...state.users, action.data] }
    case CREATE_USER_FAIL:
      return { ...state, errMessage: action.err }
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.userId),
      }
    case DELETE_USER_FAIL:
      return { ...state, errMessage: action.err }
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errMessage: '' }
    default:
      return { ...state }
  }
}

export default userReducer
