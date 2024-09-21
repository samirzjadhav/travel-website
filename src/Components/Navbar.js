import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
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
      <nav className="navbarItems flex justify-between items-center px-[30px] w-[95%] h-[80px] fixed top-[20px] left- z-20 rounded-xl">
        <h1 className="navbar-logo text-[#222] font-bold text-[32px] cursor-pointer">
          Trippy
        </h1>
        {/* Use onClick to toggle the icons */}
        <div className="menu-icons sm:hidden" onClick={handleClick}>
          {clicked ? <MdClose /> : <FaBars />}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="/"
                  className="flex gap-[10px] items-center text-[18px] pr-[10px]"
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
