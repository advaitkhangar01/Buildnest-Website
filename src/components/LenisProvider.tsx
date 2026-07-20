"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Turn off GSAP lag smoothing to maintain continuous frame sync with Lenis
    gsap.ticker.lagSmoothing(0);

    // Detect touch / mobile device
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 768);

    // Initialize Lenis scroller with autoRaf false so GSAP ticker exclusively drives the frame loop
    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: isTouchDevice ? 1.0 : 1.5,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    // Synchronize ScrollTrigger with Lenis scroll events
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", handleScroll);

    // Bind GSAP ticker to Lenis RAF (time in milliseconds)
    const tickHandler = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickHandler);

    // Smooth scroll in-page anchor links (href="#...")
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el as HTMLElement, { offset: -88 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    // Refresh ScrollTrigger layout calculations after Lenis mounts
    ScrollTrigger.refresh();

    // Store in global window for debugging & window.lenis access
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickHandler);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.lagSmoothing(500, 33);
      delete (window as unknown as { lenis?: Lenis }).lenis;
    };
  }, []);

  // Reset scroll to top and refresh triggers on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      ScrollTrigger.refresh();
    }
  }, [pathname]);

  return <>{children}</>;
}

