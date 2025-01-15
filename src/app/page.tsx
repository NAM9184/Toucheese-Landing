"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import { useEffect } from "react";
import gsap from "gsap";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".hero-text",
            start: "top center",
          },
        }
      );
      gsap.fromTo(
        ".hero-image",
        { opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.5,
          scrollTrigger: {
            trigger: ".hero-image",
            start: "top center",
          },
        }
      );

      gsap.fromTo(
        ".about-section",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-section",
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}
