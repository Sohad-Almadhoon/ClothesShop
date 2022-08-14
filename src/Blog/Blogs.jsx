import React from "react";
import img1 from "../img/blog/b1.jpg";
import img2 from "../img/blog/b2.jpg";
import img3 from "../img/blog/b3.jpg";
import img4 from "../img/blog/b4.jpg";
import img5 from "../img/blog/b6.jpg";
import "../Blog/Blog.css";
import Pagenation from "../components/Pagenation";
function Blogs() {
  return (
    <div className="blogs">
      <div className="container">
        <div className="blog-part">
          <div className="blog-img">
            <span>13/01</span>
            <img src={img1} alt="blog-img" />
          </div>
          <div className="blog-text">
            <h2>The cotton-Jersey Zip-Up Hoodie </h2>
            <p>
              PRODUCT is an ongoing art project, that currently sells clothes
              considered to be of the streetwear variety. T shirts, hoodies and
              sweat shorts are what you will typically find on here as of this
              writing. PRODUCT is based in omaha, ne. REFER TO MAP BELOW.
            </p>
            <a href="#gg">Continue Reading..</a>
          </div>
        </div>
        <div className="blog-part">
          <div className="blog-img">
            <span>13/02</span>
            <img src={img2} alt="blog-img" />
          </div>
          <div className="blog-text">
            <h2>The cotton-Jersey Zip-Up Hoodie </h2>
            <p>
              PRODUCT is an ongoing art project, that currently sells clothes
              considered to be of the streetwear variety. T shirts, hoodies and
              sweat shorts are what you will typically find on here as of this
              writing. PRODUCT is based in omaha, ne. REFER TO MAP BELOW.
            </p>
            <a href="#gg">Continue Reading..</a>
          </div>
        </div>
        <div className="blog-part">
          <div className="blog-img">
            <span>13/03</span>
            <img src={img3} alt="blog-img" />
          </div>
          <div className="blog-text">
            <h2>The cotton-Jersey Zip-Up Hoodie </h2>
            <p>
              PRODUCT is an ongoing art project, that currently sells clothes
              considered to be of the streetwear variety. T shirts, hoodies and
              sweat shorts are what you will typically find on here as of this
              writing. PRODUCT is based in omaha, ne. REFER TO MAP BELOW.
            </p>
            <a href="#gg">Continue Reading..</a>
          </div>
        </div>
        <div className="blog-part">
          <div className="blog-img">
            <span>13/04</span>
            <img src={img4} alt="blog-img" />
          </div>
          <div className="blog-text">
            <h2>The cotton-Jersey Zip-Up Hoodie </h2>
            <p>
              PRODUCT is an ongoing art project, that currently sells clothes
              considered to be of the streetwear variety. T shirts, hoodies and
              sweat shorts are what you will typically find on here as of this
              writing. PRODUCT is based in omaha, ne. REFER TO MAP BELOW.
            </p>
            <a href="#gg">Continue Reading..</a>
          </div>
        </div>
        <div className="blog-part">
          <div className="blog-img">
            <span>13/05</span>
            <img src={img5} alt="blog-img" />
          </div>
          <div className="blog-text">
            <h2>The cotton-Jersey Zip-Up Hoodie </h2>
            <p>
              PRODUCT is an ongoing art project, that currently sells clothes
              considered to be of the streetwear variety. T shirts, hoodies and
              sweat shorts are what you will typically find on here as of this
              writing. PRODUCT is based in omaha, ne. REFER TO MAP BELOW.
            </p>
            <a href="#gg">Continue Reading..</a>
          </div>
        </div>
      </div>
      <Pagenation />
    </div>
  );
}

export default Blogs;
