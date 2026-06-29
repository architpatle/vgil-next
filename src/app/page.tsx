import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/Home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import ProductsSection from "@/components/home/ProductsSection";
import StatsSection from "@/components/home/StatsSection";
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

      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-black">
          Another Section
        </h2>
      </section>
    </>
  );
}