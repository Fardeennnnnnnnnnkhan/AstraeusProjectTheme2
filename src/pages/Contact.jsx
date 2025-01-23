import React from "react";
import contact from '../assets/Contact.png'
const ContactPage = () => {
  return (
<div className="relative min-h-screen bg-gradient-to-r from-[#0A0D17] to-[#1B1339] text-white">
  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url('/path-to-your-background-image.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      filter: "blur(5px)",
      zIndex: -1,
    }}
  ></div>

  {/* Main Content */}
  <div className="relative z-10">
    <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
          Get in{" "}
          <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h1>
        <p className="text-xl text-gray-400 mt-4">
          Get in touch with us for any inquiries or collaboration opportunities.
        </p>
      </div>

      {/* Centered Form */}
      <div className="flex items-center justify-center">
        <div className="w-full max-w-lg bg-[#1c1a2e]/50 backdrop-blur-md p-10 rounded-xl shadow-lg shadow-gray-800">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Let's Connect 
          </h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-purple-500 text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-purple-500 text-white"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-purple-500 text-white"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-purple-500 text-white"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-purple-500 text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-[#1B1339] hover:bg-purple-700 text-white font-bold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  );
};

export default ContactPage;
