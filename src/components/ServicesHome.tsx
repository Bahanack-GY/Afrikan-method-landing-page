import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const ServicesHome = () => {
  return (
    <section id="services" className="py-20 bg-accent/50">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-secondary font-bold text-lg uppercase tracking-wider mb-2">Nos Expertises</h2>
          <h3 className="text-4xl font-bold text-primary">Domaines de Spécialisation</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesData.map((category, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                >
                    <Link to={`/services#${category.id}`} className="flex flex-col h-full">
                     <div className="h-48 overflow-hidden relative">
                        <img 
                            src={category.image} 
                            alt={category.category} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                     </div>
                     
                     <div className="relative pt-12 pb-8 px-6 text-center grow flex flex-col justify-between">
                         <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary text-3xl border-4 border-white">
                             {category.icon}
                         </div>
                         
                         <div>
                             <h4 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                 {category.category}
                             </h4>
                             <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                 {category.description}
                             </p>
                         </div>
                     </div>
                    </Link>
                </motion.div>
            ))}
        </div>

        <div className="text-center">
            <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-3 bg-secondary text-white font-bold rounded-lg hover:bg-red-700 transition shadow-lg gap-2"
            >
                Voir tous nos services <FaArrowRight />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
