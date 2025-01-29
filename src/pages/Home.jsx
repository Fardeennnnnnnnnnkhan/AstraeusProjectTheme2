import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS


const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    option: "",
    organization: "",
    message: "",
  });

  const [isSectionVisibleServices, setIsSectionVisibleServices] = useState(false);
  const [isSectionVisibleDemo, setIsSectionVisibleDemo] = useState(false);

  const servicesRef = useRef(null);
  const demoRef = useRef(null);
  const formRef = useRef(null); // Create a ref for the form

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === servicesRef.current) {
            setIsSectionVisibleServices(entry.isIntersecting);
          } else if (entry.target === demoRef.current) {
            setIsSectionVisibleDemo(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (demoRef.current) observer.observe(demoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ymq60aw", // Replace with your EmailJS service ID
        "template_okops1p", // Replace with your EmailJS template ID
        formRef.current,
        "EdyYdBFnUrLWuxbqF" // Replace with your EmailJS user ID (or public key if using newer API)
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Form submitted successfully!");
          setFormData({ name: "", company: "", email: "", contact: "", option: "", organization: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <video
            src="https://cdn.pixabay.com/video/2016/09/13/5194-183786499_tiny.mp4"
            loop autoPlay muted
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 text-white drop-shadow-2xl">
            Astraeus Next Gen
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg font-light">
            Pioneering the future of network infrastructure and intelligent systems
          </p>
        </div>
      </div>

      {/* Book a Demo Section */}
      <section ref={demoRef} className="lg:py-10 bg-gradient-to-b from-[#162447] to-[#1C2541] text-white">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col items-center justify-center px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionVisibleDemo ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full md:w-1/2">
            <motion.h3
              className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: isSectionVisibleDemo ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              Book a Demo
            </motion.h3>
            <div className="bg-[#1C2541] border border-cyan-500 rounded-xl p-10 shadow-lg">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                  <input
                    type="text" name="name" placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                    value={formData.name} onChange={handleInputChange} required
                  />
                  <input
                    type="text" name="company" placeholder="Company Name"
                    className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                    value={formData.company} onChange={handleInputChange} required
                  />
                </div>
                <input
                  type="email" name="email" placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                  value={formData.email} onChange={handleInputChange} required
                />
                <input
                  type="tel" name="contact" placeholder="Your Contact Number"
                  className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                  value={formData.contact} onChange={handleInputChange} required
                />
                <input
                  type="text" name="organization" placeholder="Organization"
                  className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                  value={formData.organization} onChange={handleInputChange} required
                />
                <textarea
                  name="message" placeholder="Your Message" rows="5"
                  className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                  value={formData.message} onChange={handleInputChange} required
                />
                <select
                  name="option"
                  className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400"
                  value={formData.option} onChange={handleInputChange} required
                >
                  <option value="" disabled>Select an Option</option>
                  <option value="Vajra">Vajra</option>
                  <option value="Minerva">Minerva</option>
                  <option value="Bug Bounty">Bug Bounty</option>
                </select>
                <button type="submit" className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold hover:bg-cyan-500">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
