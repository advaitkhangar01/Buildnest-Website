"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard3D from "@/components/TiltCard3D";

const PILLARS = [
  {
    num: "01",
    title: "Structural Rigor",
    description: "Every blueprint undergo 3D structural stress modeling to guarantee 50+ year integrity and zero seismic compromise.",
  },
  {
    num: "02",
    title: "Passive Climate Design",
    description: "Optimizing sun orientation, cross-ventilation, and thermal mass to reduce active air-conditioning loads by up to 30%.",
  },
  {
    num: "03",
    title: "Artisanal Craftsmanship",
    description: "Collaborating with master stonemasons, Italian marble specialists, and custom joiners for bespoke finishing.",
  },
  {
    num: "04",
    title: "Turnkey Accountability",
    description: "Single-point ownership from municipal sanctioning to white-glove key handover with transparent fixed budgets.",
  },
];

const TIMELINE = [
  {
    year: "2012",
    title: "Studio Inception",
    description: "Founded in Nagpur as a boutique architectural practice focusing on bespoke residential villas.",
  },
  {
    year: "2016",
    title: "Commercial & Civil Scale-Up",
    description: "Expanded operations into full-scale civil engineering, commercial facades, and structural consultancy.",
  },
  {
    year: "2020",
    title: "Integrated Turnkey Model",
    description: "Pioneered integrated design-build turnkey execution, taking complete control of construction supply chains.",
  },
  {
    year: "2024",
    title: "Landmark Portfolio",
    description: "Crossed 50+ completed luxury residences & commercial towers in Central India with 12 national design accolades.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        
        {/* Redesigned Hero Section - Editorial Heritage Header */}
        <section className="relative py-12 lg:py-16 bg-text-luxury text-bg-luxury border-b border-white/10 overflow-hidden">
          {/* Enhanced Background & Depth Layer */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.08] animate-pulse-slow" />
            
            {/* Soft Warm Depth Spotlights */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 left-10 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 right-10 w-[450px] h-[450px] bg-accent/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />

            {/* Horizontal Light Scan */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-80"
            />

            {/* Floating Architectural Monolith Pillar Outline Wireframe */}
            <motion.div
              animate={{ y: [-10, 10, -10], rotate: [0, 2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[3%] bottom-[15%] w-[180px] h-[260px] rounded-t-[90px] border border-dashed border-white/20 hidden lg:block"
            >
              <div className="w-full h-full border-t border-accent/30 rounded-t-[90px] mt-4 flex items-center justify-center" />
            </motion.div>
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Vision Headline */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-5"
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-accent font-mono text-xs uppercase tracking-[0.2em]">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  Our Heritage & Studio Story // 01
                </div>

                <h1 className="section-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                  Architectural Rigor. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
                    Uncompromising Craft.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-bg-luxury font-medium max-w-2xl leading-relaxed">
                  Founded by Rohan Shahoo, Buildnest was established to bridge the gap between creative architectural vision and zero-compromise civil engineering precision. We build structures that endure for generations across Nagpur and Central India.
                </p>

                {/* Legacy Highlights Pill Row */}
                <div className="pt-2 flex flex-wrap items-center gap-6 text-sm font-mono text-bg-luxury font-bold">
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">15+</span> Years Mastery
                  </div>
                  <div className="h-4 w-[1px] bg-white/30" />
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">50+</span> Landmarks
                  </div>
                  <div className="h-4 w-[1px] bg-white/30" />
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-bold">12</span> Design Accolades
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Studio Card with Glass EST 2012 Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="relative p-4 bg-white/10 border border-white/20 backdrop-blur-xl rounded-none shadow-2xl space-y-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <Image
                      src="/images/project_2.webp"
                      alt="Buildnest Studio Heritage"
                      fill
                      className="object-cover opacity-90"
                      priority
                      sizes="(max-width: 1024px) 100vw, 35vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    <div className="absolute top-3 right-3 px-3 py-1 bg-accent text-white text-xs font-mono tracking-widest uppercase font-bold backdrop-blur-md">
                      EST. 2012 // NAGPUR
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-xs font-mono tracking-widest text-accent uppercase block font-bold">Leadership & Philosophy</span>
                      <h3 className="text-lg font-bold text-white">Rohan Shahoo & Studio Team</h3>
                    </div>
                  </div>

                  <div className="p-3 bg-white/10 border border-white/15 text-sm text-bg-luxury leading-relaxed font-medium">
                    “True luxury lies in structural honesty, climate harmony, and unshakeable engineering.”
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section className="py-10 sm:py-14 border-b border-border-luxury">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs font-mono text-accent uppercase tracking-widest block font-bold">
                  The Buildnest Philosophy
                </span>
                <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-luxury">
                  Crafting Landmarks that Endure.
                </h2>
                <p className="text-lg text-text-luxury leading-relaxed font-medium">
                  We believe true architectural luxury is not merely superficial decoration—it is the seamless unity of structural engineering, climate-responsive design, and honest materials.
                </p>
                <p className="text-lg text-text-luxury leading-relaxed font-medium">
                  Under the leadership of Rohan Shahoo and our multi-disciplinary team of civil engineers, architects, and interior designers, Buildnest has built a reputation for transforming complex design concepts into tangible structural reality across Nagpur.
                </p>
                <div className="pt-4 flex items-center gap-8 border-t border-border-luxury">
                  <div>
                    <span className="text-3xl font-extrabold text-accent">50+</span>
                    <span className="block text-xs uppercase tracking-wider text-text-luxury font-bold">Landmarks Built</span>
                  </div>
                  <div className="h-8 w-[1px] bg-border-luxury" />
                  <div>
                    <span className="text-3xl font-extrabold text-text-luxury">100%</span>
                    <span className="block text-xs uppercase tracking-wider text-text-luxury font-bold">Quality Compliance</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] bg-text-luxury border border-border-luxury overflow-hidden shadow-xl">
                  <Image
                    src="/images/project_2.webp"
                    alt="Buildnest Architectural Engineering"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-luxury/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-bg-luxury/95 border border-border-luxury text-sm text-text-luxury font-mono font-bold">
                    <span className="font-extrabold text-accent block">BUILDNEST STUDIO // NAGPUR</span>
                    <span>Engineering Precision Meets Bespoke Luxury</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Four Core Pillars */}
        <section className="py-10 sm:py-14 bg-white border-b border-border-luxury">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase block mb-2">
                Our Foundation
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-luxury">
                The Four Pillars of Buildnest
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PILLARS.map((pillar) => (
                <TiltCard3D key={pillar.num} maxTilt={7} className="h-full">
                  <div className="p-6 bg-bg-luxury rounded-2xl border border-border-luxury shadow-3d-sm specular-border flex flex-col justify-between h-full preserve-3d">
                    <span className="text-3xl font-extrabold text-accent font-mono block mb-3 translate-z-20">
                      {pillar.num}
                    </span>
                    <h3 className="text-xl font-bold text-text-luxury mb-2 translate-z-30">{pillar.title}</h3>
                    <p className="text-sm font-medium text-text-luxury leading-relaxed translate-z-10">{pillar.description}</p>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* Milestone Timeline */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase block mb-2">
                Growth & Milestones
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-text-luxury">
                Journey of Innovation
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TIMELINE.map((item) => (
                <TiltCard3D key={item.year} maxTilt={7} className="h-full">
                  <div className="p-6 bg-white rounded-2xl border border-border-luxury shadow-3d-sm specular-border flex flex-col justify-between h-full preserve-3d">
                    <div className="text-3xl font-extrabold text-primary mb-2 translate-z-20">{item.year}</div>
                    <h3 className="text-lg font-bold text-text-luxury mb-2 translate-z-30">{item.title}</h3>
                    <p className="text-sm font-medium text-text-luxury leading-relaxed translate-z-10">{item.description}</p>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-text-luxury text-bg-luxury text-center relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
          <div className="mx-auto max-w-3xl px-5 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Ready to Engineer Your Legacy?
            </h2>
            <p className="mt-4 text-bg-luxury text-base sm:text-lg font-medium">
              Connect with Rohan Shahoo and the Buildnest design team for a private project consultation.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-text-luxury transition-all duration-300"
              >
                Schedule A Consultation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
