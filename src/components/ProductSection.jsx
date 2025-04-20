
import React from 'react';
import gateImage from '../assets/gate.jpg';
import grillImage from '../assets/boundarywall.jpg';
import staircaseImage from '../assets/stair.jpg';
import iron from '../assets/irongrill.jpg';
import roof from '../assets/roofshed.jpg';
import shutter from '../assets/shutter.png';


const products = [
  {
    name: "Main Gate Fabrication",
    description: "Strong and stylish main gates tailored for residential and commercial use.",
    image: gateImage,
  },
  {
    name: "Boundary Wall",
    description: "Durable and decorative window grills for enhanced safety and aesthetics.",
    image: grillImage,
  },
  {
    name: "Staircase Railing",
    description: "Custom-designed railings built with precision and modern design.",
    image: staircaseImage,
  },
  {
    name: "Iron Grill",
    description: "Custom-designed railings built with precision and modern design.",
    image: iron,
  },
  {
    name: "Roof Shed",
    description: "Custom-designed railings built with precision and modern design.",
    image: roof,
  },
  {
    name: "Shutter",
    description: "Custom-designed railings built with precision and modern design.",
    image: shutter,
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">
        Our Fabrication Services
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700">{product.name}</h3>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
