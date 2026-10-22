export interface GameImage {
  /** Path relative to the `public/` folder, starting with "/" */
  src: string;
  alt: string;
}

export interface GameProject {
  id: string;
  title: string;
  description: string;
  features: string[];
  images: GameImage[];
}

/*
  🎮 HOW TO ADD / CHANGE GAME IMAGES
  ----------------------------------
  Each game has its own folder inside `public/games/`:

    public/games/relic-fall/       -> 1.svg, 2.svg, 3.svg, 4.svg
    public/games/void-recon/       -> 1.svg, 2.svg, 3.svg, 4.svg
    public/games/aether-drifter/   -> 1.svg, 2.svg, 3.svg

  1. Drop your screenshots / GIFs into the game's folder (e.g. public/games/relic-fall/combat.png)
  2. List them in that game's `images` array below as "/games/<folder>/<file>"
     (the first image is shown first in the carousel)

  To add a new game: create a new folder in public/games/ and copy one of the objects below.
*/

export const featuredGames: GameProject[] = [
  {
    id: "larpman",
    title: "LARPMAN",
    description:
      "A PS1-styled 3D horror game where you collect pages while trying to escape LARPMAN, a mysterious figure that stalks you through the forest.",
    features: [
      "Modeled custom assets in Blender and handled environmental texturing to build a cohesive, atmospheric map.",
      "Programmed a stalking monster mechanic complete with distance-based audio cues, static screen effects, and a fully scripted jumpscare system.",
      "Built automated, timeline-driven cutscenes for the player's extraction sequence.",
      "Implemented environmental particle systems to enhance the horror atmosphere.",
      "Engineered a complete UI/UX architecture, including a scrollable credits scene, a functional main menu, persistent audio managers, and a custom animated splash screen for my indie brand, XBR Studios.s",
    ],
    // 📷 IMAGES: public/games/larpman/
    images: [
      { src: "/games/larpman/larp1.png", alt: "LARPMAN gameplay" },
      { src: "/games/larpman/larp2.png", alt: "Stalking mechanic" },
      { src: "/games/larpman/larp3.png", alt: "Horror atmosphere" },
      { src: "/games/larpman/larp4.png", alt: "Extracted sequence" },
    ],
  },
  {
    id: "burger-stack-smash",
    title: "Burger Stack Smash",
    description:
      "A fast-paced arcade game where you stack burgers as high as possible without toppling over.",
    features: [
      "SOLO developed for the Do You WANNA Jam 2026 game jam on itch.io.",
      "Difficult scales as the player progresses, with a wider range where ingredients can spawn.",
    ],
    // 📷 IMAGES: public/games/burger-stack-smash/
    images: [
      { src: "/games/burger-stack-smash/burger1.jpg", alt: "Burger Stack Smash gameplay" },
      {src: "/games/burger-stack-smash/burger4.jpg", alt: "Game tutorial" },
      { src: "/games/burger-stack-smash/burger2.jpg", alt: "Burger stacking mechanics" },
      { src: "/games/burger-stack-smash/burger3.jpg", alt: "Game over screen" },
    ],
  },
  {
    id: "nihongo-guessr",
    title: "Nihongo Guessr",
    description:
      "A language learning game where players guess the correct romaji of katakana or hiragana characters.",
    features: [
      "Gameified implementation of earlier project made in Java",
      "Dedicated menu for selecting between katakana and hiragana characters",
    ],
    // 📷 IMAGES: public/games/nihongo-guessr/
    images: [
      { src: "/games/nihongo-guessr/nihon1.jpg", alt: "Nihongo Guessr gameplay" },
      { src: "/games/nihongo-guessr/nihon2.jpg", alt: "Katakana character display" },
      { src: "/games/nihongo-guessr/nihon3.jpg", alt: "Hiragana character display" },
      { src: "/games/nihongo-guessr/nihon4.jpg", alt: "Score display" },
      {src: "/games/nihongo-guessr/nihon5.jpg", alt: "Game over screen" },
    ],
  },
];
