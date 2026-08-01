"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect, useMemo, useCallback } from "react";
import { MoveHorizontal, Ruler, Compass, CheckCircle2 } from "lucide-react";
import TiltCard3D from "@/components/TiltCard3D";
import { useParallax } from "@/lib/animations/useParallax";
import { HOTSPOTS_DATA, BRAND_INTRO_COPY, Hotspot } from "@/data/brandIntroData";

export default function BrandIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const containerRectRef = useRef<DOMRect | null>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);

  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  useParallax({ triggerRef: sectionRef, targetRef: shape1Ref, yFrom: -80, yTo: 80 });
  useParallax({ triggerRef: sectionRef, targetRef: shape2Ref, yFrom: -40, yTo: 40 });

  const activeHotspotData = useMemo(() => {
    return HOTSPOTS_DATA.find((h) => h.id === activeHotspot);
  }, [activeHotspot]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 640 && !activeHotspot) {
      setActiveHotspot(HOTSPOTS_DATA[0].id);
    }
  }, [activeHotspot]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    containerRectRef.current = rect;
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
    if (e.currentTarget.hasPointerCapture && !e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = containerRectRef.current;
    if (!rect) return;
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, [isDragging]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    setIsDragging(false);
    containerRectRef.current = null;
    if (containerRef.current && e.currentTarget.hasPointerCapture && e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Safe capture release
      }
    }
  }, []);

  const getTooltipClass = useCallback((align: string) => {
    switch (align) {
      case "bottom-left":
        return "absolute top-8 right-2 w-[240px] sm:w-[280px] bg-bg-luxury/95 backdrop-blur-md border border-accent/25 rounded-xl p-4 shadow-xl z-30 text-left md:right-0";
      case "left":
        return "absolute top-1/2 right-8 -translate-y-1/2 w-[240px] sm:w-[280px] bg-bg-luxury/95 backdrop-blur-md border border-accent/25 rounded-xl p-4 shadow-xl z-30 text-left";
      case "top-right":
        return "absolute bottom-8 left-2 w-[240px] sm:w-[280px] bg-bg-luxury/95 backdrop-blur-md border border-accent/25 rounded-xl p-4 shadow-xl z-30 text-left md:left-0";
      default:
        return "absolute top-8 left-1/2 -translate-x-1/2 w-[240px] sm:w-[280px] bg-bg-luxury/95 backdrop-blur-md border border-accent/25 rounded-xl p-4 shadow-xl z-30 text-left";
    }
  }, []);

  const headingWords = useMemo(() => BRAND_INTRO_COPY.headingText.split(" "), []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-luxury border-b border-border-luxury/50 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div 
          style={{ background: "radial-gradient(circle at center, rgba(15, 92, 105, 0.05) 0%, transparent 70%)" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full [transform:translateZ(0)]" 
        />
        <div 
          style={{ background: "radial-gradient(circle at center, rgba(166, 107, 61, 0.05) 0%, transparent 70%)" }}
          className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full [transform:translateZ(0)]" 
        />
        
        <div className="absolute top-[8%] right-[5%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SEC: 01_INTRO // NAGPUR_CIVIL // 21.1458° N, 79.0882° E
        </div>
        
        <div className="hidden lg:block absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-border-luxury/60 pointer-events-none">
          <div className="absolute top-[10%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[50%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[90%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <span className="absolute top-[15%] left-3 text-[8px] font-mono text-accent/50 tracking-wider">H-GRID: 01A</span>
        </div>

        <div
          ref={shape1Ref}
          className="absolute -left-[15%] top-[5%] w-[700px] h-[700px] rounded-full border border-accent/5 flex items-center justify-center opacity-60 pointer-events-none [will-change:transform]"
        >
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-accent/5 flex items-center justify-center" />
        </div>
        
        <div
          ref={shape2Ref}
          className="absolute right-[8%] bottom-[10%] w-[220px] h-[320px] border border-primary/5 rounded-[40px] opacity-70 pointer-events-none [will-change:transform]"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent inline-block" />
              01 / Introduction
            </span>
            <h2 className="section-heading text-[clamp(32px,5.5vw,68px)] text-text-luxury leading-[1.08] font-bold tracking-tight">
              {headingWords.map((word, idx) => (
                <span key={idx} className="inline-block overflow-hidden mr-[0.22em] pb-1">
                  <motion.span
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h2>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1">
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-text-luxury uppercase">
                <Compass className="w-4 h-4 text-accent shrink-0" />
                Precision Engineered
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-border-luxury hidden sm:inline-block" />
              <span className="flex items-center gap-1.5 font-mono text-xs font-bold text-text-luxury uppercase">
                <Ruler className="w-4 h-4 text-accent shrink-0" />
                Bespoke Craft
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-10">
            <div className="flex flex-col gap-4 sm:gap-5">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-text-luxury text-[17px] sm:text-[24px] font-medium leading-[1.6] max-w-[65ch]"
              >
                {BRAND_INTRO_COPY.paragraph1}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-muted-luxury text-[15px] sm:text-[18px] leading-[1.7] font-normal max-w-[65ch]"
              >
                {BRAND_INTRO_COPY.paragraph2}
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              <div className="sm:col-span-8 flex flex-col gap-2">
                <div 
                  ref={containerRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-border-luxury border border-border-luxury select-none touch-none shadow-lg cursor-ew-resize group"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src="/images/about_detail.webp"
                      alt="Minimalist Architectural Detail"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  </div>

                  {HOTSPOTS_DATA.map((spot) => {
                    const isVisible = (spot.x > sliderPos);
                    
                    return (
                      <div
                        key={spot.id}
                        style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 z-10 ${
                          isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                        }`}
                      >
                        <button
                          onMouseEnter={() => setActiveHotspot(spot.id)}
                          onMouseLeave={() => setActiveHotspot(null)}
                          onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                          className="relative flex h-6 w-6 items-center justify-center cursor-pointer group focus:outline-none"
                          aria-label={`Inspect hotspot ${spot.title}`}
                        >
                          <span className="absolute inline-flex h-6 w-6 rounded-full bg-accent/40 animate-pulse-slow opacity-80" />
                          <span className="absolute inline-flex h-4 w-4 rounded-full bg-accent/20 group-hover:scale-125 transition-transform duration-300" />
                          <span className="relative flex h-3.5 w-3.5 rounded-full bg-accent border border-white/80 items-center justify-center shadow-md">
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </span>
                        </button>

                        <AnimatePresence>
                          {activeHotspot === spot.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.95, y: spot.align.includes("top") ? -6 : 6 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.95, y: spot.align.includes("top") ? -6 : 6 }}
                              transition={{ duration: 0.2 }}
                              className={`${getTooltipClass(spot.align)} hidden sm:block`}
                            >
                              <div className="flex flex-col gap-1.5">
                                <span className="font-mono text-[9px] text-accent font-bold tracking-wider uppercase">
                                  {spot.spec}
                                </span>
                                <h4 className="font-heading text-[13px] font-bold text-text-luxury leading-tight">
                                  {spot.title}
                                </h4>
                                <p className="text-muted-luxury text-[11px] leading-relaxed font-light">
                                  {spot.desc}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}

                  <div 
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    className="absolute inset-0 bg-[#F4F1EB] z-10 pointer-events-none"
                  >
                    <svg
                      viewBox="0 0 800 500"
                      className="w-full h-full object-cover opacity-85 select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <defs>
                        <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F5C69" strokeWidth="0.5" strokeOpacity="0.08"/>
                        </pattern>
                        <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="0" y2="8" stroke="#A66B3D" strokeWidth="1" strokeOpacity="0.2" />
                        </pattern>
                      </defs>
                      
                      <rect width="100%" height="100%" fill="url(#cadGrid)" />
                      <rect x="15" y="15" width="770" height="470" stroke="#0F5C69" strokeWidth="0.75" strokeOpacity="0.3" />

                      <path d="M 450 100 L 514 100 M 526 100 L 590 100" stroke="#0F5C69" strokeWidth="1.5" strokeOpacity="0.6" />
                      <path d="M 450 90 L 514 90 L 514 110 L 526 110 L 526 90 L 590 90" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.7" fill="url(#hatch)" />
                      <circle cx="520" cy="100" r="1.5" fill="#A66B3D" />
                      <text x="520" y="80" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.6" textAnchor="middle" letterSpacing="0.5">SHADOWLINE DET_09</text>

                      <circle cx="640" cy="250" r="28" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.7" />
                      <circle cx="640" cy="250" r="24" stroke="#0F5C69" strokeWidth="0.75" strokeDasharray="2 2" strokeOpacity="0.5" />
                      <circle cx="640" cy="250" r="1.5" fill="#0F5C69" fillOpacity="0.6" />
                      <text x="640" y="295" fontFamily="monospace" fontSize="7" fill="#A66B3D" fillOpacity="0.8" textAnchor="middle" letterSpacing="0.5">COL_DET // TRAVERTINE</text>

                      <line x1="280" y1="425" x2="440" y2="425" stroke="#0F5C69" strokeWidth="1.25" strokeOpacity="0.6" />
                      <path d="M 330 425 L 354 425 L 354 415 L 366 415 L 366 425 L 390 425" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.7" fill="url(#hatch)" />
                      <circle cx="360" cy="425" r="1.5" fill="#A66B3D" />
                      <text x="360" y="442" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.6" textAnchor="middle" letterSpacing="0.5">FLUSH-BASE DET // TOL: +/-0.2MM</text>
                    </svg>
                  </div>

                  <div 
                    style={{ left: `${sliderPos}%` }}
                    className="absolute top-0 bottom-0 w-[1.5px] bg-accent/80 z-20 pointer-events-none -translate-x-[0.75px] shadow-[0_0_8px_rgba(166,107,61,0.5)]"
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200">
                      <MoveHorizontal className="w-4 h-4 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center px-2 text-[9px] font-mono text-muted-luxury uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent/40" />
                    CAD Specification (x: {(sliderPos * 80).toFixed(0)}mm)
                  </span>
                  <span className="text-[8px] font-semibold text-accent/80 bg-accent/5 px-2 py-0.5 rounded-full">
                    Drag Slider to Reveal Reality
                  </span>
                  <span>Key Handover (Reality)</span>
                </div>

                <div className="sm:hidden mt-4">
                  <AnimatePresence mode="wait">
                    {activeHotspotData ? (
                      <motion.div
                        key={activeHotspotData.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/90 backdrop-blur-md border border-accent/25 rounded-2xl p-5 shadow-md text-left"
                      >
                        <span className="font-mono text-[9px] text-accent font-bold tracking-wider uppercase block mb-1">
                          {activeHotspotData.spec}
                        </span>
                        <h4 className="font-heading text-[14px] font-bold text-text-luxury leading-tight mb-2">
                          {activeHotspotData.title}
                        </h4>
                        <p className="text-muted-luxury text-[12px] leading-relaxed font-light">
                          {activeHotspotData.desc}
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="placeholder"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="border border-border-luxury border-dashed rounded-2xl p-5 text-center"
                      >
                        <p className="text-muted-luxury text-[12px] font-light">
                          Tap any hotspot pulse indicator on the reality view to inspect structural specifications.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="sm:col-span-4"
              >
                <TiltCard3D maxTilt={7} className="h-full">
                  <div className="border border-border-luxury rounded-[24px] p-6 flex flex-col justify-between bg-white/80 backdrop-blur-md relative overflow-hidden shadow-3d-md preserve-3d h-full specular-border">
                    <div className="flex flex-col gap-4 preserve-3d">
                      <div className="flex items-center justify-between border-b border-border-luxury/50 pb-2 translate-z-10">
                        <span className="text-[10px] font-mono tracking-[0.15em] text-accent uppercase font-bold">
                          Specification Sheet
                        </span>
                        <span className="text-[8px] font-mono text-muted-luxury">REF: BN-SPEC-01</span>
                      </div>
                      
                      <div className="flex flex-col gap-1 translate-z-20">
                        <span className="text-[9px] font-mono tracking-wider text-muted-luxury uppercase">
                          01 / Location
                        </span>
                        <span className="text-[14px] font-bold text-text-luxury uppercase font-heading tracking-wide">
                          Nagpur, India
                        </span>
                        <span className="text-[8px] font-mono text-accent/60">21.1458° N, 79.0882° E</span>
                      </div>

                      <div className="w-full h-[1px] bg-border-luxury/50 my-0.5" />

                      <div className="flex flex-col gap-1 translate-z-20">
                        <span className="text-[9px] font-mono tracking-wider text-muted-luxury uppercase">
                          02 / Design Paradigm
                        </span>
                        <span className="text-[14px] font-bold text-text-luxury uppercase font-heading tracking-wide">
                          Modernist / Minimal
                        </span>
                        <span className="text-[8px] font-mono text-accent/60 font-medium">Restraint &amp; Permanence</span>
                      </div>

                      <div className="w-full h-[1px] bg-border-luxury/50 my-0.5" />

                      <div className="flex flex-col gap-1 translate-z-20">
                        <span className="text-[9px] font-mono tracking-wider text-muted-luxury uppercase">
                          03 / Focus Areas
                        </span>
                        <span className="text-[14px] font-bold text-text-luxury uppercase font-heading tracking-wide">
                          Architecture &amp; Turnkey
                        </span>
                        <span className="text-[8px] font-mono text-accent/60">Specs to Key Handover</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-2 translate-z-30">
                      <div className="flex justify-between text-[8px] font-mono text-muted-luxury">
                        <span>TOLERANCE THRESHOLD</span>
                        <span className="flex items-center gap-1 font-bold text-accent">
                          <CheckCircle2 className="w-2.5 h-2.5 text-accent" />
                          &lt;0.5mm PRECISION
                        </span>
                      </div>
                      <div className="w-full h-1 bg-border-luxury rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: "99.98%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          className="h-full bg-accent"
                        />
                      </div>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
