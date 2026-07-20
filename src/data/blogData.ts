export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogContentBlock {
  type: "paragraph" | "heading" | "quote" | "list" | "callout" | "image";
  text?: string;
  items?: string[];
  caption?: string;
  imageSrc?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  categoryTag: "architecture" | "interiors" | "sustainability" | "construction" | "technology";
  readTime: string;
  publishDate: string;
  author: BlogAuthor;
  heroImage: string;
  tags: string[];
  featured?: boolean;
  content: BlogContentBlock[];
}

export const BLOG_CATEGORIES = [
  { label: "All Insights", value: "all" },
  { label: "Architectural Trends", value: "architecture" },
  { label: "Luxury Interiors", value: "interiors" },
  { label: "Sustainable Design", value: "sustainability" },
  { label: "Turnkey Construction", value: "construction" },
  { label: "Building Tech", value: "technology" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "sustainable-passive-cooling-in-modern-villas",
    title: "Sustainable Passive Cooling in Modern Villa Architecture",
    subtitle: "How smart orientation, thermal massing, and natural ventilation redefine luxury living in tropical climates.",
    excerpt: "Discover how luxury residences across Central India combine double-skin facades and courtyards to reduce HVAC loads by 35% without sacrificing aesthetic elegance.",
    category: "Sustainable Design",
    categoryTag: "sustainability",
    readTime: "6 min read",
    publishDate: "October 14, 2024",
    featured: true,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/project_2.webp",
    tags: ["Passive Cooling", "Green Architecture", "Luxury Villas", "Nagpur Architecture"],
    content: [
      {
        type: "paragraph",
        text: "In hot semi-arid regions like Nagpur and Central India, traditional luxury architecture often relied excessively on artificial air conditioning. Modern architectural design at Buildnest shifts the paradigm toward bioclimatic principles, where structural geometry itself moderates microclimates.",
      },
      {
        type: "callout",
        text: "Key Takeaway: Integrating central water courtyards, recessed cantilevered balconies, and double-skinned louvers can naturally suppress indoor temperatures by up to 6°C.",
      },
      {
        type: "heading",
        text: "1. The Rebirth of the Central Courtyard (Chowk)",
      },
      {
        type: "paragraph",
        text: "Historically, Indian heritage homes embraced central open-to-sky courtyards. In contemporary villa engineering, we reintroduce this concept with motorized glass louvers and micro-misting water mirrors. Warm air rises through stack ventilation, drawing cool ambient breeze through perimeter ground-floor gardens.",
      },
      {
        type: "image",
        imageSrc: "/images/project_3.webp",
        caption: "Tactile board-formed concrete cantilevered over a serene water courtyard, engineered for microclimate regulation.",
      },
      {
        type: "heading",
        text: "2. Thermal Massing & High-Performance Glazing",
      },
      {
        type: "paragraph",
        text: "By strategically pairing low-E double-glazed unitized glass on north-facing facades with heavy tactile concrete and insulated brickwork on south-west exposures, solar radiation is naturally deflected.",
      },
      {
        type: "quote",
        text: "Architecture is not merely about form; it is about creating a living ecosystem that breathes with the geography it occupies.",
      },
      {
        type: "heading",
        text: "3. Materials engineered for longevity",
      },
      {
        type: "list",
        items: [
          "Autoclaved aerated concrete (AAC) blocks with high R-value thermal insulation.",
          "Custom perforated brass louvers that track solar inclination.",
          "Rainwater harvesting channels integrated within concealed slab downspouts.",
          "Polished Kota and granite flooring offering high natural thermal inertia.",
        ],
      },
    ],
  },
  {
    id: "blog-2",
    slug: "evolution-of-concrete-in-luxury-estates",
    title: "The Evolution of Concrete in Modern Luxury Estates",
    subtitle: "From raw structural element to sculptural art piece: Why high-performance exposed concrete dominates elite residential design.",
    excerpt: "Unpacking board-formed architectural concrete, customized pigment stains, and structural cantilever freedom in custom home design.",
    category: "Architectural Trends",
    categoryTag: "architecture",
    readTime: "5 min read",
    publishDate: "November 02, 2024",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Lead Structural Engineer",
      avatar: "/images/hero_bg.webp",
    },
    heroImage: "/images/project_3.webp",
    tags: ["Exposed Concrete", "Structural Mastery", "Brutalist Luxury", "Villa Design"],
    content: [
      {
        type: "paragraph",
        text: "Exposed concrete is no longer seen as utilitarian or industrial. In high-end custom home creation, board-formed architectural concrete has emerged as the ultimate expression of permanence, purity, and sculptural elegance.",
      },
      {
        type: "heading",
        text: "Precision Formwork: Crafting Wood-Grain Textures",
      },
      {
        type: "paragraph",
        text: "To achieve seamless wood-grain concrete walls, selected pine boards are treated and aligned in timber shutters before casting high-slump self-compacting concrete (SCC). The resulting texture catches changing daylight throughout the afternoon, creating living artwork across living spaces.",
      },
      {
        type: "callout",
        text: "Pro Tip: Fiber-reinforced self-compacting concrete allows column-free spans over 30 feet, creating floating living rooms with wall-to-wall glass.",
      },
      {
        type: "quote",
        text: "When concrete is cast with structural precision, the building needs no superficial veneers; the material speaks for itself.",
      },
    ],
  },
  {
    id: "blog-3",
    slug: "turnkey-construction-vs-fragmented-contracting",
    title: "Turnkey Construction vs. Fragmented Contracting in Commercial Real Estate",
    subtitle: "Why single-point responsibility delivers 20% faster completion and protects design integrity.",
    excerpt: "A comparative breakdown of cost overruns, timeline delays, and material consistency when choosing single-source PMC execution.",
    category: "Turnkey Construction",
    categoryTag: "construction",
    readTime: "7 min read",
    publishDate: "December 18, 2024",
    featured: true,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/project_1.webp",
    tags: ["Turnkey Construction", "Project Management", "Commercial HQ", "Cost Optimization"],
    content: [
      {
        type: "paragraph",
        text: "Developing a landmark commercial building or high-end villa requires coordinating dozens of trades—from structural contractors and MEP engineers to interior joinery specialists and lighting designers.",
      },
      {
        type: "heading",
        text: "The Trap of Fragmented Contracting",
      },
      {
        type: "paragraph",
        text: "When owners hire separate vendors for civil structures, electrical systems, finishing work, and interiors, miscommunications inevitably lead to rework, blamed delays, and unexpected budget inflation.",
      },
      {
        type: "heading",
        text: "The Buildnest Turnkey Advantage",
      },
      {
        type: "list",
        items: [
          "Single-point accountability from architectural drafting to key handover.",
          "3D BIM modeling to eliminate MEP clashes before concrete pouring.",
          "Fixed milestone contracts preventing cost escalation.",
          "Strict multi-stage quality checks covering 150+ audit parameters.",
        ],
      },
      {
        type: "quote",
        text: "Turnkey execution bridges the gap between architectural dream and structural reality with absolute clarity.",
      },
    ],
  },
  {
    id: "blog-4",
    slug: "concealed-lighting-and-tactile-interior-sanctuaries",
    title: "Concealed Lighting & Tactile Interior Sanctuaries",
    subtitle: "Creating emotional ambiance in high-end penthouse & residence interiors through concealed LED coves and custom brass joinery.",
    excerpt: "How indirect lighting profiles and curated material palettes transform living rooms into tranquil modern sanctuaries.",
    category: "Luxury Interiors",
    categoryTag: "interiors",
    readTime: "4 min read",
    publishDate: "January 10, 2025",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Interior Design Director",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/project_4.webp",
    tags: ["Interior Lighting", "Penthouse Design", "Italian Marble", "Bespoke Furniture"],
    content: [
      {
        type: "paragraph",
        text: "Lighting is the single most powerful tool in luxury interior design. Rather than relying on harsh overhead downlights, contemporary luxury spaces embrace indirect linear coves and warm ambient temperature layering (2700K - 3000K).",
      },
      {
        type: "heading",
        text: "Material Tactility: Brass, Marble, and Natural Oak",
      },
      {
        type: "paragraph",
        text: "Combining brushed antique brass reveal trims with book-matched Italian marble slabs introduces a layer of understated sophistication that withstands fast-moving design trends.",
      },
      {
        type: "callout",
        text: "Design Rule: Never expose bare light bulbs in relaxation zones. Always bounce light off warm, textured surface planes.",
      },
    ],
  },
  {
    id: "blog-5",
    slug: "building-information-modeling-bim-in-custom-homes",
    title: "How BIM 3D Modeling Eliminates On-Site Construction Rework",
    subtitle: "Leveraging digital twin technology and structural simulations before laying the first brick.",
    excerpt: "Explore how 3D digital visualization and clash detection save developers months of delays and millions in material waste.",
    category: "Building Tech",
    categoryTag: "technology",
    readTime: "6 min read",
    publishDate: "February 05, 2025",
    featured: false,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/project_1.webp",
    tags: ["BIM Technology", "3D Modeling", "Construction Tech", "Engineering"],
    content: [
      {
        type: "paragraph",
        text: "Building Information Modeling (BIM) has transformed the architecture and construction industry. By creating a accurate 3D digital twin of a building before construction begins, engineers can test structural loads, solar gains, and MEP pipe routing in a virtual environment.",
      },
      {
        type: "heading",
        text: "Zero-Clash Execution",
      },
      {
        type: "paragraph",
        text: "In traditional construction, discovering that an AC duct intersects with a heavy concrete beam during site execution causes expensive delays. BIM clash detection flags these conflicts instantly during design development.",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return BLOG_POSTS.slice(0, limit);

  const sameCategory = BLOG_POSTS.filter(
    (post) => post.slug !== currentSlug && post.categoryTag === currentPost.categoryTag
  );
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const otherPosts = BLOG_POSTS.filter(
    (post) => post.slug !== currentSlug && post.categoryTag !== currentPost.categoryTag
  );
  return [...sameCategory, ...otherPosts].slice(0, limit);
}
