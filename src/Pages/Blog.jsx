import React from 'react'
import BlogHeader from '../Blog/BlogHeader'
import Blogs from '../Blog/Blogs'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Header from '../components/Header'
import Pagenation from '../components/Pagenation'
function Blog() {
  return (
    <>
      <Header />
      <BlogHeader />
      <Blogs />

      <Form />
      <Footer />
    </>
  );
}

export default Blog