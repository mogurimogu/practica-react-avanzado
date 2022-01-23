import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_SAVE_SESSION,
  AUTH_LOGOUT,
  ADS_LOADED_SUCCESS,
  AD_CREATED_SUCCESS,
  AD_LOADED_SUCCESS,
} from "./types";

//AUTH

export function authLoginRequest(token) {
  return {
    type: AUTH_LOGIN_REQUEST,
    payload: token,
  };
}

export function authLoginSuccess() {
  return {
    type: AUTH_LOGIN_SUCCESS,
  };
}

export function authLoginFailure(error) {
  return {
    type: AUTH_LOGIN_FAILURE,
    error,
    payload: error,
  };
}

export function authSaveSession() {
  return {
    type: AUTH_SAVE_SESSION,
    saved: true,
  };
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT,
    saved: false,
  };
}

//ADS

export function adsLoadedSuccess({ data, tagList }) {
  return {
    type: ADS_LOADED_SUCCESS,
    loaded: true,
    payload: {
      data,
      tagList,
    },
  };
}

export function adCreatedSuccess(data) {
  return {
    type: AD_CREATED_SUCCESS,
    payload: {
      data,
    },
  };
}
