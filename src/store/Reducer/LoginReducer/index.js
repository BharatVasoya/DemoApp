import {
  USER_LOGIN_PASSWORD_CHANGED,
  USER_LOGIN_EMAIL_CHANGED,
} from '../../Action/types';
import {Login_Success, Login_Watcher, Login_Failure} from '../../Constant';

const initialState = {
  error: null,
  userLoginLoader: false,
  loginData: [],
  userEmail: '',
  userPassword: '',
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_EMAIL_CHANGED:
      return {
        ...state,
        userEmail: action.payload,
      };
    case USER_LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        userPassword: action.payload,
      };
    case Login_Watcher:
      return {
        ...state,
        userLoginLoader: true,
      };
    case Login_Success:
      return {
        ...state,
        error: null,
        loginData: action.payload,
        userLoginLoader: false,
      };
    case Login_Failure:
      return {
        ...state,
        error: action,
        userLoginLoader: false,
      };
    default:
      return state;
  }
}
