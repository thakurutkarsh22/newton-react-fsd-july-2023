import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkThemeContext from "../Context/DarkThemeContext";

function NavigationBar() {
  const { theme, setTheme } = useContext(DarkThemeContext);

  function themeHandler() {
    setTheme((old) => (old === "LIGHT" ? "DARK" : "LIGHT"));
  }

  return (
    <nav
      style={{
        display: "flex",
        gap: "10px",
        width: "100%",
        padding: "20px",
        height: "60x",
        background: theme === "LIGHT" ? "yellow" : "black",
        color: theme === "LIGHT" ? "black" : "white",
      }}
    >
      <li>
        <NavLink to={"/contact"}>Contacts</NavLink>
      </li>

      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>

      <button onClick={themeHandler}>Toogle THEME</button>
    </nav>
  );
}

export default NavigationBar;
