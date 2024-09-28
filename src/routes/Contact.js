import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import ContactImg from "../assets/2.jpg";

const Contact = () => {
  return (
    <div>
      {" "}
      <>
        <Navbar />
        <Hero
          cName="hero-mid"
          heroImg={ContactImg}
          title="Service"
          url="/about"
        />
      </>
    </div>
  );
};

export default Contact;
