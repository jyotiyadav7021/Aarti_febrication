import React from "react";
import aboutBg from "../assets/about.avif"; // adjust the path and name as needed

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 text-center overflow-hidden">
      {/* Background Image with Light Blur */}
      <img
        src={aboutBg}
        alt="About Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-[1px]"
      />

      {/* Optional: very light overlay to help text pop */}
      <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-blue-700">About Us</h2>
        <p className="mt-6 text-lg font-medium text-gray-900 leading-relaxed">
          <span className="font-bold text-blue-800">Aarti Fabrication</span> is a trusted name in metal craftsmanship, 
          committed to delivering <span className="font-semibold">precision, durability, and excellence</span> in every project. 
          With years of hands-on experience, our team combines advanced techniques and traditional skills to bring your ideas to life.
          We pride ourselves on <span className="font-semibold">customer satisfaction, timely delivery, and quality workmanship</span>.
        </p>
      </div>
    </section>
  );
}
