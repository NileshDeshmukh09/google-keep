// src/components/Sidebar/SideBar.tsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { data } from "./data";
import "./Sidebar.css";
import { FaBars } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="sidebar-container">
      <div className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars size={20} />
      </div>
      <div ref={sidebarRef} className={`sidebar--main--container ${isOpen ? "open" : ""}`}>
        {data.map((item, index) => (
          <Link to={item.path} key={index} className="sidebar-item-box" onClick={toggleSidebar}>
            <span>{item.icons}</span>
            <div>{item.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
