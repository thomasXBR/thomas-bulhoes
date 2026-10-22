import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
}

export function Card({ children, className = "", glow = false }: CardProps) {
  return (
    <div
      className={`relative rounded-xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md ${
        glow
          ? "hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
          : "hover:border-slate-700 hover:bg-slate-900/80"
      } ${className}`}
    >
      {children}
    </div>
  );
}

