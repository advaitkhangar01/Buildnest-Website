export interface Hotspot {
  id: string;
  x: number; // %
  y: number; // %
  title: string;
  spec: string;
  desc: string;
  align: "bottom-left" | "left" | "top-right" | "default";
}

export const HOTSPOTS_DATA: Hotspot[] = [
  {
    id: "ceiling",
    x: 65,
    y: 20,
    title: "48-Hour Waterproofing Test",
    spec: "ZERO LEAKAGE // 100% FLOOD TESTED",
    desc: "Every roof slab and bathroom undergoes 48-hour continuous water flood testing before tiling, ensuring zero wall dampness or ceiling paint peeling.",
    align: "bottom-left",
  },
  {
    id: "column",
    x: 80,
    y: 50,
    title: "Tata Tiscon RCC Structure",
    spec: "FE-550 SD STEEL // ULTRATECH 53",
    desc: "Heavy-duty foundation and column rebar bound with laser-checked stirrup spacing to guarantee structural stability against soil settlement and earthquakes.",
    align: "left",
  },
  {
    id: "baseboard",
    x: 45,
    y: 85,
    title: "Leak-Proof Concealed Piping",
    spec: "ASTRAL CPVC // HIGH PRESSURE TEST",
    desc: "Lead-free Astral CPVC pipes tested under extreme hydraulic pressure before wall plastering—preventing pipe bursts and hidden wall leaks for decades.",
    align: "top-right",
  },
];

export const BRAND_INTRO_COPY = {
  headingText: "Building Your Home Should Be a Proud Milestone, Not a Daily Stress.",
  paragraph1: "Building your family home is a once-in-a-lifetime journey. Yet most homeowners in Nagpur end up dealing with endless contractor delays, surprise price hikes halfway through, and low-quality materials.",
  paragraph2: "At Buildnest, residential construction is our core specialty. We act as your single point of responsibility—managing house plans, NMC/NIT approvals, civil construction, and luxury interiors under one fixed-price contract. You focus on your business and family; we handle every brick with complete transparency.",
};
