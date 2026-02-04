import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/services';

const Services = () => {
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

        <div className="space-y-20">
          {servicesData.map((category, catIndex) => (
            <div key={catIndex} id={category.id} className="scroll-mt-28">
              <h4 className="text-2xl font-bold text-gray-800 mb-10 border-l-4 border-secondary pl-4">
                {category.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                {category.items.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }} 
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group relative border border-gray-100 flex flex-col h-full"
                  >
                   <Link to={`/service/${service.slug}`} className="flex flex-col h-full">
                        {/* Top Image */}
                        <div className="h-48 overflow-hidden relative">
                            <img 
                                src={service.image} 
                                alt={service.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>

                        {/* Floating Icon */}
                        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg text-secondary text-3xl z-10 border-4 border-white">
                            {service.icon}
                        </div>

                        {/* Content */}
                        <div className="pt-12 pb-8 px-6 text-center grow flex flex-col justify-between">
                            <div>
                                <h5 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                    {service.title}
                                </h5>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                    {service.description}
                                </p>
                            </div>
                        
                            <div className="flex justify-center">
                                <span className="inline-flex items-center text-sm font-bold text-secondary uppercase tracking-wider hover:text-primary transition-colors gap-2">
                                    Voir le service <FaArrowRight className="text-xs" />
                                </span>
                            </div>
                        </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
