export interface RenderItem {
  id: string;
  title: string;
  description: string;
  /**
   * Type of media: "image" or "video".
   * Optional — if omitted, it is automatically detected from the file extension (.mp4, .webm, .mov, etc.).
   */
  type?: "image" | "video";
  /**
   * Path relative to the `public/` folder (starting with "/"), e.g. "/renders/my-render.png" or "/renders/anim.mp4"
   */
  src: string;
  alt?: string;
}

/*
  🎬 HOW TO ADD RENDERS & ANIMATIONS
  ----------------------------------
  1. Place your render images (.png, .jpg, .webp) or animation videos (.mp4, .webm) inside `public/renders/`
     (create the `public/renders/` folder if it doesn't exist yet).
  2. Add an entry to `featuredRenders` below with `id`, `title`, `description`, and `src`.
     - Videos (.mp4, .webm, .mov, .ogg) are automatically rendered with a video player.
     - Images (.png, .jpg, .jpeg, .webp, .gif, .svg) are rendered as images.
     - You can also explicitly set `type: "video"` or `type: "image"`.
*/

export const featuredRenders: RenderItem[] = [
  {
    id: "lantern-table",
    title: "Old Rustic Lantern on Wooden Table",
    description:
      "My old rustic lanter model on top of a wooden table with lightning and shadows.",
    type: "image",
    src: "/models/wooden.jpg",
    alt: "Sample 3D Render",
  },
  {
    id: "2001",
    title: "2001: A Space Odyssey",
    description:
      "A 3D render of Saturn, with its moon Iapetus and the Monolith from the book of 2001: A Space Odyssey.",
    type: "video",
    src: "/models/2001.mp4",
    alt: "3D Render of the Monolith from 2001: A Space Odyssey",
  }
];

