"use client";

import { useEffect, RefObject } from "react";
import { initGSAP, gsap, ScrollTrigger } from "./gsapInit";

interface HorizontalScrollConfig {
  pinSectionRef: RefObject<HTMLElement | null>;
  trackRef: RefObject<HTMLElement | null>;
  enabled?: boolean;
}

export function useHorizontalScroll({
  pinSectionRef,
  trackRef,
  enabled = true,
}: HorizontalScrollConfig) {
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!enabled || prefersReducedMotion) return;

    initGSAP();

    const pinSection = pinSectionRef.current;
    const track = trackRef.current;

    if (!pinSection || !track) return;

    const ctx = gsap.context(() => {
      const getScrollWidth = () => {
        const isSmall = window.innerWidth < 640;
        const cardWidth = isSmall ? 300 : 420;
        const gap = 128;
        const padding = window.innerWidth * (isSmall ? 0.2 : 0.3);
        const totalTrackWidth = padding + 6 * cardWidth + 5 * gap;
        return totalTrackWidth - window.innerWidth + 200;
      };

      const scrollTween = gsap.to(track, {
        x: () => -getScrollWidth(),
        ease: "none",
        scrollTrigger: {
          trigger: pinSection,
          pin: true,
          start: "top top",
          end: () => `+=${getScrollWidth()}`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      const nodes = track.querySelectorAll(".timeline-node");
      nodes.forEach((node) => {
        ScrollTrigger.create({
          trigger: node,
          containerAnimation: scrollTween,
          start: "center 60%",
          end: "center 0%",
          onEnter: () => {
            gsap.to(node, {
              borderColor: "rgba(166, 107, 61, 0.4)",
              backgroundColor: "rgba(166, 107, 61, 0.08)",
              boxShadow: "0 0 20px rgba(166, 107, 61, 0.2)",
              duration: 0.35,
              overwrite: "auto",
            });
            gsap.to(node.querySelector(".timeline-node-inner"), {
              borderColor: "#A66B3D",
              backgroundColor: "#A66B3D",
              duration: 0.35,
              overwrite: "auto",
            });
            gsap.to(node.querySelector(".timeline-num"), {
              color: "#FCFBF9",
              duration: 0.35,
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.to(node, {
              borderColor: "rgba(232, 230, 227, 0.8)",
              backgroundColor: "rgba(252, 251, 249, 0.8)",
              boxShadow: "none",
              duration: 0.35,
              overwrite: "auto",
            });
            gsap.to(node.querySelector(".timeline-node-inner"), {
              borderColor: "rgba(232, 230, 227, 0.6)",
              backgroundColor: "#FCFBF9",
              duration: 0.35,
              overwrite: "auto",
            });
            gsap.to(node.querySelector(".timeline-num"), {
              color: "#5F666E",
              duration: 0.35,
              overwrite: "auto",
            });
          },
        });
      });

      const cards = track.querySelectorAll(".timeline-card");
      cards.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          containerAnimation: scrollTween,
          start: "left 65%",
          end: "right 35%",
          onEnter: () => {
            gsap.to(card, {
              scale: 1.03,
              backgroundColor: "rgba(252, 251, 249, 0.85)",
              borderColor: "rgba(166, 107, 61, 0.35)",
              boxShadow: "0 30px 70px rgba(15, 92, 105, 0.06), 0 0 25px rgba(166, 107, 61, 0.03)",
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(card.querySelectorAll(".deliverable-item"), {
              opacity: 1,
              x: 0,
              stagger: 0.08,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(card.querySelector(".timeline-icon"), {
              color: "#A66B3D",
              opacity: 1,
              scale: 1.05,
              duration: 0.4,
              overwrite: "auto",
            });
          },
          onLeaveBack: () => {
            gsap.to(card, {
              scale: 1,
              backgroundColor: "rgba(252, 251, 249, 0.4)",
              borderColor: "rgba(232, 230, 227, 0.6)",
              boxShadow: "0 10px 30px rgba(15, 92, 105, 0.01)",
              duration: 0.4,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(card.querySelectorAll(".deliverable-item"), {
              opacity: 0.5,
              x: -4,
              duration: 0.3,
              ease: "power2.out",
              overwrite: "auto",
            });
            gsap.to(card.querySelector(".timeline-icon"), {
              color: "rgba(95, 102, 110, 0.4)",
              opacity: 0.6,
              scale: 1,
              duration: 0.4,
              overwrite: "auto",
            });
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, [pinSectionRef, trackRef, enabled]);
}
