import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsData } from '../data/projects';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaTag, FaArrowLeft, FaVrCardboard } from 'react-icons/fa';
import { useEffect } from 'react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="grow flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-primary mb-4">Projet non trouvé</h2>
                <Link to="/" className="text-secondary hover:underline">Retour à l'accueil</Link>
            </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-bold mb-4">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                    <div className="flex flex-wrap justify-center gap-6 text-gray-300">
                        <span className="flex items-center gap-2"><FaMapMarkerAlt className="text-secondary" /> {project.location}</span>
                        <span className="flex items-center gap-2"><FaCalendarAlt className="text-secondary" /> {project.date}</span>
                    </div>
                </motion.div>
            </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-6 py-16">
            <Link to="/#projects" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
                <FaArrowLeft className="mr-2" /> Retour aux projets
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left: Description and Gallery Placeholder */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-primary mb-6">À propos du projet</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {project.description}
                        </p>
                    </motion.div>

                    {/* Virtual Visit Button - Prominent */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         viewport={{ once: true }}
                         className="p-8 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 text-center"
                    >
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Explorez le projet en immersion</h3>
                        <a 
                            href={project.virtualVisitUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-red-700 transition shadow-lg gap-3 transform hover:scale-105"
                        >
                            <FaVrCardboard className="text-2xl" />
                            Démarrer la Visite Virtuelle
                        </a>
                        <p className="text-sm text-gray-500 mt-4">
                            * Une expérience immersive à 360°
                        </p>
                    </motion.div>
                </div>

                {/* Right: Project Details Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold text-primary mb-6 border-b pb-4">Détails du projet</h3>
                        <ul className="space-y-6">
                            <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><FaUser className="text-secondary" /> Client</span>
                                <span className="font-semibold text-gray-800">{project.client}</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><FaTag className="text-secondary" /> Catégorie</span>
                                <span className="font-semibold text-gray-800">{project.category}</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><FaMapMarkerAlt className="text-secondary" /> Lieu</span>
                                <span className="font-semibold text-gray-800">{project.location}</span>
                            </li>
                             <li className="flex justify-between items-center">
                                <span className="text-gray-500 flex items-center gap-2"><FaCalendarAlt className="text-secondary" /> Année</span>
                                <span className="font-semibold text-gray-800">{project.date}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
