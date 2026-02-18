import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
    const { hash } = useLocation();
    const { t } = useTranslation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="grow">
        {/* Simple Page Header */}
        <div className="bg-primary py-24 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative z-10 container mx-auto px-6"
             >
                 <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('servicesPage.title')}</h1>
                 <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                     {t('servicesPage.subtitle')}
                 </p>
             </motion.div>
        </div>

        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
