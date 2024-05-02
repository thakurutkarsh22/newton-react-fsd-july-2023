import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloComponent from "./1.BasicReact/1.HelloComponent/HelloComponent";
import HelloClassComponent from "./1.BasicReact/1.HelloComponent/HelloClassComponent";
import RouterApp from "./12.ReactRouting/2.RouterApplicatoin/RouterApp";
import { BrowserRouter, HashRouter } from "react-router-dom";
// import App from "./00.Assignments/1.Authentication_using_react_router/component/App";
import ReactAppContextProblemApi from "./14.ContextApi/1.ProblemStatement/components/ReactAppContextProblemApi";
import ReactAppContextSolutionApi from "./14.ContextApi/2.SolutionUsingContextAPI/components/ReactAppContextSolutionApi";
import DarkThemeApp from "./15.DarkThemeAPP/DarkThemeApp";
import ContextHellApp from "./16.ContextHell/ContextHellApp";
import App from "./App";
import ReactLazyApp from "./20.Performance/4.React.lazy/ReactLazyApp";

// document keyword is my REAL DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// React root
//root is my  VIRTUAL DOM
root.render(
  <React.StrictMode>
    {/* ---------- NORMAL APP ------- */}
    {/* <App /> */}
    {/* ----------  ROUTER APP ------- */}

    {/* <BrowserRouter>
      <RouterApp />
    </BrowserRouter> */}

    {/* Assignment */}

    {/* CONTEXT API */}
    {/* <ReactAppContextProblemApi /> */}
    {/* <ReactAppContextSolutionApi /> */}
    {/* 
    <BrowserRouter>
      <DarkThemeApp />
    </BrowserRouter> */}

    {/* <ContextHellApp /> */}

    {/* <App /> */}
    <BrowserRouter>
      <ReactLazyApp />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
