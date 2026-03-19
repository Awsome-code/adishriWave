"use client";

import { User, Mail, Phone, MessageSquare, Send, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a85bc] ">
            Get in touch
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Stop wasting time and money designing and managing a website that
            doesn’t get results. Happiness guaranteed!
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Form Section */}
          <div className="lg:col-span-2">
            <form className="space-y-6">

              {/* Row 1 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Input icon={<User size={18} />} placeholder="Name" />
                <Input icon={<Mail size={18} />} placeholder="Email" />
              </div>

              {/* Row 2 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Input icon={<Phone size={18} />} placeholder="Number" />
                <Input icon={<MessageSquare size={18} />} placeholder="Subject" />
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-lg border border-gray-200 bg-white px-12 py-4 focus:outline-none focus:ring-2 focus:ring-[#0a85bc] "
                />
                <MessageSquare
                  size={18}
                  className="absolute left-4 top-5 text-gray-400"
                />
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 bg-[#0a85bc] hover:bg-[#033767] text-white px-8 py-3 rounded-lg transition">
                <Send size={18} />
                Submit
              </button>

            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6">

            <InfoCard
              icon={<Phone />}
              title="+91 88251 48192"
              subtitle="+91 88251 48192"
            />

            <InfoCard
              icon={<Mail />}
              title="adishriwave@gmail.com"
              subtitle="adishriwave@gmail.com"
            />

            <InfoCard
              icon={<MapPin />}
              title="AdishriWave, Near Janta Chowk"
              subtitle="Purnia, Bihar"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

/* Input Component */
function Input({
  icon,
  placeholder,
}: {
  icon: React.ReactNode;
  placeholder: string;
}) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 bg-white px-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#0a85bc] "
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
    </div>
  );
}

/* Info Card Component */
function InfoCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-sm p-5">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0a85bc] text-white">
        {icon}
      </div>
      <div>
        <p className="font-medium text-gray-800">{title}</p>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}
