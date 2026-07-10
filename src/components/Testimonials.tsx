"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    quote:
      "Buildnest transformed our dream of a modern, brutalist villa into concrete reality. Their turnkey execution is highly structured, and their attention to micro-alignments is second to none.",
    author: "Mr. Ashish Deshmukh",
    role: "Managing Director",
    project: "Civil Lines Residence, Nagpur",
  },
  {
    quote:
      "Managing construction in Nagpur is typically a chaotic challenge. Buildnest handles everything—from municipal NIT liaisoning approvals to structural engineering and custom millwork.",
    author: "Dr. Sameer Sahoo",
    role: "Consultant Cardiologist",
    project: "Wardha Road Villa, Nagpur",
  },
  {
    quote:
      "Their design restraint is what defines their luxury. Instead of adding decoration, they created beauty using natural materials, direct lighting cuts, and vast, calm spaces.",
    author: "Mrs. Neha Sharma",
    role: "Art Curator",
    project: "Ramdaspeth Penthouse, Nagpur",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-bg-luxury border-b border-border-luxury/50 overflow-hidden"
    >
      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-primary/3 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] rounded-full bg-accent/4 blur-[110px] pointer-events-none" />
        
        {/* CAD Grid Coordinates */}
        <div className="absolute top-[10%] left-[8%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          SYS_COMM: 07_TESTIMONIALS // REVIEWS
        </div>

        {/* Large Concentric Compass curve behind the testimonial quote (Strong CAD graphic) */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute right-[10%] top-[10%] w-[500px] h-[500px] rounded-full border border-primary/5 flex items-center justify-center opacity-65"
        >
          <div className="w-[340px] h-[340px] rounded-full border border-dashed border-primary/5 flex items-center justify-center">
            <div className="w-[180px] h-[180px] rounded-full border border-primary/5" />
          </div>
        </motion.div>

        {/* Diagonal architectural drafting line */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute left-[15%] bottom-[15%] w-[300px] h-[1px] bg-gradient-to-r from-transparent via-accent/10 to-transparent rotate-[30deg]"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              07 / Commissions
            </span>
            <h2 className="section-heading text-[clamp(36px,5vw,56px)] text-text-luxury leading-[1.1] font-bold">
              Client Stories.
            </h2>
            
            {/* Minimal Navigation Buttons */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                aria-label="Previous client story"
                className="w-12 h-12 rounded-full border border-border-luxury hover:border-accent flex items-center justify-center transition-colors duration-300 bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white"
              >
                <svg className="w-4 h-4 stroke-text-luxury" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next client story"
                className="w-12 h-12 rounded-full border border-border-luxury hover:border-accent flex items-center justify-center transition-colors duration-300 bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white"
              >
                <svg className="w-4 h-4 stroke-text-luxury" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Sliding Testimonial Quote */}
          <div className="lg:col-span-8 relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-5 text-left"
              >
                {/* Large double quotes indicator */}
                <span className="text-[96px] leading-[0.1] text-accent/10 font-serif h-4 block select-none">
                  “
                </span>
                
                <blockquote className="text-text-luxury text-[20px] sm:text-[24px] font-light leading-[1.7] max-w-[60ch]">
                  {testimonials[activeIndex].quote}
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col gap-1 mt-4">
                  <cite className="not-italic text-[16px] font-bold text-text-luxury font-heading">
                    {testimonials[activeIndex].author}
                  </cite>
                  <span className="text-[12px] font-medium tracking-wide text-muted-luxury">
                    {testimonials[activeIndex].role} — <span className="text-accent">{testimonials[activeIndex].project}</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
