import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/projectsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Villa & Bungalow Architects in Nagpur | Buildnest",
  description: "Buildnest designs bespoke residential villas, bungalows, and luxury homes in Nagpur. Climate-adaptive planning, central courtyards, and premium structural finishes.",
  keywords: [
    "villa architects Nagpur",
    "residential architects Nagpur",
    "bungalow designer Nagpur",
    "best residential architect Nagpur",
    "luxury house design Nagpur",
    "duplex designer Nagpur"
  ],
};

const DELIVERABLES = [
  "Custom Architectural Concept Elevations & Detailed 2D/3D Layouts",
  "Passive Solar Planning & Natural Cross-Ventilation Engineering",
  "Double-Height Entrance Lobbies, Open-to-Sky Courtyards & Water Cascades",
  "Integrated Landscape, Swimming Pool & Outdoor Deck Layouts",
  "Premium Material Curation (Exposed RCC, Travertine, Burmese Teak)"
];

const PROCESS_STEPS = [
  { step: "01", title: "Zoning & Flow Circulations", text: "Mapping spatial flows, room allocations (including Vaastu directions), and privacy zones." },
  { step: "02", title: "3D Massing & Materiality", text: "Developing photorealistic 3D elevations and detailing raw structural textures." },
  { step: "03", title: "Execution Blueprints", text: "Translating APPROVED 3D mockups into exact structural load plans and detailed MEP schemas for construction." }
];

export default function VillaDesignServicePage() {
  // Filter for residential/villa projects
  const relatedProjects = Object.values(PROJECTS_DATA).filter((project) =>
    project.categoryTag === "residential"
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Villa & Bungalow Design",
    "provider": {
      "@type": "Architect",
      "name": "Buildnest",
      "url": "https://buildnestnagpur.com"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Nagpur"
    },
    "description": "Bespoke residential sanctuaries of permanence and spatial harmony in Nagpur. We design luxury bungalows, duplexes, and villas."
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
                Service Spectrum // 04
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                Luxury Villa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
                  & Bungalow Design.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-bg-luxury/90 font-medium max-w-2xl leading-relaxed">
                Bespoke residential sanctuaries of permanence, spatial harmony, and tactile materiality crafted for multi-generational living.
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
                  Bespoke Residential
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Crafting Homes That Tell a Story for Generations.
                </h2>
                <p className="text-muted-luxury text-base sm:text-lg leading-relaxed">
                  A luxury villa is more than a building; it is a personalized retreat. Buildnest designs custom bungalows and villas that blend modern clean lines with organic warmth. We use tactile natural stone, board-formed raw concrete, and custom teakwood panels to craft structures that age beautifully and feel connected to nature.
                </p>
                <p className="text-muted-luxury text-base sm:text-lg leading-relaxed">
                  Our layouts focus on volume, light, and passive air movement. By incorporating central courtyards, water cascades, and deep cantilevered balconies, we establish smooth indoor-outdoor transitions while shielding spaces from Nagpur's intense heat. We integrate Vaastu principles into the core layouts without sacrificing contemporary layout plans.
                </p>
              </div>

              <div className="lg:col-span-5 bg-white border border-border-luxury p-8 shadow-sm h-fit">
                <h3 className="text-lg font-bold mb-6 font-mono border-b border-border-luxury pb-3 text-text-luxury">
                  VILLA DESIGN DELIVERABLES
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
                Design Evolution
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Bungalow Planning Workflow
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
                Residential Commissions
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                Luxury Villa Portfolios
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
              Ready to Design Your Luxury Villa in Nagpur?
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Let's schedule a site context review. Partner with Nagpur's specialist villa designers.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-text-luxury text-bg-luxury font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-text-luxury transition-all duration-300"
              >
                Start Bungalow Briefing
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
