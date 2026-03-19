import React from "react";
import FeatureCard from "./FeatureCard";

export default function FeatureSection() {
  return (
    <section id="feature" className=" max-w-7xl mx-auto px-4 pt-32 sm:px-6 lg:px-8">
      <div className=" w-[80%] md:w-1/2 flex flex-col items-center justify-center mx-auto">
        <h1 className=" text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-[#0a85bc] ">
          Specializing in
        </h1>
        <p className="text-center text-sm md:text-base mt-2">
          We create strategies that drive real engagement and results.
        </p>
      </div>
      {/* FeatureCards   */}
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-8 overflow-hidden">
        <FeatureCard
          title="Custom & Responsive Websites"
          imagePath="/images/web.png"
          description="Fast, modern, and mobile-friendly websites designed to represent your brand and convert visitors into customers."
        />
        <FeatureCard
          title="Meta Ads (Facebook & Instagram Ads)"
          imagePath="/images/meta.png"
          description="Targeted ad campaigns that increase brand awareness, generate leads, and drive real sales."
        />
        <FeatureCard
          title="Google Ads"
          imagePath="/images/google.png"
          description="High-performing search and display ads that bring quality traffic and high-intent customers to your business."
        />
        <FeatureCard
          title="Creative Design"
          imagePath="/images/creative.png"
          description="Eye-catching social media creatives, brand visuals, and marketing designs that make your brand stand out."
        />
        <FeatureCard
          title="SEO (Search Engine Optimization)"
          imagePath="/images/seo.png"
          description="Improve your website ranking, increase organic traffic, and grow your online visibility with smart SEO strategies."
        />
        <FeatureCard
          title="Motion Graphics"
          imagePath="/images/motion.png"
          description="Engaging motion videos and animations that boost engagement and make your brand more memorable."
        />
        

      </div>
    </section>
  );
}
