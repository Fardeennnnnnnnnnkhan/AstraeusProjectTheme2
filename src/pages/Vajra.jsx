import "./Vajra.css";
import { motion } from "framer-motion";
import { Network, Zap, Shield } from "lucide-react";
import BB from '../assets/Vajra.jpeg'; // Add an appropriate background image

const Vajra = () => {
  const features = [
    {
      icon: Network,
      title: "IXP Optimization",
      description:
        "Dynamic BGP route server configuration and intelligent traffic management for Internet Exchange Points.",
    },
    {
      icon: Zap,
      title: "Low Latency",
      description:
        "Optimized signal processing and routing algorithms for minimal latency in satellite communications.",
    },
    {
      icon: Shield,
      title: "Industry Applications",
      description:
        "Suitable for military intelligence, defense, telecommunications, and various industrial applications.",
    },
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
    <div className="bg-gradient-to-b from-[#0B132B] to-[#1C2541] text-white min-h-screen">
      {/* Header Section with Background Image */}
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
              Vajra
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the cutting-edge technologies with real-time updates for Internet Exchange Points and Satellite Communication Systems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section with Hover Effects */}
      <div className="bg-gradient-to-b from-[#1C2541] to-[#3A506B] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map(({ icon: Icon, title, description }, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center text-center bg-[#162447] border border-cyan-400 rounded-xl p-8 hover:shadow-lg transition-transform hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Icon className="h-12 w-12 text-cyan-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-cyan-200">{title}</h3>
                <p className="text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technical Specifications Section with Enhanced Styling */}
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
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore the advanced technical specifications that power the Vajra system.
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {specifications.map((spec, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#162447] border border-cyan-500 rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
                >
                  <p className="text-gray-300 text-lg">{spec}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Vajra;
