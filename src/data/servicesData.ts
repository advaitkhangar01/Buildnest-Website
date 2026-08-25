export interface ServiceItem {
  index: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  technicalSpecs: { label: string; value: string };
  iconType: "architecture" | "construction" | "interior" | "turnkey" | "liaisoning" | "pmc";
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    index: "01",
    title: "House Architecture & Vastu",
    tagline: "Vastu-compliant plans & spacious home layouts.",
    description:
      "Custom bungalow and house floor plans designed specifically for Nagpur's hot summer climate, natural air ventilation, and maximum family comfort.",
    image: "/images/services/architecture.webp",
    highlights: [
      "Vastu-compliant family space planning",
      "3D elevation design before work starts",
      "NMC & NIT municipal sanction drawings",
      "Spacious rooms with natural sunlight & air"
    ],
    technicalSpecs: { label: "Vastu Alignment", value: "100% Compliant" },
    iconType: "architecture",
  },
  {
    index: "02",
    title: "A-Grade House Construction",
    tagline: "Strong civil structure built for generations.",
    description:
      "Civil construction using tested Tata Tiscon SD steel, UltraTech 53 cement, and 120+ quality audits to guarantee zero cracks or dampness.",
    image: "/images/services/construction.webp",
    highlights: [
      "Certified Tata Tiscon & UltraTech cement",
      "48-hour bathroom & roof flood testing",
      "Laser-level column & wall levelling checks",
      "Earthquake resistant foundation & structure"
    ],
    technicalSpecs: { label: "Structural Warranty", value: "10-Year Guarantee" },
    iconType: "construction",
  },
  {
    index: "03",
    title: "Custom Home Interiors",
    tagline: "Durable woodwork, kitchens & marble finishing.",
    description:
      "Complete home interior design including termite-proof modular kitchens, custom wardrobes, Italian marble flooring, and elegant warm lighting.",
    image: "/images/services/interior.webp",
    highlights: [
      "Termite-proof & water-resistant woodwork",
      "Modular kitchen & wardrobe planning",
      "Italian marble & anti-skid tile fitting",
      "Warm ambient ceiling & wall lighting"
    ],
    technicalSpecs: { label: "Woodwork Warranty", value: "100% Termite Proof" },
    iconType: "interior",
  },
  {
    index: "04",
    title: "Turnkey House Building",
    tagline: "One team handles everything. Fixed budget guarantee.",
    description:
      "Total responsibility from foundation to key handover. Zero multi-contractor clashes, zero budget escalation, and guaranteed move-in date.",
    image: "/images/services/turnkey.webp",
    highlights: [
      "100% Fixed-price contract (0 extra costs)",
      "Single point of contact (No contractor games)",
      "Material test reports provided for every stage",
      "Move-in ready home handover on promised date"
    ],
    technicalSpecs: { label: "Cost Escalation", value: "0% Extra Charged" },
    iconType: "turnkey",
  },
  {
    index: "05",
    title: "NMC / NIT Map Sanctions",
    tagline: "Fast municipal approvals with zero hassle.",
    description:
      "We handle all government paperwork, sanction drawings, NIT & NMC clearances, and structural stability certificates so your build stays 100% legal.",
    image: "/images/services/liaisoning.webp",
    highlights: [
      "NMC & NIT building permit approvals",
      "Structural stability engineer clearance",
      "Water & electricity connection assistance",
      "Complete legal documentation peace of mind"
    ],
    technicalSpecs: { label: "Legal Status", value: "100% Sanctioned" },
    iconType: "liaisoning",
  },
  {
    index: "06",
    title: "Site Progress Supervision",
    tagline: "Weekly phone updates & live CCTV site access.",
    description:
      "Dedicated architect oversight, multi-point material testing, and weekly video digests sent straight to your phone so you don't have to visit daily.",
    image: "/images/services/project_management.webp",
    highlights: [
      "Weekly WhatsApp photo & video digests",
      "Live 24/7 site CCTV stream access",
      "On-site material quality inspection",
      "Fixed milestone timeline monitoring"
    ],
    technicalSpecs: { label: "Site Monitoring", value: "24/7 Live CCTV" },
    iconType: "pmc",
  },
];
