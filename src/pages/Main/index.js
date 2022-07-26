import React from "react";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Portfolio from "../../components/Portfolio";
import Skills from "../../components/Skills";
import Activities from "../../components/Activities";
import Shuna from "../../components/Shuna";

const Main = () => {
  return (
    <div className="bg-white relative">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Activities/>
      <Shuna/>
      <Contact/>
      <Footer/>
    </div>
  )
}
export default Main;
