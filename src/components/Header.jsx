import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from '../assets/logo.png';

const navItems = ["Home", "About", "Products", "Gallery", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full relative flex items-center justify-between px-4 py-4 md:py-6">
          {/* Logo Floating on Left */}
          <div className="absolute bottom-[-40px] left-4 z-40">
            <img
              src={Logo}
              alt="Logo"
              className="h-36 w-36 sm:h-44 sm:w-44 rounded-full bg-white shadow-xl p-2 object-contain border-4 border-white"
            />
          </div>

          {/* Navigation Links */}
          <nav className="ml-auto hidden md:flex space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-900 hover:text-blue-700"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ml-auto"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Nav */}
          <nav className={`${menuOpen ? "block" : "hidden"} w-full md:hidden mt-4`}>
            <ul className="flex flex-col space-y-2 text-sm font-medium bg-white p-4 rounded-lg shadow">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 px-3 text-gray-900 hover:bg-gray-100"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer below header for logo */}
      <div className="h-24 md:h-28"></div>
    </>
  );
}
