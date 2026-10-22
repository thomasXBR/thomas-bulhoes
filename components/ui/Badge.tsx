import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "cyan" | "emerald" | "purple" | "amber" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "sm",
  className = "",
}: BadgeProps) {
  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs font-medium" : "px-3 py-1 text-sm font-medium";

  const variantClasses = {
    default: "bg-slate-800 text-slate-300 border border-slate-700/60",
    cyan: "bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 shadow-[0_0_12px_rgba(6,182,212,0.15)]",
    emerald: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 shadow-[0_0_12px_rgba(16,185,129,0.15)]",
    purple: "bg-purple-950/60 text-purple-300 border border-purple-800/60 shadow-[0_0_12px_rgba(168,85,247,0.15)]",
    amber: "bg-amber-950/60 text-amber-300 border border-amber-800/60 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    outline: "bg-transparent text-slate-400 border border-slate-700 hover:border-slate-500",
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${sizeClasses} ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}

