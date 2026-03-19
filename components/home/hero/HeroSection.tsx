"use client";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[url(/images/hero-bg.svg)] h-screen bg-cover bg-center">
      {/* <div className=" overflow-hidden bg-[url(/images/hero-bg.svg)] h-screen bg-cover bg-center ">
      Herosection
    </div> */}

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh] py-12">
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1
              className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-bold text-[#2d3142]
              leading-tight
            "
            >
              Ready to Grow - <br className="hidden sm:block" />
              Your Brand on Social Media
            </h1>

            <p
              className="
              mt-6
              text-sm sm:text-base md:text-lg
              text-gray-600
              max-w-xl mx-auto lg:mx-0
            "
            >
              We help brands build powerful online presence through strategic
              content, performance marketing, and result-driven social media
              campaigns.
            </p>

            <div className="mt-8">
              <button
                className="
                px-6 sm:px-8 py-3
                rounded-full
                bg-[#0a85bc] hover:bg-[#033767]
                text-white font-medium
                transition
              "
              >
                Get Started →
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[520px] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px]">
              <Image
                src="/images/hero-img.svg"
                alt="hero image"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
