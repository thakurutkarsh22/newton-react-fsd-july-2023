import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";
import HelloClassComponent from "./1.BasicReact/1.HelloComponent/HelloClassComponent";
import RouterApp from "./12.ReactRouting/2.RouterApplicatoin/RouterApp";
import { BrowserRouter } from "react-router-dom";

// document keyword is my REAL DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// React root
//root is my  VIRTUAL DOM
root.render(
  <React.StrictMode>
    {/* ---------- NORMAL APP ------- */}
    {/* <App /> */}
    {/* ----------  ROUTER APP ------- */}

    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
