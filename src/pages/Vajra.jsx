import { motion } from "framer-motion";
import { Network, Zap, Shield } from "lucide-react";
import BB from "../assets/Vajra.jpeg";
import { useState, useEffect } from "react";

// **Smooth & Subtle Animations**
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
};

// **Typing Effect Component**
const textArray = [
  "Optimizing IXP route servers and Satellite for seamless connectivity...",
  "Enhancing network efficiency with automated peering...",
  "Revolutionizing satellite communication with low-latency solutions...",
  "Empowering defense, telecom, and industrial applications...",
  "Enabling intelligent traffic management for IXP networks...",
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
      className="text-lg md:text-2xl text-gray-400 font-light"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {text}
      <span className="animate-blink">|</span>
    </motion.span>
  );
};

const Vajra = () => {
  const features = [
    { icon: Network, title: "IXP Optimization", description: "Dynamic BGP route server configuration and intelligent traffic management for Internet Exchange Points." },
    { icon: Zap, title: "Low Latency", description: "Optimized signal processing and routing algorithms for minimal latency in satellite communications." },
    { icon: Shield, title: "Industry Applications", description: "Suitable for military intelligence, defense, telecommunications, and various industrial applications." },
  ];

  const specifications = [
    "Dynamic BGP route server configuration",
    "VLAN network isolation",
    "Automated peering session establishment",
    "Intelligent routing policy management",
    "Satellite signal processing and optimization",
    "Real-time traffic analysis and adjustment",
  ];

  return (
    <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white min-h-screen">
      
      {/* Header Section */}
      <motion.div className="relative w-full h-screen" initial="hidden" animate="visible" variants={fadeIn}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${BB})`, opacity: 0.5 }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-[#0a0f1c]/80"></div>
        </div>
        <div className="relative flex items-center justify-center h-full text-center text-white">
          <motion.div className="space-y-8 px-6" initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl md:text-6xl font-mono text-gray-200">Vajra</h1>
            <TypingEffect />
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <motion.h2 className="text-4xl font-extrabold text-gray-200 mb-8 text-center" initial="hidden" animate="visible" variants={fadeUp}>
            Features
          </motion.h2>

          <motion.p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp}>
            Discover the powerful features that enhance the capabilities of Vajra.
          </motion.p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {features.map(({ icon: Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="relative group bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
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
          <motion.h2 className="text-4xl font-extrabold text-gray-200 mb-8 text-center" initial="hidden" animate="visible" variants={fadeUp}>
            Technical Specifications
          </motion.h2>

          <motion.p className="text-lg text-gray-400 mb-12 text-center max-w-2xl mx-auto" initial="hidden" animate="visible" variants={fadeUp}>
            Explore the advanced technical specifications that power Vajra.
          </motion.p>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {specifications.map((spec, idx) => (
              <motion.div
                key={idx}
                className="relative group bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
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

export default Vajra;
