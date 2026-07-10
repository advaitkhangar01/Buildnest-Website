"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "The Glass Ribbon Facade",
    category: "Commercial Architecture",
    image: "/images/project_1.png",
    location: "Nagpur, Commercial District",
    span: "lg:col-span-7 aspect-[3/2.2]",
  },
  {
    title: "Residence of Concrete Elements",
    category: "Bespoke Residence",
    image: "/images/project_2.png",
    location: "Nagpur, Civil Lines",
    span: "lg:col-span-5 aspect-[4/5]",
  },
  {
    title: "Brutalist Pavilion Villa",
    category: "Turnkey Villa",
    image: "/images/project_3.png",
    location: "Nagpur, Wardha Road",
    span: "lg:col-span-5 aspect-[4/5]",
  },
  {
    title: "The Floating Penthouse",
    category: "Bespoke Interior",
    image: "/images/project_4.png",
    location: "Nagpur, Ramdaspeth",
    span: "lg:col-span-7 aspect-[3/2.2]",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [-120, 120]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-bg-luxury border-b border-border-luxury/50 overflow-hidden"
    >
      {/* Background Graphics & Depth Lights */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-primary/3 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
        
        {/* Horizontal structural axis line */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute top-[45%] left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-text-luxury/5 to-transparent"
        />

        {/* CAD Layout Marks */}
        <div className="absolute left-[3%] top-[15%] flex flex-col gap-12 text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase">
          <span>AXIS_A // L.01</span>
          <span>AXIS_B // L.02</span>
          <span>AXIS_C // L.03</span>
        </div>

        {/* Floating geometric wireframes (CAD elevation blocks) */}
        <motion.div
          style={{ y: yParallaxFast }}
          className="absolute right-[5%] top-[10%] w-[320px] h-[320px] rounded-[50px] border border-dashed border-accent/10 flex items-center justify-center opacity-60"
        >
          <div className="w-[180px] h-[180px] rounded-[30px] border border-accent/5" />
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 lg:mb-14">
          <div className="flex flex-col gap-6 max-w-[640px]">
            <span className="text-[11px] font-bold tracking-[0.16em] text-accent uppercase flex items-center gap-3">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              03 / Selected Works
            </span>
            <h2 className="section-heading text-[clamp(36px,5vw,56px)] text-text-luxury leading-[1.1] font-bold">
              Timeless Spaces. Selected Projects.
            </h2>
          </div>
          <div>
            <Link
              href="#contact"
              className="text-[12px] font-bold tracking-[0.15em] text-text-luxury hover:text-accent uppercase flex items-center gap-3 group transition-colors"
            >
              View All Commissions
              <svg
                className="w-4 h-4 stroke-text-luxury group-hover:stroke-accent transition-colors duration-300 transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-[20px] bg-border-luxury group ${project.span}`}
            >
              {/* Image Container with Parallax Zoom */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2.5s] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
                />
                
                {/* Soft Vignette and Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 opacity-60 group-hover:opacity-85 transition-opacity duration-500 ease-in-out" />
              </div>

              {/* Text Info - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end text-bg-luxury z-10">
                <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase mb-2">
                  {project.category}
                </span>
                
                <h3 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-white font-heading mb-4 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  {project.title}
                </h3>
                
                {/* Hidden Meta Information revealed on Hover (Visible by default on mobile) */}
                <div className="h-auto opacity-80 mt-2 lg:mt-0 lg:h-0 lg:opacity-0 lg:group-hover:h-auto lg:group-hover:opacity-80 overflow-hidden transition-all duration-500 ease-out flex items-center justify-between">
                  <span className="text-[13px] font-light tracking-wide text-bg-luxury/70">
                    {project.location}
                  </span>
                  
                  <span className="text-[11px] font-bold tracking-[0.15em] text-white uppercase flex items-center gap-2">
                    Explore
                    <svg
                      className="w-3.5 h-3.5 stroke-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Accent Highlight lines */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-[20px] transition-all duration-500 group-hover:border-accent/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
