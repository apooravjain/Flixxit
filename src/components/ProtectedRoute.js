import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element, ...rest }) => {
  const user = useSelector((store) => store.user);

  return user ? <Route element={element} {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
