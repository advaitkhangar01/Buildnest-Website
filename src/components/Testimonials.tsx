"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import TiltCard3D from "@/components/TiltCard3D";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  specs: string;
  initials: string;
  rating: number;
  tags: string[];
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: "deshmukh",
    quote:
      "Buildnest transformed our dream of a modern, brutalist villa into concrete reality. Their turnkey execution is highly structured, and their attention to micro-alignments is second to none.",
    author: "Mr. Ashish Deshmukh",
    role: "Managing Director",
    project: "Civil Lines Residence",
    location: "Nagpur",
    specs: "7,500 sq.ft • Turnkey Villa",
    initials: "AD",
    rating: 5,
    tags: ["Brutalist Architecture", "Monolithic Concrete", "Turnkey Execution"],
    highlight: "Zero structural delays • Custom millwork",
  },
  {
    id: "sahoo",
    quote:
      "Managing construction in Nagpur is typically a chaotic challenge. Buildnest handles everything—from municipal NIT liaisoning approvals to structural engineering and custom millwork.",
    author: "Dr. Sameer Sahoo",
    role: "Consultant Cardiologist",
    project: "Wardha Road Villa",
    location: "Nagpur",
    specs: "9,200 sq.ft • Private Estate",
    initials: "SS",
    rating: 5,
    tags: ["Liaisoning & Approvals", "Structural Engineering", "Smart Home Automation"],
    highlight: "Turnkey Peace of Mind • On-Budget Delivery",
  },
  {
    id: "sharma",
    quote:
      "Their design restraint is what defines their luxury. Instead of adding decoration, they created beauty using natural materials, direct lighting cuts, and vast, calm spaces.",
    author: "Mrs. Neha Sharma",
    role: "Art Curator & Gallery Director",
    project: "Ramdaspeth Penthouse",
    location: "Nagpur",
    specs: "4,800 sq.ft • Luxury Penthouse",
    initials: "NS",
    rating: 5,
    tags: ["Minimalist Interiors", "Natural Stone & Wood", "Indirect Lighting"],
    highlight: "Art Gallery Aesthetic • Bespoke Lighting",
  },
  {
    id: "agrawal",
    quote:
      "Working with Buildnest felt like partnering with an international design studio. They brought structural precision, complete financial transparency, and material authenticity to our home.",
    author: "Mr. Rajesh & Sunita Agrawal",
    role: "Founding Partner, Agrawal Steel",
    project: "Dharampeth Estate",
    location: "Nagpur",
    specs: "11,000 sq.ft • Multi-Gen Residence",
    initials: "RA",
    rating: 5,
    tags: ["Material Authenticity", "3D Building Modelling", "Bespoke Landscape"],
    highlight: "Architectural Glass • Structural Steelwork",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-110, 110]);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay timer logic
  useEffect(() => {
    if (!isAutoplay) return;

    autoplayTimerRef.current = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isAutoplay, nextTestimonial]);

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      className="relative py-24 sm:py-28 lg:py-32 bg-bg-luxury border-b border-border-luxury/50 overflow-hidden"
    >
      {/* Background Graphics & Ambient Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Glows */}
        <div className="absolute top-[15%] right-[-8%] w-[600px] h-[600px] rounded-full bg-primary/4 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        {/* CAD Grid Metadata Tag */}
        <div className="absolute top-[8%] left-[6%] text-text-luxury/15 text-[10px] font-mono tracking-[0.25em] uppercase hidden sm:block">
          SYS_COMM: 07_TESTIMONIALS // VERIFIED_COMMISSIONS
        </div>

        {/* Concentric Architectural Compass Rings */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute right-[5%] top-[5%] w-[550px] h-[550px] rounded-full border border-primary/5 flex items-center justify-center opacity-70"
        >
          <div className="w-[380px] h-[380px] rounded-full border border-dashed border-primary/5 flex items-center justify-center">
            <div className="w-[200px] h-[200px] rounded-full border border-primary/5" />
          </div>
        </motion.div>

        {/* Architectural drafting line */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute left-[12%] bottom-[12%] w-[350px] h-[1px] bg-gradient-to-r from-transparent via-accent/15 to-transparent rotate-[25deg]"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-accent inline-block" />
              <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase font-mono">
                07 // Client Commissions
              </span>
            </div>
            <h2 className="section-heading text-[clamp(36px,5vw,60px)] text-text-luxury leading-[1.05] font-bold tracking-tight">
              Client Stories.
            </h2>
            <p className="text-[15px] sm:text-[17px] text-muted-luxury font-light leading-relaxed">
              Perspectives from homeowners, doctors, and visionaries who experienced our end-to-end architectural execution.
            </p>
          </div>

          {/* Top Trust Summary Stats Badge */}
          <div className="flex items-center gap-6 p-4 sm:p-5 rounded-2xl bg-white/60 border border-border-luxury/70 backdrop-blur-md shadow-sm shrink-0 self-start lg:self-auto">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 text-amber-500 text-sm font-bold">
                <span>★ 4.98</span>
                <span className="text-[11px] font-medium text-muted-luxury uppercase tracking-wider ml-1">
                  / 5.0 Rating
                </span>
              </div>
              <span className="text-[12px] font-semibold text-text-luxury">
                100% Turnkey Delivery
              </span>
            </div>
            <div className="w-[1px] h-8 bg-border-luxury/60" />
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-accent font-mono">100+</span>
              <span className="text-[11px] font-medium text-muted-luxury uppercase tracking-wider">
                Nagpur Commissions
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Client Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-luxury/80 uppercase font-mono px-1">
              Select Client Story ({String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")})
            </span>

            <div className="flex flex-col gap-2.5">
              {testimonials.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 relative group cursor-pointer border ${
                      isActive
                        ? "bg-white border-accent/60 shadow-3d-sm specular-border translate-x-1"
                        : "bg-white/40 border-border-luxury/50 hover:bg-white/70 hover:border-border-luxury hover:translate-x-0.5"
                    }`}
                  >
                    {/* Active Indicator Bar on Left */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-3 bottom-3 w-[3.5px] bg-accent rounded-r-full"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}

                    <div className="flex items-center gap-3.5">
                      {/* Client Avatar Initials */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors duration-300 ${
                          isActive
                            ? "bg-accent text-white shadow-sm"
                            : "bg-bg-luxury border border-border-luxury text-text-luxury group-hover:border-accent/40"
                        }`}
                      >
                        {item.initials}
                      </div>

                      <div className="flex flex-col overflow-hidden min-w-0 flex-1">
                        <span
                          className={`text-sm font-bold truncate transition-colors duration-200 ${
                            isActive ? "text-text-luxury" : "text-text-luxury/80 group-hover:text-text-luxury"
                          }`}
                        >
                          {item.author}
                        </span>
                        <span className="text-[12px] text-muted-luxury truncate font-medium">
                          {item.project} • <span className="text-accent">{item.location}</span>
                        </span>
                      </div>

                      {/* Right Chevron / Arrow indicator */}
                      <svg
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isActive ? "stroke-accent translate-x-0.5" : "stroke-text-luxury/30 group-hover:stroke-text-luxury/60"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Navigation & Controls Bar */}
            <div className="flex items-center justify-between mt-4 p-3 bg-white/50 border border-border-luxury/60 rounded-2xl backdrop-blur-sm">
              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous client story"
                  className="w-10 h-10 rounded-xl border border-border-luxury hover:border-accent flex items-center justify-center transition-colors duration-300 bg-white cursor-pointer shadow-sm hover:shadow"
                >
                  <svg className="w-4 h-4 stroke-text-luxury" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next client story"
                  className="w-10 h-10 rounded-xl border border-border-luxury hover:border-accent flex items-center justify-center transition-colors duration-300 bg-white cursor-pointer shadow-sm hover:shadow"
                >
                  <svg className="w-4 h-4 stroke-text-luxury" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Animated Progress indicator & Autoplay Status */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono font-bold text-muted-luxury uppercase">
                  {isAutoplay ? "Auto-Play" : "Paused"}
                </span>
                <button
                  onClick={() => setIsAutoplay(!isAutoplay)}
                  className="p-2 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                  title={isAutoplay ? "Pause auto-scroll" : "Enable auto-scroll"}
                >
                  {isAutoplay ? (
                    <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-accent" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Main Featured 3D Glassmorphism Showcase Card */}
          <div className="lg:col-span-8 relative">
            <TiltCard3D maxTilt={5} className="w-full">
              <div className="p-8 sm:p-12 bg-white/95 rounded-[32px] border border-border-luxury shadow-3d-lg specular-border relative preserve-3d overflow-hidden">
                
                {/* Subtle Card Background Accent Watermark */}
                <div className="absolute top-0 right-0 p-8 opacity-5 font-mono text-[120px] font-extrabold select-none leading-none text-accent pointer-events-none">
                  0{activeIndex + 1}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-6 relative z-10 preserve-3d"
                  >
                    {/* Top Row: Ratings + Specs Pill Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-border-luxury/40 translate-z-10">
                      {/* Star Rating & Verified Pill */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-amber-500 text-sm">
                          {Array.from({ length: current.rating }).map((_, i) => (
                            <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                          Verified Commission
                        </span>
                      </div>

                      {/* Project Specs Pill */}
                      <div className="text-[11px] font-semibold tracking-wider text-muted-luxury uppercase font-mono px-3 py-1 rounded-full bg-bg-luxury border border-border-luxury/60">
                        {current.specs}
                      </div>
                    </div>

                    {/* Decorative Quotation Mark & Main Quote */}
                    <div className="relative pt-2">
                      <span className="text-[100px] leading-[0.1] text-accent/20 font-serif block select-none translate-z-10 -ml-2 mb-4">
                        “
                      </span>
                      
                      <blockquote className="text-text-luxury text-[20px] sm:text-[25px] font-light leading-[1.65] tracking-tight translate-z-30">
                        {current.quote}
                      </blockquote>
                    </div>

                    {/* Highlight Tags Bar */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 translate-z-20">
                      {current.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-text-luxury/70 bg-bg-luxury/80 border border-border-luxury/60 px-3 py-1 rounded-lg"
                        >
                          # {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Author Card Footer */}
                    <div className="flex items-center justify-between pt-6 border-t border-border-luxury/40 mt-2 translate-z-20">
                      <div className="flex items-center gap-4">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-white shrink-0 font-heading">
                          {current.initials}
                        </div>

                        <div className="flex flex-col">
                          <cite className="not-italic text-[17px] font-bold text-text-luxury font-heading leading-snug">
                            {current.author}
                          </cite>
                          <span className="text-[13px] font-medium text-muted-luxury">
                            {current.role} •{" "}
                            <span className="text-accent font-semibold">{current.project}, {current.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Micro Badge for Highlight */}
                      <div className="hidden sm:flex flex-col items-end text-right">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-muted-luxury uppercase">
                          Key Outcome
                        </span>
                        <span className="text-[12px] font-semibold text-accent">
                          {current.highlight}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </TiltCard3D>
          </div>

        </div>
      </div>
    </section>
  );
}
