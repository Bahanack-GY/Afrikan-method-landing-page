import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    const footerLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/#about' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.contact'), path: '/#contact' },
    ];

    const servicesLinks = [
        { name: t('footer.serviceLinks.etudes'), path: '/services#etudes' },
        { name: t('footer.serviceLinks.controle'), path: '/services#controle-travaux' },
        { name: t('footer.serviceLinks.conseils'), path: '/services#conseils' },
    ];

    return (
        <footer className="bg-gray-900 text-white font-sans border-t border-gray-800 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary via-secondary to-primary"></div>
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                             <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center text-primary font-bold text-xl">
                                    A
                                </div>
                                <span className="text-2xl font-bold tracking-tight text-white">
                                    Afrikan <span className="text-secondary">Method</span>
                                </span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t('footer.brandDescription')}
                        </p>
                        <div className="flex space-x-4">
                            {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-white transition-all duration-300">
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-secondary inline-block pb-2">{t('footer.servicesTitle')}</h4>
                        <ul className="space-y-3">
                            {servicesLinks.map((link, i) => (
                                <li key={i}>
                                    <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 text-sm">
                                        <FaArrowRight className="text-secondary text-xs" /> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-secondary inline-block pb-2">{t('footer.quickLinksTitle')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link, i) => (
                                <li key={i}>
                                    {link.path.startsWith('/#') ? (
                                        <a href={link.path.substring(1)} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 text-sm">
                                            <span className="w-1 h-1 bg-secondary rounded-full"></span> {link.name}
                                        </a>
                                    ) : (
                                        <Link to={link.path} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 text-sm">
                                             <span className="w-1 h-1 bg-secondary rounded-full"></span> {link.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                         <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-secondary inline-block pb-2">{t('footer.contactTitle')}</h4>
                         <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <FaMapMarkerAlt className="text-secondary mt-1 shrink-0" />
                                <span>BP : 2833 Yaoundé,<br />Cameroun</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <FaPhone className="text-secondary shrink-0" />
                                <span>(+237) 242 81 91 88 / 699 52 74 36</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <FaEnvelope className="text-secondary shrink-0" />
                                <span>afrikanmethod@yahoo.fr</span>
                            </li>
                         </ul>
                         <p className="text-gray-500 text-xs mt-4">
                            RC/YAO/2009/B/687
                         </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>{t('footer.copyright', { year: currentYear })}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.legal')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
