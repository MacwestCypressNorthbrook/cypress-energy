export interface ProjectData {
  id: number;
  title: string;
  client: string;
  date?: string;
  vessel?: string;
  services: string[];
  description: string;
  deliveries?: string[];
  image: string;
}

export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Geotechnical Survey — Eban 2A Well",
    client: "ENI Ghana E&P",
    date: "January 2024",
    services: [
      "Geotechnical vessel supply",
      "Offshore manpower",
      "HSE compliance",
      "QA/QC reporting",
    ],
    description:
      "Two-week offshore survey to assess seabed conditions for a jackup rig deployment on the Eban 2A well.",
    deliveries: [
      "Offshore soil and rock sampling",
      "CPTu and coring operations",
      "Laboratory analysis",
      "Integration with Eni's engineering models",
    ],
    image: "/images/selected_projects/project_1.jpeg",
  },
  {
    id: 2,
    title: "Geophysical Survey — JP 88 Stork",
    client: "RINA & FUGRO",
    vessel: "JP 88 Stork",
    services: [
      "Offshore manpower",
      "Vessel provision",
      "Real-time tracking",
      "HSE compliance",
      "Daily reporting",
    ],
    description:
      "24/7 offshore survey support including real-time vessel tracking and full HSE compliance reporting.",
    image: "/images/selected_projects/project_2.jpeg",
  },
  {
    id: 3,
    title: "Borr Drilling Campaign",
    client: "ENI Ghana E&P",
    services: [
      "OSV provision",
      "Rig and supply vessel procurement",
      "Warehousing",
      "Trucking",
      "Regulatory compliance",
      "Supply chain coordination",
    ],
    description:
      "Full supply chain coordination for Borr Drilling's campaign supporting ENI's upstream programme in Ghana.",
    image: "/images/selected_projects/project_3.jpeg",
  },
  {
    id: 4,
    title: "Riser Operation — Santorini Oil & Gas Jetty",
    client: "SAIPEM",
    services: [
      "Manpower supply",
      "Procurement",
      "Crane and loading operations",
    ],
    description:
      "Manpower and equipment provision for riser operations at the Santorini jetty, conducted under SAIPEM HSE standards.",
    image: "/images/selected_projects/project_4.jpeg",
  },
  {
    id: 5,
    title: "Loading Operations — Ametrine Valor",
    client: "SAIPEM",
    services: ["Manpower supply", "Base equipment provision"],
    description:
      "Logistics and equipment support for loading operations aboard the Ametrine Valor.",
    image: "/images/selected_projects/project_5.jpeg",
  },
  {
    id: 6,
    title: "SAIPEM Drilling Campaign (DVD & Santorini)",
    client: "SAIPEM",
    services: [
      "Vessel provision",
      "Equipment supply",
      "Manpower",
      "Mob/demob",
    ],
    description:
      "Integrated vessel, equipment, and personnel services across SAIPEM's DVD and Santorini drilling campaigns.",
    image: "/images/selected_projects/project_6.jpeg",
  },
  {
    id: 7,
    title: "JP88 Stork — Vessel Provision",
    client: "ENI Ghana E&P",
    services: ["Vessel provision", "Crewing", "Mob/demob services"],
    description:
      "Full vessel management and crew provision for the JP88 Stork supporting ENI's survey and drilling programme.",
    image: "/images/selected_projects/project_7.jpeg",
  },
  {
    id: 8,
    title: "Tullow Ghana — FPSO Tow-Back",
    client: "Tullow Ghana Limited",
    services: ["AHTS deployment", "Emergency tow-back readiness"],
    description:
      "AHTS deployment supporting FPSO–tanker synchronisation and emergency tow-back preparedness under Tullow HSE protocols.",
    image: "/images/selected_projects/project_8.jpeg",
  },
  {
    id: 9,
    title: "Security / Guard Vessel — OCTP Field",
    client: "ENI Ghana E&P",
    services: ["Guard vessel operations", "Security manpower"],
    description:
      "Guard vessel and security operations supporting ENI's OCTP field development.",
    image: "/images/selected_projects/project_9.jpeg",
  },
];
