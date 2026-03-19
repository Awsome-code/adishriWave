import Image from "next/image";
import React from "react";

type WorkItem = {
  title: string;
  description: string;
  image: string;
};

const works: WorkItem[] = [
  {
    title: "Web Design",
    description:
      "We craft modern, user-friendly websites that not only look stunning but also convert visitors into customers. Our designs focus on brand identity, smooth navigation, and engaging user experience.",
    image: "/images/wordpress.jpg",
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching graphics that bring your brand to life. From social media creatives to marketing materials, we design visuals that capture attention and communicate your message clearly.",
    image: "/images/gallery-4.jpg",
  },
  {
    title: "Mobile App",
    description:
      "We design and develop powerful mobile apps with intuitive interfaces and seamless performance, helping businesses connect with customers anytime, anywhere.",
    image: "/images/gallery-6.jpg",
  },
  {
    title: "Web Development",
    description:
      "From simple business websites to advanced web platforms, we build fast, secure, and scalable web solutions tailored to your business needs.",
    image: "/images/wordpress1.jpg",
  },
  {
    title: "Content Generate",
    description:
      "Creative and engaging content that builds your brand voice and drives audience engagement across social media and digital platforms.",
    image: "/images/gallery-4.jpg",
  },
  {
    title: "Seo Optimization",
    description:
      "Boost your online visibility with our data-driven SEO strategies. We help your website rank higher on search engines and attract more organic traffic.",
    image: "/images/gallery-6.jpg",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a85bc]">
            Recent Works
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Where creativity meets performance — explore our proven social media
            success stories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className=" p-6">
                <h3 className="text-lg font-semibold text-[#0a85bc]">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
