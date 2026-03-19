"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function FooterSection() {
  return (
    <>
      {/* ========== CLIENT LOGOS SECTION ========== */}
      <section className="py-12 bg-gray-500 border-y">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80">
            <img
              src="/clients/graygrids.svg"
              alt="graygrids"
              className="h-10 object-contain"
            />
            <img
              src="/clients/uideck.svg"
              alt="uideck"
              className="h-10 object-contain"
            />
            <img
              src="/clients/lineicons.svg"
              alt="lineicons"
              className="h-10 object-contain"
            />
            <img
              src="/clients/ayroui.svg"
              alt="ayroui"
              className="h-10 object-contain"
            />
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="bg-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo + About */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <img src="/images/logo3.png" alt="logo" className=" w-40" />
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Facilisis nulla placerat amet amet congue.
              </p>

              <div className="flex gap-3">
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
              </div>
            </div>

            {/* Quick Links */}
            <FooterLinks
              title="Quick Link"
              links={["Home", "About", "Service", "Testimonial", "Contact"]}
            />

            {/* Services */}
            <FooterLinks
              title="Services"
              links={[
                "Web Design",
                "Web Development",
                "Seo Optimization",
                "Blog Writing",
              ]}
            />

            {/* App Download */}
            <div>
              {/* <h4 className="font-semibold text-[#0a85bc] mb-5">
                Download App
              </h4>

              <div className="space-y-3">
                <AppButton title="Download on the" store="App Store" />
                <AppButton title="Get it on" store="Play Store" />
              </div> */}
              <h4 className="font-semibold text-[#0a85bc] mb-5">Our Location</h4>

              <div className="w-full h-[220px] rounded-md overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10161.33870611912!2d87.47713337132161!3d25.784572989433883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eff97656feec5f%3A0xc57dda35d9a83807!2sPurnia%2C%20Bihar!5e0!3m2!1sen!2sin!4v1770604496944!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"                  
                />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t mt-12 pt-6 text-center text-sm text-[#033767] ">
            Design and Developed by{" "}
            <span className="font-bold">AdishriWave</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ===== Small Components ===== */

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#0a85bc] text-white flex items-center justify-center hover:bg-[#033767] transition-all cursor-pointer">
      {icon}
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="font-semibold text-[#0a85bc] mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((item, i) => (
          <li key={i}>
            <a className="text-gray-500 hover:text-[#033767] transition cursor-pointer">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppButton({
  title,
  store, 
}: {
  title: string;
  store: string;
  referrerpolicy: string;
}) {
  return (
    <div className="border rounded-lg px-5 py-3 hover:shadow-md transition cursor-pointer">
      <p className="text-xs text-gray-400">{title}</p>
      <p className="font-semibold text-gray-800">{store}</p>
    </div>
  );
}
