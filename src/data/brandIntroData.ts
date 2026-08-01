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
    title: "Integrated Shadowline Ceilings",
    spec: "SPEC: SHADOWLINE // REF: DET-09",
    desc: "A 12mm plasterboard recess replaces traditional cornices, creating an architectural shadow gap that makes the ceiling appear to float.",
    align: "bottom-left",
  },
  {
    id: "column",
    x: 80,
    y: 50,
    title: "Fluted Travertine Column",
    spec: "MAT: TRAVERTINE // HONE: MATTE",
    desc: "Solid Turkish Travertine fluted cladding, precision-machined with a CNC router and hand-honed to a zero-tolerance seamless finish.",
    align: "left",
  },
  {
    id: "baseboard",
    x: 45,
    y: 85,
    title: "Flush-Mount Baseboards",
    spec: "SPEC: FLUSH-BASE // TOL: +/-0.2MM",
    desc: "Anodized aluminum channels set flush with the drywall, avoiding dust-catching protrusions and maintaining the pure plane of the wall.",
    align: "top-right",
  },
];

export const BRAND_INTRO_COPY = {
  headingText: "Crafting The Future of Living.",
  paragraph1: "Buildnest is Nagpur’s premier architecture, interior, and turnkey construction house. Founded on the principles of permanence, precision, and craftsmanship, we design spaces that stand as architectural statements.",
  paragraph2: "Every detail we draw is an exercise in restraint and luxury. We align construction engineering and interior artistry into one seamless turnkey workflow, managing projects from initial CAD specifications to the final key handover.",
};
