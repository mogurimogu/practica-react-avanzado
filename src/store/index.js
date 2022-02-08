import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import {errorRedirection, timestamp} from './middlewares'
import * as reducers from "./reducers";
import * as auth from '../components/auth/service'
import * as adverts from '../components/adverts/service'
import thunk from "redux-thunk";

const api = {auth, adverts}



const configureStore = (preloadedState, {history}) => {
  const middlewares = [
    thunk.withExtraArgument({ api, history }),
    errorRedirection(history),
    timestamp,
  ];
  const store = createStore(
    combineReducers({ ...reducers }),
    preloadedState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

export default configureStore;
