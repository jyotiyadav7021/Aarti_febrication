import React from "react";
import HeroImage from "../assets/Heroimage.jpg";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sharp Background Image */}
      <img
        src={HeroImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Animated Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold animate-fadeLoop">
          Welcome to <span className="text-blue-400">Aarti Fabrication</span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl max-w-xl mx-auto animate-fadeLoop2">
          We provide top-quality metal fabrication services tailored to your needs.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-8 py-3 text-base sm:text-lg font-medium text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 animate-fadeLoop3"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
