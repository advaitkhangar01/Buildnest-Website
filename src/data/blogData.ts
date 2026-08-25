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
      {
        type: "quote",
        text: "Digital twin modeling replaces site surprises with calculated structural certainty.",
      },
    ],
  },
  {
    id: "blog-6",
    slug: "biophilic-architecture-integrating-nature-in-urban-residences",
    title: "Biophilic Architecture: Integrating Nature into Urban Luxury Residences",
    subtitle: "Bringing natural light, organic materials, and indoor flora to create living spaces that improve wellbeing and air quality.",
    excerpt: "Learn how biophilic design principles seamlessly bridge interior luxury with raw natural elements in modern residential estates.",
    category: "Sustainable Design",
    categoryTag: "sustainability",
    readTime: "6 min read",
    publishDate: "March 01, 2025",
    featured: false,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/services/architecture.webp",
    tags: ["Biophilic Design", "Green Courtyards", "Indoor Nature", "Luxury Villas"],
    content: [
      {
        type: "paragraph",
        text: "Biophilic architecture goes beyond decorative houseplants; it is a fundamental design philosophy that integrates natural elements directly into the structural fabric of modern luxury residences.",
      },
      {
        type: "heading",
        text: "Connecting Indoor & Outdoor Ecosystems",
      },
      {
        type: "paragraph",
        text: "By utilizing full-height glass partitions, internal lightwells, and native plant living walls, Buildnest creates homes where spatial boundaries between interior rooms and outdoor gardens blur naturally.",
      },
      {
        type: "callout",
        text: "Design Insight: Incorporating water features and natural stone textures lowers stress levels and improves indoor acoustic softness.",
      },
    ],
  },
  {
    id: "blog-7",
    slug: "acoustic-engineering-in-modern-open-plan-homes",
    title: "Acoustic Engineering & Soundscape Design in Open-Plan Homes",
    subtitle: "Controlling echo and reverberation in grand double-height living areas with concealed sound-absorbing architecture.",
    excerpt: "Discover how micro-perforated wood panels, fabric wall coverings, and ceiling baffles retain spacious aesthetics while ensuring pristine acoustic warmth.",
    category: "Luxury Interiors",
    categoryTag: "interiors",
    readTime: "5 min read",
    publishDate: "March 15, 2025",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Interior Design Director",
      avatar: "/images/hero_bg.webp",
    },
    heroImage: "/images/services/interior.webp",
    tags: ["Acoustic Design", "Open Plan Living", "Luxury Interiors", "Soundproofing"],
    content: [
      {
        type: "paragraph",
        text: "Open-plan living rooms with marble floors and double-height ceilings create magnificent visual drama, but without proper acoustic design, harsh sound reverberation can compromise daily comfort.",
      },
      {
        type: "heading",
        text: "Invisible Acoustic Solutions",
      },
      {
        type: "paragraph",
        text: "We integrate hidden acoustic backing beneath timber ceiling slats, custom upholstered headboards, and acoustic plasterboards that absorb reverberation without altering the minimalist design aesthetic.",
      },
      {
        type: "quote",
        text: "True luxury is felt not just through sight and touch, but through the serene acoustic atmosphere of a home.",
      },
    ],
  },
  {
    id: "blog-8",
    slug: "seismic-resilient-foundations-in-central-india-construction",
    title: "Seismic Resilient Foundations & Advanced Structural Engineering",
    subtitle: "Engineering heavy raft foundations and shear wall configurations engineered for longevity and soil variation.",
    excerpt: "An in-depth guide on geotechnical testing, raft foundations, and seismic load distribution in luxury multi-story custom villas.",
    category: "Turnkey Construction",
    categoryTag: "construction",
    readTime: "7 min read",
    publishDate: "April 02, 2025",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Lead Structural Engineer",
      avatar: "/images/hero_bg.webp",
    },
    heroImage: "/images/services/construction.webp",
    tags: ["Structural Engineering", "Foundation Design", "Seismic Safety", "Construction"],
    content: [
      {
        type: "paragraph",
        text: "Building a generational estate requires structural engineering that withstands seismic stresses, soil swelling, and structural loads over decades.",
      },
      {
        type: "heading",
        text: "Geotechnical Precision & Raft Foundations",
      },
      {
        type: "paragraph",
        text: "Before excavation, rigorous soil bearing tests determine the ideal foundation profile. Combined raft foundations and reinforced shear core designs distribute structural loads evenly across expansive clay soils common in Central India.",
      },
      {
        type: "callout",
        text: "Key Engineering Spec: High-grade Fe550D rebar paired with M35/M40 grade concrete ensures superior tensile ductility during seismic events.",
      },
    ],
  },
  {
    id: "blog-9",
    slug: "smart-home-automation-integrating-iot-with-luxury-architecture",
    title: "Seamless Smart Home Automation: Invisible Tech in Modern Architecture",
    subtitle: "Integrating KNX automation systems, motorized solar screens, and centralized climate control into sleek interior architectural frames.",
    excerpt: "How modern automation protocols elevate security, energy conservation, and human-centric lighting in bespoke residences.",
    category: "Building Tech",
    categoryTag: "technology",
    readTime: "5 min read",
    publishDate: "April 18, 2025",
    featured: false,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/services/project_management.webp",
    tags: ["Smart Home", "Building Automation", "IoT Architecture", "Tech Integration"],
    content: [
      {
        type: "paragraph",
        text: "Modern luxury home automation moves away from cluttered wall switches and complex apps toward intuitive, invisible smart infrastructure.",
      },
      {
        type: "heading",
        text: "Wired KNX Protocols for Absolute Reliability",
      },
      {
        type: "paragraph",
        text: "By implementing decentralized KNX bus systems, light scenes, HVAC zones, motorized louvers, and security sensors operate on ultra-reliable wired backbones that outlast consumer wireless tech.",
      },
      {
        type: "list",
        items: [
          "Circadian rhythm lighting that adjusts color temperature throughout the day.",
          "Automated solar tracking louvers to optimize ambient daylight.",
          "Integrated occupancy sensors for effortless zero-touch energy management.",
        ],
      },
    ],
  },
  {
    id: "blog-10",
    slug: "cantilevered-structures-defying-gravity-in-villa-design",
    title: "The Art of the Cantilever: Defying Gravity in Modern Villa Engineering",
    subtitle: "Designing floating upper stories and wide shaded overhangs that elevate architectural drama and structural shade.",
    excerpt: "Exploring post-tensioned slab technology and structural steel framing that allow 15+ feet overhangs without visible column supports.",
    category: "Architectural Trends",
    categoryTag: "architecture",
    readTime: "6 min read",
    publishDate: "May 05, 2025",
    featured: false,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/projects/office-site/img_3630.webp",
    tags: ["Cantilever Design", "Modern Architecture", "Structural Engineering", "Facade Design"],
    content: [
      {
        type: "paragraph",
        text: "Floating cantilevers create some of the most striking visual statements in contemporary residential architecture, casting long protective shadows over ground floor glass facades.",
      },
      {
        type: "heading",
        text: "Post-Tensioned Slabs & Steel Trusses",
      },
      {
        type: "paragraph",
        text: "Achieving long column-free overhangs requires internal post-tensioned tendons and hidden steel trusses embedded within floor slabs to carry bending moments back into the core structural columns.",
      },
      {
        type: "quote",
        text: "A successful cantilever appears weightless to the observer, concealing immense structural force beneath quiet geometric lines.",
      },
    ],
  },
  {
    id: "blog-11",
    slug: "sustainable-rainwater-harvesting-and-greywater-recycling",
    title: "Zero-Waste Water Management: Rainwater Harvesting & Recycling Systems",
    subtitle: "Engineering eco-friendly residential water storage, bio-filtration pits, and smart irrigation networks.",
    excerpt: "How luxury developments integrate underground cisterns and natural reed bed filtration to achieve water self-sufficiency.",
    category: "Sustainable Design",
    categoryTag: "sustainability",
    readTime: "6 min read",
    publishDate: "May 20, 2025",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Lead Structural Engineer",
      avatar: "/images/hero_bg.webp",
    },
    heroImage: "/images/projects/office-site/img_3631.webp",
    tags: ["Water Conservation", "Rainwater Harvesting", "Sustainable Living", "Green Building"],
    content: [
      {
        type: "paragraph",
        text: "With seasonal rainfall variations, integrating sustainable water harvesting into estate master planning is essential for long-term ecological balance.",
      },
      {
        type: "heading",
        text: "Underground Rainwater Vaults & Filtration",
      },
      {
        type: "paragraph",
        text: "Rooftop catchments channel rainwater into subterranean multi-chamber filtration tanks, storing over 100,000 liters for landscape drip irrigation and non-potable domestic use.",
      },
      {
        type: "callout",
        text: "Eco Benefit: On-site water recycling reduces municipal water reliance by up to 50% year-round.",
      },
    ],
  },
  {
    id: "blog-12",
    slug: "custom-millwork-and-bespoke-woodworking-in-luxury-estates",
    title: "Master Craftsmanship: Custom Millwork & Architectural Joinery",
    subtitle: "Elevating interiors through custom Teak paneling, hidden door frames, and precision veneer matching.",
    excerpt: "Inside Buildnest's approach to handcrafted wooden wall cladding, concealed pivot doors, and bespoke cabinetry.",
    category: "Luxury Interiors",
    categoryTag: "interiors",
    readTime: "5 min read",
    publishDate: "June 08, 2025",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Interior Design Director",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/projects/office-site/img_3636.webp",
    tags: ["Custom Joinery", "Millwork", "Interior Craftsmanship", "Luxury Furniture"],
    content: [
      {
        type: "paragraph",
        text: "Custom millwork brings rich organic warmth to sleek modern interiors, bridging raw architectural surfaces with refined tactile luxury.",
      },
      {
        type: "heading",
        text: "Seamless Pivot Doors & Hidden Shadow Gaps",
      },
      {
        type: "paragraph",
        text: "By utilizing concealed floor pivots and 10mm metal shadow-gap trims, full-height timber doors blend seamlessly into wall paneling when closed.",
      },
    ],
  },
  {
    id: "blog-13",
    slug: "optimizing-boq-and-cost-transparency-in-commercial-builds",
    title: "Financial Precision: Optimizing BOQ & Cost Control in Construction",
    subtitle: "How itemized Bill of Quantities (BOQ) and rate analysis eliminate budget overruns before groundbreaking.",
    excerpt: "A practical guide for property owners on understanding material rate breakdowns, contingency buffers, and value engineering.",
    category: "Turnkey Construction",
    categoryTag: "construction",
    readTime: "7 min read",
    publishDate: "June 25, 2025",
    featured: false,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/services/turnkey.webp",
    tags: ["BOQ Planning", "Cost Management", "Turnkey Construction", "Commercial Projects"],
    content: [
      {
        type: "paragraph",
        text: "Budget transparency is the foundation of trust in major architectural projects. A detailed Bill of Quantities (BOQ) prevents hidden expenses and scope creep.",
      },
      {
        type: "heading",
        text: "Value Engineering Without Sacrificing Quality",
      },
      {
        type: "paragraph",
        text: "Through rigorous structural and material audits, Buildnest identifies cost-effective alternatives that maintain design integrity while optimizing financial investment.",
      },
    ],
  },
  {
    id: "blog-14",
    slug: "parametric-facade-design-and-solar-shading-solutions",
    title: "Parametric Facades: Algorithmic Shading & Climate-Responsive Skins",
    subtitle: "Using computational design to craft responsive building envelopes that dynamically block solar heat gain.",
    excerpt: "How algorithmic louvers, perforated metal screens, and kinetic facades transform energy efficiency and exterior visual aesthetics.",
    category: "Building Tech",
    categoryTag: "technology",
    readTime: "6 min read",
    publishDate: "July 12, 2025",
    featured: false,
    author: {
      name: "Rohan Shahoo",
      role: "Principal Architect & Founder",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/projects/property-1/img_3887.webp",
    tags: ["Parametric Design", "Solar Shading", "Facade Engineering", "Computational Architecture"],
    content: [
      {
        type: "paragraph",
        text: "Parametric design uses mathematical algorithms to generate facade geometries tailored to solar angles and local climatic conditions.",
      },
      {
        type: "heading",
        text: "Algorithmic Perforations & Light Diffusion",
      },
      {
        type: "paragraph",
        text: "Custom laser-cut aluminum screen panels vary perforation density according to solar radiation maps, reducing glare while maintaining scenic views.",
      },
    ],
  },
  {
    id: "blog-15",
    slug: "curating-art-and-spatial-lighting-in-residential-galleries",
    title: "Architectural Art Curation & Precision Gallery Lighting Systems",
    subtitle: "Designing private home art galleries with museum-grade UV protection, color rendering (CRI 98+), and focal track lighting.",
    excerpt: "How lighting angles, wall treatments, and humidity control showcase art collections with gallery precision inside luxury residences.",
    category: "Architectural Trends",
    categoryTag: "architecture",
    readTime: "5 min read",
    publishDate: "August 04, 2025",
    featured: false,
    author: {
      name: "Advait Khangar",
      role: "Interior Design Director",
      avatar: "/images/about_detail.webp",
    },
    heroImage: "/images/projects/property-1/img_3889.webp",
    tags: ["Art Curation", "Spatial Design", "Gallery Lighting", "Luxury Residence"],
    content: [
      {
        type: "paragraph",
        text: "For discerning art collectors, residential walls serve as private galleries requiring precision optics and climate protection.",
      },
      {
        type: "heading",
        text: "Museum-Grade Lighting Specs",
      },
      {
        type: "paragraph",
        text: "We specify 30-degree beam angle framing projectors with high Color Rendering Index (CRI > 98) and zero UV radiation to highlight artwork naturally without causing color degradation over time.",
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
