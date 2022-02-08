import { getAd, getAreAdsLoaded } from "./selectors";
import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
  AUTH_LOGOUT,
  ADS_LOADED_REQUEST,
  ADS_LOADED_SUCCESS,
  AD_CREATED_SUCCESS,
  UI_RESET_ERROR,
  ADS_LOADED_FAILURE,
  AD_LOADED_SUCCESS,
  AD_LOADED_FAILURE,
  AD_LOADED_REQUEST,
  AD_DELETED_REQUEST,
  AD_DELETED_SUCCESS,
  AD_DELETED_FAILURE,
} from "./types";

//AUTH

export function authLoginRequest() {
  return {
    type: AUTH_LOGIN_REQUEST,
  };
}

export function authLoginSuccess() {
  return {
    type: AUTH_LOGIN_SUCCESS,
  };
}

export function authLogin(credentials) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(authLoginRequest());
    try {
      await api.auth.login(credentials);
      dispatch(authLoginSuccess());
      const { from } = history.location.state || { from: { pathname: "/" } };
      history.replace(from);
    } catch (error) {
      dispatch(authLoginFailure(error));
    }
  };
}

export function authLoginFailure(error) {
  return {
    type: AUTH_LOGIN_FAILURE,
    error,
    payload: error,
  };
}

export function authLogoutSuccess() {
  return {
    type: AUTH_LOGOUT,
    logged: false,
  };
}

export function authLogout() {
  return async function (dispatch, getState, { api, history }) {
    await api.auth.logout();
    dispatch(authLogoutSuccess());
    history.push("/login");
  };
}

//ADS

export function adsLoadedRequest() {
  return {
    type: ADS_LOADED_REQUEST,
  };
}

export function adsLoadedSuccess(data, tags) {
  return {
    type: ADS_LOADED_SUCCESS,
    payload: {
      data,
      tagList: tags,
    },
  };
}

export function adsLoadedFailure(error) {
  return {
    type: ADS_LOADED_FAILURE,
    error,
    payload: error,
  };
}

export function adsLoaded() {
  return async function (dispatch, getState, { api }) {
    if (getAreAdsLoaded(getState())) {
      return;
    }
    dispatch(adsLoadedRequest());
    try {
      const ads = await api.adverts.getAdverts();
      const tags = await api.adverts.getTags();
      dispatch(adsLoadedSuccess(ads, tags));
    } catch (error) {
      dispatch(adsLoadedFailure(error));
    }
  };
}

//AD

export function adLoadedRequest() {
  return {
    type: AD_LOADED_REQUEST,
  };
}

export function adLoadedSuccess(ad) {
  return {
    type: AD_LOADED_SUCCESS,
    payload: ad
  };
}

export function adLoadedFailure(error) {
  return {
    type: AD_LOADED_FAILURE,
    error: true,
    payload: error,
  };
}

export const adLoaded = adId => {
  return async function (dispatch, getState, { api }) {
    if (getAd(getState(), adId)) {
      return;
    }
    dispatch(adLoadedRequest());
    try {
      const ad = await api.adverts.getAdvert(adId);
      dispatch(adLoadedSuccess(ad));
    } catch (error) {
      dispatch(adLoadedFailure(error));
    }
  };
};


export function adCreatedSuccess(data) {
  return {
    type: AD_CREATED_SUCCESS,
    payload: {
      data,
    },
  };
}

export function adDeletedRequest() {
  return {
    type: AD_DELETED_REQUEST,
  };
}

export function adDeletedSuccess(ad) {
  return {
    type: AD_DELETED_SUCCESS,
    payload: ad,
  };
}

export function adDeletedFailure(error) {
  return {
    type: AD_DELETED_FAILURE,
    error: true,
    payload: error,
  };
}

export function adDeleted(adId) {
  return async function (dispatch, getState, { api, history }) {
    dispatch(adDeletedRequest());
    try {
      await api.adverts.adDeleted(adId);
      dispatch(adDeletedSuccess(adId));
      history.push(`/adverts`);
    } catch (error) {
      dispatch(adDeletedFailure(error));
    }
  };
}

//UI
export function uiResetError() {
  return {
    type: UI_RESET_ERROR,
    error: null,
  };
}
