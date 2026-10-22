import { personalData } from "@/data/personal";

const navLinks = [
  { label: "Games", href: "#games" },
  { label: "3D Models", href: "#model" },
  { label: "Renders & Animations", href: "#renders" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090d16]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-slate-100 hover:text-fuchsia-600"
        >
          {personalData.name}
        </a>

        <nav className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-fuchsia-500 px-2 sm:px-3 py-1.5 rounded-md hover:bg-slate-800/50"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
