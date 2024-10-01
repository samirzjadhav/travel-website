import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="top">
          <div>
            <h1>Trippy</h1>
            <p>Choose your favourite destination.</p>
          </div>
          <div className="flex gap-[10px]">
            <a href="/">
              <FaSquareFacebook size={30} />
            </a>
            <a href="/">
              <FaSquareInstagram size={30} />
            </a>
            <a href="/">
              <FaBehance size={30} />
            </a>
            <a href="/">
              <FaTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/"> ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Version</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact Us</a>
          </div>
          <div>
            <h4>Other</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
