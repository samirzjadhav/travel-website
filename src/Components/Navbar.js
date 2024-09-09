import React from "react";
import { Component } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbarItem">
        <div className="navbar-logo">Trippy</div>
        <ul className="nav-menu">
          <li>
            <Link>
              <a href="">
                <i>Home</i>
              </a>{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
