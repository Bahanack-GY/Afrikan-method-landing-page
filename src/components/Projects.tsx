import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

const Projects = () => {
    // Take only the first 4 projects for the home page teaser
    const projects = projectsData.slice(0, 4);
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold text-lg uppercase tracking-wider mb-2">Nos Réalisations</h2>
          <h3 className="text-4xl font-bold text-primary">Découvrez Nos Projets Récents</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
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
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded mb-3">
                  {project.category}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex items-center justify-between">
                   <p className="text-gray-300 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary" /> {project.location}
                  </p>
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 font-bold hover:text-secondary">
                      Voir détails <FaArrowRight />
                  </span>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
                Voir tous les projets
            </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
