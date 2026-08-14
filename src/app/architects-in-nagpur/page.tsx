import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/projectsData";
import { Metadata } from "next";
import ClientMap from "@/components/ClientMap";

export const metadata: Metadata = {
  title: "Best Architects in Nagpur | Premium Architecture & Design - Buildnest",
  description: "Looking for the best architects in Nagpur? Buildnest offers bespoke residential architecture, luxury villa design, interior design, and turnkey construction solutions in Nagpur.",
  keywords: [
    "architects in Nagpur",
    "best architects in Nagpur",
    "architect in Nagpur",
    "architecture firms in Nagpur",
    "interior designers in Nagpur",
    "architect and interior designer Nagpur",
    "turnkey construction Nagpur",
    "residential architects Nagpur",
    "villa architects Nagpur"
  ],
};

const FAQ_ITEMS = [
  {
    q: "How much do architects charge in Nagpur?",
    a: "Architectural fees in Nagpur vary depending on project scale and complexity. For premium residential designs, fees typically range from 5% to 8% of the total construction cost. At Buildnest, we offer transparent billing models, including flat-rate design contracts or itemized turnkey packages where architectural design is bundled seamlessly with engineering and construction execution."
  },
  {
    q: "What is the average home construction cost in Nagpur?",
    a: "Standard residential construction in Nagpur ranges between ₹1,800 to ₹2,500 per sq ft. Premium luxury villas and bespoke bungalows with high-end structural finishes (like exposed RCC, structural steel, or double-glazed facades) and high-quality materials generally start from ₹3,500 per sq ft upwards. Buildnest provides a detailed, legally-backed Bill of Quantities (BOQ) with zero hidden pricing escalations."
  },
  {
    q: "Does Buildnest handle NMC and NIT building approvals in Nagpur?",
    a: "Yes. Buildnest manages the complete regulatory sanctioning workflow. This includes generating official municipal sanction blueprints, securing NIT (Nagpur Improvement Trust) and NMC (Nagpur Municipal Corporation) approvals, obtaining structural stability certificates, and coordinating building permits."
  },
  {
    q: "What is the difference between hiring an architect and a local civil contractor?",
    a: "A civil contractor manages physical site labor, while an architect coordinates spatial flow, elevations, structural safety, lighting systems, and aesthetic details. Buildnest bridges this gap by acting as a single-source design-build firm: we combine premium architecture, interior design, and turnkey construction under one contract, ensuring the physical building matches the exact 3D blueprints."
  },
  {
    q: "What architectural styles are best suited for Nagpur's hot climate?",
    a: "Nagpur experiences extreme summer temperatures exceeding 45°C. The best architecture incorporates passive cooling strategies, including deep cantilevered overhangs, climate-adaptive solar louvers, central water courtyards to facilitate evaporative cooling, thermal break windows, and structural facades (like double-glazed glass ribbons or exposed concrete) designed to minimize solar heat gain."
  }
];

const LOCAL_SERVICES = [
  {
    title: "Residential Architecture",
    desc: "Bespoke bungalows, duplex layouts, and luxury homes engineered for multi-generational living and thermal comfort.",
    slug: "/villa-design"
  },
  {
    title: "Luxury Interior Design",
    desc: "Tactile material palettes, custom teakwood joinery, Italian stone planning, and automated lighting systems.",
    slug: "/interior-design"
  },
  {
    title: "Turnkey Civil Construction",
    desc: "Complete structural execution with certified ready-mix concrete, heavy foundation work, and daily digital site reporting.",
    slug: "/turnkey-construction"
  },
  {
    title: "Bespoke Villa Design",
    desc: "Bespoke modern tropical and minimalist villas with central open-to-sky courtyards, water screens, and cantilevered staircases.",
    slug: "/villa-design"
  },
  {
    title: "Commercial & Office Spaces",
    desc: "High-performance commercial elevations featuring climate-adaptive facades, wind-load resistance, and spatial efficiency.",
    slug: "/architecture"
  },
  {
    title: "Structural Audits & PMC",
    desc: "Independent engineering oversight, cost audits (BOQ vetting), and non-destructive quality testing.",
    slug: "/services"
  }
];

export default function ArchitectsInNagpurPage() {
  // Filter Nagpur projects to establish local relevance
  const nagpurProjects = Object.values(PROJECTS_DATA).filter((project) =>
    project.location.toLowerCase().includes("nagpur")
  );

  // Generate schemas
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Architect",
    "@id": "https://buildnestnagpur.com/architects-in-nagpur/#local-profile",
    "name": "Buildnest Architects Nagpur",
    "image": "https://buildnestnagpur.com/images/hero_bg.webp",
    "url": "https://buildnestnagpur.com/architects-in-nagpur",
    "telephone": "+919424708016",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 8, Panchtara Society, Behind Orivision Hospital, Narendra Nagar, Somalwada",
      "addressLocality": "Nagpur",
      "addressRegion": "Maharashtra",
      "postalCode": "440015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1009,
      "longitude": 79.0684
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Nagpur"
    },
    "knowsAbout": [
      "Architecture in Nagpur",
      "Residential Architects in Nagpur",
      "Interior Designers in Nagpur",
      "Turnkey Construction Nagpur",
      "Bespoke Villa Architecture"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <Navbar />

      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        {/* Local Landing Hero Section */}
        <section className="relative py-16 lg:py-24 bg-text-luxury text-bg-luxury border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
            <div className="absolute -top-30 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 left-10 w-[450px] h-[450px] bg-accent/25 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 border border-white/20 text-accent font-mono text-xs uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Nagpur Studio Portfolio & Services
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                Architects in Nagpur — Buildnest
              </h1>

              <p className="text-lg sm:text-xl text-bg-luxury/90 font-medium max-w-3xl leading-relaxed">
                Buildnest is a premier design-build firm in Nagpur offering bespoke architectural design, luxury interiors, and turnkey construction. We build structurally resilient, climate-adaptive homes tailored to Nagpur's environment.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-7 py-4 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-luxury transition-all duration-300"
                >
                  Start Your Design Consultation
                </Link>
                <Link
                  href="#projects"
                  className="px-7 py-4 bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-widest hover:bg-white/25 transition-all duration-300"
                >
                  View Nagpur Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Value Proposition */}
        <section className="py-16 sm:py-24 border-b border-border-luxury/50">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold">
                  Bespoke Quality Commitment
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                  Crafting Timeless Structures Engineered for Nagpur.
                </h2>
                <p className="text-muted-luxury text-base sm:text-lg leading-relaxed">
                  Nagpur's extreme climate requires architecture that goes beyond aesthetics. At Buildnest, we align passive cooling principles, solar path orientation, and structural engineering to design and construct homes, luxury villas, and commercial spaces that remain comfortable and robust.
                </p>
                <p className="text-muted-luxury text-base sm:text-lg leading-relaxed">
                  Our unified turnkey workflow eliminates the disconnect between architects and contractors. By managing structural drafting, municipal NMC/NIT approvals, interior joinery manufacturing, and concrete pours in-house, we secure millimeter accuracy.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {LOCAL_SERVICES.map((serv, index) => (
                  <Link
                    key={serv.title}
                    href={serv.slug}
                    className="p-6 bg-white border border-border-luxury hover:border-accent transition-all duration-300 group hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-mono text-accent block mb-2">
                        0{index + 1} // Service
                      </span>
                      <h3 className="text-lg font-bold text-text-luxury group-hover:text-accent transition-colors">
                        {serv.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-luxury leading-relaxed">
                        {serv.desc}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-text-luxury group-hover:translate-x-1.5 transition-transform duration-300">
                      Learn More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Real Nagpur Projects Showcase */}
        <section id="projects" className="py-16 sm:py-24 bg-text-luxury text-bg-luxury border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-3 font-bold">
                Local Commissions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Projects in Nagpur
              </h2>
              <p className="mt-4 text-bg-luxury/70 text-base sm:text-lg">
                Explore real case studies of residential and commercial spaces constructed by Buildnest across premium areas of Nagpur.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nagpurProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white/[0.03] border border-white/10 hover:border-accent transition-all duration-300 overflow-hidden flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-accent mb-3 font-bold">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-sm text-bg-luxury/70 line-clamp-3 leading-relaxed mb-4">
                        {project.subtitle}
                      </p>
                      <div className="border-t border-white/5 pt-4 mt-4 grid grid-cols-2 gap-4 text-xs font-mono">
                        <div>
                          <span className="text-white/40 block">Location:</span>
                          <span className="text-white font-medium">{project.location}</span>
                        </div>
                        <div>
                          <span className="text-white/40 block">Area:</span>
                          <span className="text-white font-medium">{project.area}</span>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center justify-center py-3 bg-white/10 hover:bg-accent text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      Explore Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Testimonials Section */}
        <section className="py-16 sm:py-24 border-b border-border-luxury/50">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-3 font-bold">
                Client Experiences
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                What Nagpur Builds with Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-border-luxury shadow-sm flex flex-col justify-between">
                <p className="text-lg text-text-luxury italic font-medium leading-relaxed">
                  "Buildnest designed and executed the turnkey construction of our multi-generational residential villa in Civil Lines, Nagpur. Their attention to structural stability, thermal insulation during Nagpur summers, and premium woodwork detailing was exceptional. Highly recommended for bespoke homes."
                </p>
                <div className="mt-8 pt-6 border-t border-border-luxury flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-text-luxury">Dr. Sharma & Family</h4>
                    <p className="text-xs font-mono text-muted-luxury">Bespoke Residence Owner, Civil Lines</p>
                  </div>
                  <span className="text-accent text-4xl font-serif">“</span>
                </div>
              </div>

              <div className="p-8 bg-white border border-border-luxury shadow-sm flex flex-col justify-between">
                <p className="text-lg text-text-luxury italic font-medium leading-relaxed">
                  "We commissioned Buildnest for both the facade engineering and turnkey project management of our commercial tower in Nagpur. Their execution was seamless. The climate-adaptive double-glazed glass ribbons have significantly reduced our summer cooling bills."
                </p>
                <div className="mt-8 pt-6 border-t border-border-luxury flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-text-luxury">Rajesh Khandelwal</h4>
                    <p className="text-xs font-mono text-muted-luxury">Managing Director, Horizon Ventures</p>
                  </div>
                  <span className="text-accent text-4xl font-serif">“</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local SEO Nagpur FAQ Section */}
        <section className="py-16 sm:py-24 bg-bg-luxury border-b border-border-luxury/50">
          <div className="mx-auto max-w-[1000px] px-5 sm:px-10">
            <div className="text-center mb-12 sm:mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-3 font-bold">
                Local Resources
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Nagpur Architecture FAQ
              </h2>
              <p className="mt-4 text-muted-luxury text-base sm:text-lg max-w-2xl mx-auto">
                Practical answers regarding building permissions, home construction costs, and architectural timelines in Nagpur.
              </p>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white border border-border-luxury p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
                >
                  <summary className="flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-text-luxury group-open:text-accent transition-colors">
                    <span>{item.q}</span>
                    <span className="transition-transform duration-300 group-open:rotate-180 text-accent font-mono">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-4 text-sm sm:text-base text-muted-luxury leading-relaxed border-t border-border-luxury/50 pt-4 cursor-default">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Studio Coordinates & Contact Section */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono text-accent uppercase tracking-widest font-bold block">
                  Studio Coordinates
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                  Visit Our Nagpur Design HQ.
                </h2>
                <p className="text-muted-luxury leading-relaxed text-base sm:text-lg">
                  Ready to draft your future space? Visit our studio in Nagpur for a complete design briefing. We are located at Narendra Nagar near Somalwada.
                </p>

                <div className="border-t border-border-luxury/60 pt-6 space-y-4 text-sm font-mono">
                  <div>
                    <span className="text-muted-luxury block">Phone Contact:</span>
                    <a href="tel:+919424708016" className="text-text-luxury font-bold hover:text-accent">
                      +91 94247 08016
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-luxury block">Office Address:</span>
                    <span className="text-text-luxury font-bold">
                      Plot No. 8, Panchtara Society, Behind Orivision Hospital, Narendra Nagar, Somalwada, Nagpur – 440015
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-luxury block">Business Hours:</span>
                    <span className="text-text-luxury font-bold">
                      Mon - Sat: 9:00 AM - 7:00 PM (Sunday Closed)
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ClientMap variant="light" className="w-full shadow-lg" mapHeightClass="h-[300px] sm:h-[400px]" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
