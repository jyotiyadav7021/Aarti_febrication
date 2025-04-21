// components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <div className="bg-gray-800 text-white py-12 px-6 md:px-20 grid md:grid-cols-4 gap-10">
      
      {/* CONTACT US */}
      <div>
        <h2 className="text-orange-500 text-xl font-bold mb-6">CONTACT US</h2>
        <div className="space-y-4 text-sm leading-relaxed">
          <div>
            <p className="font-bold text-white flex items-center">
              📍 Location
            </p>
            <p>Malad(East),Maharastra<br />Maharastra 400097</p>
          </div>
          <div>
            <p className="font-bold text-white flex items-center">
              📞 Call Us Now
            </p>
            <p>9594597732</p>
          </div>
          <div>
            <p className="font-bold text-white flex items-center">
              🕒 Opening Hours
            </p>
            <p>Mon – Sat 10:00AM to 8:00PM</p>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div>
        <h2 className="text-orange-500 text-xl font-bold mb-6">SERVICES</h2>
        <ul className="text-sm space-y-2">
          <li>➡️ Iron Gate</li>
          <li>➡️ Boundary Wall</li>
          <li>➡️ Staircase Railing</li>
          <li>➡️ Roofing Shed</li>
          <li>➡️ Rolling Shutter</li>
          <li>➡️ Iron Grill</li>
          <li>➡️ Custom Fabrication</li>
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div className="md:col-span-1">
        <h2 className="text-orange-500 text-xl font-bold mb-6">NEWSLETTER</h2>
        <p className="text-sm mb-4">
          Sign up for newsletters, events and the promotions
        </p>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 text-black rounded mb-4"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full">
          SUBSCRIBE NOW
        </button>
      </div>

      {/* MAP */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.893099737823!2d75.86058217508953!3d22.7839373793426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd3f0c9e31a1%3A0xf11f3d1e0ef6f9b0!2sFabrication%20World!5e0!3m2!1sen!2sin!4v1713646532294!5m2!1sen!2sin"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
