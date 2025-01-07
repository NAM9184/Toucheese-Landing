"use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  // const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       ".hero-text",
  //       { opacity: 0, y: 50 },
  //       { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
  //     );
  //     gsap.fromTo(
  //       ".hero-image",
  //       { opacity: 0, scale: 0.8 },
  //       { opacity: 1, scale: 1, duration: 1.5, delay: 0.5 }
  //     );
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      // ref={sectionRef}
      className="relative hero-background h-screen flex justify-center"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/cheese.svg')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
          opacity: 0.2,
        }}
      />

      <div className="relative z-10 max-w-7xl w-full flex py-48">
        <div className="flex flex-col ">
          <div className="hero-text">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              스튜디오 고민은 그만!
            </h1>
            <p className="text-xl text-gray-600">
              여러분이 원하는 스튜디오를 한 눈에 비교하고 살펴보세요!
            </p>
          </div>

          <div className="mt-auto flex gap-4">
            <Link
              className="w-48 text-center px-4 py-2 rounded-full bg-white shadow-sm"
              href="/"
            >
              구글플레이스토어
            </Link>
            <Link
              className="w-48 text-center px-4 py-2 rounded-full bg-white shadow-sm"
              href="/"
            >
              앱스토어
            </Link>
          </div>
        </div>

        <div className="relative w-full h-[500px] md:w-1/2 md:h-[600px] z-50 hero-image ml-auto">
          <Image
            src="/hero.png"
            alt="Hero Image"
            unoptimized
            fill
            className="object-cover duration-300 hover:scale-105 overflow-visible"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
