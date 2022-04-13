import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";

const store = configureStore();

store.subscribe(() => {
  console.log("State has changed!", store.getState());
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("app")
);
