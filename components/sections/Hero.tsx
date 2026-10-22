import Image from "next/image";
import { personalData } from "@/data/personal";

export function Hero() {
  const { firstName, middleName, lastName, roles, city, country, photoSrc } =
    personalData.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden border-b border-slate-800/60"
    >
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* Left: Name, roles & location */}
        <div className="text-center font-bold">
          <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight uppercase">
            <span className="block whitespace-nowrap">
              <span className="text-cyan-300">{firstName}</span>{" "}
              <span className="text-white">{middleName}</span>
            </span>
            <span className="block text-fuchsia-500">{lastName}</span>
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-white">
            {roles.join(" & ")}
          </p>
          <p className="mt-1 text-sm sm:text-base lg:text-lg text-white">
            Based in <em>{city}</em>, <span className="underline underline-offset-4">{country}</span>
          </p>
        </div>

        {/* Right: Photo frame */}
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-[300px] lg:max-w-[340px] rounded-[22px] border-[3px] border-neutral-300/80 bg-black/30 p-2 shadow-[0_0_24px_rgba(255,255,255,0.18),inset_0_0_14px_rgba(255,255,255,0.3)]">
            <div className="relative h-full w-full overflow-hidden rounded-[14px] border-2 border-neutral-200/70 bg-neutral-600/50">
              {/*
                📷 HERO PHOTO
                The image path comes from `hero.photoSrc` in data/personal.ts.
                Put your file in the `public/` folder and set photoSrc to e.g. "/images/thomas.jpg".
              */}
              {photoSrc && (
                <Image
                  src={photoSrc}
                  alt={personalData.name}
                  fill
                  sizes="(max-width: 768px) 300px, 340px"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
