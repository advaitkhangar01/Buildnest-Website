import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TiltCard3D from "@/components/TiltCard3D";
import { getBlogPostBySlug, getRelatedPosts, BLOG_POSTS } from "@/data/blogData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bg-luxury text-text-luxury pt-28 pb-20">
        
        {/* Article Hero Theater */}
        <section className="relative bg-text-luxury text-bg-luxury border-b border-white/10 pt-16 pb-20 overflow-hidden">
          {/* Depth Background Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-[0.08] animate-pulse-slow" />
            <div
              className="absolute -top-30 -right-20 w-[550px] h-[550px] bg-accent/25 rounded-full blur-3xl [transform:translateZ(0)] animate-orb-float"
            />
          </div>

          <div className="mx-auto max-w-[1200px] px-5 sm:px-10 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-bg-luxury/60 uppercase tracking-widest mb-6">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-accent transition-colors">Journal</Link>
              <span>/</span>
              <span className="text-white font-bold">{post.category}</span>
            </div>

            {/* Category Badge & Metadata */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 bg-accent text-white font-mono text-xs font-bold uppercase tracking-widest">
                {post.category}
              </span>
              <span className="text-xs font-mono text-bg-luxury/80">
                {post.publishDate}
              </span>
              <span className="text-bg-luxury/40">•</span>
              <span className="text-xs font-mono text-accent">
                {post.readTime}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="section-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-4xl">
              {post.title}
            </h1>

            <p className="mt-4 text-lg sm:text-xl text-bg-luxury/90 font-medium leading-relaxed max-w-3xl">
              {post.subtitle}
            </p>

            {/* Author Profile */}
            <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-accent bg-bg-luxury">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">{post.author.name}</h4>
                  <p className="text-xs font-mono text-bg-luxury/70">{post.author.role}</p>
                </div>
              </div>

              {/* Tags Pills */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 text-white text-[11px] font-mono rounded-full border border-white/15"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Featured Hero Image */}
        <section className="relative -mt-8 sm:-mt-12 z-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border-luxury shadow-3d-lg specular-border bg-black">
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </section>

        {/* Article Body & Sidebar */}
        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Article Content */}
              <div className="lg:col-span-8 space-y-8 text-text-luxury">
                {post.content.map((block, idx) => {
                  if (block.type === "paragraph") {
                    return (
                      <p key={idx} className="text-base sm:text-lg text-text-luxury/90 leading-[1.85] font-light">
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "heading") {
                    return (
                      <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-text-luxury tracking-tight mt-8 mb-4">
                        {block.text}
                      </h2>
                    );
                  }

                  if (block.type === "callout") {
                    return (
                      <div key={idx} className="p-6 bg-accent/10 border-l-4 border-accent text-text-luxury rounded-r-xl my-6">
                        <p className="text-base font-semibold leading-relaxed font-mono">
                          {block.text}
                        </p>
                      </div>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote key={idx} className="p-6 sm:p-8 bg-white border border-border-luxury shadow-3d-sm rounded-2xl my-8">
                        <span className="text-3xl text-accent block mb-2">“</span>
                        <p className="text-xl sm:text-2xl font-serif italic text-text-luxury leading-relaxed">
                          {block.text}
                        </p>
                      </blockquote>
                    );
                  }

                  if (block.type === "list" && block.items) {
                    return (
                      <ul key={idx} className="space-y-3 my-6 pl-2">
                        {block.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-base text-text-luxury/90">
                            <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "image" && block.imageSrc) {
                    return (
                      <div key={idx} className="my-8 space-y-2">
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-border-luxury shadow-md">
                          <Image
                            src={block.imageSrc}
                            alt={block.caption || "Article visual"}
                            fill
                            className="object-cover"
                          />
                        </div>
                        {block.caption && (
                          <p className="text-xs font-mono text-muted-luxury text-center italic">
                            {block.caption}
                          </p>
                        )}
                      </div>
                    );
                  }

                  return null;
                })}

                {/* Author Biography Box */}
                <div className="mt-12 p-8 bg-white border border-border-luxury rounded-2xl shadow-3d-sm flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent shrink-0 bg-bg-luxury">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-accent uppercase font-bold tracking-widest">Article Author</span>
                    <h3 className="text-lg font-bold text-text-luxury">{post.author.name}</h3>
                    <p className="text-xs font-mono text-muted-luxury mb-2">{post.author.role}</p>
                    <p className="text-xs text-text-luxury/80 leading-relaxed">
                      Leading architectural design and engineering projects at Buildnest, with a focus on bioclimatic villas and structural execution across Central India.
                    </p>
                  </div>
                </div>

              </div>

              {/* Sidebar Component */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Consultation Card */}
                <div className="p-8 bg-text-luxury text-bg-luxury rounded-2xl border border-white/10 shadow-xl space-y-4">
                  <span className="text-[10px] font-mono text-accent uppercase tracking-widest font-bold">
                    Buildnest Architectural Services
                  </span>
                  <h3 className="text-xl font-bold text-white">Have a Project in Mind?</h3>
                  <p className="text-xs text-bg-luxury/80 leading-relaxed font-light">
                    Consult our architects for custom residential villas, turnkey commercial developments, or interior architectural design.
                  </p>
                  <Link
                    href="/contact"
                    className="block text-center w-full py-3 bg-accent text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-text-luxury transition-all duration-300"
                  >
                    Request Project Proposal
                  </Link>
                </div>

                {/* Article Info Box */}
                <div className="p-6 bg-white border border-border-luxury rounded-2xl space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-text-luxury border-b border-border-luxury/60 pb-3">
                    Article Metadata
                  </h4>
                  <div className="space-y-3 text-xs font-mono">
                    <div className="flex justify-between text-muted-luxury">
                      <span>Published:</span>
                      <span className="text-text-luxury font-bold">{post.publishDate}</span>
                    </div>
                    <div className="flex justify-between text-muted-luxury">
                      <span>Reading Time:</span>
                      <span className="text-text-luxury font-bold">{post.readTime}</span>
                    </div>
                    <div className="flex justify-between text-muted-luxury">
                      <span>Category:</span>
                      <span className="text-accent font-bold">{post.category}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Related Articles Showcase */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white border-t border-border-luxury/80">
            <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase block mb-1">
                    Keep Reading
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">Related Articles</h2>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-bold tracking-widest text-accent uppercase hover:text-text-luxury transition-colors"
                >
                  View All Journal Posts →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relPost) => (
                  <TiltCard3D key={relPost.id} maxTilt={6} className="h-full">
                    <article className="group flex flex-col bg-bg-luxury border border-border-luxury rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full">
                      <Link href={`/blog/${relPost.slug}`} className="relative aspect-[16/10] block overflow-hidden">
                        <Image
                          src={relPost.heroImage}
                          alt={relPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </Link>
                      <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                        <div>
                          <span className="text-[10px] font-mono text-accent font-bold uppercase">{relPost.category}</span>
                          <Link href={`/blog/${relPost.slug}`}>
                            <h3 className="text-base font-bold text-text-luxury group-hover:text-accent transition-colors line-clamp-2 mt-1">
                              {relPost.title}
                            </h3>
                          </Link>
                        </div>
                        <div className="pt-3 border-t border-border-luxury/60 flex items-center justify-between text-[11px] font-mono text-muted-luxury">
                          <span>{relPost.readTime}</span>
                          <Link href={`/blog/${relPost.slug}`} className="text-accent font-bold uppercase hover:underline">
                            Read →
                          </Link>
                        </div>
                      </div>
                    </article>
                  </TiltCard3D>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
