import { NavLink, Route, Routes } from "react-router-dom";
import ContactPage from "./Components/ContactPage";
import AboutPage from "./Components/AboutPage";
import DarkThemeContext from "./Context/DarkThemeContext";
import { useState } from "react";
import NavigationBar from "./Components/Navigation";

function DarkThemeApp() {
  const [theme, setTheme] = useState("LIGHT");

  return (
    <>
      <DarkThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
        <NavigationBar />
        <h1>Dark There App</h1>

        <Routes>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </DarkThemeContext.Provider>
    </>
  );
}

export default DarkThemeApp;
