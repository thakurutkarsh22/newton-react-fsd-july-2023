import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import MenPage from "./pages/Men/MenPage";
import Hats from "./components/Men/Hats";
import NotFoundPage from "./pages/NotFoundPage";
import AnimalPage from "./pages/Animal/AnimalPage";

function RouterApp() {
  return (
    <>
      {/* <HomePage />
      <MentorPage /> */}

      {/* NAV BAR  */}
      <nav style={{ background: "lightblue" }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink to="/mentor">Mentor</NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>

      {/* REAL ROUTING LOGIC */}

      {/* Registering of Routes */}
      <Routes>
        {/* ----------------- 1st Phase Of Learning Route --------------- */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mentor" element={<MentorPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>

        {/* ------------------- 2nd Phase of Route  -> Use IT whenever NEEDED -------------------- */}
        {/* At a perticular PAth I can give some Extra Information like |||  http://localhost:3000/animal/?q=dog&key=value

            q=dog&key=value are THE EXTRA INFORMATION (it is nothing but Key Value Pair)

            OfCource at /animal ROUTE we are showing AnimalPage Ofcourse we can get the EXTRA INFROMATION in the 
            AnimalPage Component Also /=

         */}
        <Route path="/animal" element={<AnimalPage />}></Route>

        {/* --------------------- 3nd Phase of Route ----------------------------------- */}

        <Route path="/men" element={<MenPage />}>
          {/* <Route path="/hats" element={<Hats />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default RouterApp;
