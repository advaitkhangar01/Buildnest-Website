import React from "react";

export interface LinkItem {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  hoverBg: string;
  color: string;
  iconType: "instagram" | "facebook" | "linkedin" | "whatsapp" | "youtube" | "google";
}

export const SOCIAL_LINKS: SocialLink[] = [
  { 
    name: "Instagram", 
    iconType: "instagram", 
    href: "https://www.instagram.com/buildnest_nagpur/",
    hoverBg: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(238,42,123,0.3)]",
    color: "text-[#e1306c]"
  },
  { 
    name: "Facebook", 
    iconType: "facebook", 
    href: "https://www.facebook.com/profile.php?id=61591824793874",
    hoverBg: "hover:bg-[#1877F2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(24,119,242,0.3)]",
    color: "text-[#1877F2]"
  },
  { 
    name: "LinkedIn", 
    iconType: "linkedin", 
    href: "https://www.linkedin.com/in/rohan-shahoo-880068423/",
    hoverBg: "hover:bg-[#0A66C2] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(10,102,194,0.3)]",
    color: "text-[#0A66C2]"
  },
  { 
    name: "WhatsApp", 
    iconType: "whatsapp", 
    href: "https://wa.me/919424708016?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project.",
    hoverBg: "hover:bg-[#25D366] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(37,211,102,0.3)]",
    color: "text-[#25D366]"
  },
  { 
    name: "YouTube", 
    iconType: "youtube", 
    href: "https://youtube.com",
    hoverBg: "hover:bg-[#FF0000] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]",
    color: "text-[#FF0000]"
  },
  { 
    name: "Google Business", 
    iconType: "google", 
    href: "https://google.com",
    hoverBg: "hover:bg-[#4285F4] hover:text-white hover:border-transparent hover:shadow-[0_0_15px_rgba(66,133,244,0.3)]",
    color: "text-[#4285F4]"
  },
];

export const QUICK_LINKS: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Testimonials", href: "/#testimonials" },
];

export const SERVICE_GROUPS = [
  {
    title: "Design & Consultancy",
    items: [
      { name: "Architectural Design", href: "/architecture" },
      { name: "Interior Design", href: "/interior-design" },
      { name: "Structural Design", href: "/architecture" },
      { name: "3D Elevation", href: "/architecture" },
      { name: "Landscape Design", href: "/architecture" },
      { name: "Vaastu Shastra Consultation", href: "/architecture" },
      { name: "Green Building & LEED Design", href: "/architecture" },
      { name: "Structural Stability Certification", href: "/services" },
      { name: "Custom Villa Layouts", href: "/villa-design" },
    ],
  },
  {
    title: "Construction & PMC",
    items: [
      { name: "Residential Construction", href: "/turnkey-construction" },
      { name: "Commercial Construction", href: "/turnkey-construction" },
      { name: "Turnkey Construction", href: "/turnkey-construction" },
      { name: "Renovation", href: "/turnkey-construction" },
      { name: "PMC", href: "/services" },
      { name: "Project Consultation", href: "/services" },
      { name: "Site Supervision", href: "/services" },
      { name: "Warehouse & Industrial Construction", href: "/turnkey-construction" },
      { name: "Duplex Development", href: "/villa-design" },
      { name: "Joint Ventures", href: "/services" },
    ],
  },
];

export const ARCHITECTS_NEAR_YOU: LinkItem[] = [
  { name: "Architect in Nagpur", href: "/architects-in-nagpur" },
  { name: "Architect in Wardha", href: "#" },
  { name: "Architect in Chandrapur", href: "#" },
  { name: "Architect in Bhandara", href: "#" },
  { name: "Architect in Gondia", href: "#" },
  { name: "Architect in Amravati", href: "#" },
  { name: "Architect in Yavatmal", href: "#" },
  { name: "Architect in Akola", href: "#" },
  { name: "Architect in Chhindwara", href: "#" },
  { name: "Architect in Betul", href: "#" },
];

export const CONSTRUCTION_SERVICES: LinkItem[] = [
  { name: "House Construction in Nagpur", href: "/turnkey-construction" },
  { name: "Villa Construction in Nagpur", href: "/villa-design" },
  { name: "Commercial Construction in Nagpur", href: "/turnkey-construction" },
  { name: "Luxury Home Construction", href: "/villa-design" },
  { name: "Turnkey Construction", href: "/turnkey-construction" },
  { name: "Construction Company in Nagpur", href: "/turnkey-construction" },
  { name: "Civil Contractor in Nagpur", href: "/turnkey-construction" },
  { name: "Building Contractor", href: "/turnkey-construction" },
  { name: "Industrial Construction", href: "/turnkey-construction" },
  { name: "Apartment Construction", href: "/turnkey-construction" },
];

export const INTERIOR_SERVICES: LinkItem[] = [
  { name: "Interior Designer in Nagpur", href: "/interior-design" },
  { name: "Luxury Interior Designer", href: "/interior-design" },
  { name: "Office Interior", href: "/interior-design" },
  { name: "Restaurant Interior", href: "/interior-design" },
  { name: "Hotel Interior", href: "/interior-design" },
  { name: "Clinic Interior", href: "/interior-design" },
  { name: "Hospital Interior", href: "/interior-design" },
  { name: "Modular Kitchen", href: "/interior-design" },
  { name: "Wardrobe Design", href: "/interior-design" },
  { name: "False Ceiling", href: "/interior-design" },
  { name: "Furniture Design", href: "/interior-design" },
  { name: "Retail Showroom Fit-Outs", href: "/interior-design" },
  { name: "Smart Home Integration", href: "/interior-design" },
  { name: "Luxury Bedroom Suites", href: "/interior-design" },
];

export const POPULAR_AREAS: LinkItem[] = [
  { name: "Architect in Dharampeth", href: "/architects-in-nagpur" },
  { name: "Architect in Civil Lines", href: "/architects-in-nagpur" },
  { name: "Architect in Pratap Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Manish Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Besa", href: "/architects-in-nagpur" },
  { name: "Architect in Wardha Road", href: "/architects-in-nagpur" },
  { name: "Architect in Narendra Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Sadar", href: "/architects-in-nagpur" },
  { name: "Architect in Hingna", href: "/architects-in-nagpur" },
  { name: "Architect in Mihan", href: "/architects-in-nagpur" },
  { name: "Architect in Trimurti Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Ramdaspeth", href: "/architects-in-nagpur" },
  { name: "Architect in Shankar Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Jaripatka", href: "/architects-in-nagpur" },
  { name: "Architect in Kamptee Road", href: "/architects-in-nagpur" },
  { name: "Architect in Seminary Hills", href: "/architects-in-nagpur" },
  { name: "Architect in Bajaj Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Wadi", href: "/architects-in-nagpur" },
  { name: "Architect in Koradi", href: "/architects-in-nagpur" },
  { name: "Architect in Beltarodi", href: "/architects-in-nagpur" },
  { name: "Architect in Hudkeshwar", href: "/architects-in-nagpur" },
  { name: "Architect in Nandanvan", href: "/architects-in-nagpur" },
  { name: "Architect in Medical Square", href: "/architects-in-nagpur" },
  { name: "Architect in Sitabuldi", href: "/architects-in-nagpur" },
  { name: "Architect in Lakadganj", href: "/architects-in-nagpur" },
  { name: "Architect in Mahal", href: "/architects-in-nagpur" },
  { name: "Architect in Reshimbagh", href: "/architects-in-nagpur" },
  { name: "Architect in Khamla", href: "/architects-in-nagpur" },
  { name: "Architect in Pipla", href: "/architects-in-nagpur" },
  { name: "Architect in Omkar Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Wardhaman Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Gandhibagh", href: "/architects-in-nagpur" },
  { name: "Architect in Ganeshpeth", href: "/architects-in-nagpur" },
  { name: "Architect in Telephone Exchange Square", href: "/architects-in-nagpur" },
  { name: "Architect in Somalwada", href: "/architects-in-nagpur" },
  { name: "Architect in Sonegaon", href: "/architects-in-nagpur" },
  { name: "Architect in Jaitala", href: "/architects-in-nagpur" },
  { name: "Architect in Chinchbhuvan", href: "/architects-in-nagpur" },
  { name: "Architect in Manewada", href: "/architects-in-nagpur" },
  { name: "Architect in Wanadongri", href: "/architects-in-nagpur" },
  { name: "Architect in Gittikhadan", href: "/architects-in-nagpur" },
  { name: "Architect in Friends Colony", href: "/architects-in-nagpur" },
  { name: "Architect in Ravi Nagar", href: "/architects-in-nagpur" },
  { name: "Architect in Gokulpeth", href: "/architects-in-nagpur" },
  { name: "Architect in Wathoda", href: "/architects-in-nagpur" },
  { name: "Architect in Dighori", href: "/architects-in-nagpur" },
];

export const POPULAR_SEARCHES: LinkItem[] = [
  { name: "Construction Company Near Me", href: "/turnkey-construction" },
  { name: "Best Architect Near Me", href: "/architects-in-nagpur" },
  { name: "Interior Designer Near Me", href: "/interior-design" },
  { name: "Luxury Architects", href: "/villa-design" },
  { name: "Modern Home Designers", href: "/villa-design" },
  { name: "Bungalow Architects", href: "/villa-design" },
  { name: "Villa Designers", href: "/villa-design" },
  { name: "Commercial Architects", href: "/architecture" },
  { name: "Office Interior Designers", href: "/interior-design" },
  { name: "Turnkey Interior Company", href: "/interior-design" },
  { name: "Premium Construction Company", href: "/turnkey-construction" },
];
