import React from "react";
import { Link } from "react-router-dom";

const ContactHome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0A0D17] to-[#1B1339] text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center space-y-6 py-20">
        <h1 className="text-5xl font-bold tracking-wide">
          Welcome to Astraeus Next Gen
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl">
          Empowering the future with advanced technology and seamless solutions.
          Explore our innovations and join us in building a smarter tomorrow.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
        >
          Get in Touch
        </Link>
      </header>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-16 px-4">
        {[
          {
            title: "Cutting-Edge Technology",
            description:
              "We harness the latest advancements to deliver top-notch solutions.",
          },
          {
            title: "Dedicated Support",
            description:
              "Our team is here to assist you at every step of the journey.",
          },
          {
            title: "Global Reach",
            description:
              "Connecting businesses and individuals across the globe.",
          },
        ].map(({ title, description }, idx) => (
          <div
            key={idx}
            className="bg-[#18152D] border border-purple-600 rounded-lg p-6 text-center hover:shadow-xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ContactHome;
