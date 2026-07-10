"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Architecture",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-130, 130]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate premium submit transition
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-text-luxury text-bg-luxury border-b border-border-luxury/10 overflow-hidden"
    >
      {/* Background radial lighting glow in top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 opacity-40">
        {/* CAD Grid Coordinates */}
        <div className="absolute top-[8%] left-[5%] text-white/20 text-[9px] font-mono tracking-[0.2em] uppercase">
          SYS_COMM: 08_CTA // NAGPUR_HQ
        </div>

        {/* Diagonal wireframe line cutting across (Strong high contrast element) */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute left-[-10%] top-[40%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent rotate-[-15deg]"
        />

        {/* Floating concentric outline circle */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute left-[5%] bottom-[10%] w-[400px] h-[400px] rounded-full border border-dashed border-white/10 flex items-center justify-center"
        >
          <div className="w-[260px] h-[260px] rounded-full border border-white/5" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Contact Meta */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              08 / Commissions
            </span>
            <h2 className="hero-heading text-[clamp(42px,5.5vw,72px)] text-white font-bold leading-[0.95] uppercase">
              Start Your <br />
              <span className="text-accent">Project.</span>
            </h2>
            
            <p className="text-bg-luxury/70 text-[15px] sm:text-[16px] leading-[1.8] font-light max-w-[40ch] mt-4">
              We accept a limited number of commissions annually to ensure our uncompromising standards of craftsmanship are maintained.
            </p>

            <div className="flex flex-col gap-4 mt-8 text-[13px] font-light">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">
                  Design Studio
                </span>
                <span>Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex flex-col gap-1 mt-4">
                <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">
                  Direct Inquiries
                </span>
                <a href="mailto:info@buildnestnagpur.com" className="hover:text-accent transition-colors">
                  info@buildnestnagpur.com
                </a>
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-[32px] p-6 sm:p-10 backdrop-blur-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 focus:border-accent outline-none py-3 text-[14px] text-white font-light transition-colors duration-300"
                    placeholder="E.g. Ashish Deshmukh"
                  />
                </div>

                {/* Email / Number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">
                    Contact Email / Phone
                  </label>
                  <input
                    type="text"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 focus:border-accent outline-none py-3 text-[14px] text-white font-light transition-colors duration-300"
                    placeholder="E.g. ashish@example.com"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">
                    Commission Type
                  </label>
                  <select
                    id="service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="bg-text-luxury border-b border-white/20 focus:border-accent outline-none py-3 text-[14px] text-white font-light transition-colors duration-300 cursor-pointer"
                  >
                    <option value="Architecture">Architecture</option>
                    <option value="Construction">Turnkey Construction</option>
                    <option value="Interior Design">Interior Architecture</option>
                    <option value="Complete Design & Build">Complete Design &amp; Build</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">
                    Brief Project Vision
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-transparent border-b border-white/20 focus:border-accent outline-none py-3 text-[14px] text-white font-light transition-colors duration-300 resize-none"
                    placeholder="Describe the scale, location, and stylistic preferences of your project."
                  />
                </div>

                {/* Magnetic Submit Button */}
                <button
                  type="submit"
                  className="magnetic-button relative overflow-hidden bg-accent hover:bg-accent/95 px-8 py-[18px] text-[11px] font-bold tracking-[0.12em] text-white uppercase text-center mt-6 transition-all duration-300 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center gap-6"
              >
                <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center bg-accent/10">
                  <svg className="w-8 h-8 stroke-accent" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-[24px] font-bold text-white font-heading">
                  Inquiry Received.
                </h3>
                <p className="text-bg-luxury/70 text-[14px] leading-relaxed max-w-[32ch]">
                  Our lead architectural consultant will contact you within 24 hours to schedule a concept review session.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
