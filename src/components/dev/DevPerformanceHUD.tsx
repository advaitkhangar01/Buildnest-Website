"use client";

import { useEffect, useState, useRef } from "react";
import { ScrollTrigger } from "@/lib/animations/gsapInit";

export default function DevPerformanceHUD() {
  const [fps, setFps] = useState(60);
  const [frameTime, setFrameTime] = useState(0);
  const [stCount, setStCount] = useState(0);
  const [heapMB, setHeapMB] = useState<number | null>(null);
  const [lenisScroll, setLenisScroll] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV === "production") return;

    const measure = (now: number) => {
      frameCountRef.current++;
      const delta = now - lastTimeRef.current;

      if (delta >= 500) {
        const currentFps = Math.round((frameCountRef.current * 1000) / delta);
        const avgFrameTime = (delta / frameCountRef.current).toFixed(1);
        
        setFps(currentFps);
        setFrameTime(parseFloat(avgFrameTime));

        // Measure Active ScrollTriggers
        if (typeof window !== "undefined" && ScrollTrigger) {
          setStCount(ScrollTrigger.getAll().length);
        }

        // Measure JS Heap Memory if supported
        const perf = performance as unknown as { memory?: { usedJSHeapSize: number } };
        if (perf.memory) {
          setHeapMB(Math.round(perf.memory.usedJSHeapSize / (1024 * 1024)));
        }

        // Measure Lenis Status
        const lenis = (window as unknown as { lenis?: { scroll: number } }).lenis;
        if (lenis) {
          setLenisScroll(Math.round(lenis.scroll));
        }

        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      rafIdRef.current = requestAnimationFrame(measure);
    };

    rafIdRef.current = requestAnimationFrame(measure);

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] font-mono text-[10px] select-none pointer-events-auto">
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-black/90 text-accent border border-accent/40 px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md font-bold uppercase tracking-wider hover:bg-black"
        >
          ⚡ HUD ({fps} FPS)
        </button>
      ) : (
        <div className="bg-[#0C1014]/95 text-white/90 border border-white/20 p-3 rounded-2xl shadow-2xl backdrop-blur-xl w-[220px] flex flex-col gap-2">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
            <span className="font-bold text-accent tracking-wider uppercase text-[9px] flex items-center gap-1.5">
              <span className={`w-2 h-2 rounded-full ${fps >= 55 ? "bg-emerald-400" : fps >= 30 ? "bg-amber-400" : "bg-red-500"} animate-pulse`} />
              PERF INSTRUMENTATION
            </span>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/40 hover:text-white text-xs px-1"
            >
              ✕
            </button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <div className="text-[8px] text-white/50 uppercase">Frame Rate</div>
              <div className={`font-bold text-sm ${fps >= 55 ? "text-emerald-400" : fps >= 30 ? "text-amber-400" : "text-red-400"}`}>
                {fps} <span className="text-[9px] font-normal text-white/40">FPS</span>
              </div>
            </div>

            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <div className="text-[8px] text-white/50 uppercase">Frame Time</div>
              <div className="font-bold text-sm text-white">
                {frameTime} <span className="text-[9px] font-normal text-white/40">ms</span>
              </div>
            </div>

            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <div className="text-[8px] text-white/50 uppercase">ScrollTriggers</div>
              <div className="font-bold text-sm text-accent">
                {stCount} <span className="text-[9px] font-normal text-white/40">active</span>
              </div>
            </div>

            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <div className="text-[8px] text-white/50 uppercase">Lenis Scroll</div>
              <div className="font-bold text-sm text-white">
                {lenisScroll} <span className="text-[9px] font-normal text-white/40">px</span>
              </div>
            </div>
          </div>

          {heapMB !== null && (
            <div className="flex justify-between items-center bg-white/5 px-2 py-1 rounded-md text-[9.5px]">
              <span className="text-white/50">JS Heap Memory</span>
              <span className="font-bold text-emerald-400">{heapMB} MB</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
