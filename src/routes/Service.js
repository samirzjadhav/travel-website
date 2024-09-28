import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/night.jpg";

const services = () => {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Service" url="/about" />
    </>
  );
};

export default services;
