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
    phase: "Step 1",
    title: "Free Plot Review & Floor Plan",
    desc: "We analyze your plot dimensions, Vastu preferences, and budget to design your initial 2D floor plan.",
    deliverables: ["2D Vastu Floor Plan", "Initial Construction Estimate", "Plot Orientation Check"],
    iconType: "concept",
  },
  {
    num: "02",
    phase: "Step 2",
    title: "3D Elevation & Fixed Price Contract",
    desc: "Finalize your home's 3D elevation design and sign a locked budget contract with 0 hidden costs.",
    deliverables: ["3D Exterior Elevation Renders", "Fixed Price BOQ Agreement", "Written Possession Date"],
    iconType: "cad",
  },
  {
    num: "03",
    phase: "Step 3",
    title: "Municipal Sanctions & Approvals",
    desc: "Our team handles all government paperwork to secure NMC & NIT building map approvals.",
    deliverables: ["NMC & NIT Sanction Clearance", "Structural Stability Approval", "Legal Construction Permit"],
    iconType: "permits",
  },
  {
    num: "04",
    phase: "Step 4",
    title: "A-Grade Foundation & Civil Work",
    desc: "Foundation excavation, Tata Tiscon steel rebar tying, and UltraTech concrete casting with 120+ quality audits.",
    deliverables: ["RCC Foundation & Columns", "Tata Tiscon Material Bills", "48-Hr Slab Waterproofing Test"],
    iconType: "turnkey",
  },
  {
    num: "05",
    phase: "Step 5",
    title: "Interiors & Fine Finishing",
    desc: "Custom termite-proof woodwork, Italian marble tile fitting, plumbing, electrics, and interior paint.",
    deliverables: ["Termite-Proof Modular Kitchen", "Marble & Tile Flooring", "Astral & Polycab Fitting"],
    iconType: "fitouts",
  },
  {
    num: "06",
    phase: "Step 6",
    title: "Final Audit & Key Handover",
    desc: "Thorough 50-point final quality inspection, house deep cleaning, and ready-to-move-in key handover.",
    deliverables: ["50-Point Quality Certificate", "10-Year Structural Warranty", "Key Handover"],
    iconType: "handover",
  },
];
