import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trips from "../Components/Trip";
import HeroImg from "../assets/1.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Your Journey Your Story"
        discri="Choose Your Favourite Destination."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trips />
    </>
  );
};

export default Home;
