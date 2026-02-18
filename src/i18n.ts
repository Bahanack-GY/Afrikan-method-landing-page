import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    fr: {
        translation: {
            // Navbar
            nav: {
                home: "Accueil",
                about: "A propos",
                services: "Services",
                projects: "Nos Projets",
                contact: "Contact",
            },
            // Hero
            hero: {
                subtitle: "Bureau d'études techniques",
                title1: "Construisons",
                title2: "L'Avenir Ensemble",
                description: "AFRIKAN METHOD SARL est votre partenaire de confiance pour l'ingénierie, les études techniques, le contrôle et le conseil en infrastructures et bâtiment.",
                cta1: "Commencer un projet",
                cta2: "Nos Services",
            },
            // About
            about: {
                sectionTitle: "À Propos de Nous",
                heading: "Expertise et Innovation au Service du Génie Civil",
                p1: "AFRIKAN METHOD SARL est un bureau d'études techniques de premier plan, spécialisé dans la conception, le contrôle et le conseil pour les projets d'infrastructures et de bâtiments.",
                p2: "Notre équipe d'ingénieurs et techniciens qualifiés s'engage à fournir des solutions durables et innovantes, respectant les normes les plus strictes de qualité et de sécurité.",
                missionTitle: "Notre Mission",
                missionText: "Offrir une expertise technique d'excellence pour bâtir l'Afrique de demain.",
                visionTitle: "Notre Vision",
                visionText: "Être le partenaire de référence pour les projets de construction complexes.",
                experience: "Plus de 15 ans d'expérience",
                imageAlt: "Ingénieurs au travail",
            },
            // Partners
            partners: {
                title: "Ils nous font confiance",
            },
            // Services UI
            services: {
                sectionTitle: "Nos Expertises",
                heading: "Domaines de Spécialisation",
                viewService: "Voir le service",
                viewAll: "Voir tous nos services",
            },
            // Contact
            contact: {
                sectionTitle: "Contactez-nous",
                heading: "Prêt à démarrer votre projet ?",
                infoTitle: "Nos Coordonnées",
                infoText: "N'hésitez pas à nous contacter pour toute demande d'information ou devis. Notre équipe est à votre écoute pour vous accompagner dans vos projets.",
                phone: "Téléphone",
                email: "Email",
                address: "Adresse",
                formName: "Nom complet",
                formNamePlaceholder: "Votre nom",
                formEmail: "Email",
                formEmailPlaceholder: "votre@email.com",
                formSubject: "Sujet",
                formSubjectPlaceholder: "Objet de votre message",
                formMessage: "Message",
                formMessagePlaceholder: "Votre message...",
                formSubmit: "Envoyer le message",
            },
            // Footer
            footer: {
                brandDescription: "Votre partenaire de confiance en Génie Civil. Nous transformons vos visions en infrastructures durables avec rigueur et expertise.",
                servicesTitle: "Nos Services",
                quickLinksTitle: "Liens Rapides",
                contactTitle: "Nous Contacter",
                copyright: "© {{year}} Afrikan Method. Tous droits réservés.",
                privacy: "Confidentialité",
                legal: "Mentions Légales",
                serviceLinks: {
                    etudes: "Études Techniques",
                    controle: "Contrôle des Travaux",
                    conseils: "Conseils & Expertise",
                },
            },
            // Projects UI
            projects: {
                sectionTitle: "Nos Réalisations",
                heading: "Découvrez Nos Projets Récents",
                viewDetails: "Voir détails",
                viewAll: "Voir tous les projets",
                view: "Voir",
            },
            // Services Page
            servicesPage: {
                title: "Nos Services Complets",
                subtitle: "Découvrez l'ensemble de nos prestations en ingénierie, contrôle, conseils et fournitures.",
            },
            // Service Detail Page
            serviceDetail: {
                notFound: "Service non trouvé",
                backHome: "Retour à l'accueil",
                backToServices: "Retour aux services",
                detailsTitle: "Détails du Service",
                intro: "Chez AFRIKAN METHOD, nous nous engageons à fournir une excellence technique dans {{service}}. Nos experts travaillent avec rigueur pour assurer la réussite de vos projets.",
                needService: "Besoin de ce service ?",
                needServiceText: "Contactez notre équipe d'experts dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.",
                contactUs: "Contactez-nous",
            },
            // Projects Page
            projectsPage: {
                title: "Nos Réalisations",
                subtitle: "Découvrez l'ensemble de nos projets réalisés avec passion et expertise.",
            },
            // Project Detail Page
            projectDetail: {
                notFound: "Projet non trouvé",
                backHome: "Retour à l'accueil",
                backToProjects: "Retour aux projets",
                aboutProject: "À propos du projet",
                exploreProject: "Explorez le projet en immersion",
                startVirtualVisit: "Démarrer la Visite Virtuelle",
                immersiveNote: "* Une expérience immersive à 360°",
                detailsTitle: "Détails du projet",
                client: "Client",
                category: "Catégorie",
                location: "Lieu",
                year: "Année",
            },
            // Data: Services
            data: {
                services: {
                    etudes: {
                        category: "Études",
                        description: "Des études techniques complètes de la conception à la réalisation en passant par la maturation des projets.",
                        items: {
                            vrd: {
                                title: "Etudes des voiries et réseaux divers",
                                description: "Conception et dimensionnement des réseaux d'alimentation, d'assainissement et des voiries urbaines.",
                                details: [
                                    "Dimensionnement des réseaux d'assainissement et pluvial",
                                    "Réseaux d'Adduction d'Eau Potable (AEP)",
                                    "Réseaux électriques et télécoms",
                                    "Aménagement de voiries urbaines et espaces verts"
                                ]
                            },
                            routes: {
                                title: "Etudes des routes et autoroutes",
                                description: "Études de faisabilité et d'exécution pour infrastructures routières et autoroutières.",
                                details: [
                                    "Études de tracés routiers et autoroutiers",
                                    "Dimensionnement des chaussées",
                                    "Études de trafic et sécurité routière",
                                    "Dossiers techniques (APS, APD, DCE)"
                                ]
                            },
                            batiments: {
                                title: "Etudes des bâtiments",
                                description: "Conception architecturale et technique pour tous types de bâtiments.",
                                details: [
                                    "Conception architecturale et plans 2D/3D",
                                    "Calculs de structures (Béton, Métal, Bois)",
                                    "Études des lots techniques (Fluides, Électricité)",
                                    "Réhabilitation et rénovation de bâtiments"
                                ]
                            },
                            ouvragesArt: {
                                title: "Etudes des ouvrages d'art",
                                description: "Conception et calculs pour ponts, viaducs, tunnels et génie civil spécialisé.",
                                details: [
                                    "Conception de ponts et viaducs",
                                    "Ouvrages de soutènement",
                                    "Tunnels et ouvrages enterrés",
                                    "Calculs de stabilité et fondations spéciales"
                                ]
                            },
                            ouvragesConnexes: {
                                title: "Etudes des ouvrages connexes",
                                description: "Études pour aménagements hydrauliques, industriels et équipements divers.",
                                details: [
                                    "Aménagements hydrauliques et drainage",
                                    "Infrastructures industrielles",
                                    "Equipements publics et sportifs",
                                    "Aménagements extérieurs et paysagers"
                                ]
                            },
                        }
                    },
                    controle: {
                        category: "Contrôle des Travaux",
                        description: "Supervision rigoureuse de vos chantiers pour garantir qualité et respect des délais.",
                        items: {
                            supervision: {
                                title: "Supervision de Travaux",
                                description: "Contrôle rigoureux pour travaux routiers, ouvrages d'art et bâtiments (construction et réhabilitation).",
                                details: [
                                    "Contrôle des travaux routiers (Construction - Entretien - Réhabilitation)",
                                    "Contrôle des travaux d'ouvrages d'art",
                                    "Contrôle des travaux de bâtiment",
                                    "Suivi de chantier et réunions de coordination"
                                ]
                            }
                        }
                    },
                    conseils: {
                        category: "Conseils",
                        description: "Expertise et accompagnement stratégique pour la réussite de vos projets immobiliers et BTP.",
                        items: {
                            experts: {
                                title: "Experts Conseils",
                                description: "Assistance pour la passation des marchés, expertise immobilière et maîtrise d'ouvrage.",
                                details: [
                                    "Conseil des Maîtres d'Ouvrages en Passation des Marchés",
                                    "Expertise en Immobilier",
                                    "Expertise en Génie Civil et Urbanisme",
                                    "Assistance à la Maîtrise d'Ouvrage (AMO)",
                                    "Mission d'Ordonnancement, Pilotage et Coordination (OPC)",
                                    "Vérification conformité matériaux et matériels",
                                    "Audit Hygiène et Sécurité sur site"
                                ]
                            }
                        }
                    },
                },
                projects: {
                    p1: { title: "Services Centraux Délégation Régionale et Départementale du Mfoundi du MINMAP", description: "Étude des travaux de construction." },
                    p2: { title: "Complexe Commercial de Meyomessala", description: "Étude des travaux de construction." },
                    p3: { title: "Lycée d'Ombe", description: "Étude des travaux de construction." },
                    p4: { title: "Palais de Justice de Ngoumou", description: "Étude des travaux de construction." },
                    p5: { title: "Laboratoire de Contrôle de Qualité des Produits Agricoles", description: "Étude et contrôle des travaux relatifs à la construction et à l'installation des équipements." },
                    p6: { title: "Hôtel de Ville d'Awae", description: "Travaux de construction." },
                    p7: { title: "Palais de Justice de Baham", description: "Travaux de construction." },
                    p8: { title: "Agence Régionale FEICOM Sud", description: "Contrôle et surveillance des travaux." },
                    p9: { title: "Cité Municipale de Pete-Bandjoun", description: "Contrôle et surveillance des travaux." },
                    p10: { title: "Complexe Moderne des Services Judiciaires du Littoral", description: "Contrôle et surveillance des travaux." },
                    p11: { title: "Délégation Régionale des Domaines (Sud)", description: "Contrôle et surveillance des travaux." },
                    p12: { title: "Délégation Régionale des Domaines (Sud-Ouest)", description: "Contrôle et surveillance des travaux." },
                    p13: { title: "Hôtel de Ville de Soa", description: "Contrôle et surveillance des travaux." },
                    p14: { title: "Services Centraux Ministère des Travaux Publics", description: "Contrôle et surveillance des travaux." },
                    p15: { title: "Hôtel de Ville d'Ebolowa II", description: "Travaux de construction." },
                    p16: { title: "Réhabilitation de 164 Km de Pistes Rurales (Est)", description: "Travaux de réhabilitation de 164 Km de pistes rurales dans les départements de la Kadey, du Haut Nyong et du Lom et Djerem." },
                    p17: { title: "Réhabilitation de 180 Km de Pistes Rurales (Centre)", description: "Travaux de réhabilitation de 180 Km de pistes rurales dans les départements de la Lékié, de la Méfou et Afamba, du Mbam et Inoubou et du Nyong et Kelle." },
                    categories: { etudes: "Études", controle: "Contrôle et Surveillance" },
                },
            },
        }
    },
    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About",
                services: "Services",
                projects: "Our Projects",
                contact: "Contact",
            },
            hero: {
                subtitle: "Technical Engineering Firm",
                title1: "Let's Build",
                title2: "The Future Together",
                description: "AFRIKAN METHOD SARL is your trusted partner for engineering, technical studies, supervision and consulting in infrastructure and building.",
                cta1: "Start a project",
                cta2: "Our Services",
            },
            about: {
                sectionTitle: "About Us",
                heading: "Expertise and Innovation in Civil Engineering",
                p1: "AFRIKAN METHOD SARL is a leading technical engineering firm, specialized in design, supervision and consulting for infrastructure and building projects.",
                p2: "Our team of qualified engineers and technicians is committed to providing sustainable and innovative solutions, meeting the highest standards of quality and safety.",
                missionTitle: "Our Mission",
                missionText: "To provide world-class technical expertise to build the Africa of tomorrow.",
                visionTitle: "Our Vision",
                visionText: "To be the go-to partner for complex construction projects.",
                experience: "Over 15 years of experience",
                imageAlt: "Engineers at work",
            },
            partners: {
                title: "They Trust Us",
            },
            services: {
                sectionTitle: "Our Expertise",
                heading: "Areas of Specialization",
                viewService: "View service",
                viewAll: "View all our services",
            },
            contact: {
                sectionTitle: "Contact Us",
                heading: "Ready to start your project?",
                infoTitle: "Our Contact Details",
                infoText: "Do not hesitate to contact us for any information or quote request. Our team is here to assist you with your projects.",
                phone: "Phone",
                email: "Email",
                address: "Address",
                formName: "Full name",
                formNamePlaceholder: "Your name",
                formEmail: "Email",
                formEmailPlaceholder: "your@email.com",
                formSubject: "Subject",
                formSubjectPlaceholder: "Subject of your message",
                formMessage: "Message",
                formMessagePlaceholder: "Your message...",
                formSubmit: "Send message",
            },
            footer: {
                brandDescription: "Your trusted partner in Civil Engineering. We transform your visions into sustainable infrastructure with rigor and expertise.",
                servicesTitle: "Our Services",
                quickLinksTitle: "Quick Links",
                contactTitle: "Contact Us",
                copyright: "© {{year}} Afrikan Method. All rights reserved.",
                privacy: "Privacy",
                legal: "Legal Notice",
                serviceLinks: {
                    etudes: "Technical Studies",
                    controle: "Works Supervision",
                    conseils: "Consulting & Expertise",
                },
            },
            projects: {
                sectionTitle: "Our Achievements",
                heading: "Discover Our Recent Projects",
                viewDetails: "View details",
                viewAll: "View all projects",
                view: "View",
            },
            servicesPage: {
                title: "Our Complete Services",
                subtitle: "Discover all our engineering, supervision, consulting and supply services.",
            },
            serviceDetail: {
                notFound: "Service not found",
                backHome: "Back to home",
                backToServices: "Back to services",
                detailsTitle: "Service Details",
                intro: "At AFRIKAN METHOD, we are committed to providing technical excellence in {{service}}. Our experts work with rigor to ensure the success of your projects.",
                needService: "Need this service?",
                needServiceText: "Contact our team of experts today to discuss your project and get a personalized quote.",
                contactUs: "Contact us",
            },
            projectsPage: {
                title: "Our Achievements",
                subtitle: "Discover all our projects completed with passion and expertise.",
            },
            projectDetail: {
                notFound: "Project not found",
                backHome: "Back to home",
                backToProjects: "Back to projects",
                aboutProject: "About the project",
                exploreProject: "Explore the project immersively",
                startVirtualVisit: "Start Virtual Visit",
                immersiveNote: "* A 360° immersive experience",
                detailsTitle: "Project Details",
                client: "Client",
                category: "Category",
                location: "Location",
                year: "Year",
            },
            data: {
                services: {
                    etudes: {
                        category: "Studies",
                        description: "Comprehensive technical studies from design to completion, including project maturation.",
                        items: {
                            vrd: {
                                title: "Roads and Utilities Studies",
                                description: "Design and sizing of supply networks, sanitation and urban roads.",
                                details: [
                                    "Sanitation and stormwater network sizing",
                                    "Drinking Water Supply Networks (DWS)",
                                    "Electrical and telecom networks",
                                    "Urban road and green space development"
                                ]
                            },
                            routes: {
                                title: "Roads and Highways Studies",
                                description: "Feasibility and execution studies for road and highway infrastructure.",
                                details: [
                                    "Road and highway route studies",
                                    "Pavement design",
                                    "Traffic and road safety studies",
                                    "Technical files (PFS, DFS, BDD)"
                                ]
                            },
                            batiments: {
                                title: "Building Studies",
                                description: "Architectural and technical design for all types of buildings.",
                                details: [
                                    "Architectural design and 2D/3D plans",
                                    "Structural calculations (Concrete, Steel, Wood)",
                                    "Technical studies (HVAC, Electrical)",
                                    "Building rehabilitation and renovation"
                                ]
                            },
                            ouvragesArt: {
                                title: "Civil Engineering Structures",
                                description: "Design and calculations for bridges, viaducts, tunnels and specialized civil engineering.",
                                details: [
                                    "Bridge and viaduct design",
                                    "Retaining structures",
                                    "Tunnels and underground structures",
                                    "Stability calculations and special foundations"
                                ]
                            },
                            ouvragesConnexes: {
                                title: "Related Infrastructure Studies",
                                description: "Studies for hydraulic, industrial developments and various equipment.",
                                details: [
                                    "Hydraulic developments and drainage",
                                    "Industrial infrastructure",
                                    "Public and sports facilities",
                                    "Outdoor and landscape development"
                                ]
                            },
                        }
                    },
                    controle: {
                        category: "Works Supervision",
                        description: "Rigorous supervision of your construction sites to ensure quality and deadline compliance.",
                        items: {
                            supervision: {
                                title: "Works Supervision",
                                description: "Rigorous control for road works, civil engineering structures and buildings (construction and rehabilitation).",
                                details: [
                                    "Road works control (Construction - Maintenance - Rehabilitation)",
                                    "Civil engineering structures control",
                                    "Building works control",
                                    "Site monitoring and coordination meetings"
                                ]
                            }
                        }
                    },
                    conseils: {
                        category: "Consulting",
                        description: "Strategic expertise and support for the success of your real estate and construction projects.",
                        items: {
                            experts: {
                                title: "Expert Consulting",
                                description: "Assistance for procurement, real estate expertise and project management.",
                                details: [
                                    "Procurement advisory for project owners",
                                    "Real estate expertise",
                                    "Civil engineering and urban planning expertise",
                                    "Project management assistance (PMA)",
                                    "Scheduling, management and coordination (SMC)",
                                    "Materials and equipment compliance verification",
                                    "Health and safety audit on site"
                                ]
                            }
                        }
                    },
                },
                projects: {
                    p1: { title: "MINMAP Regional & Departmental Central Services - Mfoundi", description: "Construction works study." },
                    p2: { title: "Meyomessala Commercial Complex", description: "Construction works study." },
                    p3: { title: "Ombe High School", description: "Construction works study." },
                    p4: { title: "Ngoumou Court House", description: "Construction works study." },
                    p5: { title: "Agricultural Product Quality Control Laboratory", description: "Study and supervision of construction and equipment installation works." },
                    p6: { title: "Awae City Hall", description: "Construction works." },
                    p7: { title: "Baham Court House", description: "Construction works." },
                    p8: { title: "FEICOM South Regional Agency", description: "Works supervision and monitoring." },
                    p9: { title: "Pete-Bandjoun Municipal Complex", description: "Works supervision and monitoring." },
                    p10: { title: "Modern Judicial Services Complex - Littoral", description: "Works supervision and monitoring." },
                    p11: { title: "Regional Land Affairs Delegation (South)", description: "Works supervision and monitoring." },
                    p12: { title: "Regional Land Affairs Delegation (South-West)", description: "Works supervision and monitoring." },
                    p13: { title: "Soa City Hall", description: "Works supervision and monitoring." },
                    p14: { title: "Ministry of Public Works Central Services", description: "Works supervision and monitoring." },
                    p15: { title: "Ebolowa II City Hall", description: "Construction works." },
                    p16: { title: "Rehabilitation of 164 Km of Rural Tracks (East)", description: "Rehabilitation of 164 km of rural tracks in Kadey, Haut Nyong and Lom et Djerem departments." },
                    p17: { title: "Rehabilitation of 180 Km of Rural Tracks (Centre)", description: "Rehabilitation of 180 km of rural tracks in Lékié, Méfou and Afamba, Mbam and Inoubou, and Nyong and Kelle departments." },
                    categories: { etudes: "Studies", controle: "Supervision & Monitoring" },
                },
            },
        }
    },
    es: {
        translation: {
            nav: {
                home: "Inicio",
                about: "Acerca de",
                services: "Servicios",
                projects: "Nuestros Proyectos",
                contact: "Contacto",
            },
            hero: {
                subtitle: "Oficina de estudios técnicos",
                title1: "Construyamos",
                title2: "El Futuro Juntos",
                description: "AFRIKAN METHOD SARL es su socio de confianza para ingeniería, estudios técnicos, supervisión y consultoría en infraestructuras y construcción.",
                cta1: "Iniciar un proyecto",
                cta2: "Nuestros Servicios",
            },
            about: {
                sectionTitle: "Sobre Nosotros",
                heading: "Experiencia e Innovación al Servicio de la Ingeniería Civil",
                p1: "AFRIKAN METHOD SARL es una oficina de estudios técnicos líder, especializada en diseño, supervisión y consultoría para proyectos de infraestructura y edificación.",
                p2: "Nuestro equipo de ingenieros y técnicos cualificados se compromete a proporcionar soluciones sostenibles e innovadoras, cumpliendo con los más altos estándares de calidad y seguridad.",
                missionTitle: "Nuestra Misión",
                missionText: "Ofrecer experiencia técnica de excelencia para construir el África del mañana.",
                visionTitle: "Nuestra Visión",
                visionText: "Ser el socio de referencia para proyectos de construcción complejos.",
                experience: "Más de 15 años de experiencia",
                imageAlt: "Ingenieros trabajando",
            },
            partners: {
                title: "Confían en Nosotros",
            },
            services: {
                sectionTitle: "Nuestra Experiencia",
                heading: "Áreas de Especialización",
                viewService: "Ver servicio",
                viewAll: "Ver todos nuestros servicios",
            },
            contact: {
                sectionTitle: "Contáctenos",
                heading: "¿Listo para comenzar su proyecto?",
                infoTitle: "Nuestras Coordenadas",
                infoText: "No dude en contactarnos para cualquier solicitud de información o presupuesto. Nuestro equipo está a su disposición para acompañarle en sus proyectos.",
                phone: "Teléfono",
                email: "Correo electrónico",
                address: "Dirección",
                formName: "Nombre completo",
                formNamePlaceholder: "Su nombre",
                formEmail: "Correo electrónico",
                formEmailPlaceholder: "su@email.com",
                formSubject: "Asunto",
                formSubjectPlaceholder: "Asunto de su mensaje",
                formMessage: "Mensaje",
                formMessagePlaceholder: "Su mensaje...",
                formSubmit: "Enviar mensaje",
            },
            footer: {
                brandDescription: "Su socio de confianza en Ingeniería Civil. Transformamos sus visiones en infraestructuras duraderas con rigor y experiencia.",
                servicesTitle: "Nuestros Servicios",
                quickLinksTitle: "Enlaces Rápidos",
                contactTitle: "Contactarnos",
                copyright: "© {{year}} Afrikan Method. Todos los derechos reservados.",
                privacy: "Privacidad",
                legal: "Aviso Legal",
                serviceLinks: {
                    etudes: "Estudios Técnicos",
                    controle: "Supervisión de Obras",
                    conseils: "Consultoría y Experiencia",
                },
            },
            projects: {
                sectionTitle: "Nuestras Realizaciones",
                heading: "Descubra Nuestros Proyectos Recientes",
                viewDetails: "Ver detalles",
                viewAll: "Ver todos los proyectos",
                view: "Ver",
            },
            servicesPage: {
                title: "Nuestros Servicios Completos",
                subtitle: "Descubra todas nuestras prestaciones en ingeniería, supervisión, consultoría y suministros.",
            },
            serviceDetail: {
                notFound: "Servicio no encontrado",
                backHome: "Volver al inicio",
                backToServices: "Volver a servicios",
                detailsTitle: "Detalles del Servicio",
                intro: "En AFRIKAN METHOD, nos comprometemos a proporcionar excelencia técnica en {{service}}. Nuestros expertos trabajan con rigor para asegurar el éxito de sus proyectos.",
                needService: "¿Necesita este servicio?",
                needServiceText: "Contacte a nuestro equipo de expertos hoy para discutir su proyecto y obtener un presupuesto personalizado.",
                contactUs: "Contáctenos",
            },
            projectsPage: {
                title: "Nuestras Realizaciones",
                subtitle: "Descubra todos nuestros proyectos realizados con pasión y experiencia.",
            },
            projectDetail: {
                notFound: "Proyecto no encontrado",
                backHome: "Volver al inicio",
                backToProjects: "Volver a proyectos",
                aboutProject: "Sobre el proyecto",
                exploreProject: "Explore el proyecto en inmersión",
                startVirtualVisit: "Iniciar Visita Virtual",
                immersiveNote: "* Una experiencia inmersiva en 360°",
                detailsTitle: "Detalles del proyecto",
                client: "Cliente",
                category: "Categoría",
                location: "Ubicación",
                year: "Año",
            },
            data: {
                services: {
                    etudes: {
                        category: "Estudios",
                        description: "Estudios técnicos completos desde el diseño hasta la realización, pasando por la maduración de proyectos.",
                        items: {
                            vrd: {
                                title: "Estudios de vías y redes diversas",
                                description: "Diseño y dimensionamiento de redes de abastecimiento, saneamiento y vías urbanas.",
                                details: ["Dimensionamiento de redes de saneamiento y pluviales", "Redes de Abastecimiento de Agua Potable", "Redes eléctricas y telecomunicaciones", "Urbanización y espacios verdes"]
                            },
                            routes: {
                                title: "Estudios de carreteras y autopistas",
                                description: "Estudios de viabilidad y ejecución para infraestructuras viales y de autopistas.",
                                details: ["Estudios de trazados viales", "Dimensionamiento de pavimentos", "Estudios de tráfico y seguridad vial", "Expedientes técnicos"]
                            },
                            batiments: {
                                title: "Estudios de edificios",
                                description: "Diseño arquitectónico y técnico para todo tipo de edificios.",
                                details: ["Diseño arquitectónico y planos 2D/3D", "Cálculos estructurales (Hormigón, Acero, Madera)", "Estudios técnicos (Climatización, Electricidad)", "Rehabilitación y renovación de edificios"]
                            },
                            ouvragesArt: {
                                title: "Estudios de obras de ingeniería",
                                description: "Diseño y cálculos para puentes, viaductos, túneles e ingeniería civil especializada.",
                                details: ["Diseño de puentes y viaductos", "Estructuras de contención", "Túneles y obras subterráneas", "Cálculos de estabilidad y cimentaciones especiales"]
                            },
                            ouvragesConnexes: {
                                title: "Estudios de infraestructuras complementarias",
                                description: "Estudios para desarrollos hidráulicos, industriales y equipamientos diversos.",
                                details: ["Desarrollos hidráulicos y drenaje", "Infraestructuras industriales", "Equipamientos públicos y deportivos", "Desarrollos exteriores y paisajísticos"]
                            },
                        }
                    },
                    controle: {
                        category: "Supervisión de Obras",
                        description: "Supervisión rigurosa de sus obras para garantizar calidad y cumplimiento de plazos.",
                        items: {
                            supervision: {
                                title: "Supervisión de Obras",
                                description: "Control riguroso para obras viales, de ingeniería civil y edificios.",
                                details: ["Control de obras viales (Construcción - Mantenimiento - Rehabilitación)", "Control de obras de ingeniería civil", "Control de obras de edificación", "Seguimiento de obra y reuniones de coordinación"]
                            }
                        }
                    },
                    conseils: {
                        category: "Consultoría",
                        description: "Experiencia y acompañamiento estratégico para el éxito de sus proyectos inmobiliarios y de construcción.",
                        items: {
                            experts: {
                                title: "Consultoría Experta",
                                description: "Asistencia en contratación pública, experiencia inmobiliaria y gestión de proyectos.",
                                details: ["Asesoramiento en contratación pública", "Experiencia inmobiliaria", "Experiencia en ingeniería civil y urbanismo", "Asistencia a la dirección de obra", "Planificación, pilotaje y coordinación", "Verificación de conformidad de materiales", "Auditoría de higiene y seguridad"]
                            }
                        }
                    },
                },
                projects: {
                    p1: { title: "Servicios Centrales Delegación Regional MINMAP - Mfoundi", description: "Estudio de obras de construcción." },
                    p2: { title: "Complejo Comercial de Meyomessala", description: "Estudio de obras de construcción." },
                    p3: { title: "Liceo de Ombe", description: "Estudio de obras de construcción." },
                    p4: { title: "Palacio de Justicia de Ngoumou", description: "Estudio de obras de construcción." },
                    p5: { title: "Laboratorio de Control de Calidad de Productos Agrícolas", description: "Estudio y supervisión de obras de construcción e instalación de equipos." },
                    p6: { title: "Ayuntamiento de Awae", description: "Obras de construcción." },
                    p7: { title: "Palacio de Justicia de Baham", description: "Obras de construcción." },
                    p8: { title: "Agencia Regional FEICOM Sur", description: "Supervisión y control de obras." },
                    p9: { title: "Ciudad Municipal de Pete-Bandjoun", description: "Supervisión y control de obras." },
                    p10: { title: "Complejo Moderno de Servicios Judiciales del Litoral", description: "Supervisión y control de obras." },
                    p11: { title: "Delegación Regional de Dominios (Sur)", description: "Supervisión y control de obras." },
                    p12: { title: "Delegación Regional de Dominios (Suroeste)", description: "Supervisión y control de obras." },
                    p13: { title: "Ayuntamiento de Soa", description: "Supervisión y control de obras." },
                    p14: { title: "Servicios Centrales del Ministerio de Obras Públicas", description: "Supervisión y control de obras." },
                    p15: { title: "Ayuntamiento de Ebolowa II", description: "Obras de construcción." },
                    p16: { title: "Rehabilitación de 164 Km de Pistas Rurales (Este)", description: "Rehabilitación de 164 km de pistas rurales en los departamentos de Kadey, Haut Nyong y Lom et Djerem." },
                    p17: { title: "Rehabilitación de 180 Km de Pistas Rurales (Centro)", description: "Rehabilitación de 180 km de pistas rurales en los departamentos de Lékié, Méfou y Afamba, Mbam e Inoubou y Nyong y Kelle." },
                    categories: { etudes: "Estudios", controle: "Supervisión y Control" },
                },
            },
        }
    },
    zh: {
        translation: {
            nav: {
                home: "首页",
                about: "关于我们",
                services: "服务",
                projects: "我们的项目",
                contact: "联系我们",
            },
            hero: {
                subtitle: "技术工程事务所",
                title1: "共同",
                title2: "建设未来",
                description: "AFRIKAN METHOD SARL 是您在工程、技术研究、监督和基础设施及建筑咨询方面的可信赖合作伙伴。",
                cta1: "开始一个项目",
                cta2: "我们的服务",
            },
            about: {
                sectionTitle: "关于我们",
                heading: "土木工程领域的专业知识与创新",
                p1: "AFRIKAN METHOD SARL 是一家领先的技术工程事务所，专注于基础设施和建筑项目的设计、监督和咨询。",
                p2: "我们的合格工程师和技术人员团队致力于提供可持续和创新的解决方案，符合最高的质量和安全标准。",
                missionTitle: "我们的使命",
                missionText: "提供世界一流的技术专长，建设明天的非洲。",
                visionTitle: "我们的愿景",
                visionText: "成为复杂建设项目的首选合作伙伴。",
                experience: "超过15年的经验",
                imageAlt: "工程师在工作",
            },
            partners: {
                title: "他们信任我们",
            },
            services: {
                sectionTitle: "我们的专业领域",
                heading: "专业化领域",
                viewService: "查看服务",
                viewAll: "查看所有服务",
            },
            contact: {
                sectionTitle: "联系我们",
                heading: "准备好开始您的项目了吗？",
                infoTitle: "联系方式",
                infoText: "如有任何信息或报价需求，请随时联系我们。我们的团队将竭诚为您服务。",
                phone: "电话",
                email: "电子邮件",
                address: "地址",
                formName: "全名",
                formNamePlaceholder: "您的姓名",
                formEmail: "电子邮件",
                formEmailPlaceholder: "your@email.com",
                formSubject: "主题",
                formSubjectPlaceholder: "消息主题",
                formMessage: "消息",
                formMessagePlaceholder: "您的消息...",
                formSubmit: "发送消息",
            },
            footer: {
                brandDescription: "您在土木工程领域的可信赖合作伙伴。我们以严谨和专业知识将您的愿景转化为可持续的基础设施。",
                servicesTitle: "我们的服务",
                quickLinksTitle: "快速链接",
                contactTitle: "联系我们",
                copyright: "© {{year}} Afrikan Method. 版权所有。",
                privacy: "隐私政策",
                legal: "法律声明",
                serviceLinks: {
                    etudes: "技术研究",
                    controle: "工程监督",
                    conseils: "咨询与专业服务",
                },
            },
            projects: {
                sectionTitle: "我们的成就",
                heading: "发现我们的近期项目",
                viewDetails: "查看详情",
                viewAll: "查看所有项目",
                view: "查看",
            },
            servicesPage: {
                title: "我们的完整服务",
                subtitle: "发现我们在工程、监督、咨询和供应方面的所有服务。",
            },
            serviceDetail: {
                notFound: "未找到服务",
                backHome: "返回首页",
                backToServices: "返回服务",
                detailsTitle: "服务详情",
                intro: "在 AFRIKAN METHOD，我们致力于在{{service}}方面提供卓越的技术。我们的专家以严谨的态度确保您项目的成功。",
                needService: "需要此服务？",
                needServiceText: "今天就联系我们的专家团队，讨论您的项目并获取个性化报价。",
                contactUs: "联系我们",
            },
            projectsPage: {
                title: "我们的成就",
                subtitle: "发现我们以热情和专业完成的所有项目。",
            },
            projectDetail: {
                notFound: "未找到项目",
                backHome: "返回首页",
                backToProjects: "返回项目",
                aboutProject: "关于项目",
                exploreProject: "沉浸式探索项目",
                startVirtualVisit: "开始虚拟参观",
                immersiveNote: "* 360°沉浸式体验",
                detailsTitle: "项目详情",
                client: "客户",
                category: "类别",
                location: "位置",
                year: "年份",
            },
            data: {
                services: {
                    etudes: {
                        category: "研究",
                        description: "从设计到实施的全面技术研究，包括项目成熟阶段。",
                        items: {
                            vrd: {
                                title: "道路和各类管网研究",
                                description: "供水网络、排水和城市道路的设计与规模确定。",
                                details: ["排水和雨水管网规模确定", "饮用水供应网络", "电力和电信网络", "城市道路和绿地建设"]
                            },
                            routes: {
                                title: "公路和高速公路研究",
                                description: "公路和高速公路基础设施的可行性和执行研究。",
                                details: ["公路和高速公路路线研究", "路面设计", "交通和道路安全研究", "技术文件"]
                            },
                            batiments: {
                                title: "建筑研究",
                                description: "各类建筑的建筑和技术设计。",
                                details: ["建筑设计和2D/3D图纸", "结构计算（混凝土、钢铁、木材）", "技术研究（暖通空调、电气）", "建筑修复和翻新"]
                            },
                            ouvragesArt: {
                                title: "土木工程结构研究",
                                description: "桥梁、高架桥、隧道和专业土木工程的设计与计算。",
                                details: ["桥梁和高架桥设计", "挡土结构", "隧道和地下结构", "稳定性计算和特殊基础"]
                            },
                            ouvragesConnexes: {
                                title: "相关基础设施研究",
                                description: "水利、工业开发和各类设备的研究。",
                                details: ["水利开发和排水", "工业基础设施", "公共和体育设施", "室外和景观开发"]
                            },
                        }
                    },
                    controle: {
                        category: "工程监督",
                        description: "严格监督您的施工现场，确保质量和进度。",
                        items: {
                            supervision: {
                                title: "工程监督",
                                description: "对道路工程、土木工程结构和建筑进行严格控制。",
                                details: ["道路工程控制（建设 - 维护 - 修复）", "土木工程结构控制", "建筑工程控制", "工地监控和协调会议"]
                            }
                        }
                    },
                    conseils: {
                        category: "咨询",
                        description: "为您的房地产和建设项目的成功提供战略性专业知识和支持。",
                        items: {
                            experts: {
                                title: "专家咨询",
                                description: "采购协助、房地产专业知识和项目管理。",
                                details: ["采购咨询", "房地产专业知识", "土木工程和城市规划专业知识", "项目管理协助", "计划、管理和协调", "材料和设备合规验证", "现场卫生与安全审计"]
                            }
                        }
                    },
                },
                projects: {
                    p1: { title: "MINMAP芒迪区域和部门中央服务", description: "建设工程研究。" },
                    p2: { title: "梅约梅萨拉商业综合体", description: "建设工程研究。" },
                    p3: { title: "翁贝高中", description: "建设工程研究。" },
                    p4: { title: "恩古穆法院", description: "建设工程研究。" },
                    p5: { title: "农产品质量控制实验室", description: "建设和设备安装工程的研究与监督。" },
                    p6: { title: "阿韦市政厅", description: "建设工程。" },
                    p7: { title: "巴哈姆法院", description: "建设工程。" },
                    p8: { title: "FEICOM南部区域机构", description: "工程监督与监控。" },
                    p9: { title: "佩特-班朱恩市政综合体", description: "工程监督与监控。" },
                    p10: { title: "沿海现代司法服务综合体", description: "工程监督与监控。" },
                    p11: { title: "南部区域土地事务代表处", description: "工程监督与监控。" },
                    p12: { title: "西南区域土地事务代表处", description: "工程监督与监控。" },
                    p13: { title: "索阿市政厅", description: "工程监督与监控。" },
                    p14: { title: "公共工程部中央服务", description: "工程监督与监控。" },
                    p15: { title: "埃博洛瓦二市政厅", description: "建设工程。" },
                    p16: { title: "东部164公里乡村道路修复", description: "卡德伊、上尼永和洛姆-杰雷姆省164公里乡村道路修复。" },
                    p17: { title: "中部180公里乡村道路修复", description: "莱基耶、美富-阿法姆巴、姆巴姆-伊努布和尼永-凯勒省180公里乡村道路修复。" },
                    categories: { etudes: "研究", controle: "监督与监控" },
                },
            },
        }
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'fr',
        lng: 'fr',
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['localStorage', 'navigator'],
            caches: ['localStorage'],
        },
    });

export default i18n;
