"use client";
import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BentoGrid } from "@/components/BentoGrid";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ProjectIntake } from "@/components/ProjectIntake";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingNav } from "@/components/FloatingNav";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  const [showIntake, setShowIntake] = useState(false);

  useEffect(() => {
    // Add meta description and favicon if needed
    let metaDescription = document.querySelector("meta[name='description']");
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Design. Code. Deploy — websites and apps that convert, crafted for Indian founders and global startups."
    );
  }, []);

  if (showIntake) {
    return <ProjectIntake onClose={() => setShowIntake(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#0E0E0E] cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <FloatingNav />
      <HeroSection onStartProject={() => setShowIntake(true)} />
      <BentoGrid />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <FinalCTA onStartProject={() => setShowIntake(true)} />
      <Footer />
    </div>
  );
}
