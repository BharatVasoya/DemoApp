import {Login_Watcher, Login_Success, Login_Failure} from '../../Constant';
import {USER_LOGIN_PASSWORD_CHANGED, USER_LOGIN_EMAIL_CHANGED} from '../types';

export function userLoginEmailChanged(payload) {
  return {type: USER_LOGIN_EMAIL_CHANGED, payload};
}
export function userLoginPasswordChanged(payload) {
  return {type: USER_LOGIN_PASSWORD_CHANGED, payload};
}

export function userLoginWacther(payload, resolve, reject) {
  return {type: Login_Watcher, payload, resolve, reject};
}

export function userLoginSuccess(payload) {
  return {type: Login_Watcher, payload: payload};
}
export function userLoginFailure(error) {
  return {type: Login_Watcher, payload: error};
}
