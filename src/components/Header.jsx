import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for hamburger and close
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Aarti Fabrication Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h1 className="text-2xl md:text-3xl font-bold">Aarti Fabrication</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          <a href="#home" className="hover:text-yellow-300 transition">Home</a>
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <a href="#services" className="hover:text-yellow-300 transition">Services</a>
          <a href="#gallery" className="hover:text-yellow-300 transition">Gallery</a>
          <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <nav className="flex flex-col space-y-2 text-lg font-medium">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">About</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Services</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Gallery</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-yellow-300 transition">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
