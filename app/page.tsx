
import About from "@/components/home/about/About";
import ContactSection from "@/components/home/contact/ContactSection";
import FeatureSection from "@/components/home/feature/FeatureSection";
import HeroSection from "@/components/home/hero/HeroSection";
import Portfolio from "@/components/home/portfolio/Portfolio";
import PricingSection from "@/components/home/pricing/PricingSection";
import TeamSection from "@/components/home/team/TeamSection";


export default function Home() {
  return (
    <div className="max-w-full mx-auto">
      <HeroSection />
      <FeatureSection />  
      <About />   
      <Portfolio /> 
      <PricingSection />
      <TeamSection />
      <ContactSection />
    </div>
  );
}
