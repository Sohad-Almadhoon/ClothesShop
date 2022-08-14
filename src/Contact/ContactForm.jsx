import React from "react";
import img1 from "../img/people/1.png";
import img2 from "../img/people/2.png";
import img3 from "../img/people/3.png";
function ContactForm() {
  return (
    <div className="contact">
      <div className="container">
        <div className="forms">
          <h2>We Love To Hear From You</h2>
          <from action="" className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="E-mail" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Submit</button>
          </from>
        </div>
        <div className="contacts">
          <div className="contacts__details">
            <img src={img1} alt="people" />
            <div className="contacts__details-text">
              <h5>John Doe</h5>
              <span>Senior Marketing Manager</span>
              <span>Phone +972 8813348</span>
              <span>Email contact@example.com</span>
            </div>
          </div>
          <div className="contacts__details">
            <img src={img2} alt="people" />
            <div className="contacts__details-text">
              <h5>William Sameh</h5>
              <span>Senior Marketing Manager</span>
              <span>Phone +972 8813348</span>
              <span>Email contact@example.com</span>
            </div>
          </div>
          <div className="contacts__details">
            <img src={img3} alt="people" />
            <div className="contacts__details-text">
              <h5>Emma Stone</h5>
              <span>Senior Marketing Manager</span>
              <span>Phone +972 8813348</span>
              <span>Email contact@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
