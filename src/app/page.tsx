"use client";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LinkedInBanner } from "@/components/sections/LinkedInBanner";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ToolsSection } from "@/components/sections/ToolsSection";
import { CVSection } from "@/components/sections/CVSection";
import { useState, useEffect } from "react";


export default function Home() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#111010] text-[#0D0D0B] dark:text-[#EDE9E3] font-sans transition-colors duration-300">
      <Navbar dark={dark} onToggleDark={toggleDark} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ToolsSection />
      <LinkedInBanner />
      <CVSection />
      <ContactSection />
      <Footer />
    </div>
  );
}