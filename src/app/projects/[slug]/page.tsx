import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard3D from "@/components/TiltCard3D";
import GalleryShowcase from "@/components/GalleryShowcase";
import {
  getProjectBySlug,
  getRelatedProjects,
  getNextAndPrevProjects,
  PROJECTS_DATA,
} from "@/data/projectsData";

export async function generateStaticParams() {
  return Object.keys(PROJECTS_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { next, prev } = getNextAndPrevProjects(slug);
  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-24 pb-20">
        
        {/* Hero Case Study Header */}
        <section className="relative bg-text-luxury text-bg-luxury border-b border-white/10 pt-16 pb-20 overflow-hidden">
          {/* Depth Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.08] animate-pulse-slow" />
            
            <div
              className="absolute -top-30 -left-20 w-[550px] h-[550px] bg-primary/25 rounded-full blur-3xl [transform:translateZ(0)] animate-orb-float"
            />
            <div
              style={{ animationDelay: "2s", animationDuration: "12s" }}
              className="absolute -bottom-30 right-10 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl [transform:translateZ(0)] animate-orb-float"
            />
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-bg-luxury/60 uppercase tracking-widest mb-8">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-accent transition-colors">Commissions</Link>
              <span>/</span>
              <span className="text-white font-bold">{project.category}</span>
            </div>

            {/* Title & Metadata Top Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
              <div className="lg:col-span-8 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none">
                    {project.category}
                  </span>
                  <span className="px-3.5 py-1 bg-white/10 text-white font-mono text-xs font-bold uppercase tracking-widest border border-white/15">
                    Completed {project.year}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-heading leading-[1.1]">
                  {project.title}
                </h1>

                <p className="text-base sm:text-xl text-bg-luxury/90 font-medium max-w-3xl leading-relaxed">
                  {project.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 bg-accent text-white text-xs font-bold uppercase tracking-[0.15em] hover:bg-white hover:text-text-luxury transition-all duration-300 shadow-lg"
                >
                  Commission Similar Work
                </Link>
                <Link
                  href="/projects"
                  className="px-6 py-3.5 bg-white/10 text-white border border-white/20 text-xs font-bold uppercase tracking-[0.15em] hover:bg-white/20 transition-all duration-300"
                >
                  All Projects →
                </Link>
              </div>
            </div>

            {/* Quick Specs Grid Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-md">
              <div>
                <span className="text-[11px] font-mono text-accent uppercase tracking-widest block font-bold">Location</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.location}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-accent uppercase tracking-widest block font-bold">Built-up Area</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.area}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-accent uppercase tracking-widest block font-bold">Client / Developer</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.client}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono text-accent uppercase tracking-widest block font-bold">Execution Period</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.duration}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Hero Image Frame Showcase */}
        <section className="py-10 bg-text-luxury text-bg-luxury border-b border-white/10">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/20 shadow-3d-lg group">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1440px) 100vw, 1440px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/80">
                <span>[CASE STUDY DISPLAY // BUILDNEST ARCHITECTURAL ARCHIVE]</span>
                <span className="hidden sm:inline">HIGH-RESOLUTION ELEVATION VIEW</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Narrative & Architectural Overview */}
        <section className="py-16 border-b border-border-luxury/60">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Story & Vision */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-3">
                    <span className="w-6 h-[1px] bg-accent inline-block" />
                    01 / Architectural Vision
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-text-luxury tracking-tight font-heading leading-tight">
                    Engineering Luxury Through Spatial Integrity
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-text-luxury/90 leading-relaxed font-medium">
                  {project.overview}
                </p>

                {/* Services Provided Badges */}
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-text-luxury/60 font-bold mb-3">
                    Services & Disciplines Delivered
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-4 py-2 bg-white text-text-luxury text-xs font-bold border border-border-luxury shadow-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Technical Specs Table */}
              <div className="lg:col-span-5 bg-white border border-border-luxury p-6 sm:p-8 shadow-3d-md">
                <h3 className="text-xl font-bold text-text-luxury font-heading border-b border-border-luxury pb-4 mb-6 flex items-center justify-between">
                  <span>Technical Specifications</span>
                  <span className="text-accent text-xs font-mono font-bold uppercase tracking-wider">Specs Sheet</span>
                </h3>

                <div className="divide-y divide-border-luxury/60">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                      <span className="font-mono text-text-luxury/60 font-bold text-xs uppercase">{spec.label}</span>
                      <span className="font-semibold text-text-luxury text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Challenge & Solution Split Section */}
        <section className="py-16 bg-white border-b border-border-luxury/60">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center justify-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-accent inline-block" />
                02 / Engineering Innovation
                <span className="w-6 h-[1px] bg-accent inline-block" />
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-luxury font-heading">
                Overcoming Site & Structural Challenges
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Challenge Card */}
              <div className="p-8 bg-bg-luxury border border-border-luxury relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full pointer-events-none" />
                <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest block mb-3">
                  01 // The Design Challenge
                </span>
                <h3 className="text-2xl font-bold text-text-luxury font-heading mb-4">
                  Site Constraints & Environmental Complexities
                </h3>
                <p className="text-sm sm:text-base text-text-luxury/90 leading-relaxed font-medium">
                  {project.challenge}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-8 bg-text-luxury text-bg-luxury border border-white/10 relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-bl-full pointer-events-none" />
                <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest block mb-3">
                  02 // The Engineered Solution
                </span>
                <h3 className="text-2xl font-bold text-white font-heading mb-4">
                  Precision Engineering & Structural Excellence
                </h3>
                <p className="text-sm sm:text-base text-bg-luxury/90 leading-relaxed font-medium">
                  {project.solution}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Key Architectural Features Grid */}
        <section className="py-16 border-b border-border-luxury/60">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="mb-12">
              <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-3">
                <span className="w-6 h-[1px] bg-accent inline-block" />
                03 / Distinctive Elements
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-luxury font-heading">
                Key Features & Architectural Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-border-luxury shadow-3d-sm hover:border-accent transition-colors flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <p className="text-sm font-semibold text-text-luxury leading-relaxed pt-1">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Bullets if present */}
            {project.architecturalHighlights && project.architecturalHighlights.length > 0 && (
              <div className="mt-12 p-8 bg-white/50 border border-border-luxury">
                <h3 className="text-base font-bold text-text-luxury font-heading mb-4 uppercase tracking-wider">
                  Architectural Nuances & Crafted Details
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.architecturalHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-luxury/90 font-medium">
                      <span className="text-accent font-bold">◆</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* Gallery Showcase with Lightbox Modal */}
        <GalleryShowcase galleryImages={project.galleryImages} projectTitle={project.title} />

        {/* Client Testimonial Section */}
        {project.testimonial && (
          <section className="py-16 bg-text-luxury text-bg-luxury border-b border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.05] pointer-events-none" />
            <div className="mx-auto max-w-[1000px] px-5 sm:px-10 text-center relative z-10">
              <span className="text-4xl text-accent font-serif block mb-4">“</span>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-white leading-relaxed italic">
                {project.testimonial.quote}
              </blockquote>
              <div className="mt-6 flex flex-col items-center">
                <span className="text-base font-bold text-white font-mono uppercase tracking-wider">
                  {project.testimonial.author}
                </span>
                <span className="text-xs font-mono text-accent uppercase tracking-widest mt-1">
                  {project.testimonial.role}
                </span>
              </div>
            </div>
          </section>
        )}

        {/* Next & Previous Project Navigation */}
        <section className="py-12 border-b border-border-luxury/60 bg-white">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="p-6 border border-border-luxury hover:border-accent transition-all duration-300 flex items-center gap-6 group"
                >
                  <div className="relative w-24 h-20 shrink-0 overflow-hidden bg-text-luxury">
                    <Image
                      src={prev.heroImage}
                      alt={prev.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-accent font-bold uppercase tracking-widest block mb-1">
                      ← Previous Case Study
                    </span>
                    <h4 className="text-lg font-bold text-text-luxury group-hover:text-accent transition-colors">
                      {prev.title}
                    </h4>
                    <span className="text-xs text-text-luxury/60 font-mono mt-0.5 block">{prev.category}</span>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="p-6 border border-border-luxury hover:border-accent transition-all duration-300 flex items-center justify-end text-right gap-6 group"
                >
                  <div>
                    <span className="text-[11px] font-mono text-accent font-bold uppercase tracking-widest block mb-1">
                      Next Case Study →
                    </span>
                    <h4 className="text-lg font-bold text-text-luxury group-hover:text-accent transition-colors">
                      {next.title}
                    </h4>
                    <span className="text-xs text-text-luxury/60 font-mono mt-0.5 block">{next.category}</span>
                  </div>
                  <div className="relative w-24 h-20 shrink-0 overflow-hidden bg-text-luxury">
                    <Image
                      src={next.heroImage}
                      alt={next.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </Link>
              ) : (
                <div />
              )}

            </div>
          </div>
        </section>

        {/* Related Projects Grid */}
        {relatedProjects.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
              <div className="mb-12 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3 mb-2">
                    <span className="w-6 h-[1px] bg-accent inline-block" />
                    More Architectural Works
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-text-luxury font-heading">
                    Explore Related Commissions
                  </h2>
                </div>
                <Link
                  href="/projects"
                  className="text-xs font-bold tracking-widest text-accent uppercase hover:text-text-luxury transition-colors"
                >
                  View All Works →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProjects.map((relProj) => (
                  <TiltCard3D key={relProj.id} maxTilt={7} className="h-full">
                    <div className="group flex flex-col bg-white border border-border-luxury rounded-2xl overflow-hidden shadow-3d-md specular-border transition-all duration-500 preserve-3d h-full">
                      <Link href={`/projects/${relProj.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-bg-luxury">
                        <Image
                          src={relProj.heroImage}
                          alt={relProj.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute top-3 left-3 bg-text-luxury text-bg-luxury px-3 py-1 text-[11px] font-bold tracking-widest uppercase rounded-sm">
                          {relProj.category}
                        </div>
                      </Link>

                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <div>
                          <span className="text-xs font-mono font-bold text-accent">{relProj.location}</span>
                          <Link href={`/projects/${relProj.slug}`}>
                            <h3 className="text-xl font-extrabold text-text-luxury group-hover:text-accent transition-colors line-clamp-1 mt-1">
                              {relProj.title}
                            </h3>
                          </Link>
                          <p className="mt-2 text-xs text-text-luxury/80 line-clamp-2">
                            {relProj.subtitle}
                          </p>
                        </div>
                        
                        <div className="pt-4 mt-4 border-t border-border-luxury flex items-center justify-between text-xs font-bold">
                          <span className="font-mono">{relProj.area}</span>
                          <Link href={`/projects/${relProj.slug}`} className="text-accent uppercase">
                            View Case Study →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </TiltCard3D>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom Call to Action */}
        <section className="py-16 bg-text-luxury text-bg-luxury relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-heading text-white">
              Ready to Engineer Your Landmark Vision?
            </h2>
            <p className="mt-4 text-bg-luxury max-w-2xl mx-auto text-base sm:text-lg font-medium">
              Connect with Buildnest for end-to-end architectural design, turnkey construction, and structural perfection in Central India.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-text-luxury transition-all duration-300"
              >
                Schedule Private Consultation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
