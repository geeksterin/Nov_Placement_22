import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import 'react-toastify/dist/ReactToastify.css';

import Router from "./components/Router/Router";
import "antd/dist/reset.css";
import "./index.css";

import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
