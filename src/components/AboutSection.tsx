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
      className="container flex flex-col md:flex-row justify-center gap-4"
    >
      <div className="flex flex-col md:gap-4">
        <p className="text-xl md:text-4xl font-bold">가까운 지역! </p>
        <p className="text-xl md:text-4xl">합리적인 가격!</p>
        <p className="text-xl md:text-4xl font-bold">
          비교해보면서 찾아보아요!
        </p>
      </div>

      <div className="md:ml-auto mx-auto z-50">
        <div className="md:ml-auto hero-image relative w-80 md:w-96 h-[400px] md:h-[600px]">
          <Image
            src="/section2.png"
            alt="Hero Image"
            unoptimized
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
