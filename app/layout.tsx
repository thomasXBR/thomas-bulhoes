import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thomas Bulhões | Game Developer (Unity & C#)",
  description:
    "Portfolio of Thomas Bulhões — Game Developer specializing in Unity, C#, responsive gameplay feel, AI state machines, physics, and game-ready 3D modeling with Blender.",
  keywords: [
    "Game Developer",
    "Unity",
    "C#",
    "Gameplay Programmer",
    "Technical Artist",
    "Blender",
    "Portfolio",
    "Indie Games"
  ],
  authors: [{ name: "Thomas Bulhões" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 tech-grid-pattern selection:bg-fuchsia-500/25 selection:text-fuchsia-200">
        {children}
      </body>
    </html>
  );
}
