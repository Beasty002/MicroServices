import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="h-screen border-r border-gray-600 min-w-48 px-6 py-4">
      <ul className="flex flex-col gap-4 font-bold">
        <li className="w-full">
          <NavLink to="/">
            <i className="bx bx-user"></i> User Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/accounting">
            <i className="bx bxs-bank"></i> Accouting
          </NavLink>
        </li>
        <li>
          <NavLink to="/library">
            <i className="bx bx-book-open"></i> Library
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
