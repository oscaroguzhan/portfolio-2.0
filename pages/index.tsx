import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="bg-[#1c1f33] h-screen text-white snap-y snap-mandatory">
      <Header />
      {/* //Hero section */}
      <section
        id="hero"
        className="snap-center "
      >
        <Hero />
      </section>
      {/* //About section */}

      {/* // Experience section */}

      {/* // Skill section */}

      {/* //Contact section */}
    </div>
  );
}
