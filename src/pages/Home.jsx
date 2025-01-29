import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Demo from '../assets/Demo.png'

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

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { icon: "🌐", title: "NAVIGATE GEOPOLITICAL CHALLENGES", description: "Provides tools to understand and navigate complex geopolitical situations." },
    { icon: "💡", title: "ACTIONABLE INSIGHTS", description: "Translate complex data into clear information you can use to make decisions." },
    { icon: "📊", title: "PREDICT GEOPOLITICAL IMPACTS", description: "Analyze and predict how geopolitical events might affect your business." },
    { icon: "🛡", title: "PREPARE FOR THE NEW COLD WAR", description: "Brace for new challenges and opportunities in a tense geopolitical climate." },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
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
      { threshold: 0.25 } // Reduced threshold for earlier trigger
    );
  
    if (servicesRef.current) observer.observe(servicesRef.current);
    if (demoRef.current) observer.observe(demoRef.current);
  
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Header Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
        <div className="absolute inset-0">
          <video
            src="https://cdn.pixabay.com/video/2016/09/13/5194-183786499_tiny.mp4"
            loop
            autoPlay
            muted
            alt="Space"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 bg-clip-text text-transparent bg-white font-sans drop-shadow-2xl">
            Astraeus Next Gen
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg font-light">
            Pioneering the future of network infrastructure and intelligent systems
          </p>
        </div>
      </div>

      {/* Services Section */}
    <section ref={servicesRef} className="py-20 bg-gradient-to-b from-[#0B132B] to-[#1C2541] text-center">
      <motion.h2
        className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSectionVisibleServices ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR SERVICES
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#162447] border border-cyan-400 rounded-xl p-8 shadow-lg hover:shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-102 hover:border-cyan-500 text-center"
            style={{ animationDelay: `${index * 0.3}s` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isSectionVisibleServices ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
        
            <div className="text-4xl text-cyan-400 mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-cyan-200 mb-4">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                name="contact"
                placeholder="Your Contact Number"
                className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                value={formData.contact}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                value={formData.organization}
                onChange={handleInputChange}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
              />
              <select
                name="option"
                className="w-full p-3 rounded-lg bg-[#0B132B] text-gray-200 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                value={formData.option}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select an Option
                </option>
                <option value="option1">Vajra</option>
                <option value="option2">Minerva</option>
                <option value="option3">Bug Bounty</option>
              </select>
              <button
                type="submit"
                className="w-full bg-cyan-400 text-white py-3 rounded-lg font-bold hover:bg-cyan-500 transition-all duration-300"
              >
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
