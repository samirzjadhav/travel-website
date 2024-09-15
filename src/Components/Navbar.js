import React from "react";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbarItems flex justify-between items-center px-[30px] shadow-xl w-[95%] h-[80px] rounded-xl">
        <div className="navbar-logo text-[#222] font-bold text-[32px] cursor-pointer">
          Trippy
        </div>
        <ul className="nav-menu grid grid-cols-6 gap-[10px] items-center text-center">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="/"
                  className="flex gap-[10px] items-center text-[18px] pr-[10px] hover:bg-[#01959a] hover:text-white hover:rounded-sm hover:transition-all hover:px-[10px] hover:py-[10px] hover:ease-in-out hover:delay-75"
                  id={item.cName}
                >
                  <i>{item.icon}</i>
                  <i>{item.title}</i>
                </a>
              </li>
            );
          })}
          <button className="py-[8px] x-[16px] whitespace-nowrap rounded-md bg-slate-300 cursor-pointer tansition ease-in-out delay-75 hover:bg-[#151516] hover:text-white">
            Sign Up
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
