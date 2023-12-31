import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  let location = useLocation();
  console.log(user);
  if (user) {
    return <Navigate to="/browse" />;
  }
  return children;
};

export default PublicRoute;
