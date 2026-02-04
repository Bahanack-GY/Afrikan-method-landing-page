import { motion } from 'framer-motion';
import { FaBuilding, FaIndustry, FaLandmark, FaLeaf, FaHardHat, FaCity } from 'react-icons/fa';

const partners = [
  { name: "EcoBuild SA", icon: <FaLeaf /> },
  { name: "UrbanStruct", icon: <FaCity /> },
  { name: "AfriRoads", icon: <FaRoad /> }, // FaRoad imported below if needed, else using generic
  { name: "MegaWorks", icon: <FaIndustry /> },
  { name: "GovInfra", icon: <FaLandmark /> },
  { name: "BuildTech", icon: <FaHardHat /> },
  { name: "CivilEng Group", icon: <FaBuilding /> },
];

// Duplicate the list to ensure smooth infinite scroll
const marqueeVariants = {
  animate: {
    x: [0, -1035], // Adjust based on width of items
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop" as const,
        duration: 20,
        ease: "linear" as const,
      },
    },
  },
};

const LogoMarquee = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <h3 className="text-2xl font-bold text-gray-800 uppercase tracking-wider">
            Ils nous font confiance
        </h3>
        <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden mask-gradient-x">
         {/* Gradient Masks for fading effect at edges - creating manually with CSS or inline styles if mask-image isn't set up, 
             but simple overflow-hidden is often enough. Adding gradient overlays on sides. */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10"></div>

        <div className="flex overflow-hidden">
            <motion.div
                className="flex gap-16 min-w-max px-8"
                variants={marqueeVariants}
                animate="animate"
            >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                    <div key={index} className="flex flex-col items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                        <div className="text-6xl text-primary mb-2">
                            {partner.icon}
                        </div>
                        <span className="font-bold text-gray-700">{partner.name}</span>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

// Need to import FaRoad separately or add to top import if missing
import { FaRoad } from 'react-icons/fa';

export default LogoMarquee;
