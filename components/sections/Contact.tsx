"use client";

import React from "react";
import { personalData } from "@/data/personal";
import { Card } from "@/components/ui/Card";
import { Mail, Gamepad2, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Contact() {
  const contactLinks = [
    {
      name: "LinkedIn",
      href: personalData.socials.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-sky-400 group-hover:text-sky-300" />,
      detail: "Thomas Barbosa Bulhões",
      isExternal: true,
    },
    {
      name: "Email",
      href: `mailto:${personalData.socials.email}`,
      icon: <Mail className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />,
      detail: personalData.socials.email,
      isExternal: false,
    },
    {
      name: "Itch.io",
      href: personalData.socials.itchio,
      icon: <Gamepad2 className="w-5 h-5 text-rose-400 group-hover:text-rose-300" />,
      detail: "Check my games out!",
      isExternal: true,
    },
    {
      name: "GitHub",
      href: personalData.socials.github,
      icon: <GithubIcon className="w-5 h-5 text-slate-300 group-hover:text-white" />,
      detail: "thomasXBR",
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10 tracking-tight">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link) => (
            <Card
              key={link.name}
              className="p-5 border-slate-800 bg-slate-900/70 hover:border-slate-700 transition-colors"
            >
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noreferrer" : undefined}
                className="flex items-center justify-between group h-full"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 shrink-0">
                    {link.icon}
                  </div>
                  <div className="truncate">
                    <span className="text-sm font-semibold text-slate-200 block group-hover:text-white transition-colors">
                      {link.name}
                    </span>
                    <span className="text-xs text-slate-400 block truncate">
                      {link.detail}
                    </span>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 shrink-0 ml-3 transition-colors" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}