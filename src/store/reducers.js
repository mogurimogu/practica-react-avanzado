import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  ADS_LOADED_SUCCESS,
  AD_CREATED_SUCCESS,
  UI_RESET_ERROR,
  ADS_LOADED_FAILURE,
  AD_LOADED_SUCCESS,
} from "./types";

export const defaultState = {
  auth: false,
  ads: {
    loaded: false,
    data: [],
    tagList: [],
  },
  ui: {
    loading: false,
    error: null,
  },
};


//Auth

export function auth(authState = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return authState;
  }
}

//ADS

export function ads(adsState = defaultState.ads, action) {
  switch (action.type) {
    case ADS_LOADED_SUCCESS:
      return {
        ...adsState,
        loaded: true,
        data: [...action.payload.data],
        tagList: [...action.payload.tagList],
      };

    case ADS_LOADED_FAILURE:
      return { ...adsState, error:{status: true, description: action} };

    case AD_CREATED_SUCCESS:
      return { ...adsState, data: [...adsState.data, action.payload.error] };

    case AD_LOADED_SUCCESS:
      return { ...adsState, data: [...adsState.data, action.payload] };
    default:
      return adsState;
  }
}

//UI

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return { ...state, loading: false, error: action.payload };
  }
  if (/_REQUEST$/.test(action.type)) {
    return { ...state, loading: true, error: null };
  }
  if (/_SUCCESS$/.test(action.type)) {
    return { ...state, loading: false, error: null };
  }

  if (action.type === UI_RESET_ERROR) {
    return { ...state, error: null };
  }
  return state;
}
