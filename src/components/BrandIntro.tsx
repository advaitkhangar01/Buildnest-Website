"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { MoveHorizontal, Ruler, Compass, CheckCircle2 } from "lucide-react";
import TiltCard3D from "@/components/TiltCard3D";

const hotspots = [
  {
    id: "ceiling",
    x: 65, // %
    y: 20, // %
    title: "Integrated Shadowline Ceilings",
    spec: "SPEC: SHADOWLINE // REF: DET-09",
    desc: "A 12mm plasterboard recess replaces traditional cornices, creating an architectural shadow gap that makes the ceiling appear to float.",
    align: "bottom-left",
  },
  {
    id: "column",
    x: 80, // %
    y: 50, // %
    title: "Fluted Travertine Column",
    spec: "MAT: TRAVERTINE // HONE: MATTE",
    desc: "Solid Turkish Travertine fluted cladding, precision-machined with a CNC router and hand-honed to a zero-tolerance seamless finish.",
    align: "left",
  },
  {
    id: "baseboard",
    x: 45, // %
    y: 85, // %
    title: "Flush-Mount Baseboards",
    spec: "SPEC: FLUSH-BASE // TOL: +/-0.2MM",
    desc: "Anodized aluminum channels set flush with the drywall, avoiding dust-catching protrusions and maintaining the pure plane of the wall.",
    align: "top-right",
  },
];

export default function BrandIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [sliderPos, setSliderPos] = useState(50); // percentage (0 - 100)
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const activeHotspotData = hotspots.find((h) => h.id === activeHotspot);

  useEffect(() => {
    // On mobile, auto-select the first hotspot on mount so the info block is populated
    if (typeof window !== "undefined" && window.innerWidth < 640 && !activeHotspot) {
      const timer = setTimeout(() => {
        setActiveHotspot(hotspots[0].id);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [activeHotspot]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  // Pointer event handlers for dragging slider
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    if (!isDragging && e.buttons !== 1) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (containerRef.current) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Ignore capture release errors
      }
    }
  };

  const getTooltipClass = (align: string) => {
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
  };

  // Splitting text for staggered animations
  const headingText = "Crafting The Future of Living.";
  const headingWords = headingText.split(" ");

  const paragraph1 = "Buildnest is Nagpur’s premier architecture, interior, and turnkey construction house. Founded on the principles of permanence, precision, and craftsmanship, we design spaces that stand as architectural statements.";
  const p1Words = paragraph1.split(" ");

  const paragraph2 = "Every detail we draw is an exercise in restraint and luxury. We align construction engineering and interior artistry into one seamless turnkey workflow, managing projects from initial CAD specifications to the final key handover.";
  const p2Words = paragraph2.split(" ");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-luxury border-b border-border-luxury/50 overflow-hidden"
    >
      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl [transform:translateZ(0)]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/3 blur-3xl [transform:translateZ(0)]" />
        
        {/* CAD Grid Coordinates */}
        <div className="absolute top-[8%] right-[5%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SEC: 01_INTRO // NAGPUR_CIVIL // 21.1458° N, 79.0882° E
        </div>
        
        {/* Editorial CAD grid line overlays */}
        <div className="hidden lg:block absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-border-luxury/60 pointer-events-none">
          {/* Millimeter ticks along the grid lines */}
          <div className="absolute top-[10%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[20%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[30%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[40%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[50%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[60%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[70%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[80%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          <div className="absolute top-[90%] left-[-3px] w-1.5 h-[1px] bg-accent/40" />
          
          <span className="absolute top-[15%] left-3 text-[8px] font-mono text-accent/50 tracking-wider">H-GRID: 01A</span>
          <span className="absolute top-[85%] left-3 text-[8px] font-mono text-accent/50 tracking-wider">H-GRID: 01B</span>
        </div>

        <div className="hidden lg:block absolute left-0 right-0 top-[200px] h-[1px] bg-border-luxury/45 pointer-events-none">
          <div className="absolute left-[10%] top-[-3px] w-[1px] h-1.5 bg-accent/40" />
          <div className="absolute left-[50%] top-[-3px] w-[1px] h-1.5 bg-accent/40" />
          <div className="absolute left-[80%] top-[-3px] w-[1px] h-1.5 bg-accent/40" />
        </div>

        {/* Geometric Outline Arc (Parallax) */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute -left-[15%] top-[5%] w-[700px] h-[700px] rounded-full border border-accent/5 flex items-center justify-center opacity-60"
        >
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-accent/5 flex items-center justify-center" />
        </motion.div>
        
        {/* Thin vector wireframe rectangle */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute right-[8%] bottom-[10%] w-[220px] h-[320px] border border-primary/5 rounded-[40px] opacity-70"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Index and Section Meta */}
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

          {/* Right Column: Narrative Block */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-10">
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Animated Paragraph 1 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-text-luxury text-[17px] sm:text-[24px] font-medium leading-[1.6] max-w-[65ch]"
              >
                {paragraph1}
              </motion.p>

              {/* Animated Paragraph 2 */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-muted-luxury text-[15px] sm:text-[18px] leading-[1.7] font-normal max-w-[65ch]"
              >
                {paragraph2}
              </motion.p>
            </div>

            {/* Immersive Architectural Photo & CAD Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* CAD-to-Handover Interactive Comparison Slider Container */}
              <div className="sm:col-span-8 flex flex-col gap-2">
                <div 
                  ref={containerRef}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerLeave={handlePointerUp}
                  className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-border-luxury border border-border-luxury select-none touch-none shadow-lg cursor-ew-resize group"
                >
                  {/* Bottom Layer: The Reality Photo */}
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

                  {/* Hotspots Overlay (Visible on the photo side, automatically clipped by the CAD layer z-index) */}
                  {hotspots.map((spot) => {
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
                        >
                          <span className="absolute inline-flex h-6 w-6 rounded-full bg-accent/40 animate-pulse-slow opacity-80" />
                          <span className="absolute inline-flex h-4 w-4 rounded-full bg-accent/20 group-hover:scale-125 transition-transform duration-300" />
                          <span className="relative flex h-3.5 w-3.5 rounded-full bg-accent border border-white/80 items-center justify-center shadow-md">
                            <span className="w-1 h-1 bg-white rounded-full" />
                          </span>
                        </button>

                        {/* Tooltip Content */}
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

                  {/* Top Layer: CAD Blueprint (Clipped from the right based on sliderPos) */}
                  <div 
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                    className="absolute inset-0 bg-[#F4F1EB] z-10 pointer-events-none"
                  >
                    {/* SVG CAD Drafting Wireframe */}
                    <svg
                      viewBox="0 0 800 500"
                      className="w-full h-full object-cover opacity-85 select-none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid slice"
                    >
                      <defs>
                        {/* CAD Grid Lines */}
                        <pattern id="cadGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0F5C69" strokeWidth="0.5" strokeOpacity="0.08"/>
                        </pattern>
                        {/* CAD Hatch Pattern for walls */}
                        <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                          <line x1="0" y1="0" x2="0" y2="8" stroke="#A66B3D" strokeWidth="1" strokeOpacity="0.2" />
                        </pattern>
                      </defs>
                      
                      {/* Grid Background */}
                      <rect width="100%" height="100%" fill="url(#cadGrid)" />

                      {/* Technical CAD Border */}
                      <rect x="15" y="15" width="770" height="470" stroke="#0F5C69" strokeWidth="0.75" strokeOpacity="0.3" />
                      
                      {/* Grid Line Coordinates & Crosshairs */}
                      <line x1="100" y1="15" x2="100" y2="485" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />
                      <line x1="300" y1="15" x2="300" y2="485" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />
                      <line x1="500" y1="15" x2="500" y2="485" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />
                      <line x1="700" y1="15" x2="700" y2="485" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />

                      <line x1="15" y1="100" x2="785" y2="100" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />
                      <line x1="15" y1="250" x2="785" y2="250" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />
                      <line x1="15" y1="400" x2="785" y2="400" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="3 6" strokeOpacity="0.15" />

                      {/* Ceiling Shadowline Detail (matching hotspot 1 at left:65%, top:20% -> x:520, y:100) */}
                      <path d="M 450 100 L 514 100 M 526 100 L 590 100" stroke="#0F5C69" strokeWidth="1.5" strokeOpacity="0.6" />
                      <path d="M 450 90 L 514 90 L 514 110 L 526 110 L 526 90 L 590 90" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.7" fill="url(#hatch)" />
                      <circle cx="520" cy="100" r="1.5" fill="#A66B3D" />
                      <text x="520" y="80" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.6" textAnchor="middle" letterSpacing="0.5">SHADOWLINE DET_09</text>

                      {/* Fluted Travertine Column (matching hotspot 2 at left:80%, top:50% -> x:640, y:250) */}
                      <circle cx="640" cy="250" r="28" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.7" />
                      <circle cx="640" cy="250" r="24" stroke="#0F5C69" strokeWidth="0.75" strokeDasharray="2 2" strokeOpacity="0.5" />
                      {/* Radial fluting cuts */}
                      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
                        const rad = (deg * Math.PI) / 180;
                        const x1 = 640 + Math.cos(rad) * 24;
                        const y1 = 250 + Math.sin(rad) * 24;
                        const x2 = 640 + Math.cos(rad) * 28;
                        const y2 = 250 + Math.sin(rad) * 28;
                        return (
                          <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#A66B3D" strokeWidth="0.75" strokeOpacity="0.6" />
                        );
                      })}
                      {/* Center Crosshairs */}
                      <line x1="600" y1="250" x2="680" y2="250" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.3" />
                      <line x1="640" y1="210" x2="640" y2="290" stroke="#0F5C69" strokeWidth="0.5" strokeDasharray="4 4" strokeOpacity="0.3" />
                      <circle cx="640" cy="250" r="1.5" fill="#0F5C69" fillOpacity="0.6" />
                      <text x="640" y="295" fontFamily="monospace" fontSize="7" fill="#A66B3D" fillOpacity="0.8" textAnchor="middle" letterSpacing="0.5">COL_DET // TRAVERTINE</text>

                      {/* Flush Baseboard Detail (matching hotspot 3 at left:45%, top:85% -> x:360, y:425) */}
                      <line x1="280" y1="425" x2="440" y2="425" stroke="#0F5C69" strokeWidth="1.25" strokeOpacity="0.6" />
                      <path d="M 330 425 L 354 425 L 354 415 L 366 415 L 366 425 L 390 425" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.7" fill="url(#hatch)" />
                      <circle cx="360" cy="425" r="1.5" fill="#A66B3D" />
                      <text x="360" y="442" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.6" textAnchor="middle" letterSpacing="0.5">FLUSH-BASE DET // TOL: +/-0.2MM</text>

                      {/* Dimension Strings */}
                      {/* Horizontal dimension from Baseboard (360) to Column (640) */}
                      <line x1="360" y1="350" x2="640" y2="350" stroke="#A66B3D" strokeWidth="0.75" strokeOpacity="0.7" />
                      <line x1="360" y1="345" x2="360" y2="355" stroke="#A66B3D" strokeWidth="0.75" strokeOpacity="0.7" />
                      <line x1="640" y1="345" x2="640" y2="355" stroke="#A66B3D" strokeWidth="0.75" strokeOpacity="0.7" />
                      {/* Slanted ticks at endpoints */}
                      <line x1="357" y1="353" x2="363" y2="347" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.8" />
                      <line x1="637" y1="353" x2="643" y2="347" stroke="#A66B3D" strokeWidth="1.25" strokeOpacity="0.8" />
                      <text x="500" y="342" fontFamily="monospace" fontSize="8" fill="#A66B3D" fillOpacity="0.9" textAnchor="middle" fontWeight="bold">2800 mm</text>

                      {/* Technical Info Blocks / Legend */}
                      <text x="30" y="45" fontFamily="monospace" fontSize="8" fill="#0F5C69" fillOpacity="0.5" fontWeight="bold">DWG NO: BN-01-INTRO</text>
                      <text x="30" y="60" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.4">SHEET: 01 OF 08</text>
                      <text x="30" y="75" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.4">SYSTEM: STRUCTURAL_DETAIL</text>

                      {/* CAD Stamp / Title Block */}
                      <g transform="translate(30, 200)">
                        <rect x="0" y="0" width="120" height="65" fill="#FCFBF9" stroke="#0F5C69" strokeWidth="0.75" strokeOpacity="0.3" />
                        <line x1="0" y1="20" x2="120" y2="20" stroke="#0F5C69" strokeWidth="0.5" strokeOpacity="0.3" />
                        <text x="6" y="13" fontFamily="monospace" fontSize="7" fill="#0F5C69" fillOpacity="0.8" fontWeight="bold">BUILDNEST ARCHITECTS</text>
                        <text x="6" y="32" fontFamily="monospace" fontSize="6" fill="#0F5C69" fillOpacity="0.6">PROJECT: VILLA_NAGPUR</text>
                        <text x="6" y="44" fontFamily="monospace" fontSize="6" fill="#0F5C69" fillOpacity="0.6">DRAWN: R. SHAHOO</text>
                        <text x="6" y="56" fontFamily="monospace" fontSize="6" fill="#0F5C69" fillOpacity="0.6">SCALE: 1:50  UNIT: mm</text>
                      </g>
                    </svg>
                  </div>

                  {/* Vertical Comparison Divider Line and Drag Handle */}
                  <div 
                    style={{ left: `${sliderPos}%` }}
                    className="absolute top-0 bottom-0 w-[1.5px] bg-accent/80 z-20 pointer-events-none -translate-x-[0.75px] shadow-[0_0_8px_rgba(166,107,61,0.5)]"
                  >
                    {/* Floating Center Drag Thumb */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent border-2 border-white shadow-xl flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform duration-200">
                      <MoveHorizontal className="w-4 h-4 text-white animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Sub-slider CAD metadata labels */}
                <div className="flex justify-between items-center px-2 text-[9px] font-mono text-muted-luxury uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent/40" />
                    CAD Specification (x: {(sliderPos * 80).toFixed(0)}mm)
                  </span>
                  <span className="text-[8px] font-semibold text-accent/80 bg-accent/5 px-2 py-0.5 rounded-full">
                    Drag Slider to Reveal Reality
                  </span>
                  <span>
                    Key Handover (Reality)
                  </span>
                </div>

                {/* Active Hotspot Info Card on Mobile */}
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

              {/* Stats Card wrapped in 3D Tilt */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="sm:col-span-4"
              >
                <TiltCard3D maxTilt={7} className="h-full">
                  <div className="border border-border-luxury rounded-[24px] p-6 flex flex-col justify-between bg-white/80 backdrop-blur-md relative overflow-hidden shadow-3d-md preserve-3d h-full specular-border">
                    {/* CAD style corner brackets */}
                    <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-accent/25" />
                    <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-accent/25" />
                    <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-accent/25" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-accent/25" />

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
