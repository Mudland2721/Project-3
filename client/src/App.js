import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingpage";
import Favorites from "./components/favorites";
import Register from "./components/register";
import Login from "./components/login";

const App = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route path='/favorites' component={Favorites} />
    <Route path='/register' component={Register} />
    <Route exact path='/login' component={Login} />
  </Switch>
);

export default App;
