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
    title: "Architecture",
    tagline: "Spatial choreography & modern forms.",
    description:
      "Bespoke spatial design combining structural expression, contextual response, and timeless modernist forms.",
    image: "/images/services/architecture.webp",
    highlights: [
      "Contextual & bioclimatic site analysis",
      "High-fidelity 3D modeling & cinematic VR",
      "Comprehensive municipal permit blueprints",
      "Curated masonry & structural specifications"
    ],
    technicalSpecs: { label: "Design Tolerance", value: "±0.00mm" },
    iconType: "architecture",
  },
  {
    index: "02",
    title: "Construction",
    tagline: "Precision civil engineering & load dynamics.",
    description:
      "Precision civil engineering utilizing high-grade materials, structural safety audits, and flawless masonry.",
    image: "/images/services/construction.webp",
    highlights: [
      "High-strength reinforced concrete core",
      "Micro-precision masonry alignment checks",
      "Seismic safety load audits & grading",
      "Advanced waterproofing & thermal insulation"
    ],
    technicalSpecs: { label: "Concrete Grade", value: "M25/M30 Standard" },
    iconType: "construction",
  },
  {
    index: "03",
    title: "Interior Design",
    tagline: "Curated material palettes & bespoke millwork.",
    description:
      "Curated material palettes, custom millwork, ambient lighting design, and ergonomic luxury space planning.",
    image: "/images/services/interior.webp",
    highlights: [
      "Ergonomic high-end space planning",
      "Bespoke veneer, marble, & brass millwork",
      "Custom luxury ambient lighting choreography",
      "Premium upholstery & hardware sourcing"
    ],
    technicalSpecs: { label: "Veneer Finish", value: "100% Polyurethane" },
    iconType: "interior",
  },
  {
    index: "04",
    title: "Turnkey Solutions",
    tagline: "End-to-end single point accountability.",
    description:
      "End-to-end design-and-build responsibility, absolute budget guarantee, and fully integrated management.",
    image: "/images/services/turnkey.webp",
    highlights: [
      "Absolute lock-in cost guarantee",
      "Zero vendor conflict project management",
      "Strict material quality inspection checks",
      "Handover in ready-to-move-in condition"
    ],
    technicalSpecs: { label: "Cost Variance", value: "0% Overrun" },
    iconType: "turnkey",
  },
  {
    index: "05",
    title: "Liaisoning",
    tagline: "Navigating complex municipal regulations.",
    description:
      "Securing municipal sanctions, structural permits, environmental NOCs, and legal clearances.",
    image: "/images/services/liaisoning.webp",
    highlights: [
      "NIT & NMC sanction drawing approvals",
      "Environmental & fire safety clearances",
      "Structural stability certificates",
      "Occupancy & completion certificates"
    ],
    technicalSpecs: { label: "Compliance Rate", value: "100% Guaranteed" },
    iconType: "liaisoning",
  },
  {
    index: "06",
    title: "Project Management",
    tagline: "Rigorous milestone audits & cost controls.",
    description:
      "Independent engineering oversight, material testing audits, contractor management, and BOQ cost tracking.",
    image: "/images/services/project_management.webp",
    highlights: [
      "Real-time Gantt schedule tracking",
      "Multi-stage concrete & masonry testing",
      "On-site resource & cost optimization",
      "Detailed weekly digital progress reporting"
    ],
    technicalSpecs: { label: "Safety Record", value: "Zero Incidents" },
    iconType: "pmc",
  },
];
