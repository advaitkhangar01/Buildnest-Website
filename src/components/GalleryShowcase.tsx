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

  return (
    <>
      {/* Gallery Showcase Section */}
      <section className="py-16 bg-bg-luxury border-b border-border-luxury/60">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-accent inline-block" />
                04 / Visual Documentation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-luxury font-heading">
                Project Gallery & Perspectives
              </h2>
            </div>
            <span className="text-xs font-mono text-text-luxury/60 uppercase tracking-widest">
              Click any image to view full screen
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => setActiveGalleryIndex(idx)}
                className="cursor-pointer group relative aspect-[4/3] rounded-none overflow-hidden bg-text-luxury border border-border-luxury shadow-3d-sm"
              >
                <Image
                  src={img}
                  alt={`${projectTitle} - View ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 bg-text-luxury text-bg-luxury font-mono text-xs font-bold uppercase tracking-widest shadow-lg">
                    Expand View
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal Lightbox */}
      <AnimatePresence>
        {activeGalleryIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
            onClick={() => setActiveGalleryIndex(null)}
          >
            <button
              onClick={() => setActiveGalleryIndex(null)}
              className="absolute top-6 right-6 text-white text-2xl font-bold hover:text-accent transition-colors z-50 px-4 py-2 bg-white/10 border border-white/20"
            >
              ✕ Close
            </button>

            <div
              className="relative max-w-5xl w-full aspect-[16/10] overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeGalleryIndex]}
                alt={`${projectTitle} Gallery Fullview`}
                fill
                className="object-contain"
              />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/80 bg-black/60 p-3 backdrop-blur-md">
                <span>{projectTitle} • Image {activeGalleryIndex + 1} of {galleryImages.length}</span>
                <div className="flex gap-4">
                  <button
                    onClick={() =>
                      setActiveGalleryIndex((prev) =>
                        prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0
                      )
                    }
                    className="hover:text-accent font-bold uppercase"
                  >
                    ← Prev
                  </button>
                  <button
                    onClick={() =>
                      setActiveGalleryIndex((prev) =>
                        prev !== null ? (prev + 1) % galleryImages.length : 0
                      )
                    }
                    className="hover:text-accent font-bold uppercase"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
