// import React from "react";
// import { motion } from "framer-motion";
// import { Target, Eye, Building, Linkedin } from "lucide-react";

// // Animations
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
// };

// const slideLeft = {
//   hidden: { opacity: 0, x: "-50vw" },
//   visible: { opacity: 1, x: "0%", transition: { duration: 1, ease: "easeOut" } },
// };

// const slideRight = {
//   hidden: { opacity: 0, x: "50vw" },
//   visible: { opacity: 1, x: "0%", transition: { duration: 1, ease: "easeOut" } },
// };

// const About = () => {
//   return (
//     <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white min-h-screen">

//       {/* Header */}
//       <motion.div className="text-center pt-24 pb-16" initial="hidden" whileInView="visible" variants={fadeUp}>
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-200">
//           About <span className="bg-white bg-clip-text text-transparent">Us</span>
//         </h1>
//         <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
//           We are committed to revolutionizing the digital world with innovative solutions.
//         </p>
//       </motion.div>

//       {/* Company Info Section */}
//       <motion.div
//         className="max-w-5xl mx-auto bg-[#1a1f2e] border border-gray-700 rounded-xl shadow-lg p-10 mb-24"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={slideLeft}
//       >
//         <div className="flex items-center justify-center mb-6">
//           <Building className="w-12 h-12 text-cyan-400 mr-4" />
//           <h2 className="text-3xl font-bold text-gray-200">Our Company</h2>
//         </div>
//         <p className="text-gray-400 text-lg text-center">
//           We empower decision-makers with precise data insights to navigate the evolving digital landscape.
//           Our mission is to provide accurate and real-time information, ensuring well-informed decisions
//           that drive progress.
//         </p>
//       </motion.div>

//       {/* Mission & Vision Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-24">
        
//         {/* Mission */}
//         <motion.div
//           className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-10 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideLeft}
//         >
//           <div className="flex items-center mb-4">
//             <Target className="w-12 h-12 text-cyan-400 mr-4" />
//             <h2 className="text-3xl font-bold text-gray-200">Our Mission</h2>
//           </div>
//           <p className="text-gray-400 text-lg">
//             We believe that well-informed decisions matter more than moral judgments.
//             Our aim is to provide the data necessary for impactful decision-making.
//           </p>
//         </motion.div>

//         {/* Vision */}
//         <motion.div
//           className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-10 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideRight}
//         >
//           <div className="flex items-center mb-4">
//             <Eye className="w-12 h-12 text-cyan-400 mr-4" />
//             <h2 className="text-3xl font-bold text-gray-200">Our Vision</h2>
//           </div>
//           <p className="text-gray-400 text-lg">
//             We envision a future where data is the foundation for progress.
//             Our goal is to enable organizations to make confident, data-driven decisions.
//           </p>
//         </motion.div>

//       </div>

//       {/* Founders Section */}
//       <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp}>
//         <h2 className="text-4xl font-bold text-gray-200">Our Founders</h2>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
        
//         {/* Founder 1 */}
//         <motion.div
//           className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideLeft}
//         >
//           <img src="/Shreejit-Sen.jpg" alt="Shreejit Sen" className="w-40 h-40 rounded-full mx-auto mb-4" />
//           <h3 className="text-3xl font-bold text-gray-200">Shreejit Sen</h3>
//           <p className="text-cyan-400 text-lg">Co-Founder & CEO</p>
//           <a href="https://linkedin.com/in/shreejit-sen" target="_blank" rel="noopener noreferrer">
//             <Linkedin className="w-6 h-6 mt-3 text-gray-400 hover:text-cyan-400 transition" />
//           </a>
//         </motion.div>

//         {/* Founder 2 */}
//         <motion.div
//           className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideRight}
//         >
//           <img src="/Anush-Dhavale.jpg" alt="Anush Dhavale" className="w-40 h-40 rounded-full mx-auto mb-4" />
//           <h3 className="text-3xl font-bold text-gray-200">Anush Dhavale</h3>
//           <p className="text-cyan-400 text-lg">Founder & CEO</p>
//           <a href="https://linkedin.com/in/anush-dhavale" target="_blank" rel="noopener noreferrer">
//             <Linkedin className="w-6 h-6 mt-3 text-gray-400 hover:text-cyan-400 transition" />
//           </a>
//         </motion.div>

//       </div>

//       {/* Advisors Section */}
//       <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" variants={fadeUp}>
//         <h2 className="text-4xl font-bold text-gray-200">Our Advisors</h2>
//       </motion.div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
        
//         {/* Advisor 1 */}
//         <motion.div
//           className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideLeft}
//         >
//           <img src="/DHRUV_Sharma.png" alt="Dhruv Sharma" className="w-40 h-40 rounded-full mx-auto mb-4" />
//           <h3 className="text-3xl font-bold text-gray-200">Dhruv Sharma</h3>
//           <p className="text-cyan-400 text-lg">Public Policy & Strategy Expert</p>
//         </motion.div>

//         {/* Advisor 2 */}
//         <motion.div
//           className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
//           whileHover={{ scale: 1.05 }}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={slideRight}
//         >
//           <img src="/SUBHO_PATI.png" alt="David Patel" className="w-40 h-40 rounded-full mx-auto mb-4" />
//           <h3 className="text-3xl font-bold text-gray-200">David Patel</h3>
//           <p className="text-cyan-400 text-lg">Startup Mentor & Strategist</p>
//         </motion.div>

//       </div>

//     </div>
//   );
// };

// export default About;



import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Building, Linkedin } from "lucide-react";

// **Simplified Animations**
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black to-[#0a0f1c] text-white min-h-screen">

      {/* Header */}
      <motion.div className="text-center pt-24 pb-16" initial="hidden" whileInView="visible" variants={fadeIn}>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-200">
          About <span className="bg-white bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
          We are committed to revolutionizing the digital world with innovative solutions.
        </p>
      </motion.div>

      {/* Company Info Section */}
      <motion.div className="max-w-5xl mx-auto bg-[#1a1f2e] border border-gray-700 rounded-xl shadow-lg p-10 mb-16"
        initial="hidden" whileInView="visible" variants={fadeIn}>
        <div className="flex items-center justify-center mb-6">
          <Building className="w-12 h-12 text-cyan-400 mr-4" />
          <h2 className="text-3xl font-bold text-gray-200">Our Company</h2>
        </div>
        <p className="text-gray-400 text-lg text-center">
          We empower decision-makers with precise data insights to navigate the evolving digital landscape.
        </p>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        
        {/* Mission */}
        <motion.div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
          initial="hidden" whileInView="visible" variants={fadeIn}>
          <div className="flex items-center mb-4">
            <Target className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 className="text-2xl font-bold text-gray-200">Our Mission</h2>
          </div>
          <p className="text-gray-400 text-lg">
            We believe that well-informed decisions matter more than moral judgments.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div className="bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
          initial="hidden" whileInView="visible" variants={fadeIn}>
          <div className="flex items-center mb-4">
            <Eye className="w-12 h-12 text-cyan-400 mr-4" />
            <h2 className="text-2xl font-bold text-gray-200">Our Vision</h2>
          </div>
          <p className="text-gray-400 text-lg">
            Our mission is to provide precise data to enable effective decision-making.
          </p>
        </motion.div>

      </div>

      {/* Founders Section */}
      <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={fadeIn}>
        <h2 className="text-4xl font-bold text-gray-200">Our Founders</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        
        {/* Founder 1 */}
        <motion.div className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
          initial="hidden" whileInView="visible" variants={fadeIn}>
          <img src="/Shreejit-Sen.jpg" alt="Shreejit Sen" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-200">Shreejit Sen</h3>
          <p className="text-cyan-400 text-lg">Co-Founder & CEO</p>
          <a href="https://linkedin.com/in/shreejit-sen" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 mt-3 text-gray-400 hover:text-cyan-400 transition" />
          </a>
        </motion.div>

        {/* Founder 2 */}
        <motion.div className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
          initial="hidden" whileInView="visible" variants={fadeIn}>
          <img src="/Anush-Dhavale.jpg" alt="Anush Dhavale" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-200">Anush Dhavale</h3>
          <p className="text-cyan-400 text-lg">Founder & CEO</p>
          <a href="https://linkedin.com/in/anush-dhavale" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 mt-3 text-gray-400 hover:text-cyan-400 transition" />
          </a>
        </motion.div>

      </div>

      {/* Advisors Section */}
      <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" variants={fadeIn}>
        <h2 className="text-4xl font-bold text-gray-200">Our Advisors</h2>
      </motion.div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        
        <motion.div className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
          initial="hidden" whileInView="visible" variants={fadeIn}>
          <img src="/DHRUV_Sharma.png" alt="Dhruv Sharma" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-200">Dhruv Sharma</h3>
          <p className="text-cyan-400 text-lg">Public Policy & Strategy Expert</p>
        </motion.div>

        <motion.div className="text-center bg-[#1a1f2e] border border-gray-700 rounded-xl p-8 shadow-lg"
          initial="hidden" whileInView="visible" variants={fadeIn}>
          <img src="/SUBHO_PATI.png" alt="David Patel" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-200">David Patel</h3>
          <p className="text-cyan-400 text-lg">Startup Mentor & Strategist</p>
        </motion.div>

      </div> */}

    </div>
  );
};

export default About;
