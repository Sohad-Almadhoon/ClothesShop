import React from "react";
import landingImg from "../img/hero4.png";
function LandingSection() {
  return (
    <div className="landing-section">
      <div className="container">
        <div className="text-landing">
          <span>Trade-in-offer</span>
          <h1>
            Super value deals <span>On all products</span>
          </h1>
          <span className="heading-details">
            Save more with coupons & up to 70% off!
          </span>
          <a href="#dd" >
            Shop Now !
          </a>
        </div>
        <img src={landingImg} alt ="landing-img" />
      </div>
    </div>
  );
}

export default LandingSection;
