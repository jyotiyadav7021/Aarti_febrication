import React from "react";
import HeroImage from "../assets/Heroimage.jpg"; // adjust path based on your project

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center"
    >
      {/* Full Background Image */}
      <img
        src={HeroImage}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay content */}
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-5xl font-bold">Welcome to Aarti Fabrication</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          We provide top-quality metal fabrication services tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
