import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C1B1E] text-white select-none overflow-hidden">
      {/* Soft ambient background glow */}
      <div className="absolute w-[400px] h-[400px] bg-[#0F5C69]/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 max-w-sm text-center">
        {/* Minimal Logo with subtle breathing animation */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="Buildnest Logo"
            width={84}
            height={75}
            className="h-11 sm:h-14 w-auto object-contain filter drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)] animate-[pulse_3s_ease-in-out_infinite]"
            priority
          />
        </div>

        {/* Minimal Typography */}
        <div className="flex flex-col items-center gap-1.5 mt-1">
          <h2 className="font-[family:var(--font-proxima-nova-excn)] text-lg sm:text-xl font-bold tracking-[0.35em] text-white uppercase">
            BUILD<span className="text-[#A66B3D] font-light">NEST</span>
          </h2>
          <p className="font-[family:var(--font-avenir)] text-[10px] sm:text-[11px] tracking-[0.35em] text-white/50 uppercase font-light">
            Architecture &amp; Interiors
          </p>
        </div>

        {/* Elegant Hairline Progress Line */}
        <div className="w-32 sm:w-40 h-[1.5px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
          <div className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#A66B3D] to-transparent rounded-full animate-line-shimmer" />
        </div>
      </div>
    </div>
  );
}

