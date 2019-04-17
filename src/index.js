//react
import React from "react";
import ReactDOM from "react-dom";
//redux
import { createStore, applyMiddleware } from "redux";
import  Provider  from "react-redux";
//middleware
import logger from "redux-logger";
import thunk from "redux-thunk";
//local
import App from "./App";
import rootReducer from "./reducers";
import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
