import { Navigate } from "react-router";
import { useAuthContext } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const localToken = localStorage.getItem("token")

  return localToken ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
