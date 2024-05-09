import { useState } from "react";
import UserContext from "./context/userContext";
import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";

function AuthApp() {
  const [state, setState] = useState({
    user: null,
  });

  function login(userName, password) {
    if (userName === "user" && password === "password") {
      setState((old) => {
        return {
          ...old,
          user: "Utkarsh",
        };
      });
    } else {
    }
  }

  function logout() {
    setState((old) => {
      return {
        ...old,
        user: null,
      };
    });
  }

  const value = {
    user: state.user,
    login,
    logout,
  };

  console.log(value, "value");

  return (
    <>
      <UserContext.Provider value={value}>
        <LoginComponent />
        <ProfileComponent />
      </UserContext.Provider>
    </>
  );
}

export default AuthApp;
