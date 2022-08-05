import React from "react";
import Logo from "../img/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GooglePlay from "../img/pay/play.jpg";
import AppStore from "../img/pay/app.jpg";
import Pay from "../img/pay/pay.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-1">
          <img src={Logo} alt="logo" />
          <h3>Contact</h3>
          <p>
            <span>Address</span>
            562 Wellingeton Rood Street 32 San franscisco
          </p>
          <p>
            <span>Phone</span>
            +01 2222 365 2242763
          </p>
          <p>
            <span>Hours</span>
            10:00-18:00 Mon-Sat
          </p>
          <h5>Follow Us</h5>
          <div className="social">
            <FacebookRoundedIcon />
            <TwitterIcon />
            <InstagramIcon />
            <PinterestIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="footer-2">
          <h5>About</h5>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Prvocy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-2">
          <h5>My Account</h5>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My WishList</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="footer-4">
          <h5>Install App</h5>
          <span>From App Store Or Google Play</span>
          <div className="application">
            <img src={GooglePlay} alt="google-play" />
            <img src={AppStore} alt="app-store" />
          </div>
          <span>Secured Payment GateWays</span>
          <img src={Pay} alt="pay" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
