import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const contextData = useContext(UserContext);
  const { nameHandler, tokenHandler } = contextData;
  const navigate = useNavigate();

  console.log(contextData, "contextData");

  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  function submitForm() {
    async function callAPI() {
      const url = "https://academics.newtonschool.co/api/v1/user/login";
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("projectId", "8nbih316dv01");

      const raw = JSON.stringify({
        email: loginState.email,
        password: loginState.password,
        appType: "music",
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const respone = await fetch(url, requestOptions);
      const data = await respone.json();
      const token = data?.token;
      const name = data?.data.user.name;

      tokenHandler(token);
      nameHandler(name);

      console.log("data login", data);
    }
    callAPI();
    navigate("/");
  }

  function formHandler(e, key) {
    const val = e.target.value;
    setLoginState((old) => {
      return {
        ...old,
        [key]: val,
      };
    });
  }

  return (
    <>
      <h1>Login page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm();
          console.log("get thee state", loginState);
        }}
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => formHandler(e, "email")}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => formHandler(e, "password")}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default LoginPage;
