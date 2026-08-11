"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  SOCIAL_LINKS,
  QUICK_LINKS,
  SERVICE_GROUPS,
  ARCHITECTS_NEAR_YOU,
  CONSTRUCTION_SERVICES,
  INTERIOR_SERVICES,
  POPULAR_AREAS,
  POPULAR_SEARCHES,
  LinkItem,
  SocialLink,
} from "@/data/footerData";

// Social SVG Icons
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

function getSocialIcon(type: SocialLink["iconType"]) {
  switch (type) {
    case "instagram": return InstagramIcon;
    case "facebook": return FacebookIcon;
    case "linkedin": return LinkedinIcon;
    case "whatsapp": return WhatsappIcon;
    case "youtube": return YoutubeIcon;
    case "google": return GoogleBusinessIcon;
  }
}

const UnderlineLink = React.memo(({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group relative inline-block text-[13px] font-light text-muted-luxury hover:text-text-luxury transition-colors duration-250 ease-out py-0.5"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left ease-out" />
  </Link>
));
UnderlineLink.displayName = "UnderlineLink";

const FooterColumn = React.memo(({ title, links }: { title: string; links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col text-left border-b sm:border-b-0 border-border-luxury/40 pb-4 sm:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-2 sm:py-0 text-left sm:cursor-default cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
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
});
FooterColumn.displayName = "FooterColumn";

const InlineLinkList = React.memo(({ title, links }: { title: string; links: LinkItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col text-left border-b sm:border-b-0 border-border-luxury/40 pb-4 sm:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between border-b border-border-luxury/60 pb-2 text-left sm:cursor-default cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
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
});
InlineLinkList.displayName = "InlineLinkList";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-text-luxury border-t border-border-luxury/80 shadow-3d-lg specular-border overflow-hidden z-10">
      <div className="absolute inset-0 blueprint-grid opacity-[0.012] pointer-events-none" />
      <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 pt-16 pb-32 sm:py-20 lg:py-24 flex flex-col gap-16 relative z-10"
      >
        {/* ROW 1: COMPANY CARD + MAIN COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="md:col-span-4 flex flex-col gap-6 text-left">
            <Link href="#home" className="flex items-center gap-4 sm:gap-5 group/logo w-fit">
              <Image
                src="/images/logo.png"
                alt="Buildnest Logo"
                width={160}
                height={145}
                className="h-16 sm:h-22 md:h-24 w-auto object-contain transition-transform duration-500 group-hover/logo:scale-105 filter drop-shadow-md"
              />
              <span className="h-10 sm:h-12 w-[2.5px] bg-border-luxury" />
              <span className="font-heading-excn text-[26px] sm:text-[32px] font-black tracking-[0.22em] text-text-luxury">
                BUILD<span className="font-light text-accent">NEST</span>.
              </span>
            </Link>
            <p className="text-muted-luxury text-[13.5px] leading-[1.8] font-light max-w-[36ch]">
              Premium Architect, Interior &amp; Construction Solutions. Designing structures for longevity, built with engineering precision and luxury finish.
            </p>

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
                <span>12, Architectural Row, Civil Lines, Nagpur, MH, India - 440001</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Mon – Sat: 10:00 – 19:00</span>
              </div>
            </div>

            <div className="flex gap-2.5 mt-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = getSocialIcon(social.iconType);
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

          <div className="md:col-span-3 lg:col-span-3">
            <FooterColumn title="Quick Links" links={QUICK_LINKS} />
          </div>

          <div className="md:col-span-5 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {SERVICE_GROUPS.map((group) => (
              <FooterColumn key={group.title} title={group.title} links={group.items} />
            ))}
          </div>
        </div>

        {/* ROW 2: REGIONAL DIRECTORY SEO COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 pt-12 border-t border-border-luxury/40">
          <FooterColumn title="Architects Near You" links={ARCHITECTS_NEAR_YOU} />
          <FooterColumn title="Construction Services" links={CONSTRUCTION_SERVICES} />
          <FooterColumn title="Interior Services" links={INTERIOR_SERVICES} />
        </div>

        {/* ROW 3: POPULAR AREAS & POPULAR SEARCHES */}
        <div className="flex flex-col gap-12 pt-12 border-t border-border-luxury/40">
          <InlineLinkList title="Popular Areas" links={POPULAR_AREAS} />
          <InlineLinkList title="Popular Searches" links={POPULAR_SEARCHES} />
        </div>

        {/* ROW 4: BOTTOM BAR */}
        <div className="pt-8 border-t border-border-luxury/60 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11.5px] text-muted-luxury/60 font-light">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span>&copy; {currentYear} Buildnest. All Rights Reserved.</span>
            <span className="hidden sm:inline text-muted-luxury/20">|</span>
            <span>Made with precision in India.</span>
          </div>

          <div className="flex gap-6 items-center">
            <Link href="#privacy" className="hover:text-accent transition-colors duration-250 ease-out">Privacy Policy</Link>
            <span className="text-muted-luxury/20">|</span>
            <Link href="#terms" className="hover:text-accent transition-colors duration-250 ease-out">Terms &amp; Conditions</Link>
            <span className="text-muted-luxury/20">|</span>
            <Link href="#" className="hover:text-accent transition-colors duration-250 ease-out">Sitemap</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
