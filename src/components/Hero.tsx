"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TiltCard3D from "@/components/TiltCard3D";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 140]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0.4]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tween: gsap.core.Tween | null = null;
    if (bgRef.current && containerRef.current) {
      tween = gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      if (tween) {
        tween.scrollTrigger?.kill();
        tween.kill();
      }
    };
  }, []);

  // Text lines for reveal animation
  const line1 = "Building";
  const line2 = "Timeless";
  const line3 = "Spaces.";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-black flex flex-col justify-between pt-28 sm:pt-36 pb-16 perspective-1500 preserve-3d"
    >
      {/* Background Image with Ken Burns Zoom & Parallax */}
      <motion.div
        ref={bgRef}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1.03, opacity: 0.55 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] origin-center pointer-events-none [will-change:transform,opacity]"
      >
        <Image
          src="/images/hero_bg.webp"
          alt="Luxury Architectural Residence"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Multi-layered Vignette & Cinematic Lighting Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient(circle at 70% 30%, transparent 20%, rgba(0,0,0,0.85) 90%)" />
      </motion.div>

      {/* Volumetric Ambient Lighting Orbs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-2">
        <div
          className="absolute -top-32 right-10 w-[650px] h-[650px] rounded-full bg-accent/20 blur-[150px] animate-orb-float [transform:translateZ(0)]"
        />
        <div
          style={{ animationDelay: "2s", animationDuration: "12s" }}
          className="absolute -bottom-32 left-10 w-[650px] h-[650px] rounded-full bg-primary/30 blur-[150px] animate-orb-float [transform:translateZ(0)]"
        />
      </div>

      {/* Background CAD Lines */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        className="absolute inset-0 z-5 pointer-events-none select-none opacity-30 preserve-3d [will-change:transform]"
      >
        {/* Architectural Vector Grid overlay lines */}
        <div className="absolute top-[38%] left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-0 left-[20%] w-[0.5px] h-full bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        <div className="hidden md:block absolute top-0 left-[68%] w-[0.5px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        
        {/* Concentric vector circle overlay */}
        <div className="hidden lg:flex absolute top-[42%] left-[76%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dashed border-white/15 items-center justify-center [transform:rotateX(35deg)_rotateY(-20deg)]">
          <div className="w-[280px] h-[280px] rounded-full border border-white/10" />
          <div className="w-[140px] h-[140px] rounded-full border border-accent/30" />
        </div>
      </motion.div>

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 my-auto preserve-3d">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center preserve-3d">
          
          {/* Left Column: Heading, Subtitle & CTAs */}
          <div className="lg:col-span-7 text-left preserve-3d">
            
            {/* Glass Tag / Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/5 backdrop-blur-xl specular-border-dark mb-8 sm:mb-12 max-w-full overflow-hidden"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[9.5px] sm:text-[11px] font-mono tracking-[0.18em] sm:tracking-[0.25em] text-white/90 uppercase font-semibold truncate">
                ✦ ARCHITECTURE &amp; INTERIOR MASTERPIECES
              </span>
            </motion.div>

            {/* Staggered Heading Reveal */}
            <h1 className="hero-heading text-[clamp(40px,7.8vw,115px)] leading-[0.92] text-bg-luxury font-bold tracking-[-0.04em] uppercase mb-8 sm:mb-12 translate-z-30">
              <span className="block overflow-hidden relative h-[1.2em] py-0.5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {line1}
                </motion.span>
              </span>
              <span className="block overflow-hidden relative h-[1.2em] py-0.5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-accent drop-shadow-[0_10px_25px_rgba(166,107,61,0.4)]"
                >
                  {line2}
                </motion.span>
              </span>
              <span className="block overflow-hidden relative h-[1.2em] py-0.5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {line3}
                </motion.span>
              </span>
            </h1>

             {/* Paragraph Fade Up */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/80 text-[15px] sm:text-[19px] font-normal leading-[1.7] tracking-[0.02em] mb-10 sm:mb-16 max-w-[560px] translate-z-20"
            >
              Crafting bespoke residences, luxury interiors, and iconic commercial landmarks engineered with precision, spatial harmony, and architectural permanence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 translate-z-40 mb-12 sm:mb-20"
            >
              <Link
                href="#contact"
                className="magnetic-button group relative overflow-hidden bg-accent hover:bg-accent/90 px-7 py-4 sm:py-[18px] text-[11px] font-bold tracking-[0.14em] text-bg-luxury uppercase text-center transition-all duration-300 shadow-3d-dark card-3d-lift flex items-center justify-center gap-3 rounded-none active:scale-98"
              >
                <span>Start Your Project</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              
              <Link
                href="#projects"
                className="magnetic-button group relative overflow-hidden specular-border-dark bg-white/5 backdrop-blur-md hover:bg-white/15 px-7 py-4 sm:py-[18px] text-[11px] font-bold tracking-[0.14em] text-white uppercase text-center transition-all duration-300 card-3d-lift flex items-center justify-center gap-3 rounded-none active:scale-98"
              >
                <span>Explore Portfolio</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-150 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Key Metrics Strip (Mobile + Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-3 gap-2.5 sm:gap-4 pt-6 sm:pt-10 border-t border-white/10 max-w-[560px]"
            >
              <div>
                <div className="text-xl sm:text-3xl font-bold font-heading text-white tracking-tight">150+</div>
                <div className="text-[9px] sm:text-[11px] font-mono uppercase text-white/60 tracking-wider mt-0.5 leading-snug">Projects Built</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold font-heading text-accent tracking-tight">15+ Yrs</div>
                <div className="text-[9px] sm:text-[11px] font-mono uppercase text-white/60 tracking-wider mt-0.5 leading-snug">Architecture</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-bold font-heading text-white tracking-tight">100%</div>
                <div className="text-[9px] sm:text-[11px] font-mono uppercase text-white/60 tracking-wider mt-0.5 leading-snug">Precision</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Floating Showcase Cards (Desktop & Tablet) */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center preserve-3d mt-2 lg:mt-0">
            
            {/* Card 1: Featured Project Spotlight */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[380px] mb-10 preserve-3d"
            >
              <TiltCard3D maxTilt={10} perspective={1200} glare={true}>
                <div className="relative p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden group">
                  
                  {/* Image Preview */}
                  <div className="relative h-44 w-full rounded-lg overflow-hidden mb-3">
                    <Image
                      src="/images/project_1.webp"
                      alt="Featured Skyline Villa"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono text-accent uppercase tracking-wider border border-accent/40">
                      ★ Featured Landmark
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">The Skyline Villa</h4>
                      <p className="text-[11px] text-white/60 font-mono">Worli Sea Face, Mumbai • 12,500 Sq.Ft</p>
                    </div>
                    <Link
                      href="/projects/skyline-villa"
                      className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-accent text-white flex items-center justify-center transition-colors duration-300"
                      aria-label="View Skyline Villa Project"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>

            {/* Card 2: Floating Rating & BIM Precision Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[340px] lg:-mr-6 preserve-3d"
            >
              <TiltCard3D maxTilt={12} perspective={1000} glare={true}>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0">
                    <span className="text-accent text-xl font-bold">5.0</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 text-xs mb-0.5">
                      ★★★★★
                    </div>
                    <p className="text-xs font-semibold text-white tracking-wide">Ranked #1 Luxury Studio</p>
                    <p className="text-[10px] text-white/60 font-mono uppercase tracking-wider">Turnkey Architectural Excellence</p>
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom Hero Strip: Accreditation Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 w-full border-t border-white/10 bg-black/30 backdrop-blur-md py-4 px-5 sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1440px] flex items-center justify-center">
          
          {/* Luxury Accreditation Badges Strip */}
          <div className="flex items-center flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] font-mono text-white/40 uppercase tracking-widest text-center">
            <span>RIBA MEMBER</span>
            <span className="text-accent/40">•</span>
            <span>LEED GOLD CERTIFIED</span>
            <span className="text-accent/40">•</span>
            <span>ARCHITECTURAL DIGEST TOP 100</span>
            <span className="text-accent/40">•</span>
            <span>IIA ACCREDITED</span>
          </div>

        </div>
      </motion.div>

    </section>
  );
}

