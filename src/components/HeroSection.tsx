"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative hero-background py-32">
      <div className="container relative z-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="hero-text">
            <h1 className="text-xl md:text-4xl font-bold text-yellow-400 mb-4">
              스튜디오 고민은 그만!
            </h1>
            <p className="text-lg md:text-2xl text-gray-600">
              여러분이 원하는 스튜디오를 한 눈에 비교하고 살펴보세요!
            </p>
          </div>

          <div className="flex gap-4 mt-8">
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
            <Link href="/" className="relative w-40 sm:w-48 h-12 sm:h-14">
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

        {/* 이미지 영역 */}
        <div className="hero-image relative w-72 sm:w-96 h-96 sm:h-[600px] z-50">
          <Image
            src="/hero.png"
            alt="Hero Image"
            unoptimized
            fill
            className="object-cover overflow-visible"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>

      {/* 배경 이미지 */}
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
    </section>
  );
}
