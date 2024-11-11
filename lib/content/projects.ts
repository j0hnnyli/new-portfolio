import { Projects } from "../types/Project";

const projects : Projects[] = [
  {
    title: "SwiftShop",
    link: "https://swiftshop-alpha.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/swiftshop",
    img: "/swiftshop.png",
    tags: ["NextJS", "Supabase", "Tailwind", "Responsive", "Typescript", "Framer-Motion", "Shadcn"],
    type: 'website'
  },
  {
    title: "RecipeHub",
    link: "https://recipehub-swart.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/recipe_nextjs",
    img: "/recipehub.png",
    tags: ["API", "NextJS", "Tailwind", "Responsive", "Typescript", "Shadcn"],
    type: "website"
  },
  {
    title: "Stockify",
    link: "https://inventorycrud.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/inventory-server",
    img: "/inventoryCRUD.png",
    tags: ["NodeJS", "NextJS", "Tailwind", "Responsive", "Express", "MongoDB", "Typescript", "Shadcn"],
    type: "website"
  },
  {
    title: "Anime Horizon",
    link: "https://animehorizon.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/AnimeHorizon",
    img: "/animehorizon.png",
    tags: ["NextJS", "Tailwind", "Responsive", "API", "Typescript", "Shadcn"],
    type: "website"
  },
  {
    title: "Ball Havoc",
    link: "https://j0hnnyli.github.io/ball-havoc/",
    gitLink: "https://github.com/j0hnnyli/ball-havoc?tab=readme-ov-file",
    img: "/ballhavoc.png",
    tags: ["HTML", "CSS", "Canvas", "Javascript"],
    type:"game",
  }
]

export default projects;