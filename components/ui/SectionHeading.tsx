import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}`}>
      {badge && (
        <div className={`mb-3 inline-flex items-center gap-2 ${centered ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold">
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
        {title}{" "}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400">
            {highlight}
          </span>
        )}
      </h2>
      {description && (
        <p className="mt-3 text-base md:text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

