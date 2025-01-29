import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_ymq60aw", // Replace with your EmailJS service ID
        "template_okops1p", // Replace with your EmailJS template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "EdyYdBFnUrLWuxbqF" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccess("Message sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccess("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#071630] to-[#071630] text-white">
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
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
              Get in{" "}
              <span className="bg-white bg-clip-text text-transparent">
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

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-cyan-500 text-white"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-cyan-500 text-white"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-cyan-500 text-white"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-cyan-500 text-white"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#39374f] focus:outline-none focus:ring focus:ring-cyan-500 text-white"
                ></textarea>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-bold transition"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {success && (
                  <p className={`text-center mt-4 ${success.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {success}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
