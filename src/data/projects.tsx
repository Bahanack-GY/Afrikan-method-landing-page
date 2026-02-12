import etude1 from '../assets/img/etudes/ETUDE DES TRAVAUX DE CONSTRUCTION DES SERVICES CENTRAUX DE LA DELEGATION REGIONALE ET DEPATEMENTALE DU MFOUNDI DU MINMAP.png';
import etude2 from '../assets/img/etudes/ETUDE DES TRAVAUX DE CONSTRUCTION DU COMPLEXE COMMERCIAL DE MEYOMESSALA.png';
import etude3 from '../assets/img/etudes/ETUDE DES TRAVAUX DE CONSTRUCTION DU LYCEE D’OMBE .png';
import etude4 from '../assets/img/etudes/ETUDE DES TRAVAUX DE CONSTRUCTION DU PALAIS DE JUSTICE DE NGOUMOU.png';
import etude5 from '../assets/img/etudes/ETUDE ET CONTROLE DES TRAVAUX RELATIF A LA  CONSTRUCTION ET DE L’INSTALLATION DES EQUIPEMENTS DU LABORATOIRE DE CONTRÔLE DE QUALITE DES PRODUITS AGRICOLES DE DOUALA.png';
import etude6 from '../assets/img/etudes/TRAVAUX DE  CONSTRUCTION DE L’HOTEL DE VILLE D’AWAE.png';
import etude7 from '../assets/img/etudes/TRAVAUX DE CONSTRUCTION DU PALAIS DE JUSTICE DE BAHAM.png';

import ctrl1 from '../assets/img/Controle_et_surveillance/AGENCE REGIONALE FEICOM-SUD A EBOLOWA.png';
import ctrl2 from '../assets/img/Controle_et_surveillance/CITE MUNICIPALE DE PETE-BANDJOUN.png';
import ctrl3 from '../assets/img/Controle_et_surveillance/COMPLEXE MODERNE DES SERVICES JUDICIAIRES DU LITTORAL A DOUALA.png';
import ctrl4 from '../assets/img/Controle_et_surveillance/DELEGATION REGIONALE DES DOMAINES, DU CADASTRE ET AFFAIRES FONCIAIRES DU SUD EBOLOWA.png';
import ctrl5 from '../assets/img/Controle_et_surveillance/DELEGATION REGIONALE DES DOMAINES, DU CADASTRE ET AFFAIRES FONCIAIRES DU SUD-OUEST BUEA.png';
import ctrl6 from '../assets/img/Controle_et_surveillance/HÔTEL DE VILLE DE LA COMMUNE DE SOA.png';
import ctrl7 from '../assets/img/Controle_et_surveillance/SERVICES CENTRAUX DU MINISTERE DES TRAVAUX PUBLICS A YAOUNDE.png';
import ctrl8 from '../assets/img/Controle_et_surveillance/TRAVAUX DE CONSTRUCTION DE L’HOTEL DE VILLE D’EBOLOWA II.png';
import ctrl9 from '../assets/img/Controle_et_surveillance/TRAVAUX DE REHABILITATION DE 164 Km DE PISTES RURALES DANS LES DEPARTEMENTS DE LA KADEY, DU HAUT NYONG ET DU LOM ET DJEREM-REGION DE L’EST.png';
import ctrl10 from '../assets/img/Controle_et_surveillance/TRAVAUX DE REHABILITATION DE 180 Km DE PISTES RURALES DANS LES DEPARTEMENTS DE LA LEKIE,    DE LA MEFOU ET AFAMBA, DU MBAM ET INOUBOU ET DU NYONG ET KELLE –REGION DU CENTRE.png';

export const projectsData = [
  // Études
  {
    id: 1,
    slug: "services-centraux-minmap-mfoundi",
    title: "Services Centraux Délégation Régionale et Départementale du Mfoundi du MINMAP",
    location: "Mfoundi, Cameroun",
    date: "2023",
    client: "MINMAP",
    category: "Études",
    image: etude1,
    description: "Étude des travaux de construction.",
    virtualVisitUrl: "#"
  },
  {
    id: 2,
    slug: "complexe-commercial-meyomessala",
    title: "Complexe Commercial de Meyomessala",
    location: "Meyomessala, Cameroun",
    date: "2023",
    client: "Commune de Meyomessala",
    category: "Études",
    image: etude2,
    description: "Étude des travaux de construction.",
    virtualVisitUrl: "#"
  },
  {
    id: 3,
    slug: "lycee-ombe",
    title: "Lycée d'Ombe",
    location: "Ombe, Cameroun",
    date: "2023",
    client: "MINESEC",
    category: "Études",
    image: etude3,
    description: "Étude des travaux de construction.",
    virtualVisitUrl: "#"
  },
  {
    id: 4,
    slug: "palais-justice-ngoumou",
    title: "Palais de Justice de Ngoumou",
    location: "Ngoumou, Cameroun",
    date: "2023",
    client: "MINJUSTICE",
    category: "Études",
    image: etude4,
    description: "Étude des travaux de construction.",
    virtualVisitUrl: "#"
  },
  {
    id: 5,
    slug: "laboratoire-controle-qualite-douala",
    title: "Laboratoire de Contrôle de Qualité des Produits Agricoles",
    location: "Douala, Cameroun",
    date: "2023",
    client: "MINADER",
    category: "Études",
    image: etude5,
    description: "Étude et contrôle des travaux relatifs à la construction et à l'installation des équipements.",
    virtualVisitUrl: "#"
  },
  {
    id: 6,
    slug: "hotel-ville-awae",
    title: "Hôtel de Ville d'Awae",
    location: "Awae, Cameroun",
    date: "2023",
    client: "Commune d'Awae",
    category: "Études",
    image: etude6,
    description: "Travaux de construction.",
    virtualVisitUrl: "#"
  },
  {
    id: 7,
    slug: "palais-justice-baham",
    title: "Palais de Justice de Baham",
    location: "Baham, Cameroun",
    date: "2023",
    client: "MINJUSTICE",
    category: "Études",
    image: etude7,
    description: "Travaux de construction.",
    virtualVisitUrl: "#"
  },

  // Contrôle et Surveillance
  {
    id: 8,
    slug: "agence-regionale-feicom-sud",
    title: "Agence Régionale FEICOM Sud",
    location: "Ebolowa, Cameroun",
    date: "2024",
    client: "FEICOM",
    category: "Contrôle et Surveillance",
    image: ctrl1,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 9,
    slug: "cite-municipale-pete-bandjoun",
    title: "Cité Municipale de Pete-Bandjoun",
    location: "Pete-Bandjoun, Cameroun",
    date: "2024",
    client: "Commune de Pete-Bandjoun",
    category: "Contrôle et Surveillance",
    image: ctrl2,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 10,
    slug: "services-judiciaires-littoral",
    title: "Complexe Moderne des Services Judiciaires du Littoral",
    location: "Douala, Cameroun",
    date: "2024",
    client: "MINJUSTICE",
    category: "Contrôle et Surveillance",
    image: ctrl3,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 11,
    slug: "delegation-regionale-domaines-sud",
    title: "Délégation Régionale des Domaines (Sud)",
    location: "Ebolowa, Cameroun",
    date: "2024",
    client: "MINDCAF",
    category: "Contrôle et Surveillance",
    image: ctrl4,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 12,
    slug: "delegation-regionale-domaines-sud-ouest",
    title: "Délégation Régionale des Domaines (Sud-Ouest)",
    location: "Buea, Cameroun",
    date: "2024",
    client: "MINDCAF",
    category: "Contrôle et Surveillance",
    image: ctrl5,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 13,
    slug: "hotel-ville-soa",
    title: "Hôtel de Ville de Soa",
    location: "Soa, Cameroun",
    date: "2024",
    client: "Commune de Soa",
    category: "Contrôle et Surveillance",
    image: ctrl6,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 14,
    slug: "services-centraux-min-travaux-publics",
    title: "Services Centraux Ministère des Travaux Publics",
    location: "Yaoundé, Cameroun",
    date: "2024",
    client: "MINTP",
    category: "Contrôle et Surveillance",
    image: ctrl7,
    description: "Contrôle et surveillance des travaux.",
    virtualVisitUrl: "#"
  },
  {
    id: 15,
    slug: "hotel-ville-ebolowa-ii",
    title: "Hôtel de Ville d'Ebolowa II",
    location: "Ebolowa, Cameroun",
    date: "2024",
    client: "Commune d'Ebolowa II",
    category: "Contrôle et Surveillance",
    image: ctrl8,
    description: "Travaux de construction.",
    virtualVisitUrl: "#"
  },
  {
    id: 16,
    slug: "pistes-rurales-est",
    title: "Réhabilitation de 164 Km de Pistes Rurales (Est)",
    location: "Région de l'Est, Cameroun",
    date: "2024",
    client: "MINTP",
    category: "Contrôle et Surveillance",
    image: ctrl9,
    description: "Travaux de réhabilitation de 164 Km de pistes rurales dans les départements de la Kadey, du Haut Nyong et du Lom et Djerem.",
    virtualVisitUrl: "#"
  },
  {
    id: 17,
    slug: "pistes-rurales-centre",
    title: "Réhabilitation de 180 Km de Pistes Rurales (Centre)",
    location: "Région du Centre, Cameroun",
    date: "2024",
    client: "MINTP",
    category: "Contrôle et Surveillance",
    image: ctrl10,
    description: "Travaux de réhabilitation de 180 Km de pistes rurales dans les départements de la Lékié, de la Méfou et Afamba, du Mbam et Inoubou et du Nyong et Kelle.",
    virtualVisitUrl: "#"
  }
];
