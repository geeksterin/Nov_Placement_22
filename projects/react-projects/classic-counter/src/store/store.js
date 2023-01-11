import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";


const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer =  combineReducers({
  user: userReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)



const store = createStore(
  persistedReducer,
  composeWithDevTools()
);


export const persistor = persistStore(store)
export default store;


// store.john - cart data

// synchronous
// action ->  reducer ->  logger ->  store
// middleware is used to enhance redux's store functionality, and example of middeware are redux-logger, thunk, saga