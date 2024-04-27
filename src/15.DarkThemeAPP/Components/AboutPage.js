import { useContext } from "react";
import DarkThemeContext from "../Context/DarkThemeContext";

import styles from "./AboutPage.module.css";

function AboutPage() {
  const contextData = useContext(DarkThemeContext);
  const { theme } = contextData;

  console.log("AboutPage theme", theme);

  return (
    <h1 className={theme === "LIGHT" ? styles.light : styles.dark}>
      About Page.
    </h1>
  );
}

export default AboutPage;
