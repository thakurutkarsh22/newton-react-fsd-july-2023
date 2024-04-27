import { useState } from "react";
import MainCOmponent from "./component/MainComponent";
import LanguageContext from "./context/LanguageContext";
import ThemeContext from "./context/ThemeContext";
import LoginContext from "./context/LoginContext";
import LanguageProvider from "./Provider/LanguageProvider";
import ThemeProvider from "./Provider/ThemeProvider";

function ContextHellApp() {
  const [login, setLogin] = useState("USERXYZ");

  return (
    <>
      <LoginContext.Provider value={{ login, login }}>
        <ThemeProvider>
          <LanguageProvider>
            <MainCOmponent />
          </LanguageProvider>
        </ThemeProvider>
      </LoginContext.Provider>
    </>
  );
}

export default ContextHellApp;

// DRWBACK
// 1. FLUX -> REDUX -> Flux -> is rate of change, if this is high then CONTEXT API can't handle it,
// REDUX  is a great tool to handle all these things.
// 2. Context HElL
