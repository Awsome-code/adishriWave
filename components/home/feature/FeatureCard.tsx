import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  imagePath: string;
  title: string;
  description: string;
}

export default function FeatureCard({
  imagePath,
  title,
  description,
}: FeatureCardProps) {
  return (
     <div className="bg-white mx-auto px-6 py-10 rounded-2xl border-b-8 border-[#033767]">
      <div className="flex items-center justify-center pb-2">
    <Image src={imagePath} alt="feature-icon" width={100} height={100} className="self-center " />
      </div>
    <p className="my-4 text-xl sm:text-2xl font-semibold text-[#0a85bc]">{title}</p>
    <p className="text-gray-500 text-sm lg:text-base mt-2">{description}</p>
    </div>
  );
};
