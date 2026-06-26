export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="h-screen flex items-center justify-center bg-slate-900 text-white"
      >
        <h1 className="text-6xl font-bold">Hero Section</h1>
      </section>

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