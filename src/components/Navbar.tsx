"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { initGSAP, gsap } from "@/lib/animations/gsapInit";

const navItems = [
  { name: "Home", href: "/", code: "01" },
  { name: "About", href: "/about", code: "02" },
  { name: "Services", href: "/services", code: "03" },
  { name: "Projects", href: "/projects", code: "04" },
  { name: "Blog", href: "/blog", code: "05" },
  { name: "Contact", href: "/contact", code: "06" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const progressRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  const isHomePage = pathname === "/";
  const isLightText = isHomePage && !isScrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isSmall = typeof window !== "undefined" && window.innerWidth < 1024;
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isSmall || prefersReducedMotion) return;

    initGSAP();

    const ctx = gsap.context(() => {
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          }
        );
      }
    }, headerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const lenis = (window as unknown as { lenis?: { stop: () => void; start: () => void } }).lenis;
    if (lenis) {
      if (isOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isOpen
            ? "h-[96px] sm:h-[108px] bg-[#0E1013] border-b border-white/10"
            : !isLightText
            ? "h-[96px] sm:h-[108px] frosted-glass shadow-3d-md specular-border"
            : "h-[96px] sm:h-[108px] bg-transparent border-b border-white/10"
        }`}
      >
        <div
          ref={progressRef}
          className="absolute top-0 left-0 right-0 h-[3px] bg-accent origin-left z-50 scale-x-0 [will-change:transform]"
        />

        <div className="mx-auto h-full max-w-[1440px] px-4 sm:px-10 lg:px-16 flex items-center justify-between">
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2.5 min-[390px]:gap-3.5 sm:gap-5 group/logo"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Buildnest Logo"
                width={112}
                height={100}
                className="h-8.5 min-[390px]:h-10.5 sm:h-13 md:h-15 w-auto object-contain transition-transform duration-500 ease-out group-hover/logo:scale-105 filter drop-shadow-md"
                priority
              />
            </div>

            <span
              className={`h-5 sm:h-8 w-[2px] origin-center transition-all duration-500 ease-out group-hover/logo:scale-y-110 ${
                isOpen || !isLightText
                  ? "bg-border-luxury/80 group-hover/logo:bg-accent/60"
                  : "bg-white/30 group-hover/logo:bg-accent"
              }`}
            />

            <div
              className={`flex items-center font-heading-excn text-[15px] min-[390px]:text-[18px] sm:text-[22px] md:text-[25px] font-black tracking-[0.16em] min-[390px]:tracking-[0.2em] sm:tracking-[0.24em] select-none overflow-hidden h-7 sm:h-9 transition-all duration-500 ${
                isOpen || !isLightText ? "text-text-luxury" : "text-white"
              }`}
              style={
                !isOpen && isLightText
                  ? { textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)" }
                  : {}
              }
            >
              <div className="flex items-center h-7 sm:h-9">
                <span className="relative flex flex-col overflow-hidden h-7 sm:h-9">
                  <span className={`font-black leading-7 sm:leading-9 transition-transform duration-500 ease-out group-hover/logo:-translate-y-full ${isOpen ? "text-white" : ""}`}>
                    BUILD
                  </span>
                  <span className="absolute left-0 top-0 font-black leading-7 sm:leading-9 text-accent transition-transform duration-500 ease-out translate-y-full group-hover/logo:translate-y-0">
                    BUILD
                  </span>
                </span>

                <span className="relative flex flex-col overflow-hidden h-7 sm:h-9 ml-[2.5px] sm:ml-[5px] pr-[2.5px]">
                  <span className="font-light leading-7 sm:leading-9 text-accent transition-transform duration-500 ease-out delay-75 group-hover/logo:-translate-y-full">
                    NEST<span className={isOpen ? "text-white" : !isLightText ? "text-text-luxury" : "text-white"}>.</span>
                  </span>
                  <span className="absolute left-0 top-0 font-light leading-7 sm:leading-9 transition-transform duration-500 ease-out delay-75 translate-y-full group-hover/logo:translate-y-0">
                    <span className={isOpen ? "text-white" : !isLightText ? "text-text-luxury" : "text-white"}>NEST</span>
                    <span className="text-accent">.</span>
                  </span>
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-[13px] font-medium tracking-[0.08em] transition-colors uppercase py-2 group ${
                    isActive
                      ? "text-accent font-bold"
                      : !isLightText
                      ? "text-text-luxury/80 hover:text-text-luxury"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-accent transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex">
              <Link
                href="/contact"
                className={`magnetic-button relative overflow-hidden border px-6 py-3 text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
                  !isLightText
                    ? "border-text-luxury bg-text-luxury text-bg-luxury hover:bg-transparent hover:text-text-luxury hover:border-text-luxury"
                    : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-text-luxury hover:border-white"
                }`}
              >
                Start Your Project
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden relative z-50 p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                isOpen
                  ? "border-accent bg-accent/15 text-accent shadow-[0_0_15px_rgba(166,107,61,0.3)]"
                  : !isLightText
                  ? "border-text-luxury/20 bg-white/60 text-text-luxury hover:border-text-luxury"
                  : "border-white/25 bg-black/20 backdrop-blur-md text-white hover:border-white"
              }`}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              <div className="w-5 h-5 flex flex-col justify-center items-center gap-1">
                <span
                  className={`w-5 h-[1.5px] bg-current transition-transform duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[2.75px]" : ""
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-current transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-5 h-[1.5px] bg-current transition-transform duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[2.75px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 40px)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 40px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 40px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-[#0E1013] text-white px-5 sm:px-10 pt-24 pb-6 lg:hidden overflow-y-auto"
          >
            <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-[250px] h-[250px] bg-primary/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase font-semibold">
                  NAGPUR HQ // STUDIO DISPATCH
                </span>
              </div>
              <span className="text-[9px] font-mono text-accent uppercase font-bold tracking-wider">
                REV: 2026.1
              </span>
            </div>

            <nav className="relative z-10 flex flex-col gap-2 my-auto py-2">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 + 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between py-2.5 px-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 border border-white/15 text-accent shadow-lg"
                          : "hover:bg-white/5 text-white/80 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-accent font-bold">
                          {item.code} /
                        </span>
                        <span className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase font-heading group-hover:translate-x-1.5 transition-transform duration-300">
                          {item.name}
                        </span>
                      </div>

                      {isActive && (
                        <span className="text-[9px] font-mono bg-accent text-white font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                          ACTIVE
                        </span>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="relative z-10 flex flex-col gap-4 mt-6 pt-5 border-t border-white/10">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/919424708016?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-500/50 rounded-xl text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>💬</span> WhatsApp
                </a>
                <a
                  href="tel:+919424708016"
                  className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/15 rounded-xl text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>📞</span> Call Studio
                </a>
              </div>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-accent hover:bg-accent/90 text-white py-3.5 px-6 rounded-xl text-xs font-extrabold tracking-[0.18em] uppercase transition-all shadow-3d-dark active:scale-98"
              >
                Start Your Project ↗
              </Link>

              <div className="flex justify-center gap-4 py-2.5 border-b border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/rohan-shahoo-880068423/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-white/70 hover:text-[#0A66C2] transition-colors"
                >
                  LinkedIn ↗
                </a>
                <span className="text-white/20 select-none">•</span>
                <a
                  href="https://www.instagram.com/buildnest_nagpur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-white/70 hover:text-[#ee2a7b] transition-colors"
                >
                  Instagram ↗
                </a>
                <span className="text-white/20 select-none">•</span>
                <a
                  href="https://www.facebook.com/profile.php?id=61591824793874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-white/70 hover:text-[#1877F2] transition-colors"
                >
                  Facebook ↗
                </a>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2">
                <span>📍 SOMALWADA, NAGPUR</span>
                <span>MON - SAT 09:30 - 19:30</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
