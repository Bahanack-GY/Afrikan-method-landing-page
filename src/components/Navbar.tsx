import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/#home' },
    { name: 'A propos', href: '/#about' },
    { name: 'Services', href: '/services' },
    { name: 'Nos Projets', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <span className={scrolled ? 'text-primary' : 'text-white'}>AFRIKAN</span>
            <span className="text-secondary">METHOD</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-secondary ${
                scrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`text-2xl ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-xl overflow-hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 hover:text-secondary font-medium block"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
