import React from "react";
import UseAuth from "./UseAuth";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const { authValue } = UseAuth();
  console.log("context", authValue);
  if (!authValue) {
    return <Navigate to={"/login"} />;
  }
  if (authValue?.role === "admin") {
    return <Outlet />;
  }
  if (authValue?.role) {
    return <Navigate to={"/unAuthorized"} />;
  }
};

export default Auth;
