import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

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
        "service_t0jboxc",
        "template_q9289so",
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "V6lo8xXlJMQD7l5iK"
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
    <div className="bg-gradient-to-b  from-black to-[#0a0f1c] text-white min-h-screen flex items-center justify-center">
      
      <div className="max-w-5xl mx-auto mt-32 px-6 lg:px-12 w-full">
        
        {/* Header */}
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-200">
            Get in <span className="bg-white bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 mt-4">
            Contact us for inquiries, collaborations, or support.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="  rounded-xl shadow-lg p-10 w-full max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h3 className="text-3xl font-semibold text-center text-gray-200 mb-6">Let's Connect</h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:ring focus:ring-cyan-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:ring focus:ring-cyan-500"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:ring focus:ring-cyan-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:ring focus:ring-cyan-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:ring focus:ring-cyan-500"
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
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
