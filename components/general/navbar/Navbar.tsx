"use client"
import Link from "next/link";
import { NavLinks } from "../constant/Constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { TextAlignEnd, X } from "lucide-react";

export default function Navbar() {
   const [navOpen, setNavOpen ] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    };

    window.addEventListener("scroll", navHandler);
    return () => {
      return window.removeEventListener("scroll", navHandler);
    };
  }, []);
  return (
    <nav
      className={`transition-all duration-200 z-50 fixed w-full ${navBackground ? "bg-gray-50 shadow-md" : ""} `}
    >
      <div className="flex items-center justify-between h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-12 ">
        <div className=" w-full flex items-center justify-between sm:space-x-20">
          {/* LOGO  */}
          <div className="flex items-center">
            <Link href="/">
            <div className="w-24 sm:w-28 md:w-32 lg:w-40 xl:w-44">
              <Image
                src="/images/color-logo.png"
                alt="logo"
                width={200}
                height={80}
                className="w-full h-auto object-contain"
                />
            </div>
                </Link>
          </div>

          {/* NavLinks  */}
          <div className="hidden lg:flex items-center space-x-10">
            {NavLinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className="text-base text-[#0a85be] hover:text-[#033767] font-medium transition-all duration-200"
                >
                  <p>{link.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Buttons  */}
        {/* <div className="flex items-center space-x-4"> */}
          {/* our Projects  */}
          {/* <button
            className="px-10 py-2 text-xs sm:text-sm text-white rounded-md cursor-pointer bg-[#033767]
            hover:bg-[#0a85be] transition-all "
          >
            Our - Projects
          </button> */}
        {/* </div> */}
      

       
          <button
          onClick={() => setNavOpen(!navOpen)}
           className="w-8 h-8 cursor-pointer text-[#0a85bc] z-50 lg:hidden">
            {navOpen ? <X size={30} className="text-white"/> : <TextAlignEnd size={30}/>}
          </button>

          <MobileNav  navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>

    </nav>
  );
}
