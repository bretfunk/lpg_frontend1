import React, { Component } from "react";
import { NewLandingPage } from "./containers/NewLandingPage";
import { withRouter, RouteComponentProps } from "react-router";

// want to use RouteComponentProps but too many errors
export const App: React.SFC<any> = props => (
  <div className="App">{props.children}</div>
);
