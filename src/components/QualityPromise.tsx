"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import TiltCard3D from "@/components/TiltCard3D";

const promises = [
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

export default function QualityPromise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-border-luxury/50 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.2]" />

      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full bg-primary/4 blur-[110px] pointer-events-none" />
        
        {/* CAD Grid Coordinates */}
        <div className="absolute top-[8%] left-[5%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SYS_SPEC: 06_STANDARDS // TRUST_WARRANTY
        </div>

        {/* Crisp CAD Dimension Line Graphic */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute right-[5%] top-[25%] w-[350px] flex flex-col gap-2 items-center opacity-60"
        >
          <div className="w-full flex items-center justify-between text-text-luxury/20 text-[9px] font-mono tracking-[0.15em] uppercase">
            <span>START_STAND</span>
            <span>DIS: 1440MM</span>
            <span>END_STAND</span>
          </div>
          <div className="w-full h-[1px] bg-text-luxury/10 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        </motion.div>

        {/* Floating concentric outline circles */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute left-[3%] bottom-[12%] w-[240px] h-[240px] rounded-full border border-primary/5 flex items-center justify-center opacity-70"
        >
          <div className="w-[140px] h-[140px] rounded-full border border-dashed border-primary/5" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        
        {/* Top-level Promise Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 lg:mb-14">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-4">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              06 / Standards
            </span>
            <h2 className="section-heading text-[clamp(36px,5vw,56px)] text-text-luxury leading-[1.1] font-bold">
              The Quality Promise. Guaranteed.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-muted-luxury text-[14px] sm:text-[15px] leading-[1.75] font-light">
              We stand behind the engineering of our structures. Buildnest offers long-term warranties on structural stability and civil waterproofing.
            </p>
          </div>
        </div>

        {/* 3-Column Quality Promise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promises.map((promise, idx) => (
            <motion.div
              key={promise.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <TiltCard3D maxTilt={7} className="h-full">
                <div className="border border-border-luxury rounded-[24px] p-8 bg-bg-luxury/80 backdrop-blur-md shadow-3d-md specular-border flex flex-col gap-6 h-full preserve-3d">
                  {/* Graphic Element resembling CAD dimension line */}
                  <div className="flex items-center gap-4 translate-z-10">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <div className="flex-1 h-[1px] bg-border-luxury" />
                    <span className="text-[10px] font-bold tracking-[0.1em] text-muted-luxury/40 font-heading">
                      SPEC: 0{idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 translate-z-20">
                    <h3 className="text-[20px] font-bold tracking-tight text-text-luxury font-heading">
                      {promise.title}
                    </h3>
                    <p className="text-muted-luxury text-[14px] leading-[1.65] font-light translate-z-10">
                      {promise.description}
                    </p>
                  </div>

                  {/* Expand Trigger Button */}
                  <div className="mt-auto pt-2 translate-z-10">
                    <button
                      onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
                      className="group/btn flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-accent uppercase hover:text-accent/80 transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{expandedCard === idx ? "Hide Details" : "View Detailed Specs"}</span>
                      <motion.svg
                        animate={{ rotate: expandedCard === idx ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-3.5 h-3.5 stroke-[2.5px] stroke-current fill-none"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </motion.svg>
                    </button>
                  </div>

                  {/* Expandable Specifications Drawer */}
                  <AnimatePresence initial={false}>
                    {expandedCard === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden translate-z-10"
                      >
                        <div className="pt-6 border-t border-border-luxury/60 flex flex-col gap-4">
                          <ul className="flex flex-col gap-4 text-[13px] text-muted-luxury font-light">
                            {promise.details.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex flex-col gap-1 text-left">
                                <div className="flex items-center gap-2 font-semibold text-text-luxury">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent/70 shrink-0" />
                                  <span>{item.label}</span>
                                </div>
                                <span className="pl-3.5 text-muted-luxury/85 leading-relaxed">
                                  {item.desc}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
