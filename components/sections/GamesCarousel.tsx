"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { GameProject } from "@/data/games";

interface GamesCarouselProps {
  games: GameProject[];
}

export function GamesCarousel({ games }: GamesCarouselProps) {
  const [gameIndex, setGameIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  if (games.length === 0) return null;

  const game = games[gameIndex];
  const image = game.images[imageIndex];

  const goToGame = (index: number) => {
    setGameIndex((index + games.length) % games.length);
    setImageIndex(0);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8">
        {/* Images */}
        <div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
            {image && (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            )}
          </div>

          {game.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {game.images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setImageIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  className={`relative h-14 w-24 shrink-0 overflow-hidden rounded border-2 ${
                    i === imageIndex ? "border-cyan-400" : "border-slate-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img.src} alt={img.alt} fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Title, description, features */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">{game.title}</h3>
          <p className="mt-3 text-slate-300 leading-relaxed">{game.description}</p>

          <h4 className="mt-6 text-sm font-bold uppercase text-fuchsia-600">Features</h4>
          <ul className="mt-2 space-y-2">
            {game.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-slate-300">
                <span className="text-cyan-400">&gt;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">
        <button
          onClick={() => goToGame(gameIndex - 1)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Previous game"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <div className="flex items-center gap-2">
          {games.map((g, i) => (
            <button
              key={g.id}
              onClick={() => goToGame(i)}
              aria-label={`Go to ${g.title}`}
              className={`h-2.5 w-2.5 rounded-full ${i === gameIndex ? "bg-fuchsia-600" : "bg-slate-600 hover:bg-slate-400"}`}
            />
          ))}
        </div>

        <button
          onClick={() => goToGame(gameIndex + 1)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Next game"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

