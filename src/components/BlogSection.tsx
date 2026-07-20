"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import TiltCard3D from "@/components/TiltCard3D";
import { BLOG_POSTS } from "@/data/blogData";

export default function BlogSection() {
  // Select top 3 articles for the home page showcase
  const featuredPosts = BLOG_POSTS.slice(0, 3);

  return (
    <section
      id="blog"
      className="relative py-20 sm:py-24 lg:py-32 bg-bg-luxury border-b border-border-luxury/60 overflow-hidden"
    >
      {/* Ambient Depth Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute inset-0 blueprint-grid opacity-[0.02]" />
        <div className="absolute top-0 right-[15%] w-[450px] h-[450px] bg-accent/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        
        {/* Decorative CAD Code */}
        <div className="absolute top-[10%] left-[6%] text-text-luxury/10 text-[9px] font-mono tracking-[0.2em] uppercase hidden md:block">
          ARCH_INSIGHTS // EDITORIAL_08
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.18em] text-accent uppercase flex items-center gap-3">
              <span className="w-6 h-[1px] bg-accent inline-block" />
              08 / Editorial &amp; Journal
            </span>
            <h2 className="section-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-text-luxury tracking-tight leading-[1.08]">
              Architectural <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-text-luxury to-primary">
                Insights &amp; Journal.
              </span>
            </h2>
            <p className="text-muted-luxury text-base sm:text-lg font-light leading-relaxed">
              Perspectives on sustainable villa engineering, exposed concrete craftsmanship, luxury interior acoustics, and turnkey construction management across India.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-3 px-6 py-3.5 bg-text-luxury text-bg-luxury text-xs font-bold tracking-[0.14em] uppercase border border-text-luxury hover:bg-accent hover:border-accent hover:text-white transition-all duration-300 shadow-md group/btn w-fit"
          >
            Explore All Articles
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {featuredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="h-full"
            >
              <TiltCard3D maxTilt={7} className="h-full">
                <article className="group flex flex-col bg-white border border-border-luxury rounded-2xl overflow-hidden shadow-3d-md specular-border transition-all duration-500 preserve-3d h-full">
                  
                  {/* Article Image Container */}
                  <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] overflow-hidden bg-bg-luxury">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-text-luxury/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-text-luxury text-bg-luxury px-3 py-1 text-[10px] font-bold tracking-widest uppercase border border-white/20 rounded-md backdrop-blur-md">
                      {post.category}
                    </div>

                    {/* Read Time Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white/90 px-2.5 py-0.5 text-[10px] font-mono tracking-wider backdrop-blur-sm rounded">
                      {post.readTime}
                    </div>
                  </Link>

                  {/* Article Meta & Content */}
                  <div className="p-6 flex flex-col flex-grow justify-between space-y-4 preserve-3d">
                    <div className="translate-z-10 space-y-3">
                      <div className="flex items-center gap-3 text-xs font-mono text-muted-luxury font-medium">
                        <span>{post.publishDate}</span>
                        <span>•</span>
                        <span className="text-accent font-bold">{post.tags[0]}</span>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-bold text-text-luxury group-hover:text-accent transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm font-light text-muted-luxury leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Action Footer */}
                    <div className="pt-4 border-t border-border-luxury/80 flex items-center justify-between translate-z-20">
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-accent/40 bg-bg-luxury">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-xs font-semibold text-text-luxury">{post.author.name}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-extrabold tracking-wider text-accent uppercase flex items-center gap-1.5 group/link hover:translate-x-1 transition-transform"
                      >
                        Read Post
                        <span>→</span>
                      </Link>
                    </div>

                  </div>
                </article>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
