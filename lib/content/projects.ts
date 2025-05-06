import { Projects } from "../types/Project";

const projects : Projects[] = [
  {
    title: "Ascend",
    link: "https://ascend-mu.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/ascend",
    img: "/ascend.png",
    tags: ["NextJS", "Supabase", "Tailwind", "Responsive", "Typescript", "Framer-Motion", "Shadcn-UI"],
    desc: "E-commerce webapplication with full cart functionality. Users can browse and manage products with accurate size and quantity tracking"
  },
  {
    title: "RecipeHub",
    link: "https://recipe-chi-lilac.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/recipe",
    img: "/recipehub.png",
    tags: ["NextJS", "Tailwind", "Responsive", "API", "Typescript", "GSAP", "Firebase-Firestore", "Firsbase-Auth", "Shadcn-UI"],
     desc: "Recipe platform for exploring recipes from different cultures. Users can create accounts to save favorites to a personal, cross-device recipe list accessible anytime and anywhere"
  },
  {
    title: "Anime Horizon",
    link: "https://animehorizon.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/AnimeHorizon",
    img: "/animehorizon.png",
    tags: ["NextJS", "Tailwind", "Responsive", "API", "Typescript", "Shadcn-UI"],
     desc: "Web application for anime fans to explore new titles, track favorites, and personalize their watchlist with ease"
  },
  {
    title: "Quizes",
    link: "https://quizes-one.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/quizes",
    img: "/quizes.png",
    tags: ["Typescript", "Vue", "Tailwind", "Responsive", "GSAP"],
    desc: "Quiz web application developed to help beginner programmers to test their knowledge on various programming languages."
  },
  {
    title: "Desserts",
    link: "https://desserts-murex.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/desserts",
    img: "/desserts.png",
    tags: ["NextJS", "Tailwind", "Responsive", "API", "Typescript", "Framer-motion", "Vitest"],
    desc: "A small landing page with smooth, eye-catching section transitions that keep things engaging"
  },
]

export default projects;
