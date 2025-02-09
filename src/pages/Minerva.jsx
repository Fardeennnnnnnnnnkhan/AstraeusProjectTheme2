import { motion } from "framer-motion";
import { Network, Zap, Shield, Globe2 } from "lucide-react";
import BB from "../assets/Minerva.jpeg"; 
import { useState, useEffect } from "react";

// **Smoother Animations**
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

// **Typing Effect Component**
const textArray = [
  "Unveiling vulnerabilities through advanced cybersecurity analysis...",
  "Extracting intelligence from dark web and encrypted networks...",
  "Enhancing security with zero-click exploitation detection...",
  "Transforming audio, image, and text into actionable insights...",
  "Protecting organizations with real-time threat intelligence...",
];

const TypingEffect = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[index];

    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setText(currentText.slice(0, charIndex + 1)); // Use slice instead of appending manually
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <motion.span
      className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-400 font-light"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {text}
      <span className="animate-blink">|</span>
    </motion.span>
  );
};

const Minerva = () => {
  const features = [
    {
      icon: Network,
      title: "Text Extraction",
      description: "Scans systems for vulnerabilities, captures network packets, and provides cybersecurity insights.",
    },
    {
      icon: Zap,
      title: "Image & Audio Extraction",
      description: "Collects data from the web, transcribes audio, translates text, and supports multiple languages.",
    },
    {
      icon: Shield,
      title: "Zero-Click Exploitation",
      description: "Identifies and exploits system vulnerabilities by scanning open ports via IP addresses.",
    },
    {
      icon: Globe2,
      title: "Dark Web Extraction",
      description: "Accesses .onion sites to identify and report sensitive or critical information.",
    },
  ];

  const specifications = [
    "Cybersecurity insights and packet capture",
    "Multi-language support for image and audio transcriptions",
    "Vulnerability scanning via open ports",
    "Dark web exploration for critical data",
  ];

  return (
    <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white min-h-screen">
      
      {/* Header Section */}
      <motion.div className="relative w-full h-screen" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BB})`, opacity: 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#0a0f1c]/80"></div>
        </div>
        <div className="relative flex items-center justify-center h-full text-center text-white">
          <motion.div className="space-y-8 px-6" variants={fadeUp}>
            <h1 className="text-4xl mb-6 md:text-6xl font-mono text-gray-200">Minerva</h1>
            <TypingEffect />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <motion.h2 className="text-4xl font-extrabold text-gray-200 mb-8 text-center" variants={fadeUp}>
            Features
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {features.map(({ icon: Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="relative group bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
              >
                <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full border border-gray-700">
                  <Icon className="h-12 w-12 text-gray-300 group-hover:text-white transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-gray-200 mb-4 text-center">{title}</h3>
                <p className="text-gray-400 text-center">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Specifications Section */}
      <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white py-24 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <motion.h2 className="text-4xl font-extrabold text-gray-200 mb-8 text-center" variants={fadeUp}>
            Technical Specifications
          </motion.h2>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {specifications.map((spec, idx) => (
              <motion.div
                key={idx}
                className="relative group bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
              >
                <p className="text-gray-400 text-lg">{spec}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minerva;
