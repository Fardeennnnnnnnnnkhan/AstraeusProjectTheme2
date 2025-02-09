import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser"; // Import EmailJS
import DidYouKnow from "../components/DidYouKnow";
// import Typical from "react-typical";



const didYouKnowData = [
  {
    text: "Globally, 48% of SMBs have experienced a cybersecurity incident in the past year. 25% say they have experienced more than one incident. (Sage Report)",
  },
  {
    text: "According to National University, the U.S. sees the most malware attacks annually—9 times more than the UK. (Sonicwall Report)",
  },
  {
    text: "There was a 51% increase in phishing attacks hosted at subdomain providers, totaling over 450,000 reported names. (Interisle Consulting Group)",
  },
];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const textArray = [
  "Pioneering the future of network infrastructure...",
  "Building intelligent systems for tomorrow...",
  "Empowering innovation through technology...",
];


const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, 50); // Deleting speed
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % textArray.length); // Move to next text
    }
  }, [charIndex, isDeleting, index]);

  return (
    <motion.span
      className="text-lg md:text-3xl mt-4 max-w-3xl mx-auto text-gray-400 font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </motion.span>
  );
};

const Home = () => {

   const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % didYouKnowData.length);
      }, 4000); // Change every 4 seconds
  
      return () => clearInterval(interval);
    }, []);
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
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const demoSection = demoRef.current?.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(demoSection < windowHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };
  return (
    <div className="bg-black text-white min-h-screen">
    {/* Hero Section */}
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#0a0f1c]">
      <div className="absolute inset-0">
        <video
          src="https://cdn.pixabay.com/video/2016/09/13/5194-183786499_tiny.mp4"
          loop autoPlay muted
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <motion.div
      className="relative text-center px-4"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-gray-300 drop-shadow-2xl font-mono">
        Astraeus Next Gen
      </h1>
      <TypingEffect />
    </motion.div>
    </div>

    {/* Book a Demo Section */}
    <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white py-12">
  {/* Did You Know Section */}
 <DidYouKnow/>

  {/* Book a Demo Section */}
  <motion.section
    ref={demoRef}
    className="lg:py-12 px-6 shadow-lg"
    initial="hidden"
    animate={isVisible ? "visible" : "hidden"}
    variants={fadeInRight}
  >
    <div className="max-w-4xl pt-4 mx-auto flex flex-col items-center justify-center">
      <motion.h3
        className="text-4xl font-bold mb-6 text-transparent bg-clip-text text-white text-center"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={fadeInLeft}
      >
        Book a Demo
      </motion.h3>
      <form className="space-y-6   p-10 rounded-2xl shadow-lg max-w-lg mx-auto">
        {/* Name & Company Row */}
        <motion.div
          className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6"
          variants={fadeInLeft}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
            required
          />
        </motion.div>

        {/* Email Input */}
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          required
          variants={fadeInRight}
        />

        {/* Contact Number Input */}
        <motion.input
          type="tel"
          name="contact"
          placeholder="Your Contact Number"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          required
          variants={fadeInLeft}
        />

        {/* Message Input */}
        <motion.textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          required
          variants={fadeInRight}
        />

        {/* Select Dropdown */}
        <motion.select
          name="option"
          className="w-full p-3 rounded-lg bg-transparent border border-gray-500 text-gray-200 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all"
          required
          variants={fadeInLeft}
        >
          <option value="" disabled>Select an Option</option>
          <option value="Vajra">Vajra</option>
          <option value="Minerva">Minerva</option>
          <option value="Bug Bounty">Bug Bounty</option>
        </motion.select>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 transition-all duration-300 shadow-md"
          variants={fadeInRight}
        >
          Submit
        </motion.button>
      </form>
    </div>
  </motion.section>
</div>

  </div>
  );
};

export default Home;
