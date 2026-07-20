export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: "residential" | "commercial" | "turnkey" | "interiors";
  location: string;
  year: string;
  area: string;
  client: string;
  duration: string;
  services: string[];
  heroImage: string;
  galleryImages: string[];
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  specs: ProjectSpec[];
  architecturalHighlights?: string[];
  testimonial?: ProjectTestimonial;
}

export const PROJECTS_DATA: Record<string, ProjectData> = {
  "the-glass-ribbon-facade": {
    id: "proj-1",
    slug: "the-glass-ribbon-facade",
    title: "The Glass Ribbon Facade",
    subtitle: "A high-performance commercial tower featuring continuous double-glazed ribbons and climate-adaptive solar louvers.",
    category: "Commercial Architecture",
    categoryTag: "commercial",
    location: "Commercial District, Nagpur",
    year: "2024",
    area: "18,500 sq ft",
    client: "Horizon Commercial Ventures",
    duration: "14 Months",
    services: [
      "Architectural Design",
      "Façade Engineering",
      "Civil Construction",
      "Turnkey Project Management",
    ],
    heroImage: "/images/project_1.webp",
    galleryImages: [
      "/images/project_1.webp",
      "/images/services/architecture.webp",
      "/images/services/project_management.webp",
      "/images/project_3.webp",
    ],
    overview:
      "The Glass Ribbon Facade stands as a high-performance commercial landmark in Nagpur's central business zone. Featuring floating double-glazed glass ribbons intertwined with climate-adaptive exterior louvers, the building optimizes natural daylighting while reducing solar heat gain by 38%.",
    challenge:
      "Designing a high-rise glass elevation suited to Nagpur's intense thermal climate while achieving structural elegance, wind-load resistance, and LEED Gold energy compliance.",
    solution:
      "Engineered double-glazed low-emissivity glass assemblies integrated with cantilevered solar shades, thermal break aluminum frames, and a high-span structural steel backbone.",
    keyFeatures: [
      "Custom double-glazed structural curtain wall system",
      "Automated solar shading louvers linked to climate sensors",
      "Triple-height atrium lobby with acoustic stone wall cladding",
      "Rooftop executive deck with panoramic cityscape views",
      "Integrated solar PV panels on non-glazed rooftop parapets",
    ],
    specs: [
      { label: "Facade System", value: "Unitized Low-E Double Glazed Curtain Wall" },
      { label: "Structural Grid", value: "Post-Tensioned RCC & Steel Composite Frame" },
      { label: "Thermal Rating", value: "LEED Gold Certified Standard" },
      { label: "Lobby Atrium", value: "Triple-Height Acoustic Italian Travertine Cladding" },
      { label: "Energy Savings", value: "38% Reduction in HVAC Thermal Load" },
    ],
    architecturalHighlights: [
      "Continuous ribbon glazing creating dynamic light patterns throughout office floors.",
      "Custom anodized bronze aluminum louvers angled specifically for Nagpur's latitude.",
      "High-speed regenerative energy elevators with smart destination dispatch.",
    ],
    testimonial: {
      quote:
        "Buildnest delivered a true architectural masterpiece. Their structural precision, quality of execution, and attention to detail surpassed all expectations.",
      author: "Rajesh Khandelwal",
      role: "Managing Director, Horizon Ventures",
    },
  },

  "residence-of-concrete-elements": {
    id: "proj-2",
    slug: "residence-of-concrete-elements",
    title: "Residence of Concrete Elements",
    subtitle: "Tactile exposed concrete walls, warm teakwood joinery, and peaceful interior courtyards for multi-generational living.",
    category: "Bespoke Residence",
    categoryTag: "residential",
    location: "Civil Lines, Nagpur",
    year: "2023",
    area: "8,200 sq ft",
    client: "Dr. Sharma & Family",
    duration: "12 Months",
    services: [
      "Architectural Design",
      "Interior Architecture",
      "Landscape Design",
      "Custom Joinery",
    ],
    heroImage: "/images/project_2.webp",
    galleryImages: [
      "/images/project_2.webp",
      "/images/services/interior.webp",
      "/images/project_4.webp",
      "/images/project_1.webp",
    ],
    overview:
      "A serene luxury sanctuary constructed with raw board-formed concrete walls, natural basalt stone surfaces, and custom teakwood panels. Every zone opens up to landscaped internal courtyards that foster natural cross-ventilation and thermal comfort.",
    challenge:
      "Achieving flawless raw concrete structural finishes with exposed electrical & HVAC channels integrated directly into cast-in-place walls without visible surface defects.",
    solution:
      "Fabricated specialized timber shuttering molds, utilized high-density self-compacting concrete mixes, and implemented strict temperature monitoring during curing cycles.",
    keyFeatures: [
      "Board-formed architectural exposed concrete walls",
      "Central water mirror with floating stone cantilever stairs",
      "Concealed smart home automation & linear accent lighting",
      "Private master wing featuring an outdoor shower sanctuary",
      "Passive solar layout orienting living spaces away from direct heat",
    ],
    specs: [
      { label: "Concrete Finish", value: "Custom Board-Formed Exposed RCC" },
      { label: "Joinery Material", value: "Reclaimed Burmese Teakwood" },
      { label: "Courtyard Mirror", value: "Black Granite Water Cascade Pool" },
      { label: "Flooring", value: "Honed Kota Stone & Micro-Topping Concrete" },
      { label: "HVAC System", value: "Concealed VRF with Air Purification" },
    ],
    architecturalHighlights: [
      "Seamless indoor-outdoor transition through floor-to-ceiling motorized sliding glass.",
      "Floating concrete staircase cantilevered directly from a 300mm structural shear wall.",
      "Custom perforated metal screens casting poetic shadow patterns during sunset.",
    ],
    testimonial: {
      quote:
        "Living in this villa is like inhabiting a piece of art. Buildnest's structural team achieved absolute perfection with concrete textures and spatial design.",
      author: "Dr. Ananya Sharma",
      role: "Homeowner",
    },
  },

  "brutalist-pavilion-villa": {
    id: "proj-3",
    slug: "brutalist-pavilion-villa",
    title: "Brutalist Pavilion Villa",
    subtitle: "Monolithic stone columns, post-tensioned cantilever roofs, and infinity water channels in a private estate.",
    category: "Turnkey Villa",
    categoryTag: "turnkey",
    location: "Wardha Road, Nagpur",
    year: "2024",
    area: "12,000 sq ft",
    client: "Agrawal Family",
    duration: "16 Months",
    services: [
      "Turnkey Construction",
      "Structural Engineering",
      "Interior Design",
      "Landscape Architecture",
    ],
    heroImage: "/images/project_3.webp",
    galleryImages: [
      "/images/project_3.webp",
      "/images/services/turnkey.webp",
      "/images/services/construction.webp",
      "/images/project_2.webp",
    ],
    overview:
      "A sprawling 12,000 sq ft estate celebrating brutalist architectural forms through heavy stone columns, dramatic cantilevered roof slabs, and expansive glass walls seamlessly integrating with perimeter water channels and lush private gardens.",
    challenge:
      "Executing massive 6-meter cantilever roof overhangs without visible intermediate column supports while withstanding monsoon wind pressures.",
    solution:
      "Implemented post-tensioned reinforced concrete beam grids and lightweight cellular ceiling structures anchor-bonded to heavy stone core pillars.",
    keyFeatures: [
      "Post-tensioned 6-meter cantilevered roof overhangs",
      "Sunken courtyard lounge with built-in fire pit feature",
      "Turnkey imported Italian marble & custom bronze metalwork",
      "Perimeter infinity plunge pool with natural stone cascade",
      "Private home theater with acoustic timber paneling",
    ],
    specs: [
      { label: "Cantilever Span", value: "6.2 Meters Post-Tensioned Slab" },
      { label: "Stone Masonry", value: "Hand-Chiseled Dholpur Sandstone" },
      { label: "Pool Feature", value: "Perimeter Overflow Infinity Edge" },
      { label: "Glass Assemblies", value: "12mm+12mm Toughened Laminated Glass" },
      { label: "Automation", value: "KNX Integrated Luxury Smart Home" },
    ],
    architecturalHighlights: [
      "Massive stone columns acting as thermal ballast to maintain indoor cooling.",
      "Sunken seating pit recessed into a perimeter infinity pool with underwater illumination.",
      "Custom aged bronze entrance doorway standing 4.2 meters high.",
    ],
    testimonial: {
      quote:
        "From ground-breaking to handover, Buildnest managed every single detail with zero compromise on quality. Unmatched engineering professionalism.",
      author: "Sanjay Agrawal",
      role: "Industrialist",
    },
  },

  "the-floating-penthouse": {
    id: "proj-4",
    slug: "the-floating-penthouse",
    title: "The Floating Penthouse",
    subtitle: "Ultra-luxury duplex interior featuring backlit onyx feature walls, champagne brass trims, and panoramic views.",
    category: "Bespoke Interior",
    categoryTag: "interiors",
    location: "Ramdaspeth, Nagpur",
    year: "2023",
    area: "4,500 sq ft",
    client: "Mehta Residence",
    duration: "7 Months",
    services: [
      "Interior Architecture",
      "Custom Furniture Design",
      "Lighting Design",
      "Architectural Acoustics",
    ],
    heroImage: "/images/project_4.webp",
    galleryImages: [
      "/images/project_4.webp",
      "/images/services/interior.webp",
      "/images/project_1.webp",
      "/images/project_3.webp",
    ],
    overview:
      "An ultra-luxury duplex penthouse designed with floating acoustic wall panels, customized warm champagne brass highlights, and open-plan living areas framed by floor-to-ceiling glass balconies overlooking Nagpur's skyline.",
    challenge:
      "Installing heavy floor-to-ceiling natural onyx stone features and custom brass partitions on the 14th floor without structural overloading on floor slabs.",
    solution:
      "Utilized lightweight honeycomb aluminum backings bonded with thin-cut Italian stone and precision steel anchor brackets.",
    keyFeatures: [
      "Bookmatched backlit Italian onyx feature walls",
      "Custom champagne brass room dividers and ceiling trims",
      "Integrated Bang & Olufsen architectural acoustic systems",
      "Custom leather joinery and walk-in wardrobe suites",
      "Motorized velvet blackout drapes and smart ambient lighting scenes",
    ],
    specs: [
      { label: "Feature Wall", value: "Backlit Honeycomb-Backed Bookmatched Onyx" },
      { label: "Metal Finishes", value: "PVD-Coated Satin Champagne Brass" },
      { label: "Flooring", value: "Armani Grey Italian Marble with Brass Inlays" },
      { label: "Acoustics", value: "Micro-Perforated Veneer Sound Panels" },
      { label: "Lighting", value: "DALI Dimmable Architectural LED System" },
    ],
    architecturalHighlights: [
      "Floating spiral staircase wrapped in liquid bronze finish and curved glass balustrade.",
      "Custom wine cellar with temperature-controlled glass box and ambient strip lighting.",
      "Master bedroom ceiling featuring dynamic starlight fiber optics.",
    ],
    testimonial: {
      quote:
        "Buildnest elevated our penthouse into an international luxury retreat. The craftsmanship in brass and marble is truly flawless.",
      author: "Vikram Mehta",
      role: "CEO, Mehta Enterprises",
    },
  },

  "minimalist-courtyard-estate": {
    id: "proj-5",
    slug: "minimalist-courtyard-estate",
    title: "Minimalist Courtyard Estate",
    subtitle: "A serene residence designed around a central water mirror feature, prioritizing passive cooling and natural daylighting.",
    category: "Bespoke Residence",
    categoryTag: "residential",
    location: "Dharampeth, Nagpur",
    year: "2024",
    area: "9,800 sq ft",
    client: "Kulkarni Family",
    duration: "14 Months",
    services: [
      "Architectural Design",
      "Civil Construction",
      "Landscape Architecture",
      "Interior Detailing",
    ],
    heroImage: "/images/project_2.webp",
    galleryImages: [
      "/images/project_2.webp",
      "/images/services/architecture.webp",
      "/images/project_3.webp",
      "/images/services/turnkey.webp",
    ],
    overview:
      "A minimalist luxury estate crafted around a central private courtyard. Designed to maximize privacy while inviting light and air, the residence uses deep overhangs, vertical timber louvers, and a reflecting pool to regulate internal microclimate.",
    challenge:
      "Achieving high thermal performance and zero privacy compromise on a dense urban plot in Dharampeth while maintaining open spatial flow.",
    solution:
      "Created an inward-facing perimeter shell with solid external stone cladding and fully glazed inner courtyard facades that flood the house with indirect sunlight.",
    keyFeatures: [
      "Central reflecting pool with natural stone air-cooling cascades",
      "Deep louvered verandas providing passive sun protection",
      "Double-height living pavilion with exposed timber truss ceilings",
      "Rainwater harvesting & graywater recycling system for gardens",
      "Custom minimalist aluminum sliding window systems",
    ],
    specs: [
      { label: "Architectural Style", value: "Minimalist Tropical Courtyard Residence" },
      { label: "Structure", value: "R.C.C. Frame with Aerated Lightweight Blocks" },
      { label: "Facade Stone", value: "Natural Slate & Honed Teakwood Sandstone" },
      { label: "Glazing", value: "Double Low-E Argon-Filled Double Glass" },
      { label: "Landscaping", value: "Native Indian Flora with Automated Drip Irrigation" },
    ],
    architecturalHighlights: [
      "Inner courtyard acting as a thermal chimney to draw heat out of living rooms naturally.",
      "Custom floating timber deck hovering over the reflecting water surface.",
      "Seamless hidden doors integrated flush into acoustic wooden wall paneling.",
    ],
    testimonial: {
      quote:
        "Buildnest captured our vision for a quiet, light-filled haven. The courtyard layout keeps our home naturally cool even during hot summer months.",
      author: "Prakash Kulkarni",
      role: "Managing Partner, Kulkarni Group",
    },
  },

  "corporate-innovation-hq": {
    id: "proj-6",
    slug: "corporate-innovation-hq",
    title: "Corporate Innovation HQ",
    subtitle: "Next-gen tech campus featuring flexible collaborative pods, acoustic baffle ceilings, and LEED Gold energy efficiency.",
    category: "Commercial Architecture",
    categoryTag: "commercial",
    location: "MIHAN SEZ, Nagpur",
    year: "2024",
    area: "35,000 sq ft",
    client: "Apex Global Technologies",
    duration: "18 Months",
    services: [
      "Commercial Architecture",
      "Turnkey Construction",
      "Interior Workspace Engineering",
      "Liaisoning & Compliance",
    ],
    heroImage: "/images/project_1.webp",
    galleryImages: [
      "/images/project_1.webp",
      "/images/services/project_management.webp",
      "/images/services/liaisoning.webp",
      "/images/project_4.webp",
    ],
    overview:
      "A state-of-the-art tech campus engineered to foster collaboration and innovation. The 35,000 sq ft headquarters integrates open-plan workspaces, acoustic breakout pods, high-efficiency mechanical systems, and solar shading louvers.",
    challenge:
      "Building a high-capacity commercial structure within tight SEZ compliance timelines while meeting strict international acoustic and energy benchmarks.",
    solution:
      "Adopted modular prefabricated steel framing and unitized wall panel construction, accelerating structural completion by 25% with zero safety incidents.",
    keyFeatures: [
      "Unitized modular facade system with integrated solar louvers",
      "Open-plan collaborative zones with PET felt acoustic baffles",
      "100kW rooftop solar power generation grid",
      "Central command hub & multi-purpose auditorium",
      "Touchless biometric access control and smart building management system",
    ],
    specs: [
      { label: "Building Class", value: "Commercial Grade A Tech Park Facility" },
      { label: "Structural Framing", value: "High-Span Prefabricated Steel & RCC Core" },
      { label: "Acoustics", value: "NRC 0.85 High-Performance Baffle Ceiling" },
      { label: "Energy Standard", value: "LEED Gold Certified & IGBC Green Building" },
      { label: "BMS System", value: "Full Automated HVAC, Lighting & Power Control" },
    ],
    architecturalHighlights: [
      "Double-height breakout amphitheater encouraging cross-team synergy.",
      "Perforated copper-tone metal fins creating an iconic dynamic facade along the highway.",
      "Rooftop green meadow deck with solar pergola workspaces.",
    ],
    testimonial: {
      quote:
        "Buildnest executed our 35,000 sq ft headquarters flawlessly ahead of schedule. Their compliance team handled all SEZ clearances seamlessly.",
      author: "Aditya Deshmukh",
      role: "VP Operations, Apex Global Tech",
    },
  },
};

export const getAllProjects = (): ProjectData[] => {
  return Object.values(PROJECTS_DATA);
};

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return PROJECTS_DATA[slug];
};

export const getRelatedProjects = (currentSlug: string, count: number = 3): ProjectData[] => {
  const currentProject = getProjectBySlug(currentSlug);
  const all = getAllProjects().filter((p) => p.slug !== currentSlug);
  
  if (!currentProject) return all.slice(0, count);

  const sameCategory = all.filter((p) => p.categoryTag === currentProject.categoryTag);
  const otherCategories = all.filter((p) => p.categoryTag !== currentProject.categoryTag);

  return [...sameCategory, ...otherCategories].slice(0, count);
};

export const getNextAndPrevProjects = (
  currentSlug: string
): { next?: ProjectData; prev?: ProjectData } => {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) return {};

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
};
