import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  // Use the useState hook to manage state in functional components
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked); // Toggle the clicked state
  };

  return (
    <>
      <nav className="navbarItems flex justify-between items-center px-[30px] shadow-xl w-[95%] h-[80px] rounded-xl">
        <h1 className="navbar-logo text-[#222] font-bold text-[32px] cursor-pointer">
          Trippy
        </h1>
        {/* Use onClick to toggle the icons */}
        <div className="menu-icons" onClick={handleClick}>
          {clicked ? <FaBars /> : <MdClose />}
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
          <button className="py-[8px] px-[16px] whitespace-nowrap rounded-md bg-slate-300 cursor-pointer transition ease-in-out delay-75 hover:bg-[#151516] hover:text-white">
            Sign Up
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
