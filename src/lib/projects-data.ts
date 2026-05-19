export interface ProjectData {
  id: number;
  title: string;
  client: string;
  date?: string;
  vessel?: string;
  services: string[];
  description: string;
  deliveries?: string[];
  image: string;      // Cover image shown on listings page
  images: string[];   // All gallery images shown on details page
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Geotechnical Survey — Eban 2A Well",
    client: "Eni Ghana Exploration and Production",
    date: "January 15, 2024",
    services: [
      "Geotechnical vessel supply",
      "Offshore manpower",
      "HSE compliance",
      "QA/QC reporting",
    ],
    description:
      "Successful completion of a comprehensive geotechnical survey at the Eban 2A well location offshore Ghana. This critical project, conducted over two weeks, aimed to assess seabed conditions and gather vital data to support the safe and efficient deployment of a jackup rig for future drilling operations.",
    deliveries: [
      "Offshore soil and rock sampling",
      "CPTu and coring operations",
      "Laboratory analysis",
      "Integration with Eni's engineering models",
    ],
    image: "/images/projects/geotechnical_survey5.jpeg",
    images: [
      "/images/projects/geotechnical_survey5.jpeg",
      "/images/projects/geotechnical_survey3.jpeg",
      "/images/projects/geotechnical_survey2.jpeg",
      "/images/projects/geotechnical_survey1.jpeg",
      "/images/projects/geotechnical_survey4.jpeg",
    ],
  },
  {
    id: 2,
    title: "Geophysical Survey",
    client: "RINA and FUGRO",
    vessel: "JP 88 Stork",
    services: [
      "Procurement & Manpower provision",
      "Vessel support",
      "Logistics support",
    ],
    description:
      "Cypress Energy facilitated a large-scale geophysical campaign using the vessel JP 88 Stork. We delivered comprehensive vessel and logistics support, ensuring efficient operations offshore.",
    deliveries: [
      "24/7 offshore Manpower",
      "Real-time vessel tracking and communication",
      "Full compliance with maritime HSE protocols",
      "Daily operational reporting and coordination",
    ],
    image: "/images/projects/admin-ajax-copy.jpg",
    images: [
      "/images/projects/admin-ajax-copy.jpg",
      "/images/projects/Picture-1-1.jpg",
      "/images/projects/Screenshot-2026-03-14-105521.webp",
      "/images/projects/Geotechnical5-1-copy-1.jpg",
    ],
  },
  {
    id: 3,
    title: "Borr Drilling Campaign",
    client: "Eni Ghana Exploration and Production",
    services: [
      "Vessel Supply",
      "Pipe Supply",
      "Manpower Management",
    ],
    description:
      "Rig & Supply Vessel procurement, Offshore Supply Vessel Provision, Warehousing & Storage Solutions, Trucking & Transportation Services, Regulatory & Compliance Support, Integrated local Supply Chain Coordination.",
    deliveries: [
      "Vessel mobilisation with towing and anchor gear",
      "Manpower Provision",
      "Procurement",
      "Real-time data sharing with control teams",
    ],
    image: "/images/projects/WhatsApp-Image-2025-03-07-at-11.06.34-4-neeew.jpeg",
    images: [
      "/images/projects/WhatsApp-Image-2025-03-07-at-11.06.34-4-neeew.jpeg",
      "/images/projects/1H6A2294.jpeg",
      "/images/projects/1H6A3217.jpeg",
      "/images/projects/1H6A2631-scaled-copy.jpeg",
    ],
  },
  {
    id: 4,
    title: "Riser Operation — Santorini Oil & Gas Jetty",
    client: "SAIPEM",
    services: [
      "Manpower Management",
      "Procurement",
    ],
    description:
      "Supported Drilling operations by managing the supply and transportation of oil risers and related components.",
    deliveries: [
      "Crane Operations",
      "Loading Operations",
      "Manpower provision",
      "Operations under SAIPEM's HSE system",
    ],
    image: "/images/projects/1H6A3169-scaled.jpeg",
    images: [
      "/images/projects/1H6A3169-scaled.jpeg",
      "/images/projects/1H6A2487-scaled.jpeg",
      "/images/projects/1H6A2020-scaled.webp",
      "/images/projects/1H6A1904-scaled.webp",
    ],
  },
  {
    id: 5,
    title: "Loading Operations — Ametrine Valor",
    client: "SAIPEM",
    services: [
      "Manpower Management",
      "Base Equipment Supply",
    ],
    description:
      "Managed Loading operations on the vessel Ametrine Valour, from manpower provision to managing the supply and logistics for offshore base equipment to support drilling operations.",
    deliveries: [
      "Manpower Management",
      "Base Equipment Supply",
      "Safe Loading Operation",
    ],
    image: "/images/projects/1H6A3267-scaled.webp",
    images: [
      "/images/projects/1H6A3267-scaled.webp",
      "/images/projects/1H6A3252-scaled.webp",
      "/images/projects/1H6A3257-scaled.webp",
      "/images/projects/1H6A3259-scaled.webp",
    ],
  },
  {
    id: 6,
    title: "SAIPEM Drilling Campaign",
    client: "SAIPEM",
    services: [
      "Vessel Supply",
      "Equipment Supply",
      "Manpower",
    ],
    description:
      "Supported SAIPEM DVD & Santorini Drilling campaigns with vessel supply and oil well spares supply. We also supported operations with manpower provisions.",
    deliveries: [
      "Procurement",
      "Supply of equipment",
      "Provision of manpower services",
    ],
    image: "/images/projects/heros-3.jpeg",
    images: [
      "/images/projects/heros-3.jpeg",
      "/images/projects/cp-3-1.jpeg",
      "/images/projects/1H6A2534-scaled.jpeg",
      "/images/projects/1H6A1161-scaled-copy-1.jpg",
    ],
  },
  {
    id: 7,
    title: "JP88 Stork — Vessel Provision",
    client: "Eni Ghana Exploration and Production",
    services: [
      "Vessel Provision & Crewing support",
    ],
    description:
      "Supplied JP88 Stork vessel and provided mobilisation and demobilisation services to the project client.",
    deliveries: [
      "Vessel mobilisation",
      "Crewing support",
      "Offshore HSE and quality compliance",
    ],
    image: "/images/projects/1H6A1087-scaled.webp",
    images: [
      "/images/projects/1H6A1087-scaled.webp",
      "/images/projects/1H6A1096-scaled.webp",
      "/images/projects/1H6A1118-scaled.webp",
      "/images/projects/1H6A1147-1-scaled.webp",
    ],
  },
  {
    id: 8,
    title: "Tullow Ghana — FPSO Tow-Back",
    client: "Tullow Ghana Limited",
    services: [
      "AHTS deployment",
      "Emergency tow-back readiness",
    ],
    description:
      "AHTS deployment supporting FPSO–tanker synchronisation and emergency tow-back preparedness under Tullow HSE protocols.",
    deliveries: [
      "AHTS deployment",
      "Emergency tow-back readiness coordination",
      "FPSO-tanker synchronisation support",
    ],
    image: "/images/selected_projects/project_8.jpeg",
    images: [
      "/images/selected_projects/project_8.jpeg",
    ],
  },
  {
    id: 9,
    title: "Security / Guard Vessel — OCTP Field",
    client: "ENI Ghana E&P",
    services: [
      "Guard vessel operations",
      "Security manpower",
    ],
    description:
      "Guard vessel and security operations supporting ENI's OCTP field development.",
    deliveries: [
      "Guard vessel operations",
      "Security manpower provision",
      "OCTP field security coordination",
    ],
    image: "/images/selected_projects/project_9.jpeg",
    images: [
      "/images/selected_projects/project_9.jpeg",
    ],
  },
];
