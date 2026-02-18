import { motion } from 'framer-motion';

import BubanNguDesco from '../assets/img/partenaires/BUBAN NGU DESCO.png';
import Eccam from '../assets/img/partenaires/ECCAM.png';
import EgisEngineering from '../assets/img/partenaires/EGIS ENGINEERING.png';
import EmergingEngineering from '../assets/img/partenaires/EMERGING ENGINEERING.png';
import GeneralEngineering from '../assets/img/partenaires/GENERAL ENGINEERING.png';
import Integc from '../assets/img/partenaires/INTEGC.png';
import IntegraBetSarl from '../assets/img/partenaires/INTEGRA BET SARL.png';
import SolSolution from '../assets/img/partenaires/SOL SOLUTION.png';

const partners = [
  { name: "BUBAN NGU DESCO", logo: BubanNguDesco },
  { name: "ECCAM", logo: Eccam },
  { name: "EGIS ENGINEERING", logo: EgisEngineering },
  { name: "EMERGING ENGINEERING", logo: EmergingEngineering },
  { name: "GENERAL ENGINEERING", logo: GeneralEngineering },
  { name: "INTEGC", logo: Integc },
  { name: "INTEGRA BET SARL", logo: IntegraBetSarl },
  { name: "SOL SOLUTION", logo: SolSolution },
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
         {/* Gradient Masks for fading effect at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-linear-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-linear-to-l from-white to-transparent z-10"></div>

        <div className="flex overflow-hidden">
            <motion.div
                className="flex gap-16 min-w-max px-8 items-center"
                variants={marqueeVariants}
                animate="animate"
            >
                {[...partners, ...partners, ...partners].map((partner, index) => (
                    <div key={index} className="flex flex-col items-center justify-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 cursor-pointer">
                        <div className="h-20 w-auto mb-2 flex items-center justify-center">
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="h-full w-auto object-contain max-w-[150px]"
                            />
                        </div>
                        {/* Use sr-only if you want to hide text but keep it accessible, or remove if logos are enough */}
                        {/* <span className="font-bold text-gray-700">{partner.name}</span> */}
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
