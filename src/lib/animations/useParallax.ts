"use client";

import { useEffect, RefObject } from "react";
import { initGSAP, gsap } from "./gsapInit";

interface ParallaxConfig {
  triggerRef: RefObject<HTMLElement | null>;
  targetRef: RefObject<HTMLElement | null>;
  yFrom?: number;
  yTo?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
}

export function useParallax({
  triggerRef,
  targetRef,
  yFrom = -80,
  yTo = 80,
  start = "top bottom",
  end = "bottom top",
  scrub = true,
}: ParallaxConfig) {
  useEffect(() => {
    initGSAP();

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isSmallViewportOrTouch =
      typeof window !== "undefined" &&
      (window.innerWidth < 1024 || "ontouchstart" in window || navigator.maxTouchPoints > 0);

    if (!triggerRef.current || !targetRef.current || prefersReducedMotion || isSmallViewportOrTouch) return;

    const ctx = gsap.context(() => {
      if (targetRef.current && triggerRef.current) {
        gsap.fromTo(
          targetRef.current,
          { y: yFrom },
          {
            y: yTo,
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start,
              end,
              scrub,
            },
          }
        );
      }
    }, triggerRef);

    return () => {
      ctx.revert();
    };
  }, [triggerRef, targetRef, yFrom, yTo, start, end, scrub]);
}
