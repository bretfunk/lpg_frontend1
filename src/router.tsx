import * as React from "react";
import { Provider } from "react-redux";
import { NewLandingPage } from "./containers/NewLandingPage";
import { Dashboard } from "./containers/Dashboard";
import { Home } from "./containers/Home";
import { LandingPageDetail } from "./containers/LandingPageDetail";
import { NotFound } from "./containers/NotFound";
// import { history } from "./history";
import { App } from "./App";

// import { Route, BrowserRouter, Switch } from "react-router-dom";
// below had the error Could not find a declaration file for module react-router-dom, hence the weird syntax
const { Route, BrowserRouter, Switch } = require("react-router-dom");
// import { ConnectedRouter } from "connected-react-router";

// i hate the any but I get an error otherwise
export const Router = ({ store }: any) => (
  <Provider store={store}>
    <App>
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/landingpages/new" component={NewLandingPage} />
            <Route path="/landingpages/:id" component={LandingPageDetail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </App>
  </Provider>
);
