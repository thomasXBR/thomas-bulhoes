import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FeaturedGames } from "@/components/sections/FeaturedGames";
import { ModelShowcase } from "@/components/sections/ModelShowcase";
import { RendersShowcase } from "@/components/sections/RendersShowcase";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Games */}
        <FeaturedGames />

        {/* 3. 3D Models */}
        <ModelShowcase />

        {/* 4. Renders & Animations */}
        <RendersShowcase />

        {/* 5. Contact */}
        <Contact />
      </main>
    </>
  );
}
