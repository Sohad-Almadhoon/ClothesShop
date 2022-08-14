import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Products from '../SHop/Products'
import ShopHeader from '../SHop/ShopHeader'
function Shop() {
  return (
    <>
      <Header />
      <ShopHeader />
      <Products />
      <Form />
      <Footer />
    </>
  );
}

export default Shop