import React from "react";
import imgOne from "../img/features/f1.png";
import imgTwo from "../img/features/f2.png";
import imgThree from "../img/features/f3.png";
import imgFour from "../img/features/f4.png";
import imgFive from "../img/features/f5.png";
import imgSix from "../img/features/f6.png";
function Features() {
  const color = {
    pink: "#ffc4dd",
    green: "#5FD068",
    blue: "#B1E1FF",
    purple: "#CDDEFF",
    pinkPurple: "#FDB9FC",
    orange: "#FFDAAF",
  };
  return (
    <div className="features">
      <div className="container">
        <div className="card">
          <img src={imgOne} alt="f-1" />
          <h4 style={{ backgroundColor: color.pink }}>Free Shiping</h4>
        </div>
        <div className="card">
          <img src={imgTwo} alt="f-2" />
          <h4 style={{ backgroundColor: color.green }}>Online Order</h4>
        </div>
        <div className="card">
          <img src={imgThree} alt="f-3" />
          <h4 style={{ backgroundColor: color.blue }}>Save Money</h4>
        </div>
        <div className="card">
          <img src={imgFour} alt="f-4" />
          <h4 style={{ backgroundColor: color.purple }}>Promotions</h4>
        </div>
        <div className="card">
          <img src={imgFive} alt="f-5" />
          <h4 style={{ backgroundColor: color.pinkPurple }}>Happy Sell</h4>
        </div>
        <div className="card">
          <img src={imgSix} alt="f-6" />
          <h4 style={{ backgroundColor: color.orange }}>F24/7 Support</h4>
        </div>
      </div>
    </div>
  );
}

export default Features;
