export interface PromiseDetail {
  label: string;
  desc: string;
}

export const QUALITY_PROMISES_DATA: QualityPromiseItem[] = [
  {
    title: "120+ Quality Checks Before Every Stage",
    description: "Every foundation pour, column, and brick wall undergoes multi-stage structural testing overseen by senior engineers so your home stays crack-free and damp-free for decades.",
    details: [
      { label: "7, 14 & 28-Day Concrete Cube Tests", desc: "Lab testing of concrete samples to guarantee maximum strength." },
      { label: "Laser-Guided Column Alignment", desc: "Ensures vertical columns are 100% straight and balanced." },
      { label: "Exact Steel Cover Block Check", desc: "Prevents steel rebar from rusting inside concrete walls." },
      { label: "48-Hour Waterproofing Flood Test", desc: "Testing all roof slabs and bathrooms before laying floor tiles." },
      { label: "Digital Wall Spirit Level Checks", desc: "Guarantees perfectly square masonry walls for flawless tile alignment." }
    ]
  },
  {
    title: "Complete Material Transparency & Store Bills",
    description: "We don't just promise top brands—we prove it. You receive store purchase bills, weight receipts, and manufacturer quality certificates for every delivery.",
    details: [
      { label: "Store Purchase Bills Provided", desc: "Original invoices shared for every truckload of steel and cement." },
      { label: "24/7 Live Site CCTV Feeds", desc: "View live camera streams of your home construction anytime on your phone." },
      { label: "Manufacturer Strength Certificates", desc: "Certified steel & cement strength reports from the factory." },
      { label: "Direct Weighbridge Receipts", desc: "Exact weight validation logs for every steel delivery." },
      { label: "Weekly WhatsApp Progress Updates", desc: "Photos, video walk-throughs, and work logs delivered every Saturday." }
    ]
  },
  {
    title: "100% Certified Brand Materials Only",
    description: "We only use India's most trusted building brands. No local unbranded steel, no cheap cement, and no sub-standard piping.",
    details: [
      { label: "Structural Rebar Steel", desc: "Tata Tiscon SD, JSW Neosteel (Fe-550 SD Grade)" },
      { label: "Grade 53 Construction Cement", desc: "UltraTech, Ambuja, ACC Gold" },
      { label: "Concealed Plumbing & Piping", desc: "Astral, Ashirvad (Lead-free CPVC/UPVC)" },
      { label: "Flame-Retardant Wiring", desc: "Finolex, Polycab, Havells" },
      { label: "Termite-Proof Teak & Wood", desc: "Seasoned Teakwood & BWR-Grade Plywood" }
    ]
  },
];

export interface QualityPromiseItem {
  title: string;
  description: string;
  details: PromiseDetail[];
}
