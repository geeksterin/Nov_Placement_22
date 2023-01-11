import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/reset.css";

import store, { persistor } from "./store/store";
import Router from "./components/Router/Router";

import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Router />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
