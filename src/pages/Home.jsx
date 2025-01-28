import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import "./Home.css";
import Demo from '../assets/Demo.png'
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    option: "",
  });

  const [isSectionVisibleServices, setIsSectionVisibleServices] = useState(false);
  const [isSectionVisibleDemo, setIsSectionVisibleDemo] = useState(false);

  const servicesRef = useRef(null);
  const demoRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      icon: "🌐",
      title: "NAVIGATE GEOPOLITICAL CHALLENGES",
      description:
        "Provides tools to understand and navigate complex geopolitical situations.",
    },
    {
      icon: "💡",
      title: "ACTIONABLE INSIGHTS",
      description:
        "Translate complex data into clear information you can use to make decisions.",
    },
    {
      icon: "📊",
      title: "PREDICT GEOPOLITICAL IMPACTS",
      description:
        "Analyze and predict how geopolitical events might affect your business.",
    },
    {
      icon: "🛡",
      title: "PREPARE FOR THE NEW COLD WAR",
      description:
        "Brace for new challenges and opportunities in a tense geopolitical climate.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === servicesRef.current) {
            setIsSectionVisibleServices(true);
          } else if (entry.target === demoRef.current) {
            setIsSectionVisibleDemo(true);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (demoRef.current) observer.observe(demoRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (demoRef.current) observer.unobserve(demoRef.current);
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-pink-500 drop-shadow-2xl">
            Astraeus Next Gen
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg font-light">
            Pioneering the future of network infrastructure and intelligent systems
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-center"
      >
        <motion.h2
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400 mb-10"
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
              className="bg-gradient-to-r from-[#2B224A] to-[#342C5C] p-8 rounded-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:border-purple-500 border border-gray-700 shadow-lg hover:shadow-2xl text-center"
              style={{ animationDelay: `${index * 0.3}s` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isSectionVisibleServices ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl text-purple-400 mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-200 mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Book a Demo Section */}
      <section
  ref={demoRef}
  className="lg:py-10 bg-gradient-to-b from-[#2C2748] to-[#1B1339] text-white"
>
  <motion.div
    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: isSectionVisibleDemo ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src={Demo}
        alt="Book a Demo Illustration"
        className="w-full h-full object-cover transform transition-all duration-500"
      />
    </div>
    <div className="w-full md:w-1/2 pl-0 md:pl-16">
      <motion.h3
        className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isSectionVisibleDemo ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        Book a Demo
      </motion.h3>
      <div className="bg-[#18152D] border border-gray-700 rounded-xl p-10 shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#2C2748] text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full p-3 rounded-lg bg-[#2C2748] text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                value={formData.company}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#2C2748] text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="contact"
            placeholder="Your Contact Number"
            className="w-full p-3 rounded-lg bg-[#2C2748] text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.contact}
            onChange={handleInputChange}
          />
          <select
            name="option"
            className="w-full p-3 rounded-lg bg-[#2C2748] text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.option}
            onChange={handleInputChange}
          >
            <option value="" disabled>
              Select an Option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-all duration-300"
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
