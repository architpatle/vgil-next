import CTASection from "@/components/home/CTASection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FeaturesSection from "@/components/home/FeaturesSection";
import FoundersSection from "@/components/home/FoundersSection";
import Hero from "@/components/home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection/TestimonialsSection";
import TransformationSection from "@/components/home/TransformationSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <LogoCarousel />
      <WhyChooseUs />
      <TransformationSection />
      {/* <FeaturedProducts /> */}
      <ProductsSection />
      <FeaturesSection />
      <FoundersSection />
      <TestimonialsSection />
      <CTASection />
      </>
  );
}