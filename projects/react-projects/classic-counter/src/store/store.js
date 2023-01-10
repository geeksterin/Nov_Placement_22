import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";

import logger from "redux-logger"

const store = createStore(
  combineReducers({
    user: userReducer,
    cart: cartReducer
  }),
  applyMiddleware(logger)
);

export default store;


// store.john - cart data

// synchronous
// action ->  reducer ->  logger ->  store
// middleware is used to enhance redux's store functionality, and example of middeware are redux-logger, thunk, saga