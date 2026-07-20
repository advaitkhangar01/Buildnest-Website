"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

// ==========================================
// SVGS FOR SOCIALS (Clean Stroke Width 1.5)
// ==========================================
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

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const GoogleBusinessIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

// ==========================================
// CONSTANTS DATABASE (SEO & NAVIGATION)
// ==========================================

interface LinkItem {
  name: string;
  href: string;
}

const SOCIAL_LINKS = [
  { 
    name: "Instagram", 
    icon: InstagramIcon, 
    href: "https://www.instagram.com/buildnest_nagpur/",
    hoverBg: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(238,42,123,0.3)]",
    color: "text-[#e1306c]"
  },
  { 
    name: "Facebook", 
    icon: FacebookIcon, 
    href: "https://www.facebook.com/profile.php?id=61591824793874",
    hoverBg: "hover:bg-[#1877F2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]",
    color: "text-[#1877F2]"
  },
  { 
    name: "LinkedIn", 
    icon: LinkedinIcon, 
    href: "https://www.linkedin.com/in/rohan-shahoo-880068423/",
    hoverBg: "hover:bg-[#0A66C2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]",
    color: "text-[#0A66C2]"
  },
  { 
    name: "WhatsApp", 
    icon: WhatsappIcon, 
    href: "https://wa.me/919823000000?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project.",
    hoverBg: "hover:bg-[#25D366] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]",
    color: "text-[#25D366]"
  },
  { 
    name: "YouTube", 
    icon: YoutubeIcon, 
    href: "https://youtube.com",
    hoverBg: "hover:bg-[#FF0000] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]",
    color: "text-[#FF0000]"
  },
  { 
    name: "Google Business", 
    icon: GoogleBusinessIcon, 
    href: "https://google.com",
    hoverBg: "hover:bg-[#4285F4] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(66,133,244,0.3)]",
    color: "text-[#4285F4]"
  },
];

const QUICK_LINKS: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Testimonials", href: "/#testimonials" },
];

const SERVICE_GROUPS = [
  {
    title: "Design & Consultancy",
    items: [
      { name: "Architectural Design", href: "#services" },
      { name: "Interior Design", href: "#services" },
      { name: "Structural Design", href: "#services" },
      { name: "3D Elevation", href: "#services" },
      { name: "Landscape Design", href: "#services" },
      { name: "Vaastu Shastra Consultation", href: "#services" },
      { name: "Green Building & LEED Design", href: "#services" },
      { name: "Structural Stability Certification", href: "#services" },
      { name: "Custom Villa Layouts", href: "#services" },
    ],
  },
  {
    title: "Construction & PMC",
    items: [
      { name: "Residential Construction", href: "#services" },
      { name: "Commercial Construction", href: "#services" },
      { name: "Turnkey Construction", href: "#services" },
      { name: "Renovation", href: "#services" },
      { name: "PMC", href: "#services" },
      { name: "Project Consultation", href: "#services" },
      { name: "Site Supervision", href: "#services" },
      { name: "Warehouse & Industrial Construction", href: "#services" },
      { name: "Duplex Development", href: "#services" },
      { name: "Joint Ventures", href: "#services" },
    ],
  },
];

const ARCHITECTS_NEAR_YOU: LinkItem[] = [
  { name: "Architect in Nagpur", href: "#" },
  { name: "Architect in Wardha", href: "#" },
  { name: "Architect in Chandrapur", href: "#" },
  { name: "Architect in Bhandara", href: "#" },
  { name: "Architect in Gondia", href: "#" },
  { name: "Architect in Amravati", href: "#" },
  { name: "Architect in Yavatmal", href: "#" },
  { name: "Architect in Akola", href: "#" },
  { name: "Architect in Chhindwara", href: "#" },
  { name: "Architect in Betul", href: "#" },
];

const CONSTRUCTION_SERVICES: LinkItem[] = [
  { name: "House Construction in Nagpur", href: "#" },
  { name: "Villa Construction in Nagpur", href: "#" },
  { name: "Commercial Construction in Nagpur", href: "#" },
  { name: "Luxury Home Construction", href: "#" },
  { name: "Turnkey Construction", href: "#" },
  { name: "Construction Company in Nagpur", href: "#" },
  { name: "Civil Contractor in Nagpur", href: "#" },
  { name: "Building Contractor", href: "#" },
  { name: "Industrial Construction", href: "#" },
  { name: "Apartment Construction", href: "#" },
];

const INTERIOR_SERVICES: LinkItem[] = [
  { name: "Interior Designer in Nagpur", href: "#" },
  { name: "Luxury Interior Designer", href: "#" },
  { name: "Office Interior", href: "#" },
  { name: "Restaurant Interior", href: "#" },
  { name: "Hotel Interior", href: "#" },
  { name: "Clinic Interior", href: "#" },
  { name: "Hospital Interior", href: "#" },
  { name: "Modular Kitchen", href: "#" },
  { name: "Wardrobe Design", href: "#" },
  { name: "False Ceiling", href: "#" },
  { name: "Furniture Design", href: "#" },
  { name: "Retail Showroom Fit-Outs", href: "#" },
  { name: "Smart Home Integration", href: "#" },
  { name: "Luxury Bedroom Suites", href: "#" },
];

const POPULAR_AREAS: LinkItem[] = [
  { name: "Architect in Dharampeth", href: "#" },
  { name: "Architect in Civil Lines", href: "#" },
  { name: "Architect in Pratap Nagar", href: "#" },
  { name: "Architect in Manish Nagar", href: "#" },
  { name: "Architect in Besa", href: "#" },
  { name: "Architect in Wardha Road", href: "#" },
  { name: "Architect in Narendra Nagar", href: "#" },
  { name: "Architect in Sadar", href: "#" },
  { name: "Architect in Hingna", href: "#" },
  { name: "Architect in Mihan", href: "#" },
  { name: "Architect in Trimurti Nagar", href: "#" },
  { name: "Architect in Ramdaspeth", href: "#" },
  { name: "Architect in Shankar Nagar", href: "#" },
  { name: "Architect in Jaripatka", href: "#" },
  { name: "Architect in Kamptee Road", href: "#" },
  { name: "Architect in Seminary Hills", href: "#" },
  { name: "Architect in Bajaj Nagar", href: "#" },
  { name: "Architect in Wadi", href: "#" },
  { name: "Architect in Koradi", href: "#" },
  { name: "Architect in Beltarodi", href: "#" },
  { name: "Architect in Hudkeshwar", href: "#" },
  { name: "Architect in Nandanvan", href: "#" },
  { name: "Architect in Medical Square", href: "#" },
  { name: "Architect in Sitabuldi", href: "#" },
  { name: "Architect in Lakadganj", href: "#" },
  { name: "Architect in Mahal", href: "#" },
  { name: "Architect in Reshimbagh", href: "#" },
  { name: "Architect in Khamla", href: "#" },
  { name: "Architect in Pipla", href: "#" },
  { name: "Architect in Omkar Nagar", href: "#" },
  { name: "Architect in Wardhaman Nagar", href: "#" },
  { name: "Architect in Gandhibagh", href: "#" },
  { name: "Architect in Ganeshpeth", href: "#" },
  { name: "Architect in Telephone Exchange Square", href: "#" },
  { name: "Architect in Somalwada", href: "#" },
  { name: "Architect in Sonegaon", href: "#" },
  { name: "Architect in Jaitala", href: "#" },
  { name: "Architect in Chinchbhuvan", href: "#" },
  { name: "Architect in Manewada", href: "#" },
  { name: "Architect in Wanadongri", href: "#" },
  { name: "Architect in Gittikhadan", href: "#" },
  { name: "Architect in Friends Colony", href: "#" },
  { name: "Architect in Ravi Nagar", href: "#" },
  { name: "Architect in Gokulpeth", href: "#" },
  { name: "Architect in Wathoda", href: "#" },
  { name: "Architect in Dighori", href: "#" },
];

const POPULAR_SEARCHES: LinkItem[] = [
  { name: "Construction Company Near Me", href: "#" },
  { name: "Best Architect Near Me", href: "#" },
  { name: "Interior Designer Near Me", href: "#" },
  { name: "Luxury Architects", href: "#" },
  { name: "Modern Home Designers", href: "#" },
  { name: "Bungalow Architects", href: "#" },
  { name: "Villa Designers", href: "#" },
  { name: "Commercial Architects", href: "#" },
  { name: "Office Interior Designers", href: "#" },
  { name: "Turnkey Interior Company", href: "#" },
  { name: "Premium Construction Company", href: "#" },
];

// ==========================================
// MODULAR REUSABLE COMPONENTS
// ==========================================

const UnderlineLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      href={href}
      className="group relative inline-block text-[13px] font-light text-muted-luxury hover:text-text-luxury transition-colors duration-250 ease-out py-0.5"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left ease-out" />
    </Link>
  );
};

const FooterColumn = ({ title, links }: { title: string; links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col text-left border-b sm:border-b-0 border-border-luxury/40 pb-4 sm:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 sm:py-0 text-left sm:cursor-default cursor-pointer focus:outline-none"
      >
        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-text-luxury uppercase">
          {title}
        </h4>
        <span className="text-sm font-mono text-accent sm:hidden">{isOpen ? "−" : "+"}</span>
      </button>
      
      <ul className={`flex-col gap-2.5 mt-3 sm:mt-4 ${isOpen ? "flex" : "hidden sm:flex"}`}>
        {links.map((link) => (
          <li key={link.name} className="leading-none">
            <UnderlineLink href={link.href}>{link.name}</UnderlineLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const LocationLinkSection = ({ title, links }: { title: string; links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col text-left border-b sm:border-b-0 border-border-luxury/40 pb-4 sm:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border-b border-border-luxury/60 pb-2 text-left sm:cursor-default cursor-pointer focus:outline-none"
      >
        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-text-luxury uppercase">
          {title}
        </h4>
        <span className="text-sm font-mono text-accent sm:hidden">{isOpen ? "−" : "+"}</span>
      </button>
      
      <ul className={`flex-col gap-2.5 mt-3 ${isOpen ? "flex" : "hidden sm:flex"}`}>
        {links.map((link) => (
          <li key={link.name} className="leading-none">
            <UnderlineLink href={link.href}>{link.name}</UnderlineLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InlineLinkList = ({ title, links }: { title: string; links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col text-left border-b sm:border-b-0 border-border-luxury/40 pb-4 sm:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border-b border-border-luxury/60 pb-2 text-left sm:cursor-default cursor-pointer focus:outline-none"
      >
        <h4 className="text-[11px] font-semibold tracking-[0.2em] text-text-luxury uppercase">
          {title}
        </h4>
        <span className="text-sm font-mono text-accent sm:hidden">{isOpen ? "−" : "+"}</span>
      </button>

      <div className={`flex-wrap gap-x-3 gap-y-2 mt-3 text-[12.5px] text-muted-luxury/80 font-light leading-relaxed ${isOpen ? "flex" : "hidden sm:flex"}`}>
        {links.map((link, idx) => (
          <React.Fragment key={link.name}>
            <Link
              href={link.href}
              className="hover:text-accent transition-colors duration-250 ease-out relative group"
            >
              {link.name}
            </Link>
            {idx < links.length - 1 && <span className="text-muted-luxury/30 select-none">•</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <footer className="relative bg-white text-text-luxury border-t border-border-luxury/80 shadow-3d-lg specular-border overflow-hidden z-10">
      {/* Blueprint Grid Lines (Luxury branding element) */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.012] pointer-events-none" />

      {/* Subtle Background Radial Light Glow */}
      <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col gap-16 relative z-10"
      >
        {/* ==========================================
            ROW 1: COMPANY CARD + MAIN COLUMNS
            ========================================== */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Section 1: Company Profile (Cols 1-4) */}
          <div className="md:col-span-4 flex flex-col gap-6 text-left">
            <Link href="#home" className="flex items-center gap-3 group/logo w-fit">
              <Image
                src="/images/logo.webp"
                alt="Buildnest Logo"
                width={120}
                height={32}
                className="object-contain"
              />
              <span className="h-5 w-[1px] bg-border-luxury" />
              <span className="font-heading-excn text-[18px] font-medium tracking-[0.2em] text-text-luxury">
                BUILD<span className="font-light text-accent">NEST</span>.
              </span>
            </Link>
            <p className="text-muted-luxury text-[13.5px] leading-[1.8] font-light max-w-[36ch]">
              Premium Architect, Interior &amp; Construction Solutions. Designing structures for longevity, built with engineering precision and luxury finish.
            </p>

            {/* Contacts & Metadata */}
            <div className="flex flex-col gap-3.5 text-[13.5px] font-light text-muted-luxury mt-2">
              <a href="tel:+919876543210" className="flex items-center gap-2.5 hover:text-accent transition-colors duration-250 ease-out w-fit">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@buildnestnagpur.com" className="flex items-center gap-2.5 hover:text-accent transition-colors duration-250 ease-out w-fit">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span>info@buildnestnagpur.com</span>
              </a>
              <div className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  12, Architectural Row,<br />
                  Civil Lines, Nagpur,<br />
                  MH, India - 440001
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 – 19:00</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 mt-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 rounded-full border border-border-luxury/40 flex items-center justify-center transition-all duration-300 ease-out bg-transparent ${social.color} ${social.hoverBg}`}
                    aria-label={social.name}
                  >
                    <Icon className="w-[15px] h-[15px]" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Section 2: Quick Links (Cols 5-7) */}
          <div className="md:col-span-3 lg:col-span-3">
            <FooterColumn title="Quick Links" links={QUICK_LINKS} />
          </div>

          {/* Section 3: Our Services (Cols 8-12) */}
          <div className="md:col-span-5 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {SERVICE_GROUPS.map((group) => (
              <FooterColumn key={group.title} title={group.title} links={group.items} />
            ))}
          </div>

        </motion.div>

        {/* ==========================================
            ROW 2: REGIONAL DIRECTORY SEO COLUMNS
            ========================================== */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-12 border-t border-border-luxury/40">
          
          {/* Section 4: Architects Near You */}
          <LocationLinkSection title="Architects Near You" links={ARCHITECTS_NEAR_YOU} />

          {/* Section 5: Construction Services */}
          <LocationLinkSection title="Construction Services" links={CONSTRUCTION_SERVICES} />

          {/* Section 6: Interior Services */}
          <LocationLinkSection title="Interior Services" links={INTERIOR_SERVICES} />

        </motion.div>

        {/* ==========================================
            ROW 3: POPULAR AREAS & POPULAR SEARCHES
            ========================================== */}
        <motion.div variants={itemVariants} className="flex flex-col gap-12 pt-12 border-t border-border-luxury/40">
          
          {/* Section 7: Popular Areas */}
          <InlineLinkList title="Popular Areas" links={POPULAR_AREAS} />

          {/* Section 8: Popular Searches */}
          <InlineLinkList title="Popular Searches" links={POPULAR_SEARCHES} />

        </motion.div>

        {/* ==========================================
            ROW 4: BOTTOM BAR (COPYRIGHT & LEGALS)
            ========================================== */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-border-luxury/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11.5px] text-muted-luxury/60 font-light"
        >
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>
              &copy; {currentYear} Buildnest. All Rights Reserved.
            </span>
            <span className="hidden sm:inline text-muted-luxury/20">|</span>
            <span>Made with precision in India.</span>
          </div>

          <div className="flex gap-6 items-center">
            <Link href="#privacy" className="hover:text-accent transition-colors duration-250 ease-out">
              Privacy Policy
            </Link>
            <span className="text-muted-luxury/20">|</span>
            <Link href="#terms" className="hover:text-accent transition-colors duration-250 ease-out">
              Terms &amp; Conditions
            </Link>
            <span className="text-muted-luxury/20">|</span>
            <Link href="#" className="hover:text-accent transition-colors duration-250 ease-out">
              Sitemap
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
}
