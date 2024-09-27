import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/night.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" url="/about" />
    </>
  );
};

export default About;
