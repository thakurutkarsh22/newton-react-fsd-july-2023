import { useContext, useState } from "react";
import UserContext from "../context/userContext";

function LoginComponent() {
  const { login } = useContext(UserContext);

  const [userName, setuserName] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <label htmlFor="login">UserName</label>
      <input
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        name="login"
        id="login"
        placeholder="login"
        type="text"
      />

      <br />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        id="password"
        placeholder="password"
        type="text"
      />

      <br />

      <button
        onClick={() => {
          login(userName, password);
        }}
      >
        Login
      </button>
    </>
  );
}

export default LoginComponent;
