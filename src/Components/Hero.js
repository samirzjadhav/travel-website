import React from "react";
import HeroImg from "../assets/1.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={HeroImg} alt="hero" className="w-full h-auto" />
        <div className="hero-text text-center">
          <h1 className="text-4xl font-bold">Your Journey Your Story</h1>
          <p className="text-lg mt-4">Choose Your Favourite Destination</p>
          <a
            href="#"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white rounded-full"
          >
            Travel Plan
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
