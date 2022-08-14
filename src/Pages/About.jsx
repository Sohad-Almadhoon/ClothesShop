import React from 'react'
import AboutHeader from '../About/AboutHeader';
import Features from '../components/Features'
import Footer from '../components/Footer'
import Form from '../components/Form';
import Header from '../components/Header'
import '../About/about.css'
import KnowUs from '../About/KnowUs';
import DownloadApp from '../About/DownloadApp';
function About() {
  return (
    <>
      <Header />
      <AboutHeader />
      <KnowUs />
      <DownloadApp/>
      <Features />
      <Form/>
      <Footer />
    </>
  );
}

export default About