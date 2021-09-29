import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { pagePaths } from "./utils/constants";
import { Login, Register, Dashboard, Page404 } from "./containers";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact path={pagePaths.root} to={pagePaths.login} />
        <Route path={pagePaths.login} component={Login} />
        <Route path={pagePaths.register} component={Register} />
        <Route path={pagePaths.dashboard} component={Dashboard} />
        <Route path={pagePaths.all} component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
