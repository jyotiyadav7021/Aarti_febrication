import React from "react";


import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";



const App = () => {
  return (
    <>
    <Header />
    <HeroSection></HeroSection>
    <ProductsSection></ProductsSection>
    <AboutSection/>
    
    <GallerySection></GallerySection>
    <ContactSection></ContactSection>
    <Footer></Footer>
    </>
    
      
      
      
    
  );
};

export default App;
