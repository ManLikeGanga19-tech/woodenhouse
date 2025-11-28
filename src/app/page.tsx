import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      {/* HERO SECTION */}
      <section>
        <h1 className="text-4xl font-bold text-center mt-20">
          Wooden Houses Kenya
        </h1>
      </section>

      {/* Abbout Us */}
      <section className="mt-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        {/* Component: <About Us /> */}
      </section>

      {/* SERVICES */}
      <section className="mt-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Services</h2>

        {/* Component: <Services /> */}
      </section>

      {/* Why Us */}
      <section className="mt-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>

        {/* Component: <Why /> */}
      </section>

      {/* Our Projects */}
      <section className="mt-32 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Our Projects</h2>

        {/* Component: <Projects /> */}
      </section>

    </div>
  )
}
