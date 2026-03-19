import Link from "next/link";
import { NavLinks } from "../constant/Constant";

interface MobileNavProps {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({ navOpen, setNavOpen }: MobileNavProps) {
  const showMobileNav = navOpen ? "translate-x-0" : "translate-x-[100%]";
  return (
    <>
      {/* insetbackground     */}
      <div
        className={`fixed inset-0 tranform right-0 z-50 bg-[#0a85bc] opacity-30 w-full h-screen transition-all duration-200 ${showMobileNav} lg:hidden`}
      ></div>

      {/* navlinks    */}
      <ul
        className={`fixed flex items-center justify-center text-white flex-col h-full transform transition-all duration-200 delay-200 w-[80%]
            sm:w-[60%] bg-[#0a85bc] space-y-1 z-50 right-0 top-0 ${showMobileNav} lg:hidden`}
      >
        {NavLinks.map((link) => {
          return (
            <li key={link.url}>
              <Link
                onClick={() => setNavOpen(false)}
                href={link.url}
                className="flex justify-center items-center text-xl font-medium text-white
                            py-4 px-6 rounded-lg hover:bg-slate-700/50 hover:text-cyan-300 transition-all duration-200 border-b
                            border-slate-700/30 w-full text-center
                            "
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
