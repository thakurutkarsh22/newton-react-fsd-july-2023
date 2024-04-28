import React, { Component } from "react";
import DetailComponent from "./component/DetailComponent";
import ThemeClassContext from "./context/ThemeClassContext";
import LoginContext from "./context/LoginContext";

class ContextApiClassComponentApp extends Component {
  render() {
    return (
      <>
        <h1>
          ContextApiClassComponentApp
          <LoginContext.Provider value={{ user: "utkarsh" }}>
            <ThemeClassContext.Provider value={{ theme: "LIGHT_BLUE" }}>
              <DetailComponent />
            </ThemeClassContext.Provider>
          </LoginContext.Provider>
        </h1>
      </>
    );
  }
}

export default ContextApiClassComponentApp;
