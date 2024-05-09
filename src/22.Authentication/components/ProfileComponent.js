import { useContext } from "react";
import UserContext from "../context/userContext";

function ProfileComponent() {
  const { logout } = useContext(UserContext);
  return (
    <>
      <h1>Here is my profle</h1>
      <button
        onClick={() => {
          logout();
        }}
      >
        log out
      </button>
    </>
  );
}

export default ProfileComponent;
