import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import WhyBuildnest from "@/components/WhyBuildnest";
import QualityPromise from "@/components/QualityPromise";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Premium Navigation Header */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Fullscreen Hero */}
        <Hero />

        {/* 01 / Brand Introduction */}
        <BrandIntro />

        {/* 02 / Services */}
        <Services />

        {/* 03 / Featured Projects */}
        <Projects />

        {/* 04 / GSAP Scroll horizontal drawing Process timeline */}
        <Process />

        {/* 05 / Why Buildnest */}
        <WhyBuildnest />

        {/* 06 / Quality Promise */}
        <QualityPromise />

        {/* 07 / Testimonials quote slider */}
        <Testimonials />

        {/* 08 / Dark luxury contact CTA block */}
        <CTA />
      </main>

      {/* 12-Column Footer */}
      <Footer />
    </>
  );
}
