import { Projects } from "../types/Project";

const projects : Projects[] = [
  {
    title: "InvoTracker",
    link: "https://invoice-tracker-gamma.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/invoice-tracker",
    img: "/invotracker.png",
    tags: ["NextJS", "Tailwind", "Responsive", "Supabase", "Typescript", "Framer-motion", "Shadcn-UI", "Zod", "Recharts"],
     desc: "Effortlessly create, send, and manage invoices with your InvoTracker's personal dashboard, keeping your earnings organized and smooth"
  },
  {
    title: "Ascend",
    link: "https://ascend-mu.vercel.app/",
    gitLink: "https://github.com/j0hnnyli/ascend",
    img: "/ascend.png",
    tags: ["NextJS", "Supabase", "Tailwind", "Responsive", "Typescript", "Framer-Motion", "Zustand","Shadcn-UI"],
    desc: "E-commerce web application with full cart functionality. Users can browse and manage products with accurate size and quantity tracking"
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
