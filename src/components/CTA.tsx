"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TiltCard3D from "@/components/TiltCard3D";
import dynamic from "next/dynamic";

const MapBox = dynamic(() => import("@/components/MapBox"), {
  ssr: false,
  loading: () => (
    <div className="h-[190px] sm:h-[230px] rounded-3xl bg-white/5 animate-pulse border border-white/10 mt-2" />
  ),
});

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
      className="relative py-20 sm:py-24 lg:py-32 bg-text-luxury text-bg-luxury border-b border-border-luxury/10 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Heading, Contact Meta & MapBox */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3">
                <span className="w-6 h-[1px] bg-accent inline-block" />
                08 / Commissions
              </span>
              <h2 className="hero-heading text-[clamp(30px,5vw,64px)] text-white font-bold leading-[1.02] uppercase">
                Start Your <br />
                <span className="text-accent">Project.</span>
              </h2>
              
              <p className="text-bg-luxury/70 text-[14px] sm:text-[15px] leading-[1.7] font-light max-w-[46ch]">
                We accept a limited number of commissions annually to ensure our uncompromising standards of craftsmanship are maintained.
              </p>

              {/* Grid for Studio Address & Direct Inquiries */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-2 text-[13px] font-light">
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase block mb-1">
                    Design Studio
                  </span>
                  <span className="text-white text-xs">Civil Lines / Ramdaspeth, Nagpur, MS India</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase block mb-1">
                    Direct Inquiries
                  </span>
                  <a href="mailto:info@buildnestnagpur.com" className="hover:text-accent transition-colors text-xs truncate">
                    info@buildnestnagpur.com
                  </a>
                  <a href="tel:+919876543210" className="hover:text-accent transition-colors text-xs font-mono mt-0.5">
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Maps Box in Left Column */}
            <MapBox variant="dark" mapHeightClass="h-[190px] sm:h-[230px]" className="mt-2" />
          </div>

          {/* Right Column: Premium Form with 3D Monolith Depth */}
          <div className="lg:col-span-6">
            <TiltCard3D maxTilt={5} className="w-full h-full">
              <div className="bg-white/5 border border-white/15 rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 backdrop-blur-xl shadow-3d-dark specular-border-dark preserve-3d h-full flex flex-col justify-center">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left preserve-3d">
                    {/* Name */}
                    <div className="flex flex-col gap-2 translate-z-10">
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
                    <div className="flex flex-col gap-2 translate-z-10">
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
                    <div className="flex flex-col gap-2 translate-z-10">
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
                    <div className="flex flex-col gap-2 translate-z-10">
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
                      className="magnetic-button relative overflow-hidden bg-accent hover:bg-accent/95 px-8 py-[18px] text-[11px] font-bold tracking-[0.12em] text-white uppercase text-center mt-6 transition-all duration-300 cursor-pointer card-3d-lift translate-z-30 shadow-3d-dark"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center gap-6 preserve-3d"
                  >
                    <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center bg-accent/10 translate-z-20">
                      <svg className="w-8 h-8 stroke-accent" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-[24px] font-bold text-white font-heading translate-z-30">
                      Inquiry Received.
                    </h3>
                    <p className="text-bg-luxury/70 text-[14px] leading-relaxed max-w-[32ch] translate-z-20">
                      Our lead architectural consultant will contact you within 24 hours to schedule a concept review session.
                    </p>
                  </motion.div>
                )}
              </div>
            </TiltCard3D>
          </div>

        </div>
      </div>
    </section>
  );
}
