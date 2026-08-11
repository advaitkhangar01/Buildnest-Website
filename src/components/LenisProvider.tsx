"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { initGSAP, gsap, ScrollTrigger } from "@/lib/animations/gsapInit";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    initGSAP();

    // Check user preference for reduced motion & low spec / mobile conditions
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nav = typeof navigator !== "undefined" ? (navigator as unknown as { hardwareConcurrency?: number; deviceMemory?: number }) : {};
    const isLowPower = Boolean((nav.hardwareConcurrency && nav.hardwareConcurrency <= 4) || (nav.deviceMemory && nav.deviceMemory <= 4));
    const isTouchOrMobile = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024);

    if (prefersReducedMotion || isLowPower || isTouchOrMobile) {
      ScrollTrigger.refresh();
      return;
    }

    // Initialize Lenis with autoRaf: false so GSAP ticker exclusively drives the animation frame loop
    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    // Update ScrollTrigger calculations when Lenis scrolls
    const handleScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", handleScroll);

    // Bind GSAP ticker to drive Lenis RAF using high-resolution millisecond timestamps
    const tickHandler = () => {
      lenis.raf(performance.now());
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

    // Attach to global window object for debugging & external access
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(tickHandler);
      lenis.off("scroll", handleScroll);
      lenis.destroy();
      lenisRef.current = null;
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
