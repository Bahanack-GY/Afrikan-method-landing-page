import { FaBuilding, FaTint, FaTrashAlt, FaMapMarkedAlt, FaRoad, FaDraftingCompass, FaClipboardCheck, FaHandshake, FaDesktop } from 'react-icons/fa';

export const servicesData = [
  {
    category: "Études",
    id: "etudes",
    description: "Des études techniques complètes pour la conception et la réalisation de vos ouvrages.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    icon: <FaBuilding />,
    items: [
      {
        id: "batiments-ouvrages",
        slug: "batiments-ouvrages",
        title: "Bâtiments et Ouvrages",
        icon: <FaBuilding />,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        description: "Conception et calcul de structures, réseaux fluides, et plans d'exécution complets pour vos projets.",
        details: [
          "Conception et calcul de structures en béton, bois et métallique",
          "Dimensionnement des réseaux fluides et électriques",
          "Établissement des plannings d'exécution et des devis estimatifs",
          "Élaboration des plans techniques d'exécution"
        ]
      },
      {
        id: "plomberie-industrielle",
        slug: "plomberie-industrielle",
        title: "Plomberie Industrielle",
        icon: <FaTint />,
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
        description: "Études techniques, réfection et entretien de bâtiments, piscines et machines industrielles.",
        details: [
            "Études techniques de plomberie",
            "Réfection et entretien des bâtiments, piscines et machines industrielles",
            "Contrôle et réalisation de travaux hydrauliques en zones urbaines et rurales"
        ]
      },
      {
        id: "assainissement",
        slug: "assainissement",
        title: "Assainissement",
        icon: <FaTrashAlt />,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        description: "Solutions complètes pour les études techniques et le contrôle réseaux.",
        details: [
            "Études techniques d'assainissement",
            "Contrôle de réseaux d'assainissement",
            "Gestion des eaux pluviales et usées"
        ]
      },
      {
        id: "topographie",
        slug: "topographie",
        title: "Topographie",
        icon: <FaMapMarkedAlt />,
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop",
        description: "Levés de détails pour projets routiers et implantation précise de bâtiments.",
        details: [
            "Levés de détails des projets routiers",
            "Implantation des bâtiments et ouvrages de Génie Civil",
            "Plans topographiques détaillés"
        ]
      },
      {
        id: "infrastructures-routieres",
        slug: "infrastructures-routieres",
        title: "Infrastructures Routières",
        icon: <FaRoad />,
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
        description: "Études de faisabilité, entretien routier et élaboration de dossiers techniques (APS, APD, DCE).",
        details: [
            "Études de faisabilité des projets routiers",
            "Entretien et réhabilitation routière",
            "Élaboration des Avant-Projets Sommaires (APS) et Détaillés (APD)",
            "Préparation des Dossiers de Consultation des Entreprises (DCE)"
        ]
      },
      {
        id: "cao-dao",
        slug: "cao-dao",
        title: "CAO / DAO",
        icon: <FaDraftingCompass />,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        description: "Conception et dessin assistés par ordinateur pour une précision optimale.",
        details: [
            "Conception Assistée par Ordinateur (CAO)",
            "Dessin Assisté par Ordinateur (DAO)",
            "Modélisation 3D et rendus réalistes"
        ]
      }
    ]
  },
  {
    category: "Contrôle des Travaux",
    id: "controle-travaux",
    description: "Supervision rigoureuse de vos chantiers pour garantir qualité et respect des délais.",
    image: "https://images.unsplash.com/photo-1590644365607-1c5a38fcac06?q=80&w=2053&auto=format&fit=crop",
    icon: <FaClipboardCheck />,
    items: [
      {
        id: "supervision-travaux",
        slug: "supervision-travaux",
        title: "Supervision de Travaux",
        icon: <FaClipboardCheck />,
        image: "https://plus.unsplash.com/premium_photo-1663040329655-ce120539c762?q=80&w=2070&auto=format&fit=crop",
        description: "Contrôle rigoureux pour travaux routiers, ouvrages d'art et bâtiments (construction et réhabilitation).",
        details: [
            "Contrôle des travaux routiers (Construction - Entretien - Réhabilitation)",
            "Contrôle des travaux d'ouvrages d'art",
            "Contrôle des travaux de bâtiment",
            "Suivi de chantier et réunions de coordination"
        ]
      }
    ]
  },
  {
    category: "Conseils",
    id: "conseils",
    description: "Expertise et accompagnement stratégique pour la réussite de vos projets immobiliers et BTP.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    icon: <FaHandshake />,
    items: [
      {
        id: "experts-conseils",
        slug: "experts-conseils",
        title: "Experts Conseils",
        icon: <FaHandshake />,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2090&auto=format&fit=crop",
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
    ]
  },
  {
    category: "Prestations & Fourniture",
    id: "prestations-fourniture",
    description: "Fourniture de matériel informatique de pointe et maintenance pour le secteur du Génie Civil.",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbec40e?q=80&w=2067&auto=format&fit=crop",
    icon: <FaDesktop />,
    items: [
      {
        id: "informatique-appliquee",
        slug: "informatique-appliquee",
        title: "Informatique Appliquée",
        icon: <FaDesktop />,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        description: "Fourniture de matériel, dépannage et maintenance informatique appliqués au Génie Civil.",
        details: [
            "Matériel informatique spécifique au Génie Civil",
            "Dépannage et Maintenance Informatique",
            "Installation de logiciels techniques"
        ]
      }
    ]
  }
];
