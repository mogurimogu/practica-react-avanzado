// import { areTweetsLoaded, getTweet } from './selectors';
// import {
//   AUTH_LOGIN_FAILURE,
//   AUTH_LOGIN_REQUEST,
//   AUTH_LOGIN_SUCCESS,
//   AUTH_LOGOUT,
//   TWEETS_LOADED_SUCCESS,
//   TWEET_CREATED_SUCCESS,
//   TWEET_LOADED_SUCCESS,
//   UI_RESET_ERROR,
// } from './types';

// export function authLoginRequest() {
//   return {
//     type: AUTH_LOGIN_REQUEST,
//   };
// }

// export function authLoginSuccess() {
//   return {
//     type: AUTH_LOGIN_SUCCESS,
//   };
// }

// export function authLoginFailure(error) {
//   return {
//     type: AUTH_LOGIN_FAILURE,
//     error: true,
//     payload: error,
//   };
// }

// export function authLogin(credentials) {
//   // This function will be a redux action
//   return async function (dispatch, getState, { api, history }) {
//     dispatch(authLoginRequest());
//     try {
//       await api.auth.login(credentials);
//       dispatch(authLoginSuccess());
//       const { from } = history.location.state || { from: { pathname: '/' } };
//       history.replace(from);
//     } catch (error) {
//       dispatch(authLoginFailure(error));
//     }
//   };
// }

// export function authLogout() {
//   return {
//     type: AUTH_LOGOUT,
//   };
// }

// export function tweetsLoaded(tweets) {
//   return {
//     type: TWEETS_LOADED_SUCCESS,
//     payload: tweets,
//   };
// }

// export function loadTweets() {
//   return async function (dispatch, getState, { api }) {
//     if (areTweetsLoaded(getState())) {
//       return;
//     }
//     // dispatch loadTweetsRequest
//     try {
//       const tweets = await api.tweets.getLatestTweets();
//       dispatch(tweetsLoaded(tweets));
//     } catch (error) {
//       // dispatch loadTweetsFailure
//     }
//   };
// }

// export function tweetLoaded(tweet) {
//   return {
//     type: TWEET_LOADED_SUCCESS,
//     payload: tweet,
//   };
// }

// export function loadTweet(tweetId) {
//   return async function (dispatch, getState, { api, history }) {
//     const tweet = getTweet(getState(), tweetId);
//     if (tweet) {
//       return;
//     }
//     // dispatch loadTweetRequest
//     try {
//       const tweet = await api.tweets.getTweet(tweetId);
//       dispatch(tweetLoaded(tweet));
//     } catch (error) {
//       // dispatch(loadTweetFailure(error));
//       // if (error.status === 404) {
//       //   history.push('/404');
//       // }
//     }
//   };
// }

// export function tweetCreated(tweet) {
//   return {
//     type: TWEET_CREATED_SUCCESS,
//     payload: tweet,
//   };
// }

// export function createTweet(tweet) {
//   return async function (dispatch, getState, { api, history }) {
//     // dispatch createTweetRequest
//     try {
//       const newTweet = await api.tweets.createTweet(tweet);
//       // this call is neede because the created tweet is incomplete (sparrest)
//       const createdTweet = await api.tweets.getTweet(newTweet.id);
//       dispatch(tweetCreated(createdTweet));
//       history.push(`/tweets/${createdTweet.id}`);
//     } catch (error) {
//       // dispatch(createTweetFailure(error));
//       // if (error.status === 401) {
//       //   history.push('/login');
//       // }
//     }
//   };
// }

// export function uiResetError() {
//   return {
//     type: UI_RESET_ERROR,
//   };
// }
