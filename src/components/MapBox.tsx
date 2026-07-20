"use client";

import React from "react";

interface MapBoxProps {
  variant?: "dark" | "light";
  className?: string;
  title?: string;
  subtitle?: string;
  mapHeightClass?: string;
}

export default function MapBox({
  variant = "dark",
  className = "",
  title = "Buildnest Design HQ",
  subtitle = "Civil Lines / Ramdaspeth Main Road, Nagpur, MS 440001",
  mapHeightClass = "h-[240px] sm:h-[280px]",
}: MapBoxProps) {
  const isDark = variant === "dark";

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59518.84711681283!2d79.040183!3d21.161027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34440938f0d86927%3A0x633519c52250165b!2sCivil%20Lines%2C%20Nagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  const directionsUrl =
    "https://www.google.com/maps/search/?api=1&query=Civil+Lines+Nagpur+Maharashtra";

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border transition-all duration-300 ${
        isDark
          ? "bg-white/5 border-white/15 shadow-3d-dark text-white backdrop-blur-xl"
          : "bg-white border-border-luxury shadow-3d-lg text-text-luxury"
      } ${className}`}
    >
      {/* Header Bar */}
      <div
        className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b ${
          isDark ? "border-white/10 bg-white/[0.03]" : "border-border-luxury/60 bg-bg-luxury/40"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              isDark
                ? "bg-accent/20 text-accent border border-accent/30"
                : "bg-text-luxury text-bg-luxury"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase block text-accent"
            >
              Interactive Map
            </span>
            <h4 className="text-sm sm:text-base font-extrabold tracking-tight leading-tight">
              {title}
            </h4>
            <p
              className={`text-[11px] sm:text-xs font-medium line-clamp-1 ${
                isDark ? "text-white/70" : "text-text-luxury/70"
              }`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
            isDark
              ? "bg-accent text-white hover:bg-white hover:text-text-luxury"
              : "bg-text-luxury text-bg-luxury hover:bg-accent hover:text-white"
          }`}
        >
          <span>Get Directions</span>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      {/* Map Iframe Container (Full Color Map) */}
      <div className={`relative w-full ${mapHeightClass} group overflow-hidden`}>
        <iframe
          title="Buildnest Studio Map Location"
          src={mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Live Badge Overlay on Map */}
        <div className="absolute bottom-3 left-3 pointer-events-none">
          <div
            className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest backdrop-blur-md flex items-center gap-2 ${
              isDark
                ? "bg-text-luxury/90 border border-white/20 text-white shadow-lg"
                : "bg-white/90 border border-black/10 text-text-luxury shadow-md"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Nagpur Studio Coordinates
          </div>
        </div>
      </div>
    </div>
  );
}
