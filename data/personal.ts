export interface SocialLinks {
  github: string;
  linkedin: string;
  itchio: string;
  email: string;
  discord?: string;
}

export interface PersonalInfo {
  name: string;
  hero: {
    firstName: string;
    middleName: string;
    lastName: string;
    roles: string[];
    city: string;
    country: string;
    /**
     * Path to your hero photo, relative to the `public/` folder.
     * Example: put your file at `public/images/thomas.jpg` and set this to "/images/thomas.jpg".
     * Leave as an empty string ("") to show the empty frame.
     */
    photoSrc: string;
  };
  role: string;
  tagline: string;
  pitch: string;
  location: string;
  availableForHire: boolean;
  socials: SocialLinks;
  bioParagraphs: string[];
}

export const personalData: PersonalInfo = {
  name: "Thomas Bulhões",
  hero: {
    firstName: "Thomas",
    middleName: "Barbosa",
    lastName: "Bulhões",
    roles: ["Game Developer", "Programmer", "3D Modeler"],
    city: "São Paulo",
    country: "Brazil",
    // 📷 PUT YOUR PHOTO REFERENCE HERE:
    // 1. Drop your image inside the `public/` folder (e.g. public/images/thomas.jpg)
    // 2. Set the path below starting with "/" (e.g. "/images/thomas.jpg")
    photoSrc: "/eu.jpg",
  },
  role: "Game Developer | Unity & C#",
  tagline: "Gameplay Programmer & Technical Artist",
  pitch: "Building responsive gameplay feel, deterministic physics, modular AI state machines, and clean architecture for Unity and C#.",
  location: "Brazil (Available for Remote Worldwide)",
  availableForHire: true,
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/thomas-bulh%C3%B5es-336146352/?isSelfProfile=true",
    itchio: "https://thomas-xbr.itch.io/",
    email: "thomas.bulhoes@gmail.com",
    discord: "thomasxbr",
  },
  bioParagraphs: [
    "I am a Game Developer with a computer science background focused on building gameplay systems that feel satisfying to play and maintain. My core expertise lies in Unity and C#, with an emphasis on robust game architecture—from Finite State Machines (FSM) to event-driven architectures and modular ScriptableObjects.",
    "Beyond pure code, I actively bridge the gap between programming and 3D art. Using Blender, I design, retopologize, and optimize game-ready low-to-mid poly 3D assets with clean UV maps and lightweight texture atlases tailored specifically for real-time engines.",
    "Whether developing responsive 2D combat loops, prototyping AI behaviors, or optimizing WebGL/Desktop builds, I prioritize clean code principles, performance profiling, and iterative playtesting to ship polished game experiences.",
  ],
};

