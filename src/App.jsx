import React from "react";


import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductSection";

import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CallNowSection from "./components/CallNowSection";
import TestimonialsSection from "./components/TestimonialsSection"



const App = () => {
  return (
    <>
    <Header />
    <HeroSection></HeroSection>
    <ProductsSection></ProductsSection>
    <CallNowSection />
    <AboutSection/>
    
    <TestimonialsSection/>
    <ContactSection></ContactSection>
    <Footer></Footer>
    </>
    
      
      
      
    
  );
};

export default App;
