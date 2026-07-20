"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import TiltCard3D from "@/components/TiltCard3D";

const parameters = [
  {
    title: "Engineering Precision",
    desc: "We build to structural tolerances tighter than the industry standard. Every concrete pour, steel reinforcement joint, and masonry line undergoes laser-level inspection.",
  },
  {
    title: "Absolute Cost Lock",
    desc: "Our turnkey models operate under strict cost locking. Once the Bill of Quantities (BOQ) is signed, we absorb all material price volatility. No escalation fees, ever.",
  },
  {
    title: "Bespoke Material Curation",
    desc: "We deal directly with quarries and direct importers to source A-grade premium woods, custom stones, and structural steel, avoiding retail markups and sub-standard grades.",
  },
];

export default function WhyBuildnest() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-110, 110]);

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-bg-luxury border-b border-border-luxury/50 overflow-hidden"
    >
      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/4 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-accent/3 blur-[110px] pointer-events-none" />
        
        {/* CAD Grid Coordinates */}
        <div className="absolute top-[12%] right-[8%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SYS_VAL: 05_VALUES // LEGACY_ENG
        </div>

        {/* Floating Overlapping Isometric Rectangles */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute left-[8%] top-[12%] w-[250px] h-[250px] border border-primary/5 rounded-[40px] rotate-[15deg] opacity-70 flex items-center justify-center"
        >
          <div className="w-[180px] h-[180px] border border-primary/5 rounded-[30px] rotate-[15deg]" />
        </motion.div>

        {/* Secondary floating vector */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute right-[12%] bottom-[12%] w-[280px] h-[280px] rounded-full border border-dashed border-accent/10 opacity-60"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Title column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              05 / Values
            </span>
            <h2 className="section-heading text-[clamp(36px,5vw,56px)] text-text-luxury leading-[1.1] font-bold">
              Engineering A Legacy.
            </h2>
            <p className="text-muted-luxury text-[15px] leading-[1.8] font-light max-w-[30ch]">
              We work with structural integrity and design intent as our twin pillars. Here is how we enforce quality.
            </p>
          </div>

          {/* Grid points column */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {parameters.map((param, idx) => (
              <motion.div
                key={param.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <TiltCard3D maxTilt={8} className="h-full">
                  <div className="p-6 bg-white rounded-2xl border border-border-luxury shadow-3d-sm specular-border flex flex-col gap-4 text-left h-full preserve-3d">
                    <span className="text-[10px] font-mono tracking-wider text-accent font-bold uppercase translate-z-10">0{idx + 1} {"//"} VAL</span>
                    <h3 className="text-[20px] font-bold text-text-luxury font-heading tracking-tight translate-z-20">
                      {param.title}
                    </h3>
                    <p className="text-muted-luxury text-[14px] leading-[1.75] font-light translate-z-10">
                      {param.desc}
                    </p>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
