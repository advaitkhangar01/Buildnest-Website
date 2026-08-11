"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  glare?: boolean;
  depthShadow?: boolean;
}

const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };

const TiltCard3D = React.memo(function TiltCard3D({
  children,
  className = "",
  maxTilt = 6,
  perspective = 1000,
  glare = true,
  depthShadow = true,
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const isDesktop = window.innerWidth >= 1024;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setCanTilt(supportsHover && isDesktop && !prefersReducedMotion);
    }
  }, []);

  // Mouse relative coordinates (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics setup for smooth luxury feel
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Light glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  // Shadow displacement
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, 5]), springConfig);

  // Dynamic template for CSS glare gradient
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`;

  if (!canTilt) {
    return <div className={`relative group ${className}`}>{children}</div>;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    const rect = rectRef.current;
    if (!rect) return;
    const width = rect.width;
    const height = rect.height;
    
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rectRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={`relative group ${className}`}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full h-full transition-shadow duration-500 rounded-[inherit]"
      >
        {children}

        {glare && isHovered && (
          <motion.div
            style={{
              background: glareBackground,
            }}
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 transition-opacity duration-300 opacity-100"
          />
        )}
      </motion.div>

      {depthShadow && isHovered && (
        <motion.div
          style={{
            x: shadowX,
            y: shadowY,
          }}
          className="absolute inset-2 bg-primary/10 rounded-[inherit] blur-2xl -z-10 opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      )}
    </div>
  );
});

export default TiltCard3D;
