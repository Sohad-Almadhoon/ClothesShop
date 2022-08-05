import React from 'react'

function Form() {
  return (
    <div className="form">
      <div className="container">
              <div className="form-text">
                  <h2>Sign Up For Newsletters</h2>
                  <p>Get E-mail updates about our latest shop and <span style={{color:"#F7D716"}}> special offers</span></p>
        </div>
              <div className="form-control">
                  <form action=''>
                      <input type="text" placeholder='Your email address' />
                      <input type="submit" value="Sign Up"/>
                  </form>
        </div>
      </div>
    </div>
  );
}

export default Form