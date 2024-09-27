import React from "react";
import HeroImg from "../assets/1.jpg";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="hero" className={props.class} />
        <div className="hero-text text-center">
          <h1 className="text-4xl font-bold">{props.title}</h1>
          <p className="text-lg mt-4">{props.discri}</p>
          <a href={props.url} className={props.btnClass}>
            {props.btnText}
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
