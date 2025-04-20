import React from "react";
import harpreet from "../assets/harpreet.jpg"; // Replace with actual path
import gaurav from "../assets/gaurav.jpg";
import ravi from "../assets/ravi.jpg";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Harpreet Singh",
      image: harpreet,
      message: "Good job excellent Fabrication Services Provider in Indore",
      rating: 4.5,
    },
    {
      name: "Gaurav Yadav",
      image: gaurav,
      message: "I recommended to Fabrication World for Quality Works",
      rating: 5,
    },
    {
      name: "Ravi Sharma",
      image: ravi,
      message: "Excellent job done by Fabrication World for Iron Gate Manufacturing",
      rating: 3.5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-white inline-block" />);
    }

    if (hasHalf) {
      stars.push(<FaStarHalfAlt key="half" className="text-white inline-block" />);
    }

    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-10">TESTIMONIALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-orange-500 text-white p-8 rounded-lg shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="mb-4">{item.message}</p>
            <div className="flex justify-center gap-1 mb-2">
              {renderStars(item.rating)}
            </div>
            <p className="font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
