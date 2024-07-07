import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { imageUrl } from "../../constants/imageUrl";
import SidebarItem from "./SidebarItem";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      {!isOpen && (
        <img
          className="toggle-button"
          src={imageUrl.menu}
          onClick={toggleSidebar}
          alt="menu"

        />
      )}
      {/* <button className="toggle-button" onClick={toggleSidebar}> */}
      {/* {isOpen ? "Close" : "Open"} Sidebar */}

      {/* </button> */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">
             <SidebarItem icon={imageUrl.bulb} text="Notes"/>
              </Link>
            </li>
            <li>
              <Link to="/reminders"> <SidebarItem icon={imageUrl.bell} text="Reminders"/></Link>
            </li>
            <li>
              <Link to="/edit-labels"> <SidebarItem icon={imageUrl.edit} text="Edit Labels"/></Link>
            </li>
            <li>
              <Link to="/trash"> <SidebarItem icon={imageUrl.trash} text="Trash"/></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </div>
  );
};

export default Sidebar;
