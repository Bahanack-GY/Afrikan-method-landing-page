import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center bg-gray-900 overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-linear-to-r from-primary/90 to-black/70 z-10" />
             {/* Placeholder for a real engineering image background */}
             <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Construction Site" 
                className="w-full h-full object-cover"
             />
        </div>

      <div className="container mx-auto px-6 relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-secondary font-bold text-lg mb-4 uppercase tracking-wider">
              Bureau d'études techniques
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Construisons <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
                L'Avenir Ensemble
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              AFRIKAN METHOD SARL est votre partenaire de confiance pour l'ingénierie, les études techniques, le contrôle et le conseil en infrastructures et bâtiment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-secondary text-white font-bold rounded-lg shadow-lg hover:bg-red-700 transition flex items-center justify-center gap-2"
              >
                Commencer un projet <FaArrowRight />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg hover:bg-white/20 transition text-center"
              >
                Nos Services
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
