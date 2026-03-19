"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Pricing = {
  plan: string;
  title: string;
  price: string;
  features: string[];
};

const pricingData: Pricing[] = [
  {
    plan: "Basic Design",
    title: "Web Design",
    price: "$ 29.00",
    features: [
      "Carefully crafted components",
      "Amazing page examples",
      "Super friendly support team",
      "Awesome Support",
    ],
  },
  {
    plan: "Standard Design",
    title: "Web Development",
    price: "$ 89.00",
    features: [
      "Carefully crafted components",
      "Amazing page examples",
      "Super friendly support team",
      "Awesome Support",
    ],
  },
  {
    plan: "Premium Design",
    title: "App Development",
    price: "$ 149.00",
    features: [
      "Carefully crafted components",
      "Amazing page examples",
      "Priority support team",
      "Premium Support",
    ],
  },
  {
    plan: "Enterprise",
    title: "Full Solution",
    price: "$ 299.00",
    features: [
      "All Premium Components",
      "Unlimited pages",
      "Dedicated support team",
      "24/7 Support",
    ],
  },
];

export default function PricingSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 lg:py-36 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className=" ">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a85bc] ">
              Pricing Plan
            </h2>

            <p className="text-gray-500 mt-4 max-w-lg">
              Stop wasting time and money designing and managing a website that
              doesn’t get results. Happiness guaranteed!Stop wasting time and
              money designing and managing a website that doesn’t get results.
              Happiness guaranteed!
            </p>

            {/* Buttons */}
            <div className="max-w-lg ">
              <div className="flex justify-center lg:justify-end gap-4 mt-10">
                <button
                  onClick={scrollLeft}
                  className="w-12 h-12 rounded-full bg-[#0a85bc] shadow hover:bg-[#033767] flex items-center justify-center"
                >
                  <ChevronLeft className="w-8 h-8 text-gray-50" />
                </button>

                <button
                  onClick={scrollRight}
                  className="w-12 h-12 rounded-full bg-[#0a85bc] shadow hover:bg-[#033767] flex items-center justify-center"
                >
                  <ChevronRight className="w-8 h-8 text-gray-50" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Scroll Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 justify-start lg:justify-start px-4 sm:px-0"
          >
            {pricingData.map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] snap-center bg-white rounded-xl shadow-md p-8 text-center"
              >
                <p className="text-gray-400 font-medium">{item.plan}</p>

                <h3 className="text-xl font-semibold mt-2 text-[#033767]">
                  {item.title}
                </h3>

                <p className="text-4xl font-bold text-[#0a85bc] mt-4">
                  {item.price}
                </p>

                <ul className="mt-6 space-y-3 text-gray-500">
                  {item.features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>

                <button className="mt-8 bg-[#0a85bc] text-white px-6 py-3 rounded-full hover:bg-[#033767] transition">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
