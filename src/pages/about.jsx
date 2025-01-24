import React, { useEffect, useState } from "react";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const textToType =
    "Discover our mission, vision, and the innovative projects that drive our success.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText((prev) => prev + textToType[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] py-24">
        {/* Page Title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-4">ABOUT US</h1>
            <p className="text-2xl text-gray-400">
              <span>{typedText}</span>
            </p>
          </div>

          {/* About Company Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="md:text-left">
              <h2 className="text-4xl font-semibold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                We are a team of innovators passionate about developing advanced
                AI-powered tools designed to solve real-world challenges. By
                combining cutting-edge technology with creativity, we aim to
                empower businesses and transform lives globally. Our solutions
                focus on delivering unparalleled efficiency and reliability.
              </p>
            </div>

            {/* CEO Photo with Name Below */}
            <div className="flex flex-col items-center justify-center md:ml-24">
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/ceo1.png"
                  alt="CEO"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* CEO Name Below the Photo */}
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-white">Shreejit Sen</h3>
                {/* Optional Subtext */}
                <p className="text-sm text-gray-400">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
