import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./layouts/Home";
import Login from "./layouts/Login";

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route exact={true} path="/login">
        <Login />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
