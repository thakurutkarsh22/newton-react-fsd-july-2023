import { Navigate } from "react-router-dom";
import useUser from "../../customHooks/useUser";

function ProtectedRouteComponent(props) {
  const { children } = props;

  const { getToken } = useUser();

  if (getToken) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRouteComponent;
