"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import TiltCard3D from "@/components/TiltCard3D";
import { useParallax } from "@/lib/animations/useParallax";
import { QUALITY_PROMISES_DATA } from "@/data/qualityPromiseData";

export default function QualityPromise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  useParallax({ triggerRef: sectionRef, targetRef: shape1Ref, yFrom: -50, yTo: 50 });
  useParallax({ triggerRef: sectionRef, targetRef: shape2Ref, yFrom: -100, yTo: 100 });

  const toggleExpandedCard = useCallback((idx: number) => {
    setExpandedCard((prev) => (prev === idx ? null : idx));
  }, []);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-28 bg-white border-b border-border-luxury/50 overflow-hidden"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.2]" />

      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          style={{ background: "radial-gradient(circle at center, rgba(166, 107, 61, 0.05) 0%, transparent 70%)" }}
          className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" 
        />
        <div 
          style={{ background: "radial-gradient(circle at center, rgba(15, 92, 105, 0.06) 0%, transparent 70%)" }}
          className="absolute bottom-[20%] right-[-10%] w-[450px] h-[450px] rounded-full pointer-events-none" 
        />
        
        <div className="absolute top-[8%] left-[5%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SYS_SPEC: 06_STANDARDS // TRUST_WARRANTY
        </div>

        <div
          ref={shape1Ref}
          className="absolute right-[5%] top-[25%] w-[350px] flex flex-col gap-2 items-center opacity-60 pointer-events-none [will-change:transform]"
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
        </div>

        <div
          ref={shape2Ref}
          className="absolute left-[3%] bottom-[12%] w-[240px] h-[240px] rounded-full border border-primary/5 flex items-center justify-center opacity-70 pointer-events-none [will-change:transform]"
        >
          <div className="w-[140px] h-[140px] rounded-full border border-dashed border-primary/5" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {QUALITY_PROMISES_DATA.map((promise, idx) => (
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

                  <div className="mt-auto pt-2 translate-z-10">
                    <button
                      onClick={() => toggleExpandedCard(idx)}
                      className="group/btn flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-accent uppercase hover:text-accent/80 transition-colors focus:outline-none cursor-pointer"
                      aria-expanded={expandedCard === idx}
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
