import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FCFBF9] blueprint-grid">
      {/* Premium minimal architectural logo animation */}
      <div className="relative flex items-center justify-center">
        {/* Outer glowing pulsing ring */}
        <div className="absolute h-44 w-44 animate-[ping_2.5s_cubic-bezier(0.16,1,0.3,1)_infinite] rounded-full border border-[#0F5C69]/20"></div>
        {/* Inner spinning drawing compass ring */}
        <div className="h-36 w-36 animate-spin rounded-full border-t border-r border-[#0F5C69] border-b-transparent border-l-transparent" style={{ animationDuration: "1.2s" }}></div>
        {/* Center core logo */}
        <Image
          src="/images/logo.webp"
          alt="Buildnest Logo"
          width={96}
          height={96}
          className="absolute h-20 w-20 object-contain animate-pulse filter drop-shadow-md"
        />
      </div>
      
      {/* Text indicators */}
      <h2 className="mt-8 font-[family:var(--font-proxima-nova-excn)] text-2xl tracking-[0.35em] font-bold text-[#0F5C69] uppercase select-none">
        Buildnest
      </h2>
      <p className="mt-1 font-[family:var(--font-avenir)] text-[10px] tracking-[0.4em] text-[#A66B3D] uppercase select-none animate-pulse">
        Designing Spaces
      </p>
    </div>
  );
}
