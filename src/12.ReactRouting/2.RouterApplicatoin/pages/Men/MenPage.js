import { NavLink, Outlet } from "react-router-dom";
import styles from "../../RouterApp.module.css";

function MenPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          background: "yellow",
        }}
      >
        <nav>
          <ul>
            <li>
              <NavLink
                className={(navLinkprops) => {
                  const { isActive } = navLinkprops;
                  return isActive ? `${styles.activeLink}` : "";
                }}
                to="/men/pants"
              >
                Pants
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navLinkprops) => {
                  const { isActive } = navLinkprops;
                  return isActive ? `${styles.activeLink}` : "";
                }}
                to="/men/hats"
              >
                Hats
              </NavLink>
            </li>
          </ul>
        </nav>

        <h1>Men Page</h1>

        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            background: "black",
            color: "white",
          }}
        >
          <Outlet></Outlet>
          {/* THIS OUTLET WILL BE USED TO DISPLAY 
           <Route path="hats" element={<Hats />}></Route>
          <Route path="pants" element={<Pants />}></Route>
          
           */}
        </div>
      </div>
    </>
  );
}

export default MenPage;
