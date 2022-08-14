import React from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

//
function GoogleMap() {
  return (
    <div className="map-section">
      <div className="container">
        <div className="map-details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h5>Head Office</h5>
          <ul>
            <li>
              <MapOutlinedIcon />
              <span>56 Glassford Street Glosgow GI IUL, New York</span>
            </li>
            <li>
              <EmailOutlinedIcon />
              <span>contact@exapmle.com</span>
            </li>
            <li>
              <LocalPhoneOutlinedIcon />
              <span>contact@exapmle.com</span>
            </li>
            <li>
              <AccessTimeOutlinedIcon />
              <span>Monday to Saturday, 9:00 am to 16 pm</span>
            </li>
          </ul>
        </div>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509921.125415282!2d-114.81433762302616!3d37.18425509215165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2z2YPYp9mE2YrZgdmI2LHZhtmK2KfYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2s!4v1660452853947!5m2!1sar!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            title="sohad"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
  );
}

export default GoogleMap;
