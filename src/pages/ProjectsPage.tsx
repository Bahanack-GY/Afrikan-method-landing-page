import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <section className="bg-primary text-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
                <p className="text-xl max-w-2xl mx-auto text-gray-300">
                    Découvrez l'ensemble de nos projets réalisés avec passion et expertise.
                </p>
            </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg h-80"
                >
                  <Link to={`/project/${project.id}`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded mb-2">
                        {project.category}
                      </span>
                      <h4 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.title}</h4>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-300 flex items-center gap-2 text-sm">
                          <FaMapMarkerAlt className="text-secondary" /> {project.location.split(',')[0]}
                        </p>
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 font-bold hover:text-secondary text-sm">
                            Voir <FaArrowRight />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
