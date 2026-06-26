import Hero from "@/components/Home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="min-h-screen bg-white flex items-center justify-center">
        <h2 className="text-5xl font-bold text-black">
          Scroll Down
        </h2>
      </section>

      <section className="min-h-screen bg-gray-100 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-black">
          Another Section
        </h2>
      </section>
    </>
  );
}