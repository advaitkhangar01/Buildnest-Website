"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Preloader() {
  const [shouldRender, setShouldRender] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if preloader has already run in this session
    const hasLoaded = sessionStorage.getItem("buildnest-preloader-shown");
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasLoaded === "true" || prefersReducedMotion) {
      setShouldRender(false);
      return;
    }

    // Lock Scroll if lenis exists, or use body overflow
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

    lockScroll();

    // Context for GSAP selector safety in Next.js
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Slide out elements first
          gsap.timeline({
            onComplete: () => {
              sessionStorage.setItem("buildnest-preloader-shown", "true");
              setShouldRender(false);
              unlockScroll();
            }
          })
          .to([textRef1.current, textRef2.current, counterRef.current, lineRef.current], {
            y: -40,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            stagger: 0.06
          })
          // Curtain slide up animation (using clipPath for high-end feel)
          .to(containerRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1.0,
            ease: "power4.inOut"
          }, "-=0.2");
        }
      });

      // Progress value object for animation interpolation (DOM node updated directly)
      const counterVal = { value: 0 };
      tl.to(counterVal, {
        value: 100,
        duration: 1.8,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(counterVal.value).toString().padStart(3, "0");
          }
        }
      });

      // Subtle intro text floating animation
      gsap.fromTo([textRef1.current, textRef2.current], 
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.0, stagger: 0.15, ease: "power3.out" }
      );

      gsap.fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.6, ease: "power2.inOut" }
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
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0C1B1E] p-8 md:p-16 text-white blueprint-grid [clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] select-none"
    >
      {/* Top Section */}
      <div className="flex justify-between items-center w-full">
        <div 
          ref={textRef1}
          className="flex items-center gap-3.5"
        >
          <Image
            src="/images/logo.webp"
            alt="Buildnest Logo"
            width={70}
            height={64}
            className="h-10 sm:h-12 w-auto object-contain filter drop-shadow"
          />
          <span className="font-[family:var(--font-proxima-nova-excn)] text-base sm:text-lg tracking-[0.3em] font-extrabold text-[#A66B3D] uppercase">
            BUILDNEST
          </span>
        </div>
        <div className="font-[family:var(--font-avenir)] text-[10px] tracking-[0.2em] text-white/50 uppercase hidden sm:block">
          Nagpur, MH
        </div>
      </div>

      {/* Middle/Center Brand Text */}
      <div className="max-w-4xl self-start">
        <div 
          ref={textRef2}
          className="font-[family:var(--font-proxima-nova)] text-3xl sm:text-5xl md:text-6xl font-light tracking-tight leading-tight"
        >
          Architectural Engineering <br />
          <span className="text-[#A66B3D] font-normal">& Bespoke Interiors.</span>
        </div>
        
        {/* Animated thin blueprint line */}
        <div 
          ref={lineRef}
          className="h-[1px] bg-white/10 w-full mt-8 origin-left"
        ></div>
      </div>

      {/* Bottom Counter & Status */}
      <div className="flex flex-col sm:flex-row justify-between items-baseline sm:items-end w-full gap-4">
        <div className="font-[family:var(--font-avenir)] text-xs tracking-widest text-white/40 uppercase">
          Curating spaces with precision
        </div>
        <div 
          ref={counterRef}
          className="font-[family:var(--font-proxima-nova-excn)] text-8xl md:text-9xl font-extralight tracking-tighter text-[#A66B3D]"
        >
          000
        </div>
      </div>
    </div>
  );
}
