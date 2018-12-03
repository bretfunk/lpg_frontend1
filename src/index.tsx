import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import { Router } from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { App } from "./App";
import { formReducer } from "./ducks/formReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(formReducer, composeWithDevTools());

ReactDOM.render(<Router store={store} />, document.getElementById("root"));
