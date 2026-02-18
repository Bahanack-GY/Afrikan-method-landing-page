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
    titleKey: "data.projects.p1.title",
    descriptionKey: "data.projects.p1.description",
    location: "Mfoundi, Cameroun",
    date: "2023",
    client: "MINMAP",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude1,
    virtualVisitUrl: "#"
  },
  {
    id: 2,
    slug: "complexe-commercial-meyomessala",
    titleKey: "data.projects.p2.title",
    descriptionKey: "data.projects.p2.description",
    location: "Meyomessala, Cameroun",
    date: "2023",
    client: "Commune de Meyomessala",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude2,
    virtualVisitUrl: "#"
  },
  {
    id: 3,
    slug: "lycee-ombe",
    titleKey: "data.projects.p3.title",
    descriptionKey: "data.projects.p3.description",
    location: "Ombe, Cameroun",
    date: "2023",
    client: "MINESEC",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude3,
    virtualVisitUrl: "#"
  },
  {
    id: 4,
    slug: "palais-justice-ngoumou",
    titleKey: "data.projects.p4.title",
    descriptionKey: "data.projects.p4.description",
    location: "Ngoumou, Cameroun",
    date: "2023",
    client: "MINJUSTICE",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude4,
    virtualVisitUrl: "#"
  },
  {
    id: 5,
    slug: "laboratoire-controle-qualite-douala",
    titleKey: "data.projects.p5.title",
    descriptionKey: "data.projects.p5.description",
    location: "Douala, Cameroun",
    date: "2023",
    client: "MINADER",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude5,
    virtualVisitUrl: "#"
  },
  {
    id: 6,
    slug: "hotel-ville-awae",
    titleKey: "data.projects.p6.title",
    descriptionKey: "data.projects.p6.description",
    location: "Awae, Cameroun",
    date: "2023",
    client: "Commune d'Awae",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude6,
    virtualVisitUrl: "#"
  },
  {
    id: 7,
    slug: "palais-justice-baham",
    titleKey: "data.projects.p7.title",
    descriptionKey: "data.projects.p7.description",
    location: "Baham, Cameroun",
    date: "2023",
    client: "MINJUSTICE",
    categoryKey: "etudes",
    categoryLabelKey: "data.projects.categories.etudes",
    image: etude7,
    virtualVisitUrl: "#"
  },

  // Contrôle et Surveillance
  {
    id: 8,
    slug: "agence-regionale-feicom-sud",
    titleKey: "data.projects.p8.title",
    descriptionKey: "data.projects.p8.description",
    location: "Ebolowa, Cameroun",
    date: "2024",
    client: "FEICOM",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl1,
    virtualVisitUrl: "#"
  },
  {
    id: 9,
    slug: "cite-municipale-pete-bandjoun",
    titleKey: "data.projects.p9.title",
    descriptionKey: "data.projects.p9.description",
    location: "Pete-Bandjoun, Cameroun",
    date: "2024",
    client: "Commune de Pete-Bandjoun",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl2,
    virtualVisitUrl: "#"
  },
  {
    id: 10,
    slug: "services-judiciaires-littoral",
    titleKey: "data.projects.p10.title",
    descriptionKey: "data.projects.p10.description",
    location: "Douala, Cameroun",
    date: "2024",
    client: "MINJUSTICE",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl3,
    virtualVisitUrl: "#"
  },
  {
    id: 11,
    slug: "delegation-regionale-domaines-sud",
    titleKey: "data.projects.p11.title",
    descriptionKey: "data.projects.p11.description",
    location: "Ebolowa, Cameroun",
    date: "2024",
    client: "MINDCAF",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl4,
    virtualVisitUrl: "#"
  },
  {
    id: 12,
    slug: "delegation-regionale-domaines-sud-ouest",
    titleKey: "data.projects.p12.title",
    descriptionKey: "data.projects.p12.description",
    location: "Buea, Cameroun",
    date: "2024",
    client: "MINDCAF",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl5,
    virtualVisitUrl: "#"
  },
  {
    id: 13,
    slug: "hotel-ville-soa",
    titleKey: "data.projects.p13.title",
    descriptionKey: "data.projects.p13.description",
    location: "Soa, Cameroun",
    date: "2024",
    client: "Commune de Soa",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl6,
    virtualVisitUrl: "#"
  },
  {
    id: 14,
    slug: "services-centraux-min-travaux-publics",
    titleKey: "data.projects.p14.title",
    descriptionKey: "data.projects.p14.description",
    location: "Yaoundé, Cameroun",
    date: "2024",
    client: "MINTP",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl7,
    virtualVisitUrl: "#"
  },
  {
    id: 15,
    slug: "hotel-ville-ebolowa-ii",
    titleKey: "data.projects.p15.title",
    descriptionKey: "data.projects.p15.description",
    location: "Ebolowa, Cameroun",
    date: "2024",
    client: "Commune d'Ebolowa II",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl8,
    virtualVisitUrl: "#"
  },
  {
    id: 16,
    slug: "pistes-rurales-est",
    titleKey: "data.projects.p16.title",
    descriptionKey: "data.projects.p16.description",
    location: "Région de l'Est, Cameroun",
    date: "2024",
    client: "MINTP",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl9,
    virtualVisitUrl: "#"
  },
  {
    id: 17,
    slug: "pistes-rurales-centre",
    titleKey: "data.projects.p17.title",
    descriptionKey: "data.projects.p17.description",
    location: "Région du Centre, Cameroun",
    date: "2024",
    client: "MINTP",
    categoryKey: "controle",
    categoryLabelKey: "data.projects.categories.controle",
    image: ctrl10,
    virtualVisitUrl: "#"
  }
];
