import { FaBuilding, FaTint, FaMapMarkedAlt, FaRoad, FaDraftingCompass, FaClipboardCheck, FaHandshake } from 'react-icons/fa';

export const servicesData = [
  {
    category: "Études",
    id: "etudes",
    description: "Des études techniques complètes de la conception à la réalisation en passant par la maturation des projets.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    icon: <FaBuilding />,
    items: [
      {
        id: "voiries-reseaux-divers",
        slug: "voiries-reseaux-divers",
        title: "Etudes des voiries et réseaux divers",
        icon: <FaMapMarkedAlt />,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop",
        description: "Conception et dimensionnement des réseaux d'alimentation, d'assainissement et des voiries urbaines.",
        details: [
          "Dimensionnement des réseaux d'assainissement et pluvial",
          "Réseaux d'Adduction d'Eau Potable (AEP)",
          "Réseaux électriques et télécoms",
          "Aménagement de voiries urbaines et espaces verts"
        ]
      },
      {
        id: "routes-autoroutes",
        slug: "routes-autoroutes",
        title: "Etudes des routes et autoroutes",
        icon: <FaRoad />,
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
        description: "Études de faisabilité et d'exécution pour infrastructures routières et autoroutières.",
        details: [
          "Études de tracés routiers et autoroutiers",
          "Dimensionnement des chaussées",
          "Études de trafic et sécurité routière",
          "Dossiers techniques (APS, APD, DCE)"
        ]
      },
      {
        id: "etudes-batiments",
        slug: "etudes-batiments",
        title: "Etudes des bâtiments",
        icon: <FaBuilding />,
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
        description: "Conception architecturale et technique pour tous types de bâtiments.",
        details: [
          "Conception architecturale et plans 2D/3D",
          "Calculs de structures (Béton, Métal, Bois)",
          "Études des lots techniques (Fluides, Électricité)",
          "Réhabilitation et rénovation de bâtiments"
        ]
      },
      {
        id: "ouvrages-art",
        slug: "ouvrages-art",
        title: "Etudes des ouvrages d'art",
        icon: <FaDraftingCompass />,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        description: "Conception et calculs pour ponts, viaducs, tunnels et génie civil spécialisé.",
        details: [
          "Conception de ponts et viaducs",
          "Ouvrages de soutènement",
          "Tunnels et ouvrages enterrés",
          "Calculs de stabilité et fondations spéciales"
        ]
      },
      {
        id: "ouvrages-connexes",
        slug: "ouvrages-connexes",
        title: "Etudes des ouvrages connexes",
        icon: <FaTint />,
        image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
        description: "Études pour aménagements hydrauliques, industriels et équipements divers.",
        details: [
          "Aménagements hydrauliques et drainage",
          "Infrastructures industrielles",
          "Equipements publics et sportifs",
          "Aménagements extérieurs et paysagers"
        ]
      }
    ]
  },
  {
    category: "Contrôle des Travaux",
    id: "controle-travaux",
    description: "Supervision rigoureuse de vos chantiers pour garantir qualité et respect des délais.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
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

];
