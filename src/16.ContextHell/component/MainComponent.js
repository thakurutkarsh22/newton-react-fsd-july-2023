import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";
import LoginContext from "../context/LoginContext";

function MainCOmponent() {
  const { language } = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);
  const { login } = useContext(LoginContext);

  return (
    <>
      <h1>Main component is</h1>
      <p>Language : {language}</p>
      <p>THEME: {theme}</p>
      <p>LOGIN: {login}</p>
    </>
  );
}

export default MainCOmponent;
