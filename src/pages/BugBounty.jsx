import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Bug, Shield, Award, AlertTriangle } from "lucide-react";
import { HiShieldCheck } from "react-icons/hi2";
import { MdAttachMoney } from "react-icons/md";
import { FaBalanceScale } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";


const BugBounty = () => {
  const programSectionRef = useRef(null);

  const scrollToProgram = () => {
    programSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-white min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left space-y-8 mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Join Our{" "}
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Bug Bounty
              </span>{" "}
              Program
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-lg">
              Help us secure our platform by identifying and reporting
              vulnerabilities. Contribute to building a safer digital environment
              and earn rewards for your efforts.
            </p>
            <button
              onClick={scrollToProgram}
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 rounded-lg text-xl font-bold text-white transition-transform hover:scale-105"
            >
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
          >
            <img
              src="https://www.shutterstock.com/image-vector/bounty-bugs-bug-hunters-look-600nw-2206541017.jpg"
              alt="Bug Bounty Illustration"
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      <div
        ref={programSectionRef}
        className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-white min-h-screen pt-16"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12 py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-200">
              Bug{" "}
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                Bounty
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
              Help secure your platform by reporting vulnerabilities and earning
              rewards for your contributions!
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={staggerContainer}
          >
            {[
              {
                Icon: Bug,
                title: "Report Vulnerabilities",
                description:
                  "Share detailed reports of vulnerabilities you discover in our systems to help us improve.",
              },
              {
                Icon: Award,
                title: "Get Rewarded",
                description:
                  "Receive rewards based on the severity and impact of your findings.",
              },
              {
                Icon: Shield,
                title: "Improve Security",
                description:
                  "Help us enhance security measures and protect the platform and its users.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-[#18152D] border border-purple-600 rounded-xl p-8 hover:shadow-lg transition-transform hover:scale-105"
                variants={sectionVariants}
              >
                <Icon className="h-12 w-12 text-purple-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="bg-gradient-to-b from-[#1B1339] to-[#2A1F52] border border-gray-800 rounded-xl p-12 shadow-2xl"
            variants={sectionVariants}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl font-extrabold text-white mb-4">
                Bug Bounty Features
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Our Bug Bounty program is designed to prioritize security and empower ethical hackers with clear guidelines and robust rewards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {[
    {
      title: "Proactive Security",
      description:
        "Identify vulnerabilities before malicious actors exploit them.",
      icon: <HiShieldCheck className="h-10 w-10 text-purple-400" />,
    },
    {
      title: "Cost-Effective",
      description:
        "Pay only for actual vulnerabilities found, ensuring high ROI.",
      icon: <MdAttachMoney className="h-10 w-10 text-green-400" />,
    },
    {
      title: "Compliance",
      description:
        "Meet regulatory requirements (e.g., GDPR, HIPAA).",
      icon: <FaBalanceScale className="h-10 w-10 text-blue-400" />,
    },
    {
      title: "Reputation Protection",
      description:
        "Prevent data breaches and build customer trust.",
      icon: <HiUserGroup className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Comprehensive Coverage",
      description:
        "Scanning includes networks, applications, and compliance standards.",
      icon: <MdDevices className="h-10 w-10 text-indigo-400" />,
    },
  ].map(({ icon, title, description }, index) => (
    <motion.div
    whileInView="visible"
          viewport={{ once: false }}
      key={index}
      className="bg-[#252040] border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
      variants={sectionVariants}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-2xl font-bold text-white ml-4">
          {title}
        </h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  ))}
</div>

          </motion.div>

          <motion.div

            className="text-center mt-16"
            variants={sectionVariants}
          >
            <Link
              to="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 px-8 py-4 rounded-lg text-xl font-bold text-white transition-transform hover:scale-105"
            >
              Submit a Request
            </Link>
          </motion.div>
        </motion.div>

{/* How It Works */}

        <div
        // ref={howItWorksRef}
        className="bg-gradient-to-b from-[#1B1339] to-[#2C2748] text-white py-20"
      >
        <motion.div
          className="max-w-7xl mx-auto px-6 lg:px-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            How{" "}
            <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Scope Definition", description: "Define the assets and systems to test." },
              { step: 2, title: "Ethical Hacking", description: "Deploy skilled researchers to identify vulnerabilities." },
              { step: 3, title: "Actionable Reporting", description: "Provide detailed reports with remediation strategies." },
              { step: 4, title: "Continuous Testing", description: "Evolve security alongside your infrastructure." },
            ].map(({ step, title, description }, index) => (
              <motion.div
              whileInView="visible"
          viewport={{ once: false }}
                key={index}
                className="bg-[#252040] border border-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
                variants={sectionVariants}
              >
                <h3 className="text-2xl font-bold text-purple-400">
                  Step {step}
                </h3>
                <p className="text-xl text-white my-4">{title}</p>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

          {/* Investment Plans Section */}
          <div className="bg-gradient-to-b from-[#18152D] to-[#252040] text-white py-20">
  <motion.div
    className="max-w-7xl mx-auto px-6 lg:px-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={staggerContainer}
  >
    <h2 className="text-4xl font-bold text-center mb-12">
      Investment{" "}
      <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        Plans
      </span>
    </h2>
    <div className="overflow-x-auto flex space-x-8 custom-scrollbar">
      {[
        { level: "Critical", price: "$10,000", details: "Remote code execution, major breaches" },
        { level: "High", price: "$5,000", details: "Data leaks, privilege escalation" },
        { level: "Medium", price: "$2,000", details: "System misconfigurations" },
        { level: "Low", price: "$500", details: "Minor risks" },
        { level: "Informational", price: "$100", details: "Improvements and insights" },
      ].map(({ level, price, details }, index) => (
        <motion.div
          key={index}
          className="min-w-[250px] bg-[#2A1F52] border border-purple-600 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform hover:scale-105"
          variants={sectionVariants}
        >
          <h3 className="text-2xl font-bold text-purple-400">{level}</h3>
          <p className="text-3xl font-extrabold my-4">{price}</p>
          <p className="text-gray-400">{details}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>




      </div>
    </>
  );
};

export default BugBounty;