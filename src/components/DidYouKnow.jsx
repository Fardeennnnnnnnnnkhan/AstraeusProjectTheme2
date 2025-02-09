import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const didYouKnowData = [
  {
    text: "48% of SMBs experienced a cybersecurity incident in the past year. 25% had multiple attacks. (Sage Report)",
  },
  {
    text: "The US faces the highest number of malware attacks—9 times more than the UK. (Sonicwall Report)",
  },
  {
    text: "Phishing attacks increased by 51% on subdomain providers, with over 450,000 new cases. (Interisle Consulting Group)",
  },
  {
    text: "Ransomware attacks grew by 105% in 2023, targeting both enterprises and small businesses. (Cybersecurity Ventures)",
  },
  {
    text: "IoT devices experience over 5,200 attacks per month, posing severe security risks. (Symantec Report)",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DidYouKnow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % didYouKnowData.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-white py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-8 text-cyan-400 tracking-wide">
          Did You Know?
        </h2>
        <motion.div
          key={index}
          className="bg-transparent border border-gray-700 rounded-xl p-8 shadow-2xl mx-auto max-w-3xl transition-all duration-500 hover:bg-opacity-80 hover:scale-105"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            {didYouKnowData[index].text}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DidYouKnow;
