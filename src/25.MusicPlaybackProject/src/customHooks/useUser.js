import { useContext } from "react";
import UserContext from "../../../22.Authentication/context/userContext";

function useUser() {
  return useContext(UserContext);
}

export default useUser;
