"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Why Us", href: "#why-us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress line
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled || isOpen
            ? "h-[88px] frosted-glass shadow-[0_10px_30px_-10px_rgba(30,33,37,0.04)]"
            : "h-[88px] bg-transparent border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Line (Bronze) */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left"
          style={{ scaleX }}
        />

        <div className="mx-auto h-full max-w-[1440px] px-5 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="relative z-50 flex items-center gap-4 group/logo"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center">
              <Image
                src="/images/logo.png"
                alt="Buildnest Logo"
                width={120}
                height={32}
                className="object-contain transition-transform duration-500 ease-out group-hover/logo:scale-105"
                priority
              />
            </div>

            {/* Awwwards-grade luxury vertical line separator */}
            <span
              className={`hidden sm:block h-6 w-[1px] origin-center transition-all duration-500 ease-out group-hover/logo:scale-y-110 ${
                isScrolled || isOpen
                  ? "bg-border-luxury/80 group-hover/logo:bg-accent/60"
                  : "bg-white/30 group-hover/logo:bg-accent"
              }`}
            />

            {/* Premium Creative Typography */}
            <div
              className={`hidden sm:flex items-center font-heading-excn text-[19px] font-medium tracking-[0.24em] select-none overflow-hidden h-6 transition-all duration-500 ${
                isScrolled || isOpen ? "text-text-luxury" : "text-white"
              }`}
              style={
                isScrolled || isOpen
                  ? {}
                  : {
                      textShadow: "0 1px 3px rgba(0, 0, 0, 0.4)",
                    }
              }
            >
              <div className="flex items-center h-6">
                {/* BUILD (Bold, structural) */}
                <span className="relative flex flex-col overflow-hidden h-6">
                  <span className="font-extrabold leading-6 transition-transform duration-500 ease-out group-hover/logo:-translate-y-full">
                    BUILD
                  </span>
                  <span className="absolute left-0 top-0 font-extrabold leading-6 text-accent transition-transform duration-500 ease-out translate-y-full group-hover/logo:translate-y-0">
                    BUILD
                  </span>
                </span>

                {/* NEST. (Elegant, light with blueprint dot) */}
                <span className="relative flex flex-col overflow-hidden h-6 ml-[4px] pr-[8px]">
                  <span className="font-light leading-6 text-accent transition-transform duration-500 ease-out delay-75 group-hover/logo:-translate-y-full">
                    NEST<span className={isScrolled || isOpen ? "text-text-luxury" : "text-white"}>.</span>
                  </span>
                  <span className="absolute left-0 top-0 font-light leading-6 transition-transform duration-500 ease-out delay-75 translate-y-full group-hover/logo:translate-y-0">
                    <span className={isScrolled || isOpen ? "text-text-luxury" : "text-white"}>NEST</span>
                    <span className="text-accent">.</span>
                  </span>
                </span>
              </div>
            </div>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-[13px] font-medium tracking-[0.08em] transition-colors uppercase py-2 group ${
                  isScrolled
                    ? "text-text-luxury/80 hover:text-text-luxury"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* Right CTA / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex">
              <Link
                href="#contact"
                className={`magnetic-button relative overflow-hidden border px-6 py-3 text-[11px] font-bold tracking-[0.12em] uppercase transition-all duration-300 ${
                  isScrolled || isOpen
                    ? "border-text-luxury bg-text-luxury text-bg-luxury hover:bg-transparent hover:text-text-luxury hover:border-text-luxury"
                    : "border-white/20 bg-white/10 text-white hover:bg-white hover:text-text-luxury hover:border-white"
                }`}
              >
                Start Your Project
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden relative z-50 p-2 -mr-2 transition-colors duration-300 ${
                isOpen || isScrolled ? "text-text-luxury" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg-luxury px-6 py-24 md:hidden border-b border-border-luxury shadow-lg"
          >
            {/* Blueprint Grid Lines (Luxury background theme) */}
            <div className="absolute inset-0 blueprint-grid opacity-[0.2] pointer-events-none" />

            <nav className="flex flex-col gap-6 text-center relative z-10">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[20px] font-bold tracking-[0.1em] text-text-luxury uppercase hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.05, duration: 0.4 }}
                className="mt-8 flex justify-center"
              >
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="magnetic-button border border-text-luxury bg-text-luxury text-bg-luxury hover:bg-transparent hover:text-text-luxury hover:border-text-luxury px-8 py-4 text-[12px] font-bold tracking-[0.15em] uppercase transition-all duration-300"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
