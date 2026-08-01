export interface PromiseDetail {
  label: string;
  desc: string;
}

export interface QualityPromiseItem {
  title: string;
  description: string;
  details: PromiseDetail[];
}

export const QUALITY_PROMISES_DATA: QualityPromiseItem[] = [
  {
    title: "120+ Quality checkpoints",
    description: "From concrete slump tests to structural alignment audits, we execute a rigorous, multi-stage inspection plan overseen by certified structural consultants.",
    details: [
      { label: "Concrete Slump & Cube Tests", desc: "Compression testing at 7, 14, and 28 days." },
      { label: "Structural Alignment", desc: "Laser-guided vertical column and slab levelling audits." },
      { label: "Cover Block Verification", desc: "Ensures exact rebar positioning prior to concrete pours." },
      { label: "48-Hour Waterproofing Test", desc: "Flood testing of bathrooms, balconies, and slabs." },
      { label: "Wall Plumb & Squareness", desc: "Digital spirit level verification of all masonry walls." }
    ]
  },
  {
    title: "Absolute Supply Transparency",
    description: "Every metric ton of steel and bag of cement is tracked. Clients receive material test certificates and have full access to live site CCTV feeds.",
    details: [
      { label: "BuildTrack CRM Portal", desc: "24/7 client dashboard tracking material dispatches and inventory." },
      { label: "Live CCTV Streams", desc: "High-definition camera feeds overlooking concrete and steel storage zones." },
      { label: "Mill Test Certificates", desc: "Certified manufacturer strength/metallurgy reports uploaded per batch." },
      { label: "Digital Weighbridge Receipts", desc: "Exact tonnage validation logs shared instantly." },
      { label: "Blockchain Ledger", desc: "Immutable supply-chain stamps tracking cement and reinforcement steel." }
    ]
  },
  {
    title: "Certified A-Grade Materials Only",
    description: "We use only FE-550 grade reinforcement bars, OPC 53 concrete blends, premium lead-free plumbing systems, and kiln-dried seasoned hardwoods.",
    details: [
      { label: "Structural Steel (Fe-550 SD)", desc: "Tata Tiscon SD, JSW Neosteel" },
      { label: "Cement (OPC 53)", desc: "UltraTech, Ambuja, ACC Gold" },
      { label: "Plumbing & Pipes", desc: "Astral, Ashirvad (Lead-free CPVC/UPVC)" },
      { label: "Electrical Wiring", desc: "Finolex, Polycab, Havells" },
      { label: "Hardwoods & Timber", desc: "Premium Kiln-dried Teak & Seasoned Sal wood" }
    ]
  },
];
