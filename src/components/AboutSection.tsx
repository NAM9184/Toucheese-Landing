"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="pt-32 container flex flex-col md:flex-row justify-between gap-4"
    >
      <div className="hero-text flex flex-col md:gap-2">
        <p className="text-xl md:text-4xl font-semibold ">원하는 지역!</p>
        <p className="text-lg md:text-4xl font-semibold">합리적인 가격!</p>
        <p className="text-lg md:text-4xl font-bold  text-yellow-400">
          원하는 조건에 맞는 맟춤 필터링!
        </p>
      </div>

      <div className="">
        <div className="hero-image relative w-80 md:w-96 h-[400px] md:h-[600px]">
          <Image
            src="/section2.png"
            alt="Hero Image"
            unoptimized
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
