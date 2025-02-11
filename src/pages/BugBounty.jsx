import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bug, Shield, Award, AlertTriangle } from "lucide-react";
import { HiShieldCheck } from "react-icons/hi2";
import { MdAttachMoney } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";
import { HiGlobeAlt } from "react-icons/hi2";
import { HiOutlineBellAlert } from "react-icons/hi2"
import { HiOutlineStar } from "react-icons/hi";
import { useState , useEffect } from "react";

import BB from '../assets/BB.jpg';

// const slideLeft = {
//   hidden: { opacity: 0, x: "-50vw" }, // Reduced from "-100vw"
//   visible: { opacity: 1, x: "0%", transition: { duration: 0.6, ease: "easeOut" } } // Faster duration
// };

// const slideRight = {
//   hidden: { opacity: 0, x: "50vw" }, // Reduced from "100vw"
//   visible: { opacity: 1, x: "0%", transition: { duration: 0.6, ease: "easeOut" } } // Faster duration
// };

const fadeUp = {
  hidden: { opacity: 0, y: 15 }, // Reduced movement
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } // Faster duration
};

// const fadeScale = {
//   hidden: { opacity: 0, scale: 0.8 }, // Increased initial scale
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } } // Faster duration
// };

// const flipLeft = {
//   hidden: { opacity: 0, rotateY: 60 }, // Less rotation
//   visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } } // Faster duration
// };

// const flipRight = {
//   hidden: { opacity: 0, rotateY: -60 }, // Less rotation
//   visible: { opacity: 1, rotateY: 0, transition: { duration: 0.6, ease: "easeOut" } } // Faster duration
// };


const textArray = [
  "Leveraging the expertise of ethical hackers worldwide...",
  " proactively identify and fix vulnerabilities in your systems...",
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
      className="text-lg md:text-2xl mt-4 max-w-3xl mx-auto text-gray-400 font-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {text}
      <span className="animate-blink">|</span> {/* Blinking cursor */}
    </motion.span>
  );
};
const BugBounty = () => {
  const programSectionRef = useRef(null);

  const scrollToProgram = () => {
    programSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
     <div className="bg-gradient-to-b from-[#0B132B] to-[#1C2541] text-white min-h-screen">
      {/* Header Section */}
      <div className="relative w-full h-screen">
        <div
          className="absolute inset-0 bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url(${BB})`,
            opacity: 0.2,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/50 to-[#1C2541]/50"></div>
        </div>
        <div className="relative flex items-center justify-center h-full text-center text-white">
          <motion.div
            className="space-y-8 px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
          >
            <h1 className="text-4xl md:text-6xl  bg-clip-text text-transparent text-monoo bg-white">
              We are <span>Bug </span> Hunters!
            </h1>
            <TypingEffect/>
            {/* <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the expertise of ethical hackers worldwide to proactively identify and fix vulnerabilities in your systems.
            </p> */}
          </motion.div>
        </div>
      </div>

{/* Bug Bounty Section - Unified Background */}
<div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white min-h-screen pt-16">
      
      {/* Header */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-200">Bug Bounty</h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
            Ensure your digital assets remain resilient, secure, and compliant with industry standards.
          </p>
        </div>
      </motion.div>

      {/* Feature Cards with Left & Right Animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto px-6 lg:px-12">
  {[
    { Icon: Bug, title: "Request Vulnerabilities", desc: "Submit reports to identify vulnerabilities and strengthen security.", animation: fadeUp },
    { Icon: Award, title: "Pricing Structure", desc: "Understand our reward tiers and how we value critical findings.", animation: fadeUp },
    { Icon: Shield, title: "Improve Security", desc: "Collaborate with us to enhance platform defenses.", animation: fadeUp }
  ].map(({ Icon, title, desc, animation }, idx) => (
    <motion.div
      key={idx}
      className="relative group bg-gradient-to-b from-[#1a1f2e] to-[#111827] border border-gray-700 rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp} // Ensures alternating animations
    >
      <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full border border-gray-700">
        <Icon className="h-12 w-12 text-gray-300 group-hover:text-white transition-all duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-gray-200 mb-4 text-center">{title}</h3>
      <p className="text-gray-400 text-center">{desc}</p>
    </motion.div>
  ))}
</div>

      {/* Bug Bounty Features Section */}
      <motion.div
        className="p-12 shadow-2xl rounded-xl max-w-7xl mx-auto px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-200">Bug Bounty Features</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our Bug Bounty program prioritizes security while empowering ethical hackers with structured guidelines and generous rewards.
          </p>
        </div>

        {/* Features Grid with Left & Right Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "Proactive Security", desc: "Identify vulnerabilities before malicious actors exploit them.", icon: <HiShieldCheck className="h-14 w-14 text-gray-300" />, animation: fadeUp },
            { title: "Cost-Effective", desc: "Pay only for actual vulnerabilities found, ensuring high ROI.", icon: <MdAttachMoney className="h-14 w-14 text-green-400" />, animation: fadeUp },
            { title: "Compliance", desc: "Meet regulatory requirements (e.g., GDPR, HIPAA).", icon: <FaBalanceScale className="h-14 w-14 text-blue-400" />, animation: fadeUp },
            { title: "Global Talent Pool", desc: "Tap into a network of top-tier ethical hackers worldwide.", icon: <HiGlobeAlt className="h-14 w-14 text-purple-400" />, animation: fadeUp },
            { title: "Real-Time Reporting", desc: "Receive instant alerts for identified vulnerabilities.", icon: <HiOutlineBellAlert className="h-14 w-14 text-yellow-400" />, animation: fadeUp },
            { title: "Enhanced Reputation", desc: "Demonstrate commitment to security by implementing a bug bounty program.", icon: <HiOutlineStar className="h-14 w-14 text-indigo-400" />, animation: fadeUp }
          ].map(({ icon, title, desc, animation }, index) => (
            <motion.div
              key={index}
              className="relative group  border border-gray-700 rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="absolute inset-0 border border-transparent rounded-xl group-hover:border-gray-600 transition-all duration-500"></div>
              <div className="absolute inset-0 backdrop-blur-md bg-opacity-10 rounded-xl"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-full border border-gray-700">
                {icon}
              </div>
              <h3 className="relative text-2xl font-bold text-gray-200 mb-4 text-center">{title}</h3>
              <p className="relative text-gray-400 text-center leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        
      </motion.div>

   {/* How It Works Section */}
   <div className=" text-white py-24">
  <div className="max-w-6xl mx-auto text-center">
    
    {/* Section Header */}
    <motion.h2
      className="text-4xl font-extrabold text-gray-200 mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      How It Works
    </motion.h2>
    
    <motion.p
      className="text-lg text-gray-400 mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      Discover how our Bug Bounty program operates and empowers ethical hackers to collaborate effectively.
    </motion.p>

    {/* Steps Grid with Left & Right Animations */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-12">
      {[
        { step: "Step 1", title: "Scope Definition", desc: "Define the assets and systems to test.", animation: fadeUp },
        { step: "Step 2", title: "Ethical Hacking", desc: "Deploy skilled researchers to identify vulnerabilities.", animation: fadeUp },
        { step: "Step 3", title: "Actionable Reporting", desc: "Provide detailed reports with remediation strategies.", animation: fadeUp },
        { step: "Step 4", title: "Continuous Testing", desc: "Evolve security alongside your infrastructure.", animation: fadeUp }
      ].map(({ step, title, desc, animation }, index) => (
        <motion.div
          key={index}
          className="bg-[#1a1f2e] border border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
        >
          <div className="text-xl font-bold text-gray-300 mb-4">{step}</div>
          <h3 className="text-2xl text-gray-200 font-semibold mb-2">{title}</h3>
          <p className="text-gray-400">{desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

  {/* Investment Plans Section */}
{/* <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white py-24 mt-16">
  <div className="max-w-6xl mx-auto text-center">
    
    <motion.h2
      className="text-4xl font-extrabold text-gray-200 mb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      Investment Plans
    </motion.h2>
    
    <motion.p
      className="text-lg text-gray-400 mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      Choose the best plan that fits your organization's security needs.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
      {[
        { title: "Critical", price: "$10,000", features: "Includes remote code execution and major breaches.", animation: fadeUp },
        { title: "High", price: "$5,000", features: "Includes data leaks and privilege escalation.", animation: fadeUp },
        { title: "Medium", price: "$2,000", features: "Includes system misconfigurations.", animation: fadeUp },
        { title: "Low", price: "$500", features: "Includes minor risks.", animation: fadeUp },
        { title: "Informational", price: "$100", features: "Includes improvements and insights.", animation: fadeUp }
      ].map(({ title, price, features, animation }, idx) => (
        <motion.div
          key={idx}
          className="relative group  border border-gray-700 rounded-lg p-6 shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105"
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={animation}
        >
          <h3 className="text-2xl text-gray-200 font-semibold mb-4 text-center">{title}</h3>
          <p className="text-3xl text-green-400 font-bold mb-6 text-center">{price}</p>
          <p className="text-gray-400 text-center">{features}</p>
        </motion.div>
      ))}
    </div>
  </div>
</div> */}


      
    </div>



    
    </div>

    </>
  );
};

export default BugBounty;






