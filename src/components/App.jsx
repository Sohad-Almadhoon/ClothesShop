import React from "react";
import Features from "./Features";
import Header from "./Header";
import LandingSection from "./LandingSection";
import Products from "./Products";
import Arrivals from "./Arrivals";
import Discount from "./Discount";
import Upcoming from "./Upcoming";
import Adverstment from "./Adverstment";
import Form from "./Form";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <Header />
      <LandingSection />
      <Features />
      <Products />
      <Discount/>
      <Arrivals />
      <Upcoming />
      <Adverstment />
      <Form />
      <Footer/>
    </div>
  );
}

export default App;
