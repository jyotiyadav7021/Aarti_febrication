import React from "react";

export default function GallerySection() {
    return (
      <section id="gallery" className="py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-10">Gallery</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-40 bg-gray-200"></div>
          ))}
        </div>
      </section>
    );
  }
  