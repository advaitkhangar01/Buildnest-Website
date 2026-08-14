"use client";

import dynamic from "next/dynamic";

const MapBox = dynamic(() => import("@/components/MapBox"), {
  ssr: false,
  loading: () => (
    <div className="h-[300px] sm:h-[400px] rounded-3xl bg-black/5 animate-pulse border border-black/10" />
  ),
});

interface ClientMapProps {
  variant?: "dark" | "light";
  className?: string;
  mapHeightClass?: string;
}

export default function ClientMap({ variant = "dark", className = "", mapHeightClass = "h-[240px] sm:h-[280px]" }: ClientMapProps) {
  return <MapBox variant={variant} className={className} mapHeightClass={mapHeightClass} />;
}
