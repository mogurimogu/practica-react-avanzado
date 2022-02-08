//Auth
export const getIsLogged = (state) => state.auth;

//Ads
export const getAreAdsLoaded = (state) => state.ads.loaded;
export const getAds = (state) => state.ads.data;
export const getAdsTaglist = (state) => state.ads.getAdsTaglist;

//Ad
export const getAd = (state, advertId) => 
  getAds(state).find((advert) => advert.id === advertId);

//Ui
export const getUi = (state) => state.ui;
