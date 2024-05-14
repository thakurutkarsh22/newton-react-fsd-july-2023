import { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

function useUser() {
  // conditions ...
  return useContext(UserContext);
}

export default useUser;
