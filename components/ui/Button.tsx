import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group rounded-lg";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]",
    secondary:
      "bg-slate-800 hover:bg-slate-750 text-slate-100 border border-slate-700/80 hover:border-slate-600 shadow-sm",
    outline:
      "bg-transparent hover:bg-slate-800/60 text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300",
    ghost:
      "bg-transparent hover:bg-slate-800/50 text-slate-400 hover:text-slate-100",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

