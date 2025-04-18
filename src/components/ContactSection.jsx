import React from "react";

export default function ContactSection() {
    return (
      <section id="contact" className="py-16 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-700">Contact Us</h2>
        <p className="mt-4 text-gray-700">Have a project in mind? Let’s discuss!</p>
        <form className="mt-8 max-w-md mx-auto space-y-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  