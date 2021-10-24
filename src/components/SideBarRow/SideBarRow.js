import React from "react";
import "./SideBarRow.css";

function SideBarRow({ Icon, selected, title }) {
  return (
    <div className={`sidebarrow ${selected && "selected"}`}>
      <Icon className="sidebarrow__icon" />
      <h2 className="sidebarrow__title">{title}</h2>
    </div>
  );
}

export default SideBarRow;
