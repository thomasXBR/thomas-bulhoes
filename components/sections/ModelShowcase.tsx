"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { featuredModels, type ModelAsset } from "@/data/model";
import { SectionHeading } from "@/components/ui/SectionHeading";

function normalizeSketchfabEmbedUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (trimmed.includes("/embed")) return trimmed;

  // Handle standard Sketchfab URLs like:
  // https://sketchfab.com/3d-models/model-name-<32-char-hex-id>
  // or https://sketchfab.com/models/<32-char-hex-id>
  const match = trimmed.match(/([a-f0-9]{32})(?:\/|\?|$)/i);
  if (match) {
    return `https://sketchfab.com/models/${match[1]}/embed?autostart=0&ui_theme=dark`;
  }

  return trimmed;
}

interface ModelsCarouselProps {
  models: ModelAsset[];
}

function ModelsCarousel({ models }: ModelsCarouselProps) {
  const [modelIndex, setModelIndex] = useState(0);

  if (models.length === 0) return null;

  const model = models[modelIndex];
  const embedSrc = normalizeSketchfabEmbedUrl(model.sketchfabEmbedUrl);

  const goToModel = (index: number) => {
    setModelIndex((index + models.length) % models.length);
  };

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-8 items-center">
        {/* Interactive Sketchfab 3D Embed */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-800 bg-slate-950">
          {embedSrc ? (
            <iframe
              key={model.id}
              title={model.title}
              src={embedSrc}
              className="h-full w-full border-0"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
              No Sketchfab link provided
            </div>
          )}
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {model.title}
          </h3>
          <p className="mt-3 text-slate-300 leading-relaxed">
            {model.description}
          </p>
        </div>
      </div>

      {/* Carousel controls */}
      <div className="flex items-center justify-between border-t border-slate-800 px-6 py-4">
        <button
          onClick={() => goToModel(modelIndex - 1)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Previous model"
        >
          <ChevronLeft className="h-4 w-4" />
          Prev
        </button>

        <div className="flex items-center gap-2">
          {models.map((m, i) => (
            <button
              key={m.id}
              onClick={() => goToModel(i)}
              aria-label={`Go to ${m.title}`}
              className={`h-2.5 w-2.5 rounded-full ${
                i === modelIndex
                  ? "bg-fuchsia-600"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goToModel(modelIndex + 1)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
          aria-label="Next model"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function ModelShowcase() {
  return (
    <section id="model" className="py-24 border-b border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="3D Models (Blender)" />
        <ModelsCarousel models={featuredModels} />
      </div>
    </section>
  );
}
