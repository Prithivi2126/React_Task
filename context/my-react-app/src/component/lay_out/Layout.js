import React from "react";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">     
        <Sidenav />
         <Outlet />
    </div>
  );
};

export default Layout;
