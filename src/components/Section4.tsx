"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
const handleAlert = () => {
  alert("곧 출시 예정이에요!");
};

gsap.registerPlugin(ScrollTrigger);

export default function Section4() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      ".section4",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".section4",
          start: "top center",
          end: "bottom center",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="section4 pt-10 relative m-4">
      <div className="mx-auto flex md:flex-row flex-col gap-4 w-full md:justify-evenly bg-yellow-400 rounded-lg p-4 items-center">
        {/* 텍스트 */}
        <div ref={textRef} className="flex flex-col md:gap-4 ">
          <p className="text-xl md:text-4xl font-semibold">
            현명한 스튜디오 매칭솔루션!
          </p>
          <p className="text-lg md:text-4xl font-semibold ">
            터치즈와 함께해요!
          </p>
          <div className="flex mt-auto">
            <Link
              href="https://play.google.com/store/apps/details?id=com.toucheese.app&pcampaignid=web_share"
              className="relative w-36 sm:w-48 h-12 sm:h-14"
            >
              <Image
                src="/download/google_badge.png"
                alt="Google Play Badge"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 50vw, 33vw"
                quality={75}
              />
            </Link>
            <Link
              href="/"
              className="relative w-40 sm:w-48 h-12 sm:h-14"
              onClick={handleAlert}
            >
              <Image
                src="/download/apple_badge.png"
                alt="App Store Badge"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 50vw, 33vw"
                quality={75}
              />
            </Link>
          </div>
        </div>
        <div
          ref={imageContainerRef}
          className="hero-image relative h-[400px] w-96 flex  items-center"
        >
          <Image
            src="/skew.png"
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
