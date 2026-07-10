"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    phase: "Phase I",
    title: "Concept & Planning",
    desc: "Architectural consultation, zoning studies, layout sketches, and 3D schematic conceptualization.",
    deliverables: ["Schematic Design Drawings", "Zoning & Feasibility Clearance", "3D Concept Renders"],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" strokeDasharray="4 2" />
        <path d="M6 17v4m12-4v4M3 21h18" strokeLinecap="round" />
        <path d="M7 7h10M7 11h6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    num: "02",
    phase: "Phase II",
    title: "Detailed CAD & Structural",
    desc: "Creation of precision drafting, structural analysis, and load-bearing calculations.",
    deliverables: ["Structural Engineering Maps", "Bespoke Material Board", "Absolute BOQ Cost Lock"],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeOpacity="0.2" />
        <path d="M6 6h12v4H6z" fill="currentColor" fillOpacity="0.05" />
        <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
      </svg>
    )
  },
  {
    num: "03",
    phase: "Phase III",
    title: "Permits & Approvals",
    desc: "Securing municipal permits, electrical board clearances, and civil structure authorizations.",
    deliverables: ["Municipal Sanction Files", "Liaison & Legal Clearance", "NOC & Building Permitting"],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15" cy="15" r="2.5" fill="currentColor" fillOpacity="0.1" />
      </svg>
    )
  },
  {
    num: "04",
    phase: "Phase IV",
    title: "Turnkey Execution",
    desc: "Formwork setting, reinforcement checks, high-performance concrete casting, and brickwork masonry.",
    deliverables: ["Precision Foundation Pour", "Steel Reinforcement Checks", "Superstructure Core Complete"],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 21V9l8-4 8 4v12" strokeLinecap="round" />
        <path d="M4 13h16M4 17h16" />
        <path d="M12 5v16" strokeOpacity="0.3" />
        <rect x="7" y="13" width="2" height="4" />
        <rect x="15" y="13" width="2" height="4" />
      </svg>
    )
  },
  {
    num: "05",
    phase: "Phase V",
    title: "Bespoke Fit-Outs",
    desc: "Custom architectural millwork, hand-finished interior installation, and bespoke marble laying.",
    deliverables: ["Millwork & Interior Fitments", "Premium Marbles & Flooring", "Electrical & HVAC Laying"],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12h18M12 3v18" strokeOpacity="0.2" />
        <path d="M8 18h8M12 18v-4M10 14h4l-1-4h-2l-1 4z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05" />
        <path d="M12 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    )
  },
  {
    num: "06",
    phase: "Phase VI",
    title: "Calibration & Handover",
    desc: "Lighting luminance calibration, civil quality audits, and final turnkey key handover.",
    deliverables: ["Luminance Calibration", "Quality Assurance Audit", "Turnkey Key Handover"],
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="12" r="4" />
        <path d="M12 12h9v3m-3-3v3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="7" r="1.5" fill="currentColor" />
      </svg>
    )
  },
];

export default function Process() {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    const pinSection = pinSectionRef.current;
    const track = trackRef.current;

    if (!pinSection || !track) return;

    // Mathematically calculate total scroll width to avoid any DOM layout/watermark side-effects
    const getScrollWidth = () => {
      const isSmall = window.innerWidth < 640;
      const cardWidth = isSmall ? 300 : 420;
      const gap = 128;
      const padding = window.innerWidth * (isSmall ? 0.2 : 0.3);
      const totalTrackWidth = padding + (6 * cardWidth) + (5 * gap);
      return totalTrackWidth - window.innerWidth + 200;
    };

    const triggers: ScrollTrigger[] = [];

    // Horizontal Scroll Trigger
    const scrollTween = gsap.to(track, {
      x: () => -getScrollWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: pinSection,
        pin: true,
        start: "top top",
        end: () => `+=${getScrollWidth()}`,
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    if (scrollTween.scrollTrigger) {
      triggers.push(scrollTween.scrollTrigger);
    }

    // Illuminate nodes as they scroll past
    const nodes = track.querySelectorAll(".timeline-node");
    nodes.forEach((node) => {
      const st = ScrollTrigger.create({
        trigger: node,
        containerAnimation: scrollTween,
        start: "center 60%",
        end: "center 0%",
        onEnter: () => {
          // Illuminate outer circle ring
          gsap.to(node, {
            borderColor: "rgba(166, 107, 61, 0.4)",
            backgroundColor: "rgba(166, 107, 61, 0.08)",
            boxShadow: "0 0 20px rgba(166, 107, 61, 0.2)",
            duration: 0.35,
            overwrite: "auto",
          });
          // Fill inner circle node
          gsap.to(node.querySelector(".timeline-node-inner"), {
            borderColor: "#A66B3D",
            backgroundColor: "#A66B3D",
            duration: 0.35,
            overwrite: "auto",
          });
          // Change number to white
          gsap.to(node.querySelector(".timeline-num"), {
            color: "#FCFBF9",
            duration: 0.35,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          // Revert outer circle ring
          gsap.to(node, {
            borderColor: "rgba(232, 230, 227, 0.8)",
            backgroundColor: "rgba(252, 251, 249, 0.8)",
            boxShadow: "none",
            duration: 0.35,
            overwrite: "auto",
          });
          // Revert inner circle node
          gsap.to(node.querySelector(".timeline-node-inner"), {
            borderColor: "rgba(232, 230, 227, 0.6)",
            backgroundColor: "#FCFBF9",
            duration: 0.35,
            overwrite: "auto",
          });
          // Revert number color
          gsap.to(node.querySelector(".timeline-num"), {
            color: "#5F666E",
            duration: 0.35,
            overwrite: "auto",
          });
        },
      });
      triggers.push(st);
    });

    // Handle Active Card Zoom and Highlights
    const cards = track.querySelectorAll(".timeline-card");
    cards.forEach((card) => {
      const st = ScrollTrigger.create({
        trigger: card,
        containerAnimation: scrollTween,
        start: "left 65%",
        end: "right 35%",
        onEnter: () => {
          gsap.to(card, {
            scale: 1.03,
            backgroundColor: "rgba(252, 251, 249, 0.85)",
            borderColor: "rgba(166, 107, 61, 0.35)",
            boxShadow: "0 30px 70px rgba(15, 92, 105, 0.06), 0 0 25px rgba(166, 107, 61, 0.03)",
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(card.querySelectorAll(".deliverable-item"), {
            opacity: 1,
            x: 0,
            stagger: 0.08,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(card.querySelector(".timeline-icon"), {
            color: "#A66B3D",
            opacity: 1,
            scale: 1.05,
            duration: 0.4,
            overwrite: "auto",
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            scale: 1,
            backgroundColor: "rgba(252, 251, 249, 0.4)",
            borderColor: "rgba(232, 230, 227, 0.6)",
            boxShadow: "0 10px 30px rgba(15, 92, 105, 0.01)",
            duration: 0.4,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(card.querySelectorAll(".deliverable-item"), {
            opacity: 0.5,
            x: -4,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(card.querySelector(".timeline-icon"), {
            color: "rgba(95, 102, 110, 0.4)",
            opacity: 0.6,
            scale: 1,
            duration: 0.4,
            overwrite: "auto",
          });
        },
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [isDesktop]);

  return (
    <section
      ref={pinSectionRef}
      id="process"
      className="relative lg:h-screen bg-white lg:overflow-hidden border-b border-border-luxury/50 py-20 lg:py-0"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />

      {/* Static background glow */}
      <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[140px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none select-none z-0" />

      {/* Editorial Header Section */}
      <div className="relative lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full flex flex-col justify-between py-0 lg:py-16 px-5 sm:px-10 lg:px-16 pointer-events-none mb-16 lg:mb-0 z-10">
        
        {/* Title */}
        <div className="max-w-[640px] pointer-events-auto">
          <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-accent inline-block" />
            04 / Workflow
          </span>
          <h2 className="section-heading text-[clamp(32px,4.5vw,48px)] text-text-luxury leading-[1.1] font-bold">
            The Precision Blueprint.
          </h2>
        </div>

        {/* Scroll helper (desktop only) */}
        <div className="hidden lg:flex items-center gap-4 text-muted-luxury/40 text-[10px] font-bold tracking-[0.2em] uppercase">
          <span>Scroll Down to Progress</span>
          <div className="w-16 h-[1px] bg-border-luxury relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-8 bg-accent animate-pulse-slow" />
          </div>
        </div>
      </div>

      {/* Timeline Track - Scrolls Horizontally on Desktop, Vertically on Mobile */}
      <div
        ref={trackRef}
        className="lg:h-full flex flex-col lg:flex-row lg:items-stretch gap-16 lg:gap-32 px-5 sm:px-10 lg:px-[15vw] max-w-2xl lg:max-w-none mx-auto lg:mx-0 relative"
        style={{ willChange: "transform" }}
      >
        {/* Scrolling watermark text for parallax depth (desktop only) */}
        <div className="hidden lg:block absolute left-[-20vw] top-[15%] w-0 h-0 whitespace-nowrap pointer-events-none z-0 select-none">
          <span className="text-[clamp(120px,22vw,300px)] font-bold text-text-luxury/[0.015] tracking-[0.08em] uppercase leading-none">
            EXECUTION_STAGE_SYSTEM
          </span>
        </div>




        {/* Vertical line behind nodes (mobile only) */}
        <div className="absolute left-[32px] sm:left-[36px] lg:hidden top-4 bottom-4 w-[1.5px] bg-border-luxury/60 z-0" />

        {/* Stages */}
        {steps.map((step, idx) => (
          <motion.div
            key={step.num}
            initial={mounted && !isDesktop ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
            whileInView={mounted && !isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: idx * 0.05 }}
            className="w-full lg:w-[420px] lg:h-full lg:flex-shrink-0 relative z-20 pl-20 lg:pl-0"
          >
            {/* Timeline Circle Node */}
            <div
              className="timeline-node w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-border-luxury bg-bg-luxury/80 flex items-center justify-center absolute left-2 lg:left-0 top-4 lg:top-[35%] transition-all duration-500 shadow-sm"
              style={isDesktop ? { transform: "translateY(-50%)", top: "35vh" } : {}}
            >
              <div className="timeline-node-inner w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border-luxury/60 bg-bg-luxury flex items-center justify-center transition-all duration-500">
                <span className="timeline-num text-[11px] font-bold text-muted-luxury tracking-tight font-body">
                  {step.num}
                </span>
              </div>
            </div>

            {/* The Glassmorphism Card */}
            <div 
              className="timeline-card p-6 sm:p-10 pt-6 sm:pt-8 rounded-[28px] border border-border-luxury/60 bg-bg-luxury/40 backdrop-blur-md flex flex-col gap-6 text-left transition-all duration-500 shadow-[0_10px_30px_rgba(15,92,105,0.01)] relative overflow-hidden group"
              style={isDesktop ? { marginTop: "calc(35vh + 56px)" } : {}}
            >
              {/* Large watermark number */}
              <span className="absolute right-6 top-4 text-[70px] sm:text-[100px] font-black text-text-luxury/[0.03] select-none pointer-events-none leading-none font-heading">
                {step.num}
              </span>

              {/* Icon & Phase tag */}
              <div className="flex items-center justify-between">
                <div className="timeline-icon text-muted-luxury/40 w-10 h-10 flex items-center justify-center transition-all duration-500">
                  {step.icon}
                </div>
                <span className="text-[10px] font-bold tracking-[0.18em] text-accent uppercase">
                  {step.phase}
                </span>
              </div>

              {/* Text Area */}
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-[19px] sm:text-[23px] font-bold tracking-tight text-text-luxury font-heading leading-tight">
                  {step.title.includes("&") ? (
                    <>
                      {step.title.split("&")[0]}
                      <span className="font-body font-light">&amp;</span>
                      {step.title.split("&")[1]}
                    </>
                  ) : (
                    step.title
                  )}
                </h3>
                <p className="text-muted-luxury text-[13px] sm:text-[13.5px] leading-[1.65] font-light">
                  {step.desc}
                </p>
              </div>

              {/* Deliverables checklist */}
              <div className="h-[1px] bg-border-luxury/40 my-1 relative z-10" />
              <div className="flex flex-col gap-2.5 relative z-10">
                <span className="text-[9px] font-bold tracking-[0.15em] text-text-luxury/40 uppercase">
                  Key Deliverables
                </span>
                <ul className="flex flex-col gap-2">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="deliverable-item flex items-center gap-3 text-[12.5px] text-muted-luxury font-light lg:opacity-50 transition-all duration-300"
                      style={{ transform: isDesktop ? "translateX(-4px)" : "none" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent/60 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
