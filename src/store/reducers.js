import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  ADS_LOADED_SUCCESS,
  AD_CREATED_SUCCESS,
} from "./types";

export const defaultState = {
  auth: {
    logged: false,
    token: null,
  },
  ads: {
    loaded: false,
    filter: { name: "", price: [], sale: "all", tags: [] },
    data: [],
    tagList: [],
  },
};

export function auth(authState = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return { ...authState, logged: true, token: action.payload }; //TODO Pasar token
    case AUTH_LOGOUT:
      return { ...authState, token: null, saved: false };
    default:
      return authState;
  }
}

export function ads(adsState = defaultState.ads, action) {
  switch (action.type) {
    case ADS_LOADED_SUCCESS:
      return {
        ...adsState,
        loaded: true,
        data: [...action.payload.data], //TODO recibir ADS
        tagList: [...action.payload.tagList], //TODO recibir Tags
      };
    case AD_CREATED_SUCCESS:
      return { ...adsState, data: [...adsState.data, action.payload] };
    default:
      return adsState;
  }
}


