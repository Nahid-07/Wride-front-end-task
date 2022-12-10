import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const PrivetRouter = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  let location = useLocation();
  if (loader) {
    return <progress className="progress w-full"></progress>;
  }
  console.log(user);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivetRouter;
