import { FaHouseChimneyUser } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: <FaHouseChimneyUser />,
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: <FaCircleInfo />,
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: <FaBriefcase />,
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: <FaAddressBook />,
  },
  {
    title: "Sign Up",
    url: "/sign-up",
    cName: "nav-links-mobile",
  },
];
