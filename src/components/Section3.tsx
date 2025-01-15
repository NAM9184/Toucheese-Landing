"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && textRef.current && imageContainerRef.current) {
      const textChildren = textRef.current.children;
      const image = imageContainerRef.current;

      // 텍스트 순차적 등장 및 고정
      gsap.fromTo(
        textChildren,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.5, // 각 텍스트 순차적으로 등장
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "top+=50%", // 텍스트 고정 영역
            pin: true, // 텍스트 고정
            scrub: true, // 스크롤과 동기화
          },
        }
      );

      // 텍스트 서서히 사라짐 (이미지 등장 전)
      gsap.to(textChildren, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top+=50%",
          end: "top+=10%",
          scrub: true,
        },
      });

      // 이미지 위로 이동
      gsap.fromTo(
        image,
        { y: "300%" }, // 이미지 초기 위치 (아래)
        {
          y: "-50%", // 이미지 최종 위치 (위로 이동)
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top", // 섹션 시작
            end: "+=150%", // 이미지가 스크롤하는 길이
            scrub: true, // 스크롤에 따라 이동
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative pt-32 container h-[150vh]">
      <div className="mx-auto w-1/2">
        {/* 텍스트 */}
        <div
          ref={textRef}
          className="hero-text flex flex-col md:gap-4 top-32 text-center"
        >
          <p className="text-xl md:text-4xl font-semibold">원하는 촬영을</p>
          <p className="text-lg md:text-4xl font-semibold ">원하는 시간에</p>
          <p className="text-lg md:text-4xl font-bold">옵션도 추가해서!</p>
        </div>

        {/* 이미지 */}
        <div
          ref={imageContainerRef}
          className="hero-image mt-10 relative w-full h-[400px] md:h-[1200px] flex justify-center items-center"
        >
          <Image
            src="/section3.png"
            alt="Hero Image"
            unoptimized
            fill
            className="object-contain border rounded-2xl"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
