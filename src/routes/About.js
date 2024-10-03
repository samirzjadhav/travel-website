import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
import AboutImg from "../assets/night.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="About" url="/about" />
      <AboutUs />
      <Footer />
    </>
  );
};

export default About;
