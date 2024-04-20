import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MentorPage from "./pages/MentorPage";
import MenPage from "./pages/Men/MenPage";
import Hats from "./components/Men/Hats";
import NotFoundPage from "./pages/NotFoundPage";
import AnimalPage from "./pages/Animal/AnimalPage";
import Pants from "./components/Men/Pants";
import RandomMenProducts from "./components/Men/RandomMenProducts";
import styles from "./RouterApp.module.css";

function RouterApp() {
  return (
    <>
      {/* <HomePage />
      <MentorPage /> */}

      {/* NAV BAR  */}
      <nav style={{ background: "lightblue" }}>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink
              className={(navLinkprops) => {
                const { isActive } = navLinkprops;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to="/mentor"
            >
              Mentor
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLinkprops) => {
                const { isActive } = navLinkprops;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to="/about"
              reloadDocument
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLinkprops) => {
                const { isActive } = navLinkprops;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to="/animal?q=dog"
            >
              DOG
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLinkprops) => {
                const { isActive } = navLinkprops;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to="/animal?q=cat"
            >
              CAT
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLinkprops) => {
                const { isActive } = navLinkprops;
                return isActive ? `${styles.activeLink}` : "";
              }}
              to="/Men"
              end
            >
              Men Collection
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* end  -> The end prop changes the matching logic for the active and pending states to only match to the "end" of the NavLink's to path. */}

      {/* REAL ROUTING LOGIC */}

      {/* Registering of Routes */}
      <Routes>
        {/* ----------------- 1st Phase Of Learning Route --------------- */}
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mentor" element={<MentorPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>

        {/* ------------------- 2nd Phase of Route  -> Use IT whenever NEEDED  (Query Params) -------------------- */}
        {/* At a perticular PAth I can give some Extra Information like |||  http://localhost:3000/animal/?q=dog&key=value

            q=dog&key=value are THE EXTRA INFORMATION (it is nothing but Key Value Pair)

            OfCource at /animal ROUTE we are showing AnimalPage Ofcourse we can get the EXTRA INFROMATION in the 
            AnimalPage Component Also /=

         */}
        <Route path="/animal" element={<AnimalPage />}></Route>

        {/* --------------------- 3nd Phase of Route ----------------------------------- */}
        {/* when you are using the Parent child Route Relationship then we need to have
            <outlet></outlet> in Parent component 
            so that Our child COmponent can be Displayed in the Parent COmponent.
          */}
        <Route path="/men" element={<MenPage />}>
          <Route path="hats" element={<Hats />}></Route>
          <Route path="pants" element={<Pants />}></Route>
          <Route path=":id" element={<RandomMenProducts />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default RouterApp;

// TODO: READ https://reactrouter.com/
