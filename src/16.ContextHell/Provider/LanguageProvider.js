import { useState } from "react";
import LanguageContext from "../context/LanguageContext";

function LanguageProvider(props) {
  const [language, setLanguage] = useState("EnglishZzz");

  const { children } = props; // MainCOmponent

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </>
  );
}

export default LanguageProvider;
