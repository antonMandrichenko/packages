import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as React from "react";
import Register from "../components/views/Register";
import Home from "../components/views/Home";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);
