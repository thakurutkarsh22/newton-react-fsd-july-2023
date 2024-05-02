import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import COntactPage from "./COntactPage";
import AboutPage from "./AboutPage";
import React, { Suspense } from "react";

const LazeCOntact = React.lazy(() => import("./COntactPage"));
const LazyAbout = React.lazy(() => import("./AboutPage"));

function ReactLazyApp() {
  return (
    <>
      <Suspense
        fallback={<h1 style={{ color: "red" }}>Please wait for the loading</h1>}
      >
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/contact"} element={<LazeCOntact />} />
          <Route path={"/about"} element={<LazyAbout />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default ReactLazyApp;
