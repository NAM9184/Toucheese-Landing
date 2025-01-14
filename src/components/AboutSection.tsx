"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && imageContainerRef.current && textRef.current) {
      const textChildren = textRef.current.children;
      const images = imageContainerRef.current.children;

      gsap.fromTo(
        textChildren,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 75%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        images[0],
        { opacity: 0, y: 50 }, // 초기 상태
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%", // 섹션 진입 시점
            end: "top 75%",
            once: true, // 한 번만 실행
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 container flex flex-col md:flex-row justify-between gap-4" // 섹션 높이 설정
    >
      {/* 텍스트 */}
      <div
        ref={textRef}
        className="hero-text flex flex-col md:gap-4 sticky top-32"
      >
        <p className="text-xl md:text-4xl font-semibold">원하는 지역!</p>
        <p className="text-lg md:text-4xl font-semibold">합리적인 가격!</p>
        <p className="text-lg md:text-4xl font-bold text-yellow-400">
          원하는 조건에 맞는 맞춤 필터링!
        </p>
      </div>

      {/* 이미지 컨테이너 */}
      <div
        ref={imageContainerRef}
        className="hero-image relative w-80 md:w-96 h-[400px] md:h-[600px] flex flex-col"
      >
        <Image
          src="/section2.png"
          alt="Hero Image 1"
          unoptimized
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
        />
      </div>
    </section>
  );
}
