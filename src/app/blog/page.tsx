"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard3D from "@/components/TiltCard3D";
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from "@/data/blogData";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.categoryTag === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        
        {/* Redesigned Hero Section - Dark Luxury Editorial Theater */}
        <section className="relative py-14 lg:py-20 bg-text-luxury text-bg-luxury border-b border-white/10 overflow-hidden">
          {/* Ambient Blueprint Depth Graphics */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.08] animate-pulse-slow" />
            
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-30 -left-20 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />
            <motion.div
              animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.4, 0.25] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-30 right-10 w-[450px] h-[450px] bg-primary/30 rounded-full blur-3xl [transform:translateZ(0)]"
            />

            {/* Laser Line Accent */}
            <motion.div
              animate={{ y: ["0%", "100%", "0%"] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-80"
            />
          </div>

          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Heading & Editorial Intent */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:col-span-7 space-y-5"
              >
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-accent font-mono text-xs uppercase tracking-[0.2em]">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  Editorial Journal // Buildnest
                </div>

                <h1 className="section-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] text-white">
                  Architectural <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-primary">
                    Insights &amp; Innovation.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-bg-luxury font-medium max-w-2xl leading-relaxed">
                  Deep dives into bioclimatic villa design, structural concrete innovation, turnkey project management, and luxury spatial acoustics engineered for Central India.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4 text-sm font-mono text-bg-luxury font-semibold">
                  <span className="flex items-center gap-2">
                    <span className="text-accent">◆</span> Passive Cooling
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-accent">◆</span> Exposed Concrete
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-accent">◆</span> Turnkey BOQ
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="text-accent">◆</span> BIM 3D Specs
                  </span>
                </div>
              </motion.div>

              {/* Right Column: Featured Spotlight Card */}
              {featuredPost && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="lg:col-span-5"
                >
                  <div className="relative group p-4 bg-white/10 border border-white/20 backdrop-blur-xl rounded-none shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                      <Image
                        src={featuredPost.heroImage}
                        alt={featuredPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                        sizes="(max-width: 1024px) 100vw, 35vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                      
                      <div className="absolute top-3 left-3 px-3.5 py-1 bg-accent text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md">
                        Spotlight Feature
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-xs font-mono tracking-widest text-accent uppercase block font-bold">
                          {featuredPost.category}
                        </span>
                        <h3 className="text-xl font-bold text-white line-clamp-2">{featuredPost.title}</h3>
                        <p className="text-xs text-white/80 font-mono mt-1">{featuredPost.readTime} • {featuredPost.publishDate}</p>
                      </div>
                    </div>

                    <div className="mt-3 p-3 flex items-center justify-between bg-white/10 border border-white/15 text-sm">
                      <span className="text-bg-luxury font-mono text-xs font-bold">Read Editorial Essay</span>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="text-accent font-bold uppercase tracking-wider hover:text-white transition-colors flex items-center gap-1"
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}

            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
              <div className="p-4 bg-white/10 border border-white/10">
                <span className="block text-3xl sm:text-5xl font-extrabold text-accent font-mono">100%</span>
                <span className="text-xs uppercase tracking-widest text-bg-luxury font-bold mt-1 block">
                  Original Research
                </span>
              </div>
              <div className="p-4 bg-white/10 border border-white/10">
                <span className="block text-3xl sm:text-5xl font-extrabold text-white font-mono">15+ Yrs</span>
                <span className="text-xs uppercase tracking-widest text-bg-luxury font-bold mt-1 block">
                  Field Case Studies
                </span>
              </div>
              <div className="p-4 bg-white/10 border border-white/10">
                <span className="block text-3xl sm:text-5xl font-extrabold text-primary font-mono">Bioclimatic</span>
                <span className="text-xs uppercase tracking-widest text-bg-luxury font-bold mt-1 block">
                  Design Focus
                </span>
              </div>
              <div className="p-4 bg-white/10 border border-white/10">
                <span className="block text-3xl sm:text-5xl font-extrabold text-white font-mono">Weekly</span>
                <span className="text-xs uppercase tracking-widest text-bg-luxury font-bold mt-1 block">
                  New Publications
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Filter Controls & Search */}
        <section className="py-6 border-b border-border-luxury/60 bg-bg-luxury/95 sticky top-[88px] z-30 backdrop-blur-md">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-5 py-2.5 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 rounded-none border whitespace-nowrap ${
                    activeCategory === cat.value
                      ? "bg-text-luxury text-bg-luxury border-text-luxury shadow-md"
                      : "bg-white text-text-luxury border-border-luxury hover:border-text-luxury"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles, keywords, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-border-luxury px-4 py-2.5 text-sm font-semibold text-text-luxury focus:outline-none focus:border-accent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-text-luxury font-bold hover:text-accent"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
            <AnimatePresence mode="wait">
              {filteredPosts.length > 0 ? (
                <motion.div
                  key={activeCategory + searchQuery}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
                >
                  {filteredPosts.map((post, idx) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      className="h-full"
                    >
                      <TiltCard3D maxTilt={7} className="h-full">
                        <article className="group flex flex-col bg-white border border-border-luxury rounded-2xl overflow-hidden shadow-3d-md specular-border transition-all duration-500 preserve-3d h-full">
                          
                          {/* Image Box */}
                          <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-bg-luxury">
                            <Image
                              src={post.heroImage}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-text-luxury/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="absolute top-4 left-4 bg-text-luxury text-bg-luxury px-3.5 py-1 text-xs font-bold tracking-widest uppercase border border-border-luxury rounded-md translate-z-20">
                              {post.category}
                            </div>

                            <div className="absolute bottom-4 right-4 bg-black/60 text-white px-2.5 py-0.5 text-[10px] font-mono tracking-wider backdrop-blur-sm rounded">
                              {post.readTime}
                            </div>
                          </Link>

                          {/* Post Details */}
                          <div className="p-6 flex flex-col flex-grow justify-between space-y-4 preserve-3d">
                            <div className="translate-z-10 space-y-3">
                              <div className="flex items-center gap-3 text-xs font-bold text-accent font-mono tracking-wider">
                                <span>{post.publishDate}</span>
                                <span>•</span>
                                <span>{post.tags[0]}</span>
                              </div>

                              <Link href={`/blog/${post.slug}`}>
                                <h3 className="text-xl font-extrabold text-text-luxury group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                                  {post.title}
                                </h3>
                              </Link>

                              <p className="text-sm font-medium text-muted-luxury leading-relaxed line-clamp-2">
                                {post.excerpt}
                              </p>
                            </div>

                            {/* Author & Action Footer */}
                            <div className="pt-4 border-t border-border-luxury flex items-center justify-between translate-z-20">
                              <div className="flex items-center gap-2.5">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-accent/40 bg-bg-luxury">
                                  <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-xs font-bold text-text-luxury">{post.author.name}</span>
                                  <span className="text-[10px] font-mono text-muted-luxury">{post.author.role}</span>
                                </div>
                              </div>

                              <Link
                                href={`/blog/${post.slug}`}
                                className="text-xs font-extrabold tracking-widest text-accent uppercase flex items-center gap-2 group/btn hover:translate-x-1 transition-transform"
                              >
                                Read Essay
                                <span className="text-sm">→</span>
                              </Link>
                            </div>

                          </div>
                        </article>
                      </TiltCard3D>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="py-16 text-center border border-dashed border-border-luxury">
                  <p className="text-xl text-text-luxury font-bold">No blog posts match your criteria.</p>
                  <button
                    onClick={() => {
                      setActiveCategory("all");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-6 py-2.5 bg-text-luxury text-bg-luxury text-xs uppercase tracking-widest font-bold hover:bg-accent transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-14 bg-text-luxury text-bg-luxury relative overflow-hidden">
          <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
          <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-tight font-heading text-white">
              Want to Discuss an Architectural Idea?
            </h2>
            <p className="mt-4 text-bg-luxury max-w-xl mx-auto text-base sm:text-lg font-medium">
              Connect directly with our principal architects and engineering team for private project consultations.
            </p>
            <div className="mt-6 flex justify-center">
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
