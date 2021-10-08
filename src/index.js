// from packages
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// non-packages
import store from "configureStore";
import App from "App";
import "styles/index.scss";
import "normalize.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
