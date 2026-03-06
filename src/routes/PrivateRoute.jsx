
const PrivateRoute = ({ children }) => {
    return children;
};

export default PrivateRoute;

/* 
import { Navigate, useLocation } from "react-router";

import useAuth from "../hooks/useAuth";


  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="loading loading-spinner text-success"></span>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login"></Navigate>;


*/