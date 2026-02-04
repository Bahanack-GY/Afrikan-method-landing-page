import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-secondary font-bold text-lg uppercase tracking-wider mb-2">À Propos de Nous</h2>
            <h3 className="text-4xl font-bold text-primary mb-6">Expertise et Innovation au Service du Génie Civil</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              AFRIKAN METHOD SARL est un bureau d'études techniques de premier plan, spécialisé dans la conception, le contrôle et le conseil pour les projets d'infrastructures et de bâtiments.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Notre équipe d'ingénieurs et techniciens qualifiés s'engage à fournir des solutions durables et innovantes, respectant les normes les plus strictes de qualité et de sécurité.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-bold text-primary mb-2">Notre Mission</h4>
                    <p className="text-sm text-gray-600">Offrir une expertise technique d'excellence pour bâtir l'Afrique de demain.</p>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-bold text-secondary mb-2">Notre Vision</h4>
                    <p className="text-sm text-gray-600">Être le partenaire de référence pour les projets de construction complexes.</p>
                </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop" 
                    alt="Ingénieurs au travail" 
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-primary/90 to-transparent p-6">
                    <p className="text-white font-bold text-lg">Plus de 10 ans d'expérience</p>
                </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-secondary rounded-xl hidden md:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
