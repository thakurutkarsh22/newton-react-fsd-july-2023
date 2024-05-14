import React, { useState } from "react";

export const UserContext = React.createContext({
  getToken: "",
  getName: "",
  nameHandler: () => {},
  tokenHandler: () => {},
});

const UserProvider = (props) => {
  const [getName, setName] = useState(() => {
    sessionStorage.getItem("name");
  });
  const [getToken, setToken] = useState(() => {
    sessionStorage.getItem("token");
  });

  console.log(getName, getToken, "USER PROVIDER LOGS");

  const { children } = props;

  function tokenHandler(token) {
    setToken(token);
    sessionStorage.setItem("token", token);
  }

  function nameHandler(name) {
    setName(name);
    sessionStorage.setItem("name", name);
  }

  const valueObj = {
    getName,
    getToken,
    tokenHandler,
    nameHandler,
  };

  return (
    <>
      <UserContext.Provider value={valueObj}>{children}</UserContext.Provider>
    </>
  );
};

export default UserProvider;
