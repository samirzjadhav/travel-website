import React from "react";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbarItems flex justify-between items-center px-[30px] shadow-xl w-[95%] h-[80px] rounded-xl">
        <div className="navbar-logo">Trippy</div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href="/" className=" flex gap-[10px] items-center">
                  <i>{item.icon}</i>
                  <i>{item.title}</i>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
