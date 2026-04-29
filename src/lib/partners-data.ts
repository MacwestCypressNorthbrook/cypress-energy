export interface PartnerData {
  name: string;
  shortName: string;
  narrative: string;
  category: string;
  logo: string;
}

export const partners: PartnerData[] = [
  {
    name: "ENI Ghana E&P",
    shortName: "ENI",
    logo: "/images/partners/eni.webp",
    narrative:
      "Our longest-standing tier-1 client. Cypress Energy has supported ENI Ghana E&P across multiple campaigns including the Eban 2A geotechnical survey, the Borr Drilling campaign, and OCTP field security operations.",
    category: "Operator",
  },
  {
    name: "Tullow Ghana Limited",
    shortName: "Tullow",
    logo: "/images/partners/tullow.webp",
    narrative:
      "Cypress Energy supported Tullow Ghana with AHTS deployment for FPSO tow-back readiness, delivering emergency response capability under strict Tullow HSE protocols.",
    category: "Operator",
  },
  {
    name: "Borr Drilling",
    shortName: "Borr",
    logo: "/images/partners/boor.webp",
    narrative:
      "Cypress Energy delivered full supply chain coordination — from OSV provision to warehousing and trucking — in support of Borr Drilling's campaign under ENI's Ghana upstream programme.",
    category: "Drilling Contractor",
  },
  {
    name: "RINA",
    shortName: "RINA",
    logo: "/images/partners/rina.webp",
    narrative:
      "Working alongside RINA, Cypress Energy provided offshore manpower, vessel provision, and real-time vessel tracking to support geophysical survey operations in Ghanaian waters.",
    category: "Inspection & Survey",
  },
  {
    name: "EO",
    shortName: "EO",
    logo: "/images/partners/eo.webp",
    narrative:
      "A strategic partner supporting Cypress Energy's integrated service delivery across offshore and onshore operations in West Africa.",
    category: "Strategic Partner",
  },
  {
    name: "Macwest",
    shortName: "Macwest",
    logo: "/images/partners/macwest.webp",
    narrative:
      "Macwest partners with Cypress Energy to strengthen our supply chain and logistics capabilities across the region.",
    category: "Logistics Partner",
  },
  {
    name: "Northbrook",
    shortName: "Northbrook",
    logo: "/images/partners/northbrook.webp",
    narrative:
      "Northbrook collaborates with Cypress Energy on technical service delivery and equipment provision for oil and gas operations.",
    category: "Technical Partner",
  },

  // No logo available — commented out until assets are provided
  // {
  //   name: "SAIPEM",
  //   shortName: "SAIPEM",
  //   logo: "",
  //   narrative:
  //     "A key EPC partner for whom Cypress Energy provided integrated vessel, equipment, manpower, and logistics services across the DVD and Santorini drilling campaigns.",
  //   category: "EPC Contractor",
  // },
  // {
  //   name: "FUGRO",
  //   shortName: "FUGRO",
  //   logo: "",
  //   narrative:
  //     "Cypress Energy partnered with FUGRO on geophysical survey campaigns, supplying 24/7 offshore survey manpower and HSE compliance reporting.",
  //   category: "Inspection & Survey",
  // },
  // {
  //   name: "Ghana National Petroleum Corporation",
  //   shortName: "GNPC",
  //   logo: "",
  //   narrative:
  //     "As Ghana's national oil company and a strategic stakeholder in the energy sector, GNPC represents a foundational relationship that reflects Cypress Energy's commitment to local content and national development.",
  //   category: "National Oil Company",
  // },
  // {
  //   name: "Solar Turbines / Caterpillar",
  //   shortName: "Solar Turbines",
  //   logo: "",
  //   narrative:
  //     "Through our power generation service line, Cypress Energy works with Solar Turbines (a Caterpillar company) to supply and manage turbomachinery packages across the 1–39 MW range.",
  //   category: "OEM Partner",
  // },
];
