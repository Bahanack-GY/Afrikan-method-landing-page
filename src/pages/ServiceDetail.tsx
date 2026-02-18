import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { servicesData } from '../data/services';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  // Flatten the services data to find the matching item
  const service = servicesData
    .flatMap(category => category.items)
    .find(item => item.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">{t('serviceDetail.notFound')}</h2>
            <Link to="/" className="text-secondary hover:underline">{t('serviceDetail.backHome')}</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const serviceTitle = t(service.titleKey);
  const serviceDescription = t(service.descriptionKey);
  const details: string[] = t(service.detailsKey, { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="grow">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={service.image} 
              alt={serviceTitle} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          </div>
          
          <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mx-auto w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-4xl text-white mb-6 border border-white/30">
                {service.icon}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                {serviceTitle}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                {serviceDescription}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link to="/#services" className="inline-flex items-center text-gray-500 hover:text-secondary mb-8 transition-colors">
              <FaArrowLeft className="mr-2" /> {t('serviceDetail.backToServices')}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-primary mb-8 border-l-4 border-secondary pl-4">
                {t('serviceDetail.detailsTitle')}
              </h2>
              
              <div className="bg-accent/30 p-8 rounded-xl border border-gray-100 mb-12">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('serviceDetail.intro', { service: serviceTitle.toLowerCase() })}
                </p>
                <div className="grid gap-4">
                    {Array.isArray(details) && details.map((detail, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-secondary text-xl mr-3 font-bold">•</span>
                            <span className="text-gray-700 font-medium">{detail}</span>
                        </div>
                    ))}
                </div>
              </div>

              <div className="bg-primary text-white p-10 rounded-xl text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">{t('serviceDetail.needService')}</h3>
                <p className="mb-8 text-gray-300">
                    {t('serviceDetail.needServiceText')}
                </p>
                <Link 
                    to="/#contact" 
                    className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition shadow-lg"
                >
                    {t('serviceDetail.contactUs')}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
