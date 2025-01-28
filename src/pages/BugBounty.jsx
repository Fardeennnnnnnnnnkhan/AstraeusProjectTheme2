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

import BB from '../assets/BB.jpg';

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
            opacity: 0.6,
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
            <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-white">
              We are <span>Bug Bounty</span> Hunters
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the expertise of ethical hackers worldwide to proactively identify and fix vulnerabilities in your systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bug Bounty Section */}
      <div className="bg-gradient-to-b from-[#1C2541] to-[#3A506B] text-white min-h-screen pt-16">
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <motion.div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Bug Bounty
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
              Ensure your digital assets remain resilient, secure, and compliant with industry standards.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                Icon: Bug,
                title: "Request Vulnerabilities",
                description:
                  "Submit requests to report vulnerabilities and help us identify potential weaknesses in our systems.",
              },
              {
                Icon: Award,
                title: "Pricing Structure",
                description:
                  "Understand our reward tiers and how we value your contributions based on their severity and impact.",
              },
              {
                Icon: Shield,
                title: "Improve Security",
                description:
                  "Collaborate with us to enhance the platform's defenses and safeguard user data effectively.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-[#162447] border border-cyan-400 rounded-xl p-8 hover:shadow-lg transition-transform hover:scale-105"
              >
                <Icon className="h-12 w-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-200">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
  className="bg-gradient-to-b from-[#0B132B] to-[#1C2541] border border-cyan-500 p-12 shadow-2xl rounded-xl"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }}
>
  {/* Section Header */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
      Bug Bounty Features
    </h2>
    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
      Our Bug Bounty program is tailored to prioritize security while empowering ethical hackers with structured guidelines and generous rewards.
    </p>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {[
      {
        title: "Proactive Security",
        description: "Identify vulnerabilities before malicious actors exploit them.",
        icon: <HiShieldCheck className="h-12 w-12 text-cyan-400" />,
      },
      {
        title: "Cost-Effective",
        description: "Pay only for actual vulnerabilities found, ensuring high ROI.",
        icon: <MdAttachMoney className="h-12 w-12 text-green-400" />,
      },
      {
        title: "Compliance",
        description: "Meet regulatory requirements (e.g., GDPR, HIPAA).",
        icon: <FaBalanceScale className="h-12 w-12 text-blue-400" />,
      },
      {
        title: "Global Talent Pool",
        description: "Tap into a network of top-tier ethical hackers worldwide.",
        icon: <HiGlobeAlt className="h-12 w-12 text-purple-400" />,
      },
      {
        title: "Real-Time Reporting",
        description: "Receive instant alerts for identified vulnerabilities.",
        icon: <HiOutlineBellAlert className="h-12 w-12 text-yellow-400" />,
      },
      {
        title: "Enhanced Reputation",
        description: "Demonstrate commitment to security by implementing a bug bounty program.",
        icon: <HiOutlineStar className="h-12 w-12 text-indigo-400" />,
      },
    ].map(({ icon, title, description }, index) => (
      <motion.div
        key={index}
        className="bg-[#162447] border border-cyan-500 rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
      >
        <div className="flex items-center mb-6">
          {icon}
          <h3 className="text-2xl font-bold text-cyan-200 ml-4">{title}</h3>
        </div>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* How It Works Section */}
      <div className="bg-gradient-to-b from-[#3A506B] to-[#5C678D] text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-8">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Discover how our Bug Bounty program operates and empowers ethical hackers to collaborate effectively.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                step: "Step 1",
                title: "Scope Defination",
                description:
                  "Define the assets and systems to test..",
              },
              {
                step: "Step 2",
                title: "Ethical Hacking",
                description:
                  " Deploy skilled researchers to identify vulnerabilities.",
              },
              {
                step: "Step 3",
                title: "Actionable Reporting",
                description:
                  "Provide detailed reports with remediation strategies..",
              },
              {
                step: "Step 4",
                title: "Continuous Testing",
                description:
                  "Evolve security alongside your infrastructure.",
              },
            ].map(({ step, title, description }, index) => (
              <motion.div
                key={index}
                className="bg-[#2B2D42] border border-cyan-400 rounded-lg p-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl font-bold text-teal-300 mb-4">{step}</div>
                <h3 className="text-2xl text-white font-semibold mb-2">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Plans Section */}
      <div className="bg-gradient-to-b from-[#5C678D] to-[#0B132B] text-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent mb-8">
            Investment Plans
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Choose the best plan that fits your organization's security needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        {
          title: "Critical",
          price: "$10,000",
          features: "Includes remote code execution and major breaches.",
        },
        {
          title: "High",
          price: "$5,000",
          features: "Includes data leaks and privilege escalation.",
        },
        {
          title: "Medium",
          price: "$2,000",
          features: "Includes system misconfigurations.",
        },
        {
          title: "Low",
          price: "$500",
          features: "Includes minor risks.",
        },
        {
          title: "Informational",
          price: "$100",
          features: "Includes improvements and insights.",
        },
      ].map(({ title, price, features }, idx) => (
        <motion.div
          key={idx}
          className="bg-[#2B2D42] border border-cyan-400 rounded-lg p-6 shadow-lg"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl text-white font-semibold mb-4">{title}</h3>
          <p className="text-3xl text-teal-300 font-bold mb-6">{price}</p>
          <p className="text-gray-300">{features}</p>
        </motion.div>
      ))}
    </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default BugBounty;