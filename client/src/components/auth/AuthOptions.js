import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import createContext from "../../context/userContext";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(createContext);

  const history = useHistory();

  const SignUp = () => history.push("./register");
  const SignIn = () => history.push("./login");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };

  return (
    <nav className='auth-options'>
      {userData.user ? (
        <button onClick={logout}>Log out</button>
      ) : (
        <>
          <button onClick={SignUp}>Sign up</button>
          <button onClick={SignIn}>Log in</button>
        </>
      )}
    </nav>
  );
}
