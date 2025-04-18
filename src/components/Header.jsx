import React from "react";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = ['Home', 'About', 'Products', 'Gallery', 'Contact'];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Aarti Fabrication</h1>
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <Link key={item} to={`/#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600">
              {item}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {navItems.map(item => (
            <Link key={item} to={`/#${item.toLowerCase()}`} className="block py-2 text-gray-700 hover:text-blue-600">
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
