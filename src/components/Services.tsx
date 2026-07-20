"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import TiltCard3D from "@/components/TiltCard3D";

const services = [
  {
    index: "01",
    title: "Architecture",
    tagline: "Spatial choreography & modern forms.",
    description:
      "Bespoke spatial design combining structural expression, contextual response, and timeless modernist forms.",
    image: "/images/services/architecture.webp",
    highlights: [
      "Contextual & bioclimatic site analysis",
      "High-fidelity 3D modeling & cinematic VR",
      "Comprehensive municipal permit blueprints",
      "Curated masonry & structural specifications"
    ],
    technicalSpecs: { label: "Design Tolerance", value: "±0.00mm" },
    icon: (
      <svg className="w-6 h-6 stroke-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18M12 3v18M4 4l16 16M20 4L4 20" opacity="0.15" />
        <rect x="5" y="5" width="14" height="14" rx="2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v8M8 12h8" />
        <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Construction",
    tagline: "Precision civil engineering & load dynamics.",
    description:
      "Precision civil engineering utilizing high-grade materials, structural safety audits, and flawless masonry.",
    image: "/images/services/construction.webp",
    highlights: [
      "High-strength reinforced concrete core",
      "Micro-precision masonry alignment checks",
      "Seismic safety load audits & grading",
      "Advanced waterproofing & thermal insulation"
    ],
    technicalSpecs: { label: "Concrete Grade", value: "M25/M30 Standard" },
    icon: (
      <svg className="w-6 h-6 stroke-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 18h18M6 18V6a2 2 0 012-2h8a2 2 0 012 2v12" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9h12M6 14h12" />
        <circle cx="12" cy="6" r="1.5" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Interior Design",
    tagline: "Curated material palettes & bespoke millwork.",
    description:
      "Curated material palettes, custom millwork, ambient lighting design, and ergonomic luxury space planning.",
    image: "/images/services/interior.webp",
    highlights: [
      "Ergonomic high-end space planning",
      "Bespoke veneer, marble, & brass millwork",
      "Custom luxury ambient lighting choreography",
      "Premium upholstery & hardware sourcing"
    ],
    technicalSpecs: { label: "Veneer Finish", value: "100% Polyurethane" },
    icon: (
      <svg className="w-6 h-6 stroke-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 19h16M7 19v-8a3 3 0 016 0v8M13 15h4a2 2 0 012 2v2" />
        <line x1="10" y1="7" x2="10" y2="7.01" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="11" x2="16" y2="11.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "Turnkey Solutions",
    tagline: "End-to-end single point accountability.",
    description:
      "End-to-end design-and-build responsibility, absolute budget guarantee, and fully integrated management.",
    image: "/images/services/turnkey.webp",
    highlights: [
      "Absolute lock-in cost guarantee",
      "Zero vendor conflict project management",
      "Strict material quality inspection checks",
      "Handover in ready-to-move-in condition"
    ],
    technicalSpecs: { label: "Cost Variance", value: "0% Overrun" },
    icon: (
      <svg className="w-6 h-6 stroke-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a4 4 0 10-8 0v4H4v8h14v-8h-3V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 14a1 1 0 102 0v-2h-2v2z" />
      </svg>
    ),
  },
  {
    index: "05",
    title: "Liaisoning",
    tagline: "Navigating complex municipal regulations.",
    description:
      "Securing municipal sanctions, structural permits, environmental NOCs, and legal clearances.",
    image: "/images/services/liaisoning.webp",
    highlights: [
      "NIT & NMC sanction drawing approvals",
      "Environmental & fire safety clearances",
      "Structural stability certificates",
      "Occupancy & completion certificates"
    ],
    technicalSpecs: { label: "Compliance Rate", value: "100% Guaranteed" },
    icon: (
      <svg className="w-6 h-6 stroke-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    index: "06",
    title: "Project Management",
    tagline: "Rigorous milestone audits & cost controls.",
    description:
      "Independent engineering oversight, material testing audits, contractor management, and BOQ cost tracking.",
    image: "/images/services/project_management.webp",
    highlights: [
      "Real-time Gantt schedule tracking",
      "Multi-stage concrete & masonry testing",
      "On-site resource & cost optimization",
      "Detailed weekly digital progress reporting"
    ],
    technicalSpecs: { label: "Safety Record", value: "Zero Incidents" },
    icon: (
      <svg className="w-6 h-6 stroke-accent" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-140, 140]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 bg-white border-b border-border-luxury/50 overflow-hidden"
    >
      {/* Invisible grid pattern element in background */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.2]" />

      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle radial depth spotlight */}
        <div className="absolute top-1/2 left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/3 blur-3xl [transform:translateZ(0)] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-primary/3 blur-[110px] pointer-events-none" />

        {/* CAD Grid Coordinates */}
        <div className="absolute top-[8%] left-[5%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SYS_BLOCK: 02_SERVICES // MATRIX_LIAISON
        </div>

        {/* Geometric Outline Circle representing compass drawings */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute right-[-15%] top-[15%] w-[700px] h-[700px] rounded-full border border-primary/5 flex items-center justify-center opacity-60"
        >
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-primary/5 flex items-center justify-center">
            <div className="w-[300px] h-[300px] rounded-full border border-primary/5" />
          </div>
        </motion.div>

        {/* Thin vector wireframe layout box */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute left-[8%] bottom-[8%] w-[220px] h-[220px] border border-accent/10 rounded-[50px] opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col gap-6 mb-6 lg:mb-8 max-w-[700px]">
          <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3">
            <span className="w-6 h-[1px] bg-accent inline-block" />
            02 / Core Offerings
          </span>
          <h2 className="section-heading text-[clamp(36px,5vw,56px)] text-text-luxury leading-[1.1] font-bold">
            Bespoke Turnkey Architecture <span className="font-body font-light">&amp;</span> Construction.
          </h2>
        </div>

        {/* Interactive Split Layout */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column - Sticky Visual Showcase with 3D Depth */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28 h-fit">
            <TiltCard3D maxTilt={6} className="w-full">
              <div className="relative w-full aspect-[4/5] rounded-[24px] border border-border-luxury bg-bg-luxury p-4 flex flex-col justify-between overflow-hidden shadow-3d-lg specular-border preserve-3d">
                {/* Corner brackets for engineering drawing feel */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-accent/40 translate-z-20" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-accent/40 translate-z-20" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-accent/40 translate-z-20" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-accent/40 translate-z-20" />

                {/* Blueprint coordinates and labels */}
                <div className="absolute top-6 left-6 text-[9px] font-mono tracking-wider text-muted-luxury/50 uppercase translate-z-10">
                  LAT_LON: 21.14° N, 79.08° E
                </div>
                <div className="absolute top-6 right-6 text-[9px] font-mono tracking-wider text-muted-luxury/50 uppercase translate-z-10">
                  SCALE: 1:50
                </div>

                {/* Image Frame */}
                <div className="w-full h-[82%] relative rounded-xl overflow-hidden mt-6 border border-border-luxury/50 bg-white translate-z-20 shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={services[activeIdx].image}
                        alt={services[activeIdx].title}
                        fill
                        priority
                        className="object-cover transition-transform duration-75"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      {/* Visual filter grid overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none mix-blend-multiply" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Thin overlay crosshairs */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                    <div className="w-[30px] h-[0.5px] bg-white/30" />
                    <div className="h-[30px] w-[0.5px] bg-white/30 absolute" />
                  </div>
                </div>

                {/* Bottom Labels */}
                <div className="flex justify-between items-end mt-2 z-10 translate-z-30">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] font-mono text-muted-luxury/40 uppercase">System block ID</span>
                    <span className="text-[12px] font-mono font-medium text-text-luxury">
                      SYS_ID: BN_CORE_0{activeIdx + 1}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-[10px] font-mono text-muted-luxury/40 uppercase">Engineering spec</span>
                    <span className="text-[12px] font-mono font-medium text-accent">
                      {services[activeIdx].technicalSpecs.label}: {services[activeIdx].technicalSpecs.value}
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column - Interactive Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-0 border-t border-border-luxury/50 mt-10 lg:mt-0">
            {services.map((service, idx) => {
              const isExpanded = idx === expandedIdx;
              return (
                <div
                  key={service.title}
                  onMouseEnter={() => {
                    // Only update on hover for larger screens
                    if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                      setActiveIdx(idx);
                      setExpandedIdx(idx);
                    }
                  }}
                  className={`group border-b border-border-luxury/50 transition-colors duration-500 ${
                    isExpanded ? "bg-bg-luxury/30" : "hover:bg-bg-luxury/10"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => {
                      if (expandedIdx === idx) {
                        setExpandedIdx(null); // allow collapse
                      } else {
                        setExpandedIdx(idx);
                        setActiveIdx(idx);
                      }
                    }}
                    className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer focus:outline-none focus-visible:bg-bg-luxury/40 px-2 gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-8 min-w-0 flex-1">
                      {/* Monospace Index */}
                      <span className="text-[11px] sm:text-[12px] font-mono text-accent font-bold tracking-wider shrink-0">
                        {service.index} /
                      </span>

                      {/* Icon */}
                      <div className="p-2 sm:p-2.5 bg-bg-luxury rounded-lg border border-border-luxury group-hover:border-accent/30 transition-colors duration-300 shrink-0">
                        {service.icon}
                      </div>

                      {/* Title & Tagline */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 min-w-0 flex-1">
                        <h3 className="text-[17px] sm:text-[22px] font-bold tracking-tight text-text-luxury font-heading group-hover:text-primary transition-colors duration-300 truncate">
                          {service.title}
                        </h3>
                        <span className="text-[12px] text-muted-luxury/60 font-light hidden md:inline-block">
                          — &nbsp; {service.tagline}
                        </span>
                      </div>
                    </div>

                    {/* Arrow / Plus Symbol */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-colors duration-300 shrink-0 ${
                        isExpanded
                          ? "bg-accent border-accent text-white"
                          : "border-border-luxury group-hover:border-accent text-muted-luxury group-hover:text-accent"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </motion.div>
                  </button>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-2 sm:pl-28 pr-2 flex flex-col gap-6">
                          {/* Tagline for Mobile */}
                          <span className="text-[12px] text-accent font-semibold md:hidden uppercase tracking-wider font-mono">
                            {service.tagline}
                          </span>

                          <p className="text-muted-luxury text-[14px] sm:text-[15px] leading-[1.7] font-light max-w-[50ch]">
                            {service.description}
                          </p>

                          {/* Technical Highlights Grid */}
                          <div className="flex flex-col gap-3">
                            <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-luxury/55">
                              Deliverables &amp; Focus Areas
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-1">
                              {service.highlights.map((highlight, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-center gap-3 text-[13px] text-muted-luxury"
                                >
                                  <span className="w-1.5 h-1.5 rotate-45 bg-accent/70 flex-shrink-0" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Mobile Embedded Image */}
                          <div className="mt-4 lg:hidden relative w-full aspect-[16/10] rounded-[18px] overflow-hidden border border-border-luxury/50 bg-bg-luxury">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 1024px) 100vw, 40vw"
                              className="object-cover"
                            />
                            {/* Overlay crosshairs */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                              <div className="w-[30px] h-[0.5px] bg-white/20" />
                              <div className="h-[30px] w-[0.5px] bg-white/20 absolute" />
                            </div>
                            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[10px] font-mono text-white/80 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                              <span>COORD: 21.14° N, 79.08° E</span>
                              <span>{service.technicalSpecs.label}: {service.technicalSpecs.value}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
