import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-indigo-600">
          Aarti<span className="text-gray-800">Fabrication</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-indigo-600 transition-all cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="hidden md:block bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 shadow-md transition">
          Get a Quote
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <li
                key={item}
                className="hover:text-indigo-600 cursor-pointer"
              >
                {item}
              </li>
            ))}
            <li>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full transition">
                Get a Quote
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
