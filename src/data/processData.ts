export interface ProcessStep {
  num: string;
  phase: string;
  title: string;
  desc: string;
  deliverables: string[];
  iconType: "concept" | "cad" | "permits" | "turnkey" | "fitouts" | "handover";
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    num: "01",
    phase: "Phase I",
    title: "Concept & Planning",
    desc: "Architectural consultation, zoning studies, layout sketches, and 3D schematic conceptualization.",
    deliverables: ["Schematic Design Drawings", "Zoning & Feasibility Clearance", "3D Concept Renders"],
    iconType: "concept",
  },
  {
    num: "02",
    phase: "Phase II",
    title: "Detailed CAD & Structural",
    desc: "Creation of precision drafting, structural analysis, and load-bearing calculations.",
    deliverables: ["Structural Engineering Maps", "Bespoke Material Board", "Absolute BOQ Cost Lock"],
    iconType: "cad",
  },
  {
    num: "03",
    phase: "Phase III",
    title: "Permits & Approvals",
    desc: "Securing municipal permits, electrical board clearances, and civil structure authorizations.",
    deliverables: ["Municipal Sanction Files", "Liaison & Legal Clearance", "NOC & Building Permitting"],
    iconType: "permits",
  },
  {
    num: "04",
    phase: "Phase IV",
    title: "Turnkey Execution",
    desc: "Formwork setting, reinforcement checks, high-performance concrete casting, and brickwork masonry.",
    deliverables: ["Precision Foundation Pour", "Steel Reinforcement Checks", "Superstructure Core Complete"],
    iconType: "turnkey",
  },
  {
    num: "05",
    phase: "Phase V",
    title: "Bespoke Fit-Outs",
    desc: "Custom architectural millwork, hand-finished interior installation, and bespoke marble laying.",
    deliverables: ["Millwork & Interior Fitments", "Premium Marbles & Flooring", "Electrical & HVAC Laying"],
    iconType: "fitouts",
  },
  {
    num: "06",
    phase: "Phase VI",
    title: "Calibration & Handover",
    desc: "Lighting luminance calibration, civil quality audits, and final turnkey key handover.",
    deliverables: ["Luminance Calibration", "Quality Assurance Audit", "Turnkey Key Handover"],
    iconType: "handover",
  },
];
