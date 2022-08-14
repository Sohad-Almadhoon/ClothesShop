import React from "react";
import img1 from "../img/products/f1.jpg";
import img2 from "../img/products/f2.jpg";
import img3 from "../img/products/f3.jpg";
import img4 from "../img/products/f4.jpg";
import img5 from "../img/products/f5.jpg";

function PriceDetails() {
  function handleClick(e) {
    const img = document.querySelector(".main-img");
      const thisImg = img.src;
      img.src = e.target.src;
      e.target.src = thisImg;

  }
  return (
    <div className="prices">
      <div className="container">
        <div className="price-photo">
          <img src={img1} alt="shop" className="main-img" />
          <div className="small-img-group">
            <div className="small--img">
              <img
                src={img2}
                alt="shop"
                className="small-img"
                onClick={handleClick}
              />
            </div>
            <div className="small--img">
              <img
                src={img3}
                alt="shop"
                className="small-img"
                onClick={handleClick}
              />
            </div>
            <div className="small--img">
              <img
                src={img4}
                alt="shop"
                className="small-img"
                onClick={handleClick}
              />
            </div>
            <div className="small--img">
              <img
                src={img5}
                alt="shop"
                className="small-img"
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
        <div className="price-text">
          <h2>Men's Fashion T Shirt</h2>
          <span>$139.00</span>
          <select>
            <option>XL</option>
            <option>XXL</option>
            <option>Small</option>
          </select>
          <div className="price">
            <input type="text" />
            <button type="button">Add To Cart</button>
          </div>
          <div className="details">
            <h4>Producet Details</h4>
            <p>
              “REBELLION is a creative act of solidarity between women and
              non-binary artists, and women human rights defenders around the
              world. Nine women and non-binary artists have produced nine
              feminist T-shirts, with 50% profit going to the artists, and 50%
              profit to Amnesty International,creative act of
              solidarity between women and non-binary artists, and women human
              rights defenders around the world.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceDetails;
