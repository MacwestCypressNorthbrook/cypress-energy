export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  intro: string[];
  listLabel: string;
  items: string[];
  ctaType: "booking" | "contact";
  image: string;
}

export const BOOKING_URL =
  "https://outlook.office.com/book/TechnicalConsultation4@cypressenergyghana.com/";

export const services: ServiceData[] = [
  {
    slug: "offshore-vessel-supply",
    title: "Offshore Vessel Supply",
    h1: "Offshore Vessel Supply Services",
    intro: [
      "Cypress Energy maintains a managed fleet of offshore support vessels to keep your operations moving. We have a strong track record with Eni Ghana E&P, providing reliable, cost-effective vessel solutions for complex offshore programmes.",
    ],
    listLabel: "Fleet & Capabilities",
    items: [
      "AHTS — Anchor Handling Tug Supply",
      "PSV — Platform Supply Vessel",
      "Multipurpose Vessel",
      "Seismic Survey Vessel",
      "Towing, mooring, and anchor handling",
      "Crew transfers",
      "Cargo operations",
      "Emergency response",
      "Vessel sourcing and chartering",
      "Crew management and provisioning",
      "24/7 operational support",
    ],
    ctaType: "booking",
    image: "/images/services/offshore vessel supply.avif",
  },
  {
    slug: "manpower",
    title: "Manpower Management & Recruitment",
    h1: "Manpower, Management and Recruitment Services",
    intro: [
      "Cypress Energy connects top onshore and offshore oil and gas talent with the operators who need them. Our recruitment services cover the full hiring lifecycle, from candidate search and selection to onboarding support.",
    ],
    listLabel: "Our Services",
    items: [
      "Recruitment assistance and outsourcing",
      "Candidate search and shortlisting",
      "Interview facilitation",
      "Offshore crew management",
    ],
    ctaType: "contact",
    image: "/images/services/manpower managemnt.jpg",
  },
  {
    slug: "jack-up-drilling-rigs",
    title: "Jack-up Drilling Rigs",
    h1: "Jack-up Drilling Rigs",
    intro: [
      "Cypress Energy supplies high-specification jack-up drilling rigs capable of operating in water depths up to 400 ft, supporting exploration, development, and workover programmes.",
    ],
    listLabel: "Applications",
    items: [
      "Exploratory drilling",
      "Development drilling",
      "Workover and well intervention",
    ],
    ctaType: "booking",
    image: "/images/services/pipe 4.avif",
  },
  {
    slug: "power-generation",
    title: "Power Generation Units",
    h1: "Provision of Power Generation Units and Compressors",
    intro: [
      "Cypress Energy supplies and manages turbomachinery packages for power generation and motor-driven compression across the 1–39 MW range.",
    ],
    listLabel: "Equipment Types",
    items: [
      "Gas compressors",
      "Mechanical drive packages",
      "Oil and gas generator packages",
      "Power generation packages",
    ],
    ctaType: "booking",
    image: "/images/services/power gen 1.jpg",
  },
  {
    slug: "geo-seismic-surveys",
    title: "Geo Seismic & Geotechnical Surveys",
    h1: "Geo Seismic & Geotechnical Surveys",
    intro: [
      "Minimise project risks and maximise success with Cypress's comprehensive geoscience solutions. From complex offshore structures to critical infrastructure projects, our experienced engineers and geologists provide the data and insights you need to make informed decisions.",
      "We leverage leading-edge technology — whether collecting pristine soil samples in deep waters or quantifying earthquake risks for sensitive facilities — to give you the most up-to-date data and actionable recommendations.",
      "Driven by a commitment to complete site understanding, we offer a holistic range of services beyond traditional geotechnical engineering. Seismic hazard assessment, soil dynamics analysis, advanced lab testing, and quantitative risk assessment are ways we help you mitigate risks and optimise your project from the ground up.",
    ],
    listLabel: "Services Include",
    items: [
      "Seismic hazard assessment",
      "Soil dynamics analysis",
      "Advanced laboratory testing",
      "Quantitative risk assessment",
      "CPTu and coring operations",
      "Geotechnical vessel supply",
    ],
    ctaType: "booking",
    image: "/images/services/Hero Image.avif",
  },
  {
    slug: "geophysical-surveys",
    title: "Geophysical Surveys",
    h1: "Geophysical Surveys",
    intro: [
      "Cypress Energy delivers tailored geophysical site survey services using cutting-edge equipment and experienced survey teams. Our work supports offshore field development, infrastructure planning, and environmental compliance.",
    ],
    listLabel: "Deliverables",
    items: [
      "24/7 offshore survey manpower",
      "Real-time vessel tracking",
      "HSE compliance and reporting",
      "Daily progress reports",
    ],
    ctaType: "booking",
    image: "/images/services/Hero Image.avif",
  },
  {
    slug: "onshore-service-base",
    title: "Onshore Service Base",
    h1: "Construction and Provision of Onshore Service Base",
    intro: [
      "Cypress Energy designs and operates strategically located onshore service bases to support offshore campaigns. Our facilities provide the logistical backbone for complex upstream operations.",
    ],
    listLabel: "Facilities Include",
    items: [
      "Secure storage and laydown areas",
      "Logistics support infrastructure",
      "Maintenance workshops",
    ],
    ctaType: "booking",
    image: "/images/services/Hero Image 2.jpg",
  },
  {
    slug: "onshore-base-equipment",
    title: "Onshore Base Equipment",
    h1: "Provision of Onshore Base Equipment",
    intro: [
      "We source and maintain a broad range of onshore base equipment from reputable manufacturers, ensuring your operations are never slowed by equipment availability.",
      "All equipment is regularly serviced and maintained to manufacturer standards.",
    ],
    listLabel: "Equipment",
    items: ["Forklifts", "Cranes", "Generators"],
    ctaType: "booking",
    image: "/images/services/power gen 2.jpg",
  },
  {
    slug: "pipe-supply-and-storage",
    title: "Pipe Supply and Storage",
    h1: "Pipe Supply and Storage",
    intro: [
      "Cypress Energy operates modern pipe storage facilities with specialist rust-control and specialty coating services for offshore-grade pipes, ensuring product integrity from yard to installation.",
    ],
    listLabel: "Services",
    items: [
      "Pipe supply and procurement",
      "Yard storage",
      "Rust control treatment",
      "Specialty coating application",
    ],
    ctaType: "booking",
    image: "/images/services/pipe.avif",
  },
  {
    slug: "local-fabrication",
    title: "Local Fabrication",
    h1: "Local Fabrication",
    intro: [
      "Cypress Energy provides custom fabrication, modification, and repair services for drilling rigs, wellhead equipment, and pipelines serving the upstream sector in Ghana and Ivory Coast. Our local fabrication capability supports community job creation while maintaining international quality standards.",
    ],
    listLabel: "Scope",
    items: [
      "Drilling rig fabrication and modification",
      "Wellhead equipment repair",
      "Pipeline fabrication",
      "Custom structural steel",
    ],
    ctaType: "booking",
    image: "/images/services/pipe 3.avif",
  },
  {
    slug: "logistics-freight-forwarding",
    title: "Logistics & Freight Forwarding",
    h1: "Logistics and Freight Forwarding",
    intro: [
      "Cypress Energy manages the full logistics chain — from origin to offshore — using our global partner network. We handle complexity so your supply chain runs on schedule.",
    ],
    listLabel: "Services",
    items: [
      "Air, sea, and land transport",
      "Customs clearance",
      "Warehousing",
      "Distribution and last-mile delivery",
    ],
    ctaType: "booking",
    image: "/images/services/pipe 2.avif",
  },
  {
    slug: "housing-accommodation",
    title: "Housing & Office Accommodation",
    h1: "Housing and Office Accommodation",
    intro: [
      "Cypress Energy provides onshore and offshore accommodation solutions for crews and project teams, ranging from single-person units to large shared facilities.",
    ],
    listLabel: "Offering",
    items: [
      "Single-occupancy and shared accommodation",
      "Recreational areas",
      "Catering",
      "Maintenance workshops",
      "Relocation services",
      "Offshore living quarters management",
      "Recreational facilities",
      "Catering and housekeeping",
    ],
    ctaType: "booking",
    image: "/images/services/ship chandling 1.avif",
  },
  {
    slug: "hospitality-ship-chandling",
    title: "Hospitality & Ship Chandling",
    h1: "Hospitality and Ship Chandling Services",
    intro: [
      "Cypress Energy delivers full hospitality and ship chandling services for offshore living quarters and vessels, maintaining crew comfort and vessel readiness at all times.",
    ],
    listLabel: "Services",
    items: [
      "Catering with diverse menus",
      "Housekeeping and laundry",
      "Recreational facility management",
      "Offshore living-quarters maintenance",
      "Ship chandling and provisioning",
    ],
    ctaType: "booking",
    image: "/images/services/ship chandling.avif",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
