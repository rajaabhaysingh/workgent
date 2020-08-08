import React from "react";
import "../../../styles/styles.css";

import { NavLink } from "react-router-dom";

const SideDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  // handling drawer classes open/close
  let drawerClasses = "fccc side_drawer";
  if (isDrawerOpen) {
    drawerClasses = "fccc side_drawer drawer_open";
  }

  // closeDrawer
  const closeDrawer = () => {
    setIsDrawerOpen(() => {
      return {
        isDrawerOpen: false,
      };
    });
  };

  return (
    <div className={drawerClasses}>
      <ul onClick={closeDrawer}>
        <li>
          <NavLink to="/" className="" activeClassName="">
            Link 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="" activeClassName="">
            Link 2
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
