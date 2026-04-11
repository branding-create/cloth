import { useState, useEffect } from "react";
import { useTheme } from "@/hooks/useTheme";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandIntro from "@/components/BrandIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import CustomizeSection from "@/components/CustomizeSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import BrandStory from "@/components/BrandStory";
import FabricShowcase from "@/components/FabricShowcase";
import CustomerReviews from "@/components/CustomerReviews";
import GenderCategories from "@/components/GenderCategories";
import LimitedEdition from "@/components/LimitedEdition";
import CountdownTimer from "@/components/CountdownTimer";
import InfluencerShowcase from "@/components/InfluencerShowcase";
import HowItWorks from "@/components/HowItWorks";
import PricingOffers from "@/components/PricingOffers";
import FAQSection from "@/components/FAQSection";
import Newsletter from "@/components/Newsletter";
import InstagramFeed from "@/components/InstagramFeed";
import ContactSection from "@/components/ContactSection";
import ChatWidget from "@/components/ChatWidget";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-x-hidden w-full max-w-[100vw] flex flex-col min-h-screen">
      <LoadingScreen isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <Header isDark={isDark} toggleTheme={toggle} />

      <main className="flex-grow w-full max-w-full">
        <HeroSection />
        <SectionDivider />
        <BrandIntro />
        <SectionDivider />
        <FeaturedProducts />
        <SectionDivider />
        <CustomizeSection />
        <SectionDivider />
        <WhyChooseUs />
        <SectionDivider />
        <BrandStory />
        <SectionDivider />
        <FabricShowcase />
        <SectionDivider />
        <CustomerReviews />
        <SectionDivider />
        <GenderCategories />
        <SectionDivider />
        <LimitedEdition />
        <SectionDivider />
        <CountdownTimer />
        <SectionDivider />
        <InfluencerShowcase />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <PricingOffers />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <Newsletter />
        <SectionDivider />
        <InstagramFeed />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
      <ChatWidget />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
