import React from 'react'
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import imgOne from "../img/products/n1.jpg";
import imgTwo from "../img/products/n2.jpg";
import imgThree from "../img/products/n3.jpg";
import imgFour from "../img/products/n4.jpg";
function FeaturedProduct() {
  return (
    <>
      <div className="products">
        <div className="products-heading">
          <h2>Featured Product</h2>
        </div>
        <div className="container">
          <div className="card">
            <img src={imgOne} alt="f1" />
            <div className="card-body">
              <span>Adidas</span>
              <h5>Cartoon Astronout T-Shirts</h5>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="card-footer">
                <span>
                  <i class="fa-duotone fa-dollar-sign"></i>78
                </span>
                <LocalGroceryStoreOutlinedIcon className="shopping-icon" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={imgTwo} alt="f2" />
            <div className="card-body">
              <span>Adidas</span>
              <h5>Cartoon Astronout T-Shirts</h5>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="card-footer">
                <span>
                  <i class="fa-duotone fa-dollar-sign"></i>38
                </span>
                <LocalGroceryStoreOutlinedIcon className="shopping-icon" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={imgThree} alt="f2" />
            <div className="card-body">
              <span>Adidas</span>
              <h5>Cartoon Astronout T-Shirts</h5>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="card-footer">
                <span>
                  <i class="fa-duotone fa-dollar-sign"></i>88
                </span>
                <LocalGroceryStoreOutlinedIcon className="shopping-icon" />
              </div>
            </div>
          </div>
          <div className="card">
            <img src={imgFour} alt="f4" />
            <div className="card-body">
              <span>Adidas</span>
              <h5>Cartoon Astronout T-Shirts</h5>
              <div className="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div className="card-footer">
                <span>
                  <i class="fa-duotone fa-dollar-sign"></i>64
                </span>
                <LocalGroceryStoreOutlinedIcon className="shopping-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProduct