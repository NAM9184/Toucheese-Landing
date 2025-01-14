"use client";

import Link from "next/link";
import Image from "next/image";

const handleAlert = () => {
  alert("곧 출시 예정이에요!");
};

export default function HeroSection() {
  return (
    <section className="relative hero-background pt-32 pb-6 min-h-screen">
      <div className="relative px-2 md:px-4 z-10 container flex flex-col md:flex-row md:justify-between items-center md:items-stretch gap-8">
        <div className="flex flex-col items-center md:items-stretch text-center md:text-left gap-4">
          <div className="hero-text flex flex-col md:gap-2">
            <p className="text-xl md:text-4xl font-bold text-yellow-400">
              스튜디오 고민은 그만!
            </p>
            <p className="text-lg md:text-4xl font-semibold">
              여러분이 원하는 스튜디오를
            </p>
            <p className="text-lg md:text-4xl font-semibold">
              한 눈에 비교하고 살펴보세요!
            </p>
          </div>

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

        <div className="relative hero-image w-80 sm:w-96 h-96 sm:h-[600px] z-50">
          <Image
            src="/hero.png"
            alt="Hero Image"
            unoptimized
            fill
            className="object-contain md:object-cover overflow-visible"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            quality={75}
          />
        </div>
      </div>
    </section>
  );
}
