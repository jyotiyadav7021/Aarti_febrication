import React from "react";
import HeroImage from "../assets/Heroimage.jpg"; // adjust path as needed

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center py-32 px-4 bg-blue-50 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={HeroImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
      />

      {/* Overlay (optional for better contrast) */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-3xl text-white">
        <h2 className="text-4xl font-bold">Welcome to Aarti Fabrication</h2>
        <p className="mt-4 text-lg">
          We provide top-quality metal fabrication services tailored to your needs.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
          Get in Touch
        </button>
      </div>
    </section>
  );
}
