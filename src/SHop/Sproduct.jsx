import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import FeaturedProduct from './FeaturedProduct'
import PriceDetails from './PriceDetails'

function Sproduct() {
  return (
    <>
      <Header />
      <PriceDetails/>
      <FeaturedProduct/>
      <Form />
      <Footer/>
   </>
  )
}

export default Sproduct