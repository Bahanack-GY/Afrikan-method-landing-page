import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-bold text-lg uppercase tracking-wider mb-2">Contactez-nous</h2>
          <h3 className="text-4xl font-bold text-white">Prêt à démarrer votre projet ?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-6">Nos Coordonnées</h4>
            <p className="text-gray-300 mb-8 leading-relaxed">
              N'hésitez pas à nous contacter pour toute demande d'information ou devis. Notre équipe est à votre écoute pour vous accompagner dans vos projets.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-secondary">
                  <FaPhone />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Téléphone</h5>
                  <p className="text-gray-300">(+237) 242 81 91 88</p>
                  <p className="text-gray-300">(+237) 699 52 74 36</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-secondary">
                  <FaEnvelope />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Email</h5>
                  <p className="text-gray-300">afrikanmethod@yahoo.fr</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-full text-secondary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Adresse</h5>
                  <p className="text-gray-300">BP : 2833 Yaoundé</p>
                  <p className="text-gray-300 text-sm">RC/YAO/2009/B/687</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="bg-white p-8 rounded-xl text-gray-800"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="votre@email.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Objet de votre message" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition" placeholder="Votre message..."></textarea>
              </div>
              <button type="button" className="w-full py-3 bg-secondary text-white font-bold rounded-lg hover:bg-red-700 transition shadow-lg">
                Envoyer le message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
