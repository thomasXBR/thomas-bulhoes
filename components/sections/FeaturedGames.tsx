import { featuredGames } from "@/data/games";
import { GamesCarousel } from "@/components/sections/GamesCarousel";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedGames() {
  return (
    <section id="games" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Games developed (Unity 3D & 2D)" />
        <GamesCarousel games={featuredGames} />
      </div>
    </section>
  );
}
