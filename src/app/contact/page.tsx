"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard3D from "@/components/TiltCard3D";
import dynamic from "next/dynamic";

const MapBox = dynamic(() => import("@/components/MapBox"), {
  ssr: false,
  loading: () => (
    <div className="h-[210px] sm:h-[230px] rounded-3xl bg-black/5 animate-pulse border border-black/10" />
  ),
});

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FAQS = [
  {
    q: "How does the initial consultation process work?",
    a: "Our first meeting involves a comprehensive site evaluation and architectural requirements session. We discuss your spatial vision, budget boundaries, and timeline expectations.",
  },
  {
    q: "Do you handle municipal building sanctions in Nagpur?",
    a: "Yes. Buildnest manages end-to-end municipal sanctioning, structural safety certifications, and NIT/NMC compliance drawings.",
  },
  {
    q: "What is your pricing structure for turnkey construction?",
    a: "We operate on a transparent fixed-rate per square foot or itemized BOQ model. Once agreed upon, there are zero surprise price inflations during execution.",
  },
  {
    q: "Can you work with our existing architectural drawings?",
    a: "Absoluty. We offer standalone Turnkey Construction and Project Management Consultancy (PMC) for projects designed by external architects.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Architectural Design & Build",
    budgetRange: "₹50 Lakhs - ₹1 Crore",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        
        {/* Redesigned Hero Section - Active Consultation Hub Header */}
        <section className="relative py-12 lg:py-16 bg-text-luxury text-bg-luxury border-b border-white/10 overflow-hidden">
          {/* Enhanced Background & Depth Layer */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.1] animate-pulse-slow" />
            
            {/* Soft Emerald & Warm Bronze Ambient Glows */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-3xl [transform:translateZ(0)]"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-accent/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />

            {/* Horizontal Laser Scanning Line */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-80"
            />

            {/* Radar Wave Concentric Wireframe Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute left-[3%] top-[10%] w-[240px] h-[240px] rounded-full border border-dashed border-emerald-500/30 flex items-center justify-center hidden lg:flex"
            >
              <div className="w-[150px] h-[150px] rounded-full border border-emerald-500/20 flex items-center justify-center">
                <div className="w-[80px] h-[80px] rounded-full border border-accent/30 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Live Status */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-5"
              >
                {/* Live Studio Status Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/40 rounded-full text-emerald-300 font-mono text-xs uppercase tracking-widest backdrop-blur-md font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  Studio Active & Accepting Q3/Q4 Commissions
                </div>

                <h1 className="section-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                  Commission a Landmark. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
                    Initiate Consultation.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-bg-luxury font-medium max-w-2xl leading-relaxed">
                  Partner directly with Rohan Shahoo and the Buildnest principal design team for your upcoming private villa, commercial elevation, or turnkey interior project in Nagpur.
                </p>

                {/* Direct Channel Quick Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-bold">
                  <a
                    href="https://wa.me/919823000000?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 border border-emerald-500 text-white hover:bg-white hover:text-text-luxury transition-all flex items-center gap-2"
                  >
                    <span>💬</span> WhatsApp Direct
                  </a>
                  <a
                    href="tel:+919823000000"
                    className="px-4 py-2 bg-white/10 border border-white/20 text-white hover:bg-white hover:text-text-luxury transition-all flex items-center gap-2"
                  >
                    <span>📞</span> Call +91 98230 00000
                  </a>
                  <span className="px-4 py-2 bg-white/10 border border-white/20 text-bg-luxury flex items-center gap-2 font-bold">
                    <span>⚡</span> 24-Hr Response Guarantee
                  </span>
                </div>

                {/* Social Channels Row */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-white/60">
                  <span className="uppercase tracking-widest text-[10px] text-accent font-bold">Social Handles:</span>
                  <a
                    href="https://www.linkedin.com/in/rohan-shahoo-880068423/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A66C2] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <span className="text-white/25">•</span>
                  <a
                    href="https://www.instagram.com/buildnest_nagpur/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ee2a7b] transition-colors"
                  >
                    Instagram ↗
                  </a>
                  <span className="text-white/25">•</span>
                  <a
                    href="https://www.facebook.com/profile.php?id=61591824793874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1877F2] transition-colors"
                  >
                    Facebook ↗
                  </a>
                </div>
              </motion.div>

              {/* Right Column: Studio Access Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="p-6 sm:p-8 bg-white/10 border border-white/20 backdrop-blur-xl rounded-none shadow-2xl space-y-6">
                  <div className="border-b border-white/20 pb-4">
                    <span className="text-xs font-mono tracking-widest text-accent uppercase block font-bold">STUDIO DISPATCH</span>
                    <h3 className="text-2xl font-extrabold text-white mt-1">Nagpur Design HQ</h3>
                  </div>

                  <div className="space-y-4 text-sm font-mono text-bg-luxury font-medium">
                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base">📍</span>
                      <div>
                        <span className="block text-white font-bold uppercase text-xs">Location</span>
                        <span>Civil Lines / Ramdaspeth Main Road, Nagpur</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base">⏱</span>
                      <div>
                        <span className="block text-white font-bold uppercase text-xs">Consultation Hours</span>
                        <span>Mon - Sat: 09:30 AM - 07:30 PM IST</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-accent font-bold text-base">✉</span>
                      <div>
                        <span className="block text-white font-bold uppercase text-xs">Direct Inbox</span>
                        <span>contact@buildnestnagpur.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Contact Form & Studio Info Grid */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Interactive Form with 3D Depth & Maps Box */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                <TiltCard3D maxTilt={5} className="w-full">
                  <div className="bg-white p-6 sm:p-10 border border-border-luxury rounded-3xl shadow-3d-lg specular-border preserve-3d">
                    <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-2 text-text-luxury translate-z-20">
                      Consultation Request
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-text-luxury/80 mb-6 translate-z-10">
                      Fill in your project details below and our principal team will connect within 24 hours.
                    </p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-text-luxury text-bg-luxury text-center space-y-4"
                  >
                    <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                    <p className="text-base text-bg-luxury font-medium max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Buildnest. Rohan Shahoo and our senior team will review your project requirements and reach out promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-luxury transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                          Project Location
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Civil Lines, Nagpur"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                          Service Required
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                          className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                        >
                          <option>Architectural Design & Build</option>
                          <option>Turnkey Civil Construction</option>
                          <option>Bespoke Interior Design</option>
                          <option>Commercial Tower / Elevation</option>
                          <option>Project Management Audit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                          Investment Budget
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                        >
                          <option>₹50 Lakhs - ₹1 Crore</option>
                          <option>₹1 Crore - ₹2.5 Crores</option>
                          <option>₹2.5 Crores - ₹5 Crores</option>
                          <option>₹5 Crores+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-luxury mb-1.5">
                        Project Overview & Timeline
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your plot area, architectural style preference, or target completion date..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-bg-luxury border border-border-luxury px-3.5 py-2.5 text-xs font-semibold text-text-luxury focus:outline-none focus:border-accent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-text-luxury text-bg-luxury font-bold text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300 shadow-md card-3d-lift translate-z-30"
                    >
                      Submit Consultation Inquiry
                    </button>
                  </form>
                )}
                  </div>
                </TiltCard3D>

                {/* Map Box in Left Column */}
                <MapBox variant="light" mapHeightClass="h-[210px] sm:h-[230px]" />
              </div>

              {/* Right Column: Studio Info Cards & WhatsApp */}
              <div className="lg:col-span-6 flex flex-col justify-between gap-6">
                
                {/* Office Card */}
                <TiltCard3D maxTilt={5}>
                  <div className="p-6 sm:p-8 bg-text-luxury text-bg-luxury space-y-5 rounded-3xl border border-white/10 shadow-3d-dark specular-border-dark preserve-3d">
                    <div className="translate-z-10">
                      <span className="text-[10px] font-mono tracking-widest text-accent uppercase block mb-1 font-bold">
                        Headquarters // Studio
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">Buildnest Nagpur</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-bg-luxury font-medium">
                      <div>
                        <span className="block font-bold text-white uppercase tracking-wider text-[10px] mb-1">Studio Address</span>
                        <p>Civil Lines / Ramdaspeth Main Road, Nagpur, MS - 440001</p>
                      </div>

                      <div>
                        <span className="block font-bold text-white uppercase tracking-wider text-[10px] mb-1">Direct Lines</span>
                        <p className="font-mono font-bold text-accent">+91 98230 00000 / +91 712 2500000</p>
                      </div>

                      <div>
                        <span className="block font-bold text-white uppercase tracking-wider text-[10px] mb-1">Email Inquiries</span>
                        <p className="font-mono text-bg-luxury font-bold">contact@buildnestnagpur.com</p>
                      </div>

                      <div>
                        <span className="block font-bold text-white uppercase tracking-wider text-[10px] mb-1">Working Hours</span>
                        <p>Mon - Sat: 09:30 AM - 07:30 PM IST</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/20 flex flex-col sm:flex-row items-center gap-4">
                      <a
                        href="https://wa.me/919823000000?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex-grow text-center py-3 bg-accent text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-text-luxury transition-all rounded-xl"
                      >
                        Chat Directly on WhatsApp
                      </a>
                      <div className="flex gap-2.5 shrink-0 w-full sm:w-auto justify-center">
                        <a
                          href="https://www.instagram.com/buildnest_nagpur/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl border border-[#e1306c]/30 flex items-center justify-center text-[#e1306c] hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(238,42,123,0.4)] transition-all duration-300 ease-out"
                          aria-label="Instagram"
                        >
                          <InstagramIcon className="w-4 h-4" />
                        </a>
                        <a
                          href="https://www.facebook.com/profile.php?id=61591824793874"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(24,119,242,0.4)] transition-all duration-300 ease-out"
                          aria-label="Facebook"
                        >
                          <FacebookIcon className="w-4 h-4" />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/rohan-shahoo-880068423/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl border border-[#0A66C2]/30 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-300 ease-out"
                          aria-label="LinkedIn"
                        >
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard3D>

                {/* Studio Experience & Appointment Box */}
                <div className="p-6 sm:p-7 bg-white border border-border-luxury rounded-3xl shadow-3d-md space-y-3">
                  <div className="flex items-center gap-2 text-accent">
                    <span className="text-base">🏛</span>
                    <span className="text-xs font-bold tracking-widest uppercase block">
                      Studio Client Experience
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-text-luxury leading-relaxed">
                    Our flagship Nagpur design studio features tactile material display walls, stone sample boards, lighting mockups, and private client meeting suites. Prior appointment is recommended for dedicated architect consultation time.
                  </p>
                </div>

                {/* Turnkey Assurance Card */}
                <div className="p-6 sm:p-7 bg-white border border-border-luxury rounded-3xl shadow-3d-md space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <span className="text-base">🛡</span>
                    <span className="text-xs font-bold tracking-widest uppercase block">
                      Commitment & Standards
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs font-mono font-bold text-text-luxury">
                    <div className="p-2.5 bg-bg-luxury/60 border border-border-luxury/50 rounded-xl">
                      <span className="text-accent block text-[10px]">100% FIXED</span>
                      <span>BOQ Cost Guarantee</span>
                    </div>
                    <div className="p-2.5 bg-bg-luxury/60 border border-border-luxury/50 rounded-xl">
                      <span className="text-emerald-600 block text-[10px]">END-TO-END</span>
                      <span>NMC Sanction Audit</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-12 bg-white border-t border-border-luxury">
          <div className="mx-auto max-w-4xl px-5 sm:px-10">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-[0.2em] text-accent uppercase block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-text-luxury">Everything You Need To Know</h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-border-luxury">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-bold text-base sm:text-lg text-text-luxury hover:text-accent transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-2xl font-mono ml-4 text-accent">{openFaq === idx ? "−" : "+"}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-base font-medium text-text-luxury leading-relaxed border-t border-border-luxury pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
