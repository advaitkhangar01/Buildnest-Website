"use client";

import { useEffect, useRef, useState, memo } from "react";
import TiltCard3D from "@/components/TiltCard3D";
import { useHorizontalScroll } from "@/lib/animations/useHorizontalScroll";
import { PROCESS_STEPS, ProcessStep } from "@/data/processData";

const ProcessStepIcon = memo(({ type }: { type: ProcessStep["iconType"] }) => {
  switch (type) {
    case "concept":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" strokeDasharray="4 2" />
          <path d="M6 17v4m12-4v4M3 21h18" strokeLinecap="round" />
          <path d="M7 7h10M7 11h6" strokeLinecap="round" />
        </svg>
      );
    case "cad":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" strokeOpacity="0.2" />
          <path d="M6 6h12v4H6z" fill="currentColor" fillOpacity="0.05" />
          <circle cx="12" cy="12" r="4" strokeDasharray="2 2" />
        </svg>
      );
    case "permits":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="15" cy="15" r="2.5" fill="currentColor" fillOpacity="0.1" />
        </svg>
      );
    case "turnkey":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 21V9l8-4 8 4v12" strokeLinecap="round" />
          <path d="M4 13h16M4 17h16" />
          <path d="M12 5v16" strokeOpacity="0.3" />
          <rect x="7" y="13" width="2" height="4" />
          <rect x="15" y="13" width="2" height="4" />
        </svg>
      );
    case "fitouts":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 12h18M12 3v18" strokeOpacity="0.2" />
          <path d="M8 18h8M12 18v-4M10 14h4l-1-4h-2l-1 4z" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05" />
          <path d="M12 6a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      );
    case "handover":
      return (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="8" cy="12" r="4" />
          <path d="M12 12h9v3m-3-3v3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="17" cy="7" r="1.5" fill="currentColor" />
        </svg>
      );
  }
});
ProcessStepIcon.displayName = "ProcessStepIcon";

export default function Process() {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useHorizontalScroll({
    pinSectionRef,
    trackRef,
    enabled: isDesktop,
  });

  return (
    <section
      ref={pinSectionRef}
      id="process"
      className="relative lg:h-screen bg-white lg:overflow-hidden border-b border-border-luxury/50 py-20 lg:py-0"
    >
      <div className="absolute inset-0 blueprint-grid opacity-[0.1]" />

      <div className="absolute top-[40%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl [transform:translateZ(0)] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-accent/[0.03] blur-3xl [transform:translateZ(0)] pointer-events-none select-none z-0" />

      <div className="relative lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full flex flex-col justify-between py-0 lg:py-12 px-5 sm:px-10 lg:px-16 pointer-events-none mb-8 lg:mb-0 z-10">
        <div className="max-w-[640px] pointer-events-auto">
          <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-accent inline-block" />
            04 / Workflow
          </span>
          <h2 className="section-heading text-[clamp(32px,4.5vw,48px)] text-text-luxury leading-[1.1] font-bold">
            The Precision Blueprint.
          </h2>
        </div>

        <div className="hidden lg:flex items-center gap-4 text-text-luxury text-xs font-bold tracking-[0.2em] uppercase">
          <span>Scroll Down to Progress</span>
          <div className="w-16 h-[1px] bg-border-luxury relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-8 bg-accent animate-pulse-slow" />
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-32 w-full px-5 sm:px-10 lg:px-0 lg:w-max"
        style={isDesktop ? { paddingLeft: "30vw", paddingRight: "30vw" } : {}}
      >
        <div 
          className="hidden lg:block absolute left-0 right-0 h-[2px] bg-border-luxury/70 z-0 pointer-events-none" 
          style={{ top: "calc(35vh + 24px)" }}
        />

        {PROCESS_STEPS.map((step) => (
          <div
            key={step.num}
            className="step-group flex flex-col items-center lg:items-start relative flex-shrink-0 w-full lg:w-[420px]"
          >
            <div
              className="timeline-node w-12 h-12 rounded-full border-2 border-border-luxury bg-bg-luxury/80 flex items-center justify-center relative z-10 transition-all duration-300 pointer-events-none mb-6 lg:mb-0"
              style={isDesktop ? { top: "35vh", position: "absolute" } : {}}
            >
              <div className="timeline-node-inner w-7 h-7 rounded-full border border-border-luxury/60 bg-bg-luxury flex items-center justify-center transition-all duration-300">
                <span className="timeline-num text-[11px] font-mono font-bold text-text-luxury">
                  {step.num}
                </span>
              </div>
            </div>

            <div 
              className="w-full"
              style={isDesktop ? { marginTop: "calc(35vh + 56px)" } : {}}
            >
              <TiltCard3D maxTilt={6} className="w-full">
                <div className="timeline-card p-6 sm:p-10 pt-6 sm:pt-8 rounded-[28px] border border-border-luxury bg-white flex flex-col gap-6 text-left transition-all duration-500 shadow-3d-md specular-border relative overflow-hidden group preserve-3d">
                  <span className="absolute right-6 top-4 text-[70px] sm:text-[100px] font-black text-text-luxury/[0.05] select-none pointer-events-none leading-none font-heading translate-z-10">
                    {step.num}
                  </span>

                  <div className="flex items-center justify-between translate-z-20">
                    <div className="timeline-icon text-accent w-10 h-10 flex items-center justify-center transition-all duration-500">
                      <ProcessStepIcon type={step.iconType} />
                    </div>
                    <span className="text-xs font-bold tracking-[0.18em] text-accent uppercase">
                      {step.phase}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 relative z-10 translate-z-30">
                    <h3 className="text-[20px] sm:text-[24px] font-bold tracking-tight text-text-luxury font-heading leading-tight">
                      {step.title.includes("&") ? (
                        <>
                          {step.title.split("&")[0]}
                          <span className="font-body font-light">&amp;</span>
                          {step.title.split("&")[1]}
                        </>
                      ) : (
                        step.title
                      )}
                    </h3>
                    <p className="text-text-luxury text-sm sm:text-base leading-[1.6] font-medium">
                      {step.desc}
                    </p>
                  </div>

                  <div className="h-[1px] bg-border-luxury my-1 relative z-10 translate-z-10" />
                  <div className="flex flex-col gap-2.5 relative z-10 translate-z-20">
                    <span className="text-xs font-bold tracking-[0.15em] text-accent uppercase">
                      Key Deliverables
                    </span>
                    <ul className="flex flex-col gap-2">
                      {step.deliverables.map((item) => (
                        <li
                          key={item}
                          className="deliverable-item flex items-center gap-3 text-sm text-text-luxury font-semibold transition-all duration-300"
                          style={{ transform: isDesktop ? "translateX(-4px)" : "none" }}
                        >
                          <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard3D>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
