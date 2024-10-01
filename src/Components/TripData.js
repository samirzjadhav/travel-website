import React from "react";
import image1 from "../assets/1.jpg";

const TripData = ({ imges, heading, text }) => {
  return (
    <>
      <div className="t-card">
        <div className="t-image">
          <img src={imges} alt="" />
        </div>
        <h4>{heading}</h4>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TripData;
