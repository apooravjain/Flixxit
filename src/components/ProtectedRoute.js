import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default ProtectedRoute;
