import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function Navbar() {
  return (
    <>
      <nav style={{ background: "red" }}>
        <NavLink to={"/"}>
          <Logo />
        </NavLink>

        <ul>
          <li>
            <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={"/social"}>SOCIAL</NavLink>
          </li>
          <li>
            <NavLink to={"/library"}>LIBRARY</NavLink>
          </li>
        </ul>

        <SearchBar />
        <Profile />
      </nav>
    </>
  );
}

export default Navbar;
