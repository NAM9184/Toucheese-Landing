"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: sectionRef.current }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex justify-center pt-48 max-w-7xl mx-auto"
    >
      <div className="flex flex-col gap-4">
        <p className="text-4xl font-bold">가까운 지역! </p>
        <p className="text-4xl">합리적인 가격!</p>
        <p className="text-4xl font-bold">비교해보면서 찾아보아요!</p>
      </div>

      <div className="relative  md:w-1/2 z-50 ">
        <Image
          src="/section2.png"
          alt="Hero Image"
          unoptimized
          fill
          className="object-contain duration-300 overflow-visible"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
        />
      </div>
    </section>
  );
}
