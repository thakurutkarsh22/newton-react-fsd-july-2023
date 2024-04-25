import { NavLink, Route, Routes } from "react-router-dom";

function DarkThemeApp() {
  return (
    <>
      <nav>
        <li>
          <NavLink to={"/contact"}>Contacts</NavLink>
        </li>

        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>

        <button>Toogle there</button>
      </nav>

      <h1>Dark There App</h1>

      <Routes>
        <Route
          path="/contact"
          element={
            <>
              <h1>Contact</h1>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <h1>About</h1>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default DarkThemeApp;
