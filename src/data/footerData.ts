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
    href: "https://wa.me/919823000000?text=Hello%20Buildnest%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20new%20project.",
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
      { name: "Architectural Design", href: "#services" },
      { name: "Interior Design", href: "#services" },
      { name: "Structural Design", href: "#services" },
      { name: "3D Elevation", href: "#services" },
      { name: "Landscape Design", href: "#services" },
      { name: "Vaastu Shastra Consultation", href: "#services" },
      { name: "Green Building & LEED Design", href: "#services" },
      { name: "Structural Stability Certification", href: "#services" },
      { name: "Custom Villa Layouts", href: "#services" },
    ],
  },
  {
    title: "Construction & PMC",
    items: [
      { name: "Residential Construction", href: "#services" },
      { name: "Commercial Construction", href: "#services" },
      { name: "Turnkey Construction", href: "#services" },
      { name: "Renovation", href: "#services" },
      { name: "PMC", href: "#services" },
      { name: "Project Consultation", href: "#services" },
      { name: "Site Supervision", href: "#services" },
      { name: "Warehouse & Industrial Construction", href: "#services" },
      { name: "Duplex Development", href: "#services" },
      { name: "Joint Ventures", href: "#services" },
    ],
  },
];

export const ARCHITECTS_NEAR_YOU: LinkItem[] = [
  { name: "Architect in Nagpur", href: "#" },
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
  { name: "House Construction in Nagpur", href: "#" },
  { name: "Villa Construction in Nagpur", href: "#" },
  { name: "Commercial Construction in Nagpur", href: "#" },
  { name: "Luxury Home Construction", href: "#" },
  { name: "Turnkey Construction", href: "#" },
  { name: "Construction Company in Nagpur", href: "#" },
  { name: "Civil Contractor in Nagpur", href: "#" },
  { name: "Building Contractor", href: "#" },
  { name: "Industrial Construction", href: "#" },
  { name: "Apartment Construction", href: "#" },
];

export const INTERIOR_SERVICES: LinkItem[] = [
  { name: "Interior Designer in Nagpur", href: "#" },
  { name: "Luxury Interior Designer", href: "#" },
  { name: "Office Interior", href: "#" },
  { name: "Restaurant Interior", href: "#" },
  { name: "Hotel Interior", href: "#" },
  { name: "Clinic Interior", href: "#" },
  { name: "Hospital Interior", href: "#" },
  { name: "Modular Kitchen", href: "#" },
  { name: "Wardrobe Design", href: "#" },
  { name: "False Ceiling", href: "#" },
  { name: "Furniture Design", href: "#" },
  { name: "Retail Showroom Fit-Outs", href: "#" },
  { name: "Smart Home Integration", href: "#" },
  { name: "Luxury Bedroom Suites", href: "#" },
];

export const POPULAR_AREAS: LinkItem[] = [
  { name: "Architect in Dharampeth", href: "#" },
  { name: "Architect in Civil Lines", href: "#" },
  { name: "Architect in Pratap Nagar", href: "#" },
  { name: "Architect in Manish Nagar", href: "#" },
  { name: "Architect in Besa", href: "#" },
  { name: "Architect in Wardha Road", href: "#" },
  { name: "Architect in Narendra Nagar", href: "#" },
  { name: "Architect in Sadar", href: "#" },
  { name: "Architect in Hingna", href: "#" },
  { name: "Architect in Mihan", href: "#" },
  { name: "Architect in Trimurti Nagar", href: "#" },
  { name: "Architect in Ramdaspeth", href: "#" },
  { name: "Architect in Shankar Nagar", href: "#" },
  { name: "Architect in Jaripatka", href: "#" },
  { name: "Architect in Kamptee Road", href: "#" },
  { name: "Architect in Seminary Hills", href: "#" },
  { name: "Architect in Bajaj Nagar", href: "#" },
  { name: "Architect in Wadi", href: "#" },
  { name: "Architect in Koradi", href: "#" },
  { name: "Architect in Beltarodi", href: "#" },
  { name: "Architect in Hudkeshwar", href: "#" },
  { name: "Architect in Nandanvan", href: "#" },
  { name: "Architect in Medical Square", href: "#" },
  { name: "Architect in Sitabuldi", href: "#" },
  { name: "Architect in Lakadganj", href: "#" },
  { name: "Architect in Mahal", href: "#" },
  { name: "Architect in Reshimbagh", href: "#" },
  { name: "Architect in Khamla", href: "#" },
  { name: "Architect in Pipla", href: "#" },
  { name: "Architect in Omkar Nagar", href: "#" },
  { name: "Architect in Wardhaman Nagar", href: "#" },
  { name: "Architect in Gandhibagh", href: "#" },
  { name: "Architect in Ganeshpeth", href: "#" },
  { name: "Architect in Telephone Exchange Square", href: "#" },
  { name: "Architect in Somalwada", href: "#" },
  { name: "Architect in Sonegaon", href: "#" },
  { name: "Architect in Jaitala", href: "#" },
  { name: "Architect in Chinchbhuvan", href: "#" },
  { name: "Architect in Manewada", href: "#" },
  { name: "Architect in Wanadongri", href: "#" },
  { name: "Architect in Gittikhadan", href: "#" },
  { name: "Architect in Friends Colony", href: "#" },
  { name: "Architect in Ravi Nagar", href: "#" },
  { name: "Architect in Gokulpeth", href: "#" },
  { name: "Architect in Wathoda", href: "#" },
  { name: "Architect in Dighori", href: "#" },
];

export const POPULAR_SEARCHES: LinkItem[] = [
  { name: "Construction Company Near Me", href: "#" },
  { name: "Best Architect Near Me", href: "#" },
  { name: "Interior Designer Near Me", href: "#" },
  { name: "Luxury Architects", href: "#" },
  { name: "Modern Home Designers", href: "#" },
  { name: "Bungalow Architects", href: "#" },
  { name: "Villa Designers", href: "#" },
  { name: "Commercial Architects", href: "#" },
  { name: "Office Interior Designers", href: "#" },
  { name: "Turnkey Interior Company", href: "#" },
  { name: "Premium Construction Company", href: "#" },
];
