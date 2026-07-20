"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCard3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt angle in degrees, default 6
  perspective?: number; // perspective distance in px, default 1000
  glare?: boolean;
  depthShadow?: boolean;
}

export default function TiltCard3D({
  children,
  className = "",
  maxTilt = 6,
  perspective = 1000,
  glare = true,
  depthShadow = true,
}: TiltCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse relative coordinates from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics setup for smooth luxury feel
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Light glare position
  const glareX = useTransform(mouseX, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], [0, 100]);

  // Shadow displacement
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), springConfig);
  const shadowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized x, y from -0.5 to 0.5
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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

        {/* Dynamic Specular Light Glare Overlay */}
        {glare && isHovered && (
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`,
            }}
            className="absolute inset-0 pointer-events-none rounded-[inherit] z-30 transition-opacity duration-300 opacity-100"
          />
        )}
      </motion.div>

      {/* Dynamic 3D Depth Shadow drop underneath */}
      {depthShadow && (
        <motion.div
          style={{
            x: shadowX,
            y: shadowY,
          }}
          className="absolute inset-2 bg-primary/10 rounded-[inherit] blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />
      )}
    </div>
  );
}
