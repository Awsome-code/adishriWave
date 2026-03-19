import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/general/navbar/ResponsiveNav";
import FooterSection from "@/components/general/footer/FooterSection";


const geistSans = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AdishriWave",
  description:
    "Building next-generation digital experiences with innovation and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.className} antialiased bg-blue-50`}>

       <ResponsiveNav />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
