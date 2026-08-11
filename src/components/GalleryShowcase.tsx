"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryShowcaseProps {
  galleryImages: string[];
  projectTitle: string;
}

export default function GalleryShowcase({ galleryImages, projectTitle }: GalleryShowcaseProps) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  // Helper to detect if image path indicates portrait orientation
  const isPortraitImage = (url: string) => {
    return (
      url.includes("property-1") ||
      url.includes("img_3637") ||
      url.includes("img_3638") ||
      url.includes("interior")
    );
  };

  return (
    <>
      {/* Gallery Showcase Section */}
      <section className="py-16 bg-bg-luxury border-b border-border-luxury/60">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-accent inline-block" />
                04 / Architectural Visual Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-luxury font-heading">
                Adaptive Gallery & Perspectives ({galleryImages.length} Views)
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-text-luxury/60 uppercase tracking-widest hidden sm:inline">
                Natural Aspect Ratio Matching
              </span>
              <span className="px-3 py-1 bg-white border border-border-luxury text-[11px] font-bold font-mono text-accent uppercase">
                {galleryImages.length} High-Res Shots
              </span>
            </div>
          </div>

          {/* Dynamic Masonry Columns - Containers match image shape & size perfectly */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((img, idx) => {
              const portrait = isPortraitImage(img);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => setActiveGalleryIndex(idx)}
                  className={`break-inside-avoid cursor-pointer group relative overflow-hidden bg-text-luxury border border-border-luxury shadow-3d-sm rounded-none transition-all duration-500 hover:border-accent hover:shadow-3d-md ${
                    portrait ? "aspect-[3/4] sm:aspect-[9/14]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${projectTitle} - Architectural View ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Subtle Gradient & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                    <div className="self-end">
                      <span className="px-2.5 py-1 bg-accent text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                        {portrait ? "Portrait View" : "Perspective"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-white">
                      <span className="font-mono text-xs text-white/80 font-bold">
                        Shot 0{idx + 1}
                      </span>
                      <span className="px-3 py-1.5 bg-white text-text-luxury font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                        Expand Fullscreen
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M15 3h6v6h-2V5.414l-4.293 4.293-1.414-1.414L17.586 5H15V3zM9 21H3v-6h2v3.586l4.293-4.293 1.414 1.414L6.414 19H9v2z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Corner Accent Line */}
                  <div className="absolute top-0 left-0 w-8 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Modal Lightbox - Dynamic Frame matching active image proportions */}
      <AnimatePresence>
        {activeGalleryIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 select-none"
            onClick={() => setActiveGalleryIndex(null)}
          >
            {/* Top Modal Navigation Header */}
            <div className="w-full max-w-6xl flex items-center justify-between text-white mb-4 px-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest">
                  View 0{activeGalleryIndex + 1} / 0{galleryImages.length}
                </span>
                <span className="text-sm font-semibold text-white/80 font-heading hidden sm:inline">
                  {projectTitle}
                </span>
              </div>
              <button
                onClick={() => setActiveGalleryIndex(null)}
                className="text-white text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors px-4 py-2 bg-white/10 border border-white/20 flex items-center gap-2"
              >
                ✕ Close Preview
              </button>
            </div>

            {/* Modal Image Display Container - Dynamic Size & Aspect Ratio Matching */}
            <div
              className="relative max-h-[78vh] max-w-[90vw] flex items-center justify-center overflow-hidden border border-white/20 bg-black/80 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-h-[74vh] max-w-[85vw] w-[800px] h-[600px] flex items-center justify-center">
                <Image
                  src={galleryImages[activeGalleryIndex]}
                  alt={`${projectTitle} Gallery Fullview`}
                  fill
                  quality={95}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Prev / Next Floating Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveGalleryIndex((prev) =>
                    prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white font-mono font-bold flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 shadow-xl"
                aria-label="Previous Image"
              >
                ←
              </button>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveGalleryIndex((prev) =>
                    prev !== null ? (prev + 1) % galleryImages.length : 0
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 text-white font-mono font-bold flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300 shadow-xl"
                aria-label="Next Image"
              >
                →
              </button>
            </div>

            {/* Bottom Modal Caption & Controls */}
            <div
              className="w-full max-w-6xl mt-4 flex items-center justify-between text-xs font-mono text-white/80 bg-white/10 p-3 border border-white/15 backdrop-blur-md"
              onClick={(e) => e.stopPropagation()}
            >
              <span>[BUILDNEST HIGH-RESOLUTION ARCHITECTURAL PERSPECTIVE]</span>
              <div className="flex items-center gap-6">
                <button
                  onClick={() =>
                    setActiveGalleryIndex((prev) =>
                      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
                    )
                  }
                  className="hover:text-accent font-bold uppercase flex items-center gap-1"
                >
                  ← Previous
                </button>
                <span>|</span>
                <button
                  onClick={() =>
                    setActiveGalleryIndex((prev) =>
                      prev !== null ? (prev + 1) % galleryImages.length : 0
                    )
                  }
                  className="hover:text-accent font-bold uppercase flex items-center gap-1"
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
