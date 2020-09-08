import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Favorites from "./favorites";
import Register from "./register";
import Login from "./login";

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/favorites' component={Favorites} />
    <Route path='/register' component={Register} />
    <Route path='/login' component={Login} />
  </Switch>
);

export default Main;
