"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      if ((window as any).lenis) {
        (window as any).lenis.stop();
      }
    };

    const unlockScroll = () => {
      document.body.style.overflow = "";
      if ((window as any).lenis) {
        (window as any).lenis.start();
      }
    };

    const hasLoaded = sessionStorage.getItem("buildnest-preloader-shown");
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobileOrSmall = typeof window !== "undefined" && (window.innerWidth < 1024 || "ontouchstart" in window);

    if (hasLoaded === "true" || prefersReducedMotion || isMobileOrSmall) {
      setShouldRender(false);
      return;
    }

    lockScroll();

    // Context for GSAP selector safety in Next.js
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.timeline({
            onComplete: () => {
              sessionStorage.setItem("buildnest-preloader-shown", "true");
              setShouldRender(false);
              unlockScroll();
            }
          })
          .to([logoRef.current, textRef.current, lineRef.current], {
            y: -15,
            opacity: 0,
            duration: 0.35,
            ease: "power2.in"
          })
          .to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: "power2.inOut"
          }, "-=0.15");
        }
      });

      // Animate loading progress bar
      tl.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.5, ease: "power2.inOut" }
      );

      // Subtle intro text & logo float
      gsap.fromTo([logoRef.current, textRef.current],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }, containerRef);

    return () => {
      ctx.revert();
      unlockScroll();
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0C1B1E] text-white select-none overflow-hidden"
    >
      {/* Soft ambient background glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#0F5C69]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 max-w-sm text-center">
        {/* Logo */}
        <div ref={logoRef} className="relative opacity-0">
          <Image
            src="/images/logo.png"
            alt="Buildnest Logo"
            width={84}
            height={75}
            className="h-11 sm:h-14 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            priority
          />
        </div>

        {/* Minimal Typography */}
        <div ref={textRef} className="flex flex-col items-center gap-1.5 mt-1 opacity-0">
          <h1 className="font-[family:var(--font-proxima-nova-excn)] text-lg sm:text-xl font-bold tracking-[0.35em] text-white uppercase">
            BUILD<span className="text-[#A66B3D] font-light">NEST</span>
          </h1>
          <p className="font-[family:var(--font-avenir)] text-[10px] sm:text-[11px] tracking-[0.35em] text-white/50 uppercase font-light">
            Architecture &amp; Interiors
          </p>
        </div>

        {/* Elegant Hairline Progress Line */}
        <div className="w-32 sm:w-40 h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div
            ref={lineRef}
            className="h-full bg-gradient-to-r from-[#A66B3D] via-[#D4AF37] to-[#A66B3D] origin-left w-full scale-x-0 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
