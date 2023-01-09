import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/user.reducer";

import logger from "redux-logger"

const store = createStore(
  combineReducers({
    user: userReducer,
  }),
  applyMiddleware(logger)
);

export default store;


// synchronous
// action ->  reducer ->  logger ->  store
// middleware is used to enhance redux's store functionality, and example of middeware are redux-logger, thunk, saga