import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { formReducer } from "./ducks/formReducer";

const store = createStore(formReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
