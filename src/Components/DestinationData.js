import React from "react";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";

const DestinationData = ({ className, heading, text, img1, img2 }) => {
  return (
    <>
      <div className={className}>
        <div className="des-text">
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="images">
          <img src={img1} alt="mountain" />
          <img src={img2} alt="lake" />
        </div>
      </div>
    </>
  );
};

export default DestinationData;
