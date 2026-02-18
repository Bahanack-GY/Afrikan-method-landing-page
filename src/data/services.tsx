import { FaBuilding, FaTint, FaMapMarkedAlt, FaRoad, FaDraftingCompass, FaClipboardCheck, FaHandshake } from 'react-icons/fa';

export const servicesData = [
  {
    categoryKey: "data.services.etudes.category",
    id: "etudes",
    descriptionKey: "data.services.etudes.description",
    image: "https://images.unsplash.com/photo-1713557112617-e12d67bddc3a?q=80&w=2069&auto=format&fit=crop",
    icon: <FaBuilding />,
    items: [
      {
        id: "voiries-reseaux-divers",
        slug: "voiries-reseaux-divers",
        titleKey: "data.services.etudes.items.vrd.title",
        descriptionKey: "data.services.etudes.items.vrd.description",
        detailsKey: "data.services.etudes.items.vrd.details",
        icon: <FaMapMarkedAlt />,
        image: "https://images.unsplash.com/photo-1766330301270-e4c652b1c538?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "routes-autoroutes",
        slug: "routes-autoroutes",
        titleKey: "data.services.etudes.items.routes.title",
        descriptionKey: "data.services.etudes.items.routes.description",
        detailsKey: "data.services.etudes.items.routes.details",
        icon: <FaRoad />,
        image: "https://images.unsplash.com/photo-1735837836870-17bf7e6d2bd6?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "etudes-batiments",
        slug: "etudes-batiments",
        titleKey: "data.services.etudes.items.batiments.title",
        descriptionKey: "data.services.etudes.items.batiments.description",
        detailsKey: "data.services.etudes.items.batiments.details",
        icon: <FaBuilding />,
        image: "https://images.unsplash.com/photo-1759111892854-f62c49692506?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "ouvrages-art",
        slug: "ouvrages-art",
        titleKey: "data.services.etudes.items.ouvragesArt.title",
        descriptionKey: "data.services.etudes.items.ouvragesArt.description",
        detailsKey: "data.services.etudes.items.ouvragesArt.details",
        icon: <FaDraftingCompass />,
        image: "https://images.unsplash.com/photo-1721907758701-d118fdd56b50?q=80&w=2070&auto=format&fit=crop",
      },
      {
        id: "ouvrages-connexes",
        slug: "ouvrages-connexes",
        titleKey: "data.services.etudes.items.ouvragesConnexes.title",
        descriptionKey: "data.services.etudes.items.ouvragesConnexes.description",
        detailsKey: "data.services.etudes.items.ouvragesConnexes.details",
        icon: <FaTint />,
        image: "https://images.unsplash.com/photo-1735837883394-b05e424e57d9?q=80&w=2070&auto=format&fit=crop",
      }
    ]
  },
  {
    categoryKey: "data.services.controle.category",
    id: "controle-travaux",
    descriptionKey: "data.services.controle.description",
    image: "https://images.unsplash.com/photo-1602652897853-c0d370f7cc7a?q=80&w=2069&auto=format&fit=crop",
    icon: <FaClipboardCheck />,
    items: [
      {
        id: "supervision-travaux",
        slug: "supervision-travaux",
        titleKey: "data.services.controle.items.supervision.title",
        descriptionKey: "data.services.controle.items.supervision.description",
        detailsKey: "data.services.controle.items.supervision.details",
        icon: <FaClipboardCheck />,
        image: "https://images.unsplash.com/photo-1602652897853-c0d370f7cc7a?q=80&w=2070&auto=format&fit=crop",
      }
    ]
  },
  {
    categoryKey: "data.services.conseils.category",
    id: "conseils",
    descriptionKey: "data.services.conseils.description",
    image: "https://images.unsplash.com/photo-1573497701240-345a300b8d36?q=80&w=2070&auto=format&fit=crop",
    icon: <FaHandshake />,
    items: [
      {
        id: "experts-conseils",
        slug: "experts-conseils",
        titleKey: "data.services.conseils.items.experts.title",
        descriptionKey: "data.services.conseils.items.experts.description",
        detailsKey: "data.services.conseils.items.experts.details",
        icon: <FaHandshake />,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2090&auto=format&fit=crop",
      }
    ]
  },
];
