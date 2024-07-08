// src/Layout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar"; // Assuming this is where your Sidebar component is located
import "./Layout.css"; // Assuming you have some CSS for layout

const Layout = () => {
  return (
    <div className="layout-container">
      <SideBar />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
