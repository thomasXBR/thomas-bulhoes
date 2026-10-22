"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredRenders, type RenderItem } from "@/data/renders";
import { SectionHeading } from "@/components/ui/SectionHeading";

function isVideoItem(item: RenderItem): boolean {
  if (item.type) {
    return item.type === "video";
  }
  return /\.(mp4|webm|mov|ogg)(\?.*)?$/i.test(item.src);
}

interface RendersCarouselProps {
  items: RenderItem[];
}

function RendersCarousel({ items }: RendersCarouselProps) {
  const [itemIndex, setItemIndex] = useState(0);

  if (items.length === 0) return null;

  const item = items[itemIndex];
  const isVideo = isVideoItem(item);

  const goToItem = (index: number) => {
    setItemIndex((index + items.length) % items.length);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 items-center">
        {/* Render Image or Animation Video */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
          {isVideo ? (
            <video
              key={item.src}
              src={item.src}
              controls
              loop
              playsInline
              className="h-full w-full object-contain bg-slate-950"
            />
          ) : (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt || item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          )}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {item.title}
          </h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">
        <button
          onClick={() => goToItem(itemIndex - 1)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Previous render or animation"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <div className="flex items-center gap-2">
          {items.map((r, i) => (
            <button
              key={r.id}
              onClick={() => goToItem(i)}
              aria-label={`Go to ${r.title}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === itemIndex
                  ? "bg-fuchsia-600"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goToItem(itemIndex + 1)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Next render or animation"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function RendersShowcase() {
  return (
    <section id="renders" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Renders & Animations" />
        <RendersCarousel items={featuredRenders} />
      </div>
    </section>
  );
}

