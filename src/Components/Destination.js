import React from "react";
import Image1 from "../assets/1.jpg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";
import Image5 from "../assets/5.jpg";
import Image6 from "../assets/6.jpg";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tour give you the opportunity to see a lot, while a time frame</p>

        <div className="first-des">
          <div className="des-text">
            <h2>Taal Volcano, Batangas</h2>
            <p>
              One of the most iconic views in Luzon, Mt. Taal boasts a volcano
              inside a lake inside an island. If you fancy a closer look, the
              hike up to the crater is a mere 45 minutes, and is easy enough for
              beginners. Guides will assist you most of the way, and you’ll see
              the peculiar environment found on an active volcano, including
              volcanic rocks and steam vents. The hike can be dusty and hot, so
              plan for an early morning trip, and then unwind with some bulalo
              before heading back home!
            </p>
          </div>
          <div className="images">
            <img src={Image1} alt="mountain" />
            <img src={Image2} alt="lake" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
