import React from 'react'
import Features from "../components/Features";
import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import Products from "../components/Products";
import Arrivals from "../components/Arrivals";
import Discount from "../components/Discount";
import Upcoming from "../components/Upcoming";
import Adverstment from "../components/Adverstment";
import Form from "../components/Form";
import Footer from "../components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <LandingSection />
      <Features />
      <Products />
      <Discount />
      <Arrivals />
      <Upcoming />
      <Adverstment />
      <Form />
      <Footer />
    </div>
  );
}

export default Home