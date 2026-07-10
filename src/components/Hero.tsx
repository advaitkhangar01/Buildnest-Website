"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 120]);

  useEffect(() => {
    // Parallax scroll effect using GSAP
    if (bgRef.current && containerRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  // Text lines for reveal
  const line1 = "Building";
  const line2 = "Timeless";
  const line3 = "Spaces.";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center"
    >
      {/* Background Image with Ken Burns Zoom & Parallax */}
      <motion.div
        ref={bgRef}
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 0.55 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] origin-center"
      >
        <Image
          src="/images/hero_bg.png"
          alt="Luxury Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft dark radial vignette and bottom overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.8) 100%)" />
      </motion.div>

      {/* Background CAD / Elevation lines with Parallax Depth */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 z-5 pointer-events-none select-none opacity-20"
      >
        {/* Subtle grid coordinates */}
        <div className="absolute top-[22%] left-[8%] text-white/40 text-[9px] font-mono tracking-[0.25em] uppercase">
          SYS_COORD: X.045 / Y.912
        </div>
        <div className="absolute bottom-[28%] right-[8%] text-white/40 text-[9px] font-mono tracking-[0.25em] uppercase">
          ELEV_MARK: +14.250m
        </div>
        
        {/* Horizontal CAD vector line */}
        <div className="absolute top-[35%] left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {/* Vertical CAD vector line */}
        <div className="absolute top-0 left-[22%] w-[0.5px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        
        {/* Concentric vector circle overlay */}
        <div className="absolute top-[40%] left-[68%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-dashed border-white/10 flex items-center justify-center">
          <div className="w-[200px] h-[200px] rounded-full border border-white/5" />
        </div>
      </motion.div>

      {/* Grid aligned Hero Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-16 mt-20">
        <div className="max-w-[720px] text-left">
          {/* Staggered Heading Reveal */}
          <h1 className="hero-heading text-[clamp(64px,10vw,120px)] leading-[0.85] text-bg-luxury font-bold tracking-[-0.04em] uppercase mb-8">
            <span className="block overflow-hidden relative h-[1.1em] -mb-[0.2em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {line1}
              </motion.span>
            </span>
            <span className="block overflow-hidden relative h-[1.1em] -mb-[0.2em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 text-accent"
              >
                {line2}
              </motion.span>
            </span>
            <span className="block overflow-hidden relative h-[1.1em]">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                {line3}
              </motion.span>
            </span>
          </h1>

          {/* Paragraph Fade Up */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-bg-luxury text-[16px] sm:text-[18px] font-light leading-[1.8] tracking-wide mb-12 max-w-[500px]"
          >
            Premium Architecture, Interior &amp; Construction Solutions designed with precision, permanence, and craftsmanship.
          </motion.p>

          {/* Buttons Fade Up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="#contact"
              className="magnetic-button relative overflow-hidden bg-accent hover:bg-accent/95 px-8 py-[18px] text-[11px] font-bold tracking-[0.12em] text-bg-luxury uppercase text-center transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="#services"
              className="magnetic-button relative overflow-hidden border border-bg-luxury/20 hover:border-bg-luxury bg-transparent hover:bg-bg-luxury hover:text-text-luxury px-8 py-[18px] text-[11px] font-bold tracking-[0.12em] text-bg-luxury uppercase text-center transition-all duration-300"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
