import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/projectsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Turnkey Construction Company in Nagpur | Buildnest",
  description: "Buildnest offers premium turnkey construction and general contracting in Nagpur. We manage structural execution, foundations, brickwork, and MEP with zero quality tolerance.",
  keywords: [
    "turnkey construction Nagpur",
    "construction company in Nagpur",
    "civil contractor in Nagpur",
    "building contractor Nagpur",
    "residential construction Nagpur",
    "turnkey builders Nagpur"
  ],
};

const DELIVERABLES = [
  "Heavy RCC Frame & Foundation Execution",
  "Premium Fly-Ash/Clay Brickwork, Plastering & Multi-Layer Waterproofing",
  "M25/M30 Grade Lab-Tested Ready-Mix Concrete (RMC) with Cube Tests",
  "Precision MEP (Mechanical, Electrical, Plumbing) Conduit Laying",
  "Weekly Digital Progress Audits, drone photography & detailed BOQ updates"
];

const PROCESS_STEPS = [
  { step: "01", title: "Excavation & Foundations", text: "Soil bearing capacity test, piling, footings, and comprehensive anti-termite foundation treatment." },
  { step: "02", title: "Superstructure Pours", text: "Precision casting of columns, beams, and slabs using temperature-monitored high-strength concrete mixes." },
  { step: "03", title: "System Fitouts & Snagging", text: "MEP testing, plastering, waterproofing verification, final snag-list audits, and key handover." }
];

export default function TurnkeyConstructionServicePage() {
  // Filter for projects containing turnkey or construction elements
  const relatedProjects = Object.values(PROJECTS_DATA).filter((project) =>
    project.categoryTag === "turnkey" || project.categoryTag === "commercial" || project.services.includes("Civil Construction")
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Turnkey Civil Construction",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Buildnest",
      "url": "https://buildnestnagpur.com"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Nagpur"
    },
    "description": "Buildnest manages your entire construction journey from excavation to final paint coat. We operate under a single point of accountability with transparent BOQ pricing in Nagpur."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />

      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        {/* Service Hero Header */}
        <section className="relative py-16 lg:py-24 bg-text-luxury text-bg-luxury border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.08]" />
            <div className="absolute -top-30 right-10 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="max-w-4xl space-y-5">
              <span className="px-4 py-1.5 bg-white/10 border border-white/20 text-accent font-mono text-xs uppercase tracking-widest">
                Service Spectrum // 02
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                Turnkey Civil <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
                  Construction.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-bg-luxury/90 font-medium max-w-2xl leading-relaxed">
                End-to-end building execution, licensed civil engineering, raw material checks, and transparent cost planning under one roof.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1: Detailed Overview */}
        <section className="py-16 sm:py-24 border-b border-border-luxury/50">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold">
                  Single-Source Accountability
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Zero Tolerance for Material and Timeline Deviation.
                </h2>
                <p className="text-muted-luxury text-base sm:text-lg leading-relaxed">
                  The primary risk in construction is the gap between architectural plans and structural site execution. Buildnest eliminates this hazard. We act as your general contractor and project manager, providing a single contract with a fixed timeline, clear material specifications, and fixed-pricing models.
                </p>
                <p className="text-muted-luxury text-base sm:text-lg leading-relaxed">
                  We use only certified raw materials: FE 550 grade steel, Ultratech/ACC cement, and precision-manufactured ready-mix concrete. We perform mandatory concrete cube test audits at 7 and 28 days in independent labs to verify load capacities. Clients receive weekly digital photo and video updates, tracking milestones in real time.
                </p>
              </div>

              <div className="lg:col-span-5 bg-white border border-border-luxury p-8 shadow-sm h-fit">
                <h3 className="text-lg font-bold mb-6 font-mono border-b border-border-luxury pb-3 text-text-luxury">
                  CONSTRUCTION SCOPE
                </h3>
                <ul className="space-y-4">
                  {DELIVERABLES.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-text-luxury">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Process */}
        <section className="py-16 sm:py-24 bg-text-luxury text-bg-luxury border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-3 font-bold">
                Site Operations
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Construction Phases
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROCESS_STEPS.map((step) => (
                <div key={step.step} className="p-8 border border-white/10 bg-white/[0.02] space-y-4">
                  <span className="text-5xl font-extrabold text-accent font-mono block">
                    {step.step}
                  </span>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-bg-luxury/70 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Related Projects */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-3 font-bold">
                Civil Portfolios
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Executed Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-border-luxury shadow-sm overflow-hidden flex flex-col justify-between"
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
                      <h3 className="text-xl font-bold text-text-luxury mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-luxury line-clamp-3 leading-relaxed mb-4">
                        {project.subtitle}
                      </p>
                    </div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="mt-6 inline-flex items-center justify-center py-3 bg-text-luxury hover:bg-accent text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300"
                    >
                      View Case Study →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="py-16 bg-accent text-white text-center">
          <div className="mx-auto max-w-[800px] px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Start Construction?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Get an accurate, detailed Bill of Quantities (BOQ) for your land in Nagpur. Talk to our engineering leads today.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-text-luxury text-bg-luxury font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-text-luxury transition-all duration-300"
              >
                Request Construction Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
