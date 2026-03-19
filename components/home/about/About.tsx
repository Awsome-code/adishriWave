import Image from "next/image";
import React from "react";

export default function About() {
  return (
    // <section id="about" className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
    //   <div className="flex flex-col lg:flex-row items-center min-h-80 py-2">
    //     {/* Left Content  */}
    //     <div className="w-full lg:w-1/2 text-center lg:text-left">
    //       <h1
    //         className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl
    //           font-bold text-[#0a85bc]
    //           tracking-wide"
    //       >
    //         The future of designing starts here
    //       </h1>
    //       <p className="py-4">
    //         Stop wasting time and money designing and managing a wabsite that
    //         doesn&lsquo;t get result. Happiness guranteed!
    //       </p>
    //       <button className="text-center items-center text-gray-50 px-4 py-2 bg-[#0a85bc] rounded-lg">
    //         Learn More
    //       </button>
    //     </div>

    //     {/* Right   */}
    //     <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
    //     <div className="relative w-[280px] sm:w-[350px] md:w-[450px] lg:w-[520px] h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px]">
    //       <Image
    //         src="/images/about-img.svg"
    //         alt="about-img"
    //         width={90}
    //         height={60}
    //         className="w-full h-auto object-contain"
    //         />
    //         </div>
    //     </div>
    //   </div>
    // </section>

    <section id="about" className="bg-gray-50 py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0a85bc] leading-tight">
              The Future of Social Media Growth <br />
              starts here
            </h1>

            <p className="mt-6 text-base lg:text-lg text-gray-700 max-w-lg">
              Stop wasting time and budget on marketing that doesn’t deliver. At
              AdishreWave, we create powerful social media strategies, engaging
              content, and high-performing campaigns that help brands grow
              faster and connect with the right audience.
            </p>

            {/* Bullet Points */}
            <div className="mt-8 text-base lg:text-lg space-y-4">
              {[
                "We focus on real results — more reach, better engagement, and stronger brand presence.",
                
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-600">{text}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button className="mt-10 bg-[#0a85bc] hover:bg-[#033767] text-white px-8 py-3 rounded-lg font-medium transition-all">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[350px] sm:h-[420px] lg:h-[500px]">
            <Image
              src="/images/about-img.svg"
              alt="Design Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
