import Hero from "@/components/Home/Hero";
import LogoCarousel from "@/components/home/LogoCarousel";
import StatsSection from "@/components/home/StatsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <LogoCarousel />

      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-black">
          Another Section
        </h2>
      </section>
    </>
  );
}