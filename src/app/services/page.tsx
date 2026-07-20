"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard3D from "@/components/TiltCard3D";

interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
  processSteps: { step: string; title: string; text: string }[];
}

const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "architecture",
    title: "Architectural Design & Masterplanning",
    subtitle: "Bespoke elevations, spatial intelligence & structural harmony.",
    description:
      "Our architectural studio crafts iconic silhouettes tailored to Nagpur's microclimate and topography. We combine passive solar design, natural light optimization, and structural innovation to build spaces that stand the test of time.",
    image: "/images/project_1.webp",
    deliverables: [
      "Conceptual 3D Elevations & Photorealistic Renders",
      "Floor Plan Layouts & Spatial Optimization",
      "Structural Stability & Load Calculations",
      "Sanction Drawings & Municipal Compliance",
      "Vaastu & Environmental Planning Integration",
    ],
    processSteps: [
      { step: "01", title: "Site Context Analysis", text: "Analyzing sun path, soil report, wind direction & site contours." },
      { step: "02", title: "Conceptual Layout", text: "Developing 2D zoning schemes and 3D architectural massing options." },
      { step: "03", title: "BIM & Structural Detailing", text: "Creating millimeter-accurate 3D BIM models for flawless site execution." },
    ],
  },
  {
    id: "construction",
    title: "Turnkey Civil Construction",
    subtitle: "End-to-end structural execution with zero quality tolerance.",
    description:
      "Buildnest manages your entire construction journey from excavation to final paint coat. We operate under a single point of accountability, providing transparent BOQ pricing, certified steel/concrete quality, and strict timeline adherence.",
    image: "/images/project_3.webp",
    deliverables: [
      "Heavy RCC Frame & Foundation Execution",
      "Premium Brickwork, Plastering & Waterproofing",
      "M25/M30 Grade Lab-Tested Ready-Mix Concrete",
      "MEP (Mechanical, Electrical, Plumbing) Conduit Setup",
      "Weekly Site Progress Audits & Video Reporting",
    ],
    processSteps: [
      { step: "01", title: "Excavation & Substructure", text: "Precision piling, footing, and anti-termite foundation treatment." },
      { step: "02", title: "Superstructure Slab Pours", text: "Monitored concrete pours with ultrasonic pulse velocity testing." },
      { step: "03", title: "Finishing & Handover", text: "Final snag list audits, waterproofing tests, and key handover." },
    ],
  },
  {
    id: "interiors",
    title: "Luxury Interior Architecture",
    subtitle: "Tactile material palettes, bespoke furniture & atmospheric lighting.",
    description:
      "Transforming bare shell structures into sensory luxury habitats. We specialize in Italian marble flooring, custom bronze metalwork, concealed acoustic ceilings, and smart home automation integration.",
    image: "/images/project_4.webp",
    deliverables: [
      "Custom Teak & Walnut Joinery Manufacturing",
      "Bookmatched Italian Marble Layout & Polish",
      "Architectural Lighting Design & Automation",
      "Acoustic Baffles & Wall Cladding Solutions",
      "Loose Furniture & Soft Furnishings Curation",
    ],
    processSteps: [
      { step: "01", title: "Moodboard & Sample Selection", text: "Curating tactile veneer, stone, fabric & metal swatches." },
      { step: "02", title: "Factory Joinery Production", text: "Precision CNC cutting and hand finishing in controlled workshops." },
      { step: "03", title: "White-Glove On-Site Fitout", text: "Clean room installation of custom cabinetry and marble slabs." },
    ],
  },
  {
    id: "consultancy",
    title: "Project Management & Structural Audit",
    subtitle: "Independent engineering oversight, cost optimization & quality control.",
    description:
      "For clients who already have an architectural design or contractor, Buildnest provides third-party quality control, bill verification, structural health certification, and schedule optimization.",
    image: "/images/project_2.webp",
    deliverables: [
      "BOQ (Bill of Quantities) Cost Auditing & Value Engineering",
      "Structural Stability Certification by Licensed Engineers",
      "Non-Destructive Testing (Rebound Hammer & Ultrasonic)",
      "Contractor Milestone Verification & Invoice Vetting",
    ],
    processSteps: [
      { step: "01", title: "Design & Cost Audit", text: "Reviewing architectural blueprints to eliminate material wastage." },
      { step: "02", title: "Independent Quality Audits", text: "Unannounced site inspections for steel rebar & concrete slump." },
      { step: "03", title: "Compliance Certification", text: "Issuing formal structural stability & safety reports." },
    ],
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string>("architecture");

  const currentService = SERVICES_LIST.find((s) => s.id === selectedService) || SERVICES_LIST[0];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        
        {/* Redesigned Hero Section - CAD Blueprint Capabilities Header */}
        <section className="relative py-12 lg:py-16 bg-text-luxury text-bg-luxury border-b border-white/10 overflow-hidden">
          {/* Enhanced Background Layer */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.1] animate-pulse-slow" />
            
            {/* Ambient Spotlights */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-30 right-10 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-accent/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />

            {/* Horizontal Laser Scanning Line */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-80"
            />

            {/* Floating Structural Drafting Compass Arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute right-[5%] top-[8%] w-[320px] h-[320px] rounded-full border border-dashed border-primary/30 flex items-center justify-center hidden lg:flex"
            >
              <div className="w-[200px] h-[200px] border border-accent/30 rotate-45 flex items-center justify-center">
                <div className="w-[100px] h-[100px] rounded-full border border-white/20" />
              </div>
            </motion.div>
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-accent font-mono text-xs uppercase tracking-[0.2em]">
                <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                Engineering & Design Spectrum // 02
              </div>

              <h1 className="section-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                Engineered Capabilities. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
                  Single-Source Rigor.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-bg-luxury font-medium max-w-2xl leading-relaxed">
                From initial 3D BIM elevation blueprints to white-glove turnkey construction and interior craftsmanship, Buildnest delivers seamless architectural execution across Nagpur.
              </p>
            </div>

            {/* Floating 4-Pillar Capability Grid Embedded in Hero */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES_LIST.map((srv, idx) => (
                <button
                  key={srv.id}
                  onClick={() => {
                    setSelectedService(srv.id);
                    const el = document.getElementById("services-detail-grid");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`p-6 text-left border transition-all duration-300 group ${
                    selectedService === srv.id
                      ? "bg-accent text-white border-accent shadow-xl scale-[1.02]"
                      : "bg-white/10 text-white border-white/20 hover:border-accent hover:bg-white/20"
                  }`}
                >
                  <span className={`text-xs font-mono tracking-widest uppercase block mb-2 font-bold ${
                    selectedService === srv.id ? "text-white" : "text-accent"
                  }`}>
                    0{idx + 1} // Vertical
                  </span>
                  <h3 className="text-lg font-bold leading-snug">{srv.title}</h3>
                  <p className={`mt-2 text-sm font-medium line-clamp-2 ${
                    selectedService === srv.id ? "text-white" : "text-bg-luxury"
                  }`}>
                    {srv.subtitle}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold text-accent group-hover:text-white transition-colors">
                    Explore Vertical →
                  </span>
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Interactive Services Breakdown */}
        <section id="services-detail-grid" className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            
            {/* Service Selection Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {SERVICES_LIST.map((srv) => (
                <TiltCard3D key={srv.id} maxTilt={6} className="h-full">
                  <button
                    onClick={() => setSelectedService(srv.id)}
                    className={`w-full h-full p-6 text-left border rounded-2xl transition-all duration-300 preserve-3d ${
                      selectedService === srv.id
                        ? "bg-text-luxury text-bg-luxury border-text-luxury shadow-3d-md specular-border-dark"
                        : "bg-white text-text-luxury border-border-luxury hover:border-accent shadow-3d-sm specular-border"
                    }`}
                  >
                    <span className={`text-xs font-mono tracking-widest uppercase block mb-2 font-bold translate-z-10 ${
                      selectedService === srv.id ? "text-accent" : "text-text-luxury"
                    }`}>
                      0{SERVICES_LIST.findIndex((s) => s.id === srv.id) + 1} // Service
                    </span>
                    <h3 className="text-lg font-bold leading-snug line-clamp-2 translate-z-20">{srv.title}</h3>
                  </button>
                </TiltCard3D>
              ))}
            </div>

            {/* Active Service Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Image & Feature Deliverables */}
                <div className="lg:col-span-5 space-y-6">
                  <TiltCard3D maxTilt={5}>
                    <div className="relative aspect-[4/3] bg-text-luxury border border-border-luxury rounded-2xl overflow-hidden shadow-3d-md specular-border">
                      <Image
                        src={currentService.image}
                        alt={currentService.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                    </div>
                  </TiltCard3D>

                  <TiltCard3D maxTilt={5}>
                    <div className="p-8 bg-white border border-border-luxury rounded-2xl shadow-3d-sm specular-border preserve-3d">
                      <h4 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4 translate-z-10">
                        Key Deliverables Included
                      </h4>
                      <ul className="space-y-3 translate-z-20">
                        {currentService.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm font-bold text-text-luxury">
                            <span className="text-accent font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard3D>
                </div>

                {/* Right Column: Narrative, Subtitle & Step-by-Step Workflow */}
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2 font-bold">
                      Service Overview
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-luxury">
                      {currentService.title}
                    </h2>
                    <p className="mt-3 text-lg text-accent font-bold italic">
                      “{currentService.subtitle}”
                    </p>
                    <p className="mt-4 text-lg text-text-luxury leading-relaxed font-medium">
                      {currentService.description}
                    </p>
                  </div>

                  {/* Execution Process Steps */}
                  <div className="pt-6 border-t border-border-luxury">
                    <h3 className="text-base font-extrabold uppercase tracking-wider text-text-luxury mb-4">
                      Execution Workflow
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {currentService.processSteps.map((step) => (
                        <div key={step.step} className="p-5 bg-white border border-border-luxury">
                          <span className="block text-3xl font-extrabold text-accent font-mono mb-2">
                            {step.step}
                          </span>
                          <h4 className="text-base font-bold text-text-luxury mb-2">{step.title}</h4>
                          <p className="text-sm font-medium text-text-luxury leading-relaxed">{step.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consultation CTA Link */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href="/contact"
                      className="w-full sm:w-auto px-8 py-4 bg-text-luxury text-bg-luxury font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300 text-center"
                    >
                      Book A Consultation for {currentService.title.split(" ")[0]}
                    </Link>
                    <Link
                      href="/projects"
                      className="w-full sm:w-auto px-8 py-4 border border-border-luxury text-text-luxury font-bold text-xs uppercase tracking-widest hover:border-text-luxury transition-all duration-300 text-center"
                    >
                      View Related Projects
                    </Link>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* Why Choose Buildnest Grid */}
        <section className="py-12 bg-text-luxury text-bg-luxury">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase block mb-2">
                Our Guarantee
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-heading text-white">
                The Buildnest Quality Standard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 border border-white/20 bg-white/10">
                <span className="text-3xl font-bold text-accent font-mono block mb-3">01.</span>
                <h3 className="text-xl font-bold mb-3 text-white">Transparent Fixed-Price BOQ</h3>
                <p className="text-sm text-bg-luxury leading-relaxed font-medium">
                  No hidden costs or budget inflations. Detailed itemized bill of quantities provided prior to construction initiation.
                </p>
              </div>

              <div className="p-8 border border-white/20 bg-white/10">
                <span className="text-3xl font-bold text-accent font-mono block mb-3">02.</span>
                <h3 className="text-xl font-bold mb-3 text-white">Certified Lab Testing</h3>
                <p className="text-sm text-bg-luxury leading-relaxed font-medium">
                  Every batch of cement, TMT steel, and sand undergoes rigorous lab testing to ensure structural safety and longevity.
                </p>
              </div>

              <div className="p-8 border border-white/20 bg-white/10">
                <span className="text-3xl font-bold text-accent font-mono block mb-3">03.</span>
                <h3 className="text-xl font-bold mb-3 text-white">Single-Point Responsibility</h3>
                <p className="text-sm text-bg-luxury leading-relaxed font-medium">
                  Zero coordination hassle. One dedicated project manager handles architects, structural engineers, vendors, and labor teams.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
