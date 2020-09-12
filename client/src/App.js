import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingpage";
import Favorites from "./components/favorites";
import SignUp from "./components/auth/register";
import SignIn from "./components/auth/login";
import Axios from "axios";
import UserContext from "./context/userContext";

// const App = () => (

//   <Switch>
//     <Route exact path='/' component={LandingPage} />
//     <Route path='/favorites' component={Favorites} />
//     <Route exact path='/register' component={Register} />
//     <Route exact path='/login' component={Login} />
//   </Switch>
// );

// export default App;

export default function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/register' component={SignUp} />
          <Route path='/login' component={SignIn} />
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
