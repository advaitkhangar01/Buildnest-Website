"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileQuickBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling past initial hero height (150px)
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 z-40 md:hidden pointer-events-auto"
        >
          <div className="bg-[#121518]/92 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl shadow-3d-dark flex items-center justify-between gap-2 specular-border-dark">
            <a
              href="https://wa.me/919823000000?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 px-3 bg-emerald-600/90 hover:bg-emerald-600 rounded-xl text-white text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-sm"
            >
              <span>💬</span> WhatsApp
            </a>

            <a
              href="tel:+919823000000"
              className="flex-1 py-2.5 px-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 border border-white/10"
            >
              <span>📞</span> Call Studio
            </a>

            <Link
              href="/contact"
              className="py-2.5 px-3.5 bg-accent hover:bg-accent/90 rounded-xl text-white text-[11px] font-bold tracking-wider uppercase flex items-center justify-center transition-all active:scale-95 shrink-0"
            >
              Inquire ↗
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
