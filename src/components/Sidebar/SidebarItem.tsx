import React from "react";
import "./Sidebar.css";
interface SidebarItemProps {
  icon: string;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="sidebar-item">
      <img src={icon} alt={text} />
      <div>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
