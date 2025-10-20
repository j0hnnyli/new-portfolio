import { Projects } from "../types/Project";

const projects : Projects[] = [
  // {
  //   id: 1,
  //   title: "InvoTracker",
  //   link: "https://invoice-tracker-gamma.vercel.app/",
  //   gitLink: "https://github.com/j0hnnyli/invoice-tracker",
  //   tags: ["NextJS", "Tailwind", "Supabase", "Typescript", "Framer-motion", "Shadcn-UI", "Zod", "Recharts"],
  //   desc: "Effortlessly create, send, and manage invoices with your InvoTracker's personal dashboard, keeping your earnings organized and smooth",
  //   img : "/projectpage/invotrackerlaptop.png",
  //   theCreativeProcess : [
  //     {
  //       title: "1. Discovery",
  //       desc: "The idea for InvoTracker was born where I found myself manually creating and sending invoices using Google Docs. It quickly became clear how inefficient and disorganized the process was. That is when I had the idea to build a tool that simplifies creating invoices and management in one place"
  //     },
  //     {
  //       title: "2. Design",
  //       desc: "The final design layout was created from researching modern UI patterns, then combined those ideas with my own creative ones. The goal was to design a clean, intuitive interface that was clean and engaging"
  //     },
  //     {
  //       title: "3. Development",
  //       desc: "This is the part where I take the designs ideas and transform them into code. Choosing which tools and technologies that were best for the application. Each decision was made to ensure the application was fast, responsive, and easy to maintain"
  //     },
  //     {
  //       title: "4. Deployment",
  //       desc: "After thorough bug bashing and ensuring the application provides excellent user experience and responsive across all device screens. I deployed the application using Vercel. The result is a production ready invoicing tool built for real world use"
  //     }
  //   ],
  //   features:[
  //     "Fully responsive across screen sizes",
  //     "Create, edit, and send invoices to clients",
  //     "Track earnings in real time",
  //     "Dashboard with visual analytics",
  //     "Invoice list with filtering functionality",
  //     "User Auth",
  //   ]
  // },
  // {
  //   id: 2,
  //   title: "Ascend",
  //   link: "https://ascend-mu.vercel.app/",
  //   gitLink: "https://github.com/j0hnnyli/ascend",
  //   tags: ["NextJS", "Supabase", "Tailwind", "Typescript", "Framer-Motion", "Zustand","Shadcn-UI"],
  //   desc: "E-commerce web application with full cart functionality. Users can browse and manage products with accurate size and quantity tracking",
  //   img : "/projectpage/ascendlaptop.png",
  //   theCreativeProcess: [
  //     {
  //       title: "1. Discovery",
  //       desc: "Ascend started as a personal challenge to design and build a fully functional e-commerce experience from scratch. I wanted to explore the complexities of product management, cart functionality"
  //     },
  //     {
  //       title: "2. Design",
  //       desc: "The design process for Ascend involved researching modern e-commerce UI trends and combining them with original ideas. I focused on product visibility, clean typography, and  user flow to make browsing and shopping feel seamless across all devices"
  //     },
  //     {
  //       title: "3. Development",
  //       desc: "This is the part where I take the designs ideas and transform them into code. Choosing which tools and technologies that were best for the application. Each decision was made to ensure the application was fast, responsive, and easy to maintain"
  //     },
  //     {
  //       title: "4. Deployment",
  //       desc: "After thorough bug bashing and ensuring the application provides excellent user experience and responsive across all device screens. I deployed the application using Vercel. The result is a production ready invoicing tool built for real world use"
  //     }
  //   ],
  //   features:[
  //     "Fully responsive across screen sizes",
  //     "Full E-commerce flow: browse, add to cart functionality",
  //     "Cart management with accurate size & quantity tracking",
  //     "Smooth UI transitions and Animations",    
  //     "Persistent cart items",  
  //   ]
  // },
  // {
  //   id: 3,
  //   title: "Anime Horizon",
  //   link: "https://animehorizon.vercel.app/",
  //   gitLink: "https://github.com/j0hnnyli/AnimeHorizon",
  //   tags: ["NextJS", "Tailwind", "API", "Typescript", "Shadcn-UI"],
  //   desc: "Web application for anime fans to explore new titles, track favorites, and personalize their watchlist with ease",
  //   img : "/projectpage/animehorizonlaptop.png",
  //   theCreativeProcess: [
  //     {
  //       title: "1. Discovery",
  //       desc: "The idea for Anime Horizon was born form me being an anime fan. I wanted to create a space where users could explore the vast world of anime and save their favorites to a personal list. The goal was to make discovering new titles easy, fun, and personalized."
  //     },
  //     {
  //       title: "2. Design",
  //       desc: "The design process for Anime Horizon involved researching visiually pleasing layouts, then blending those patterns with my own ideas. I focused on clear visuals and smooth user flow to make browsing and saving anime titles feel effortless across all devices"
  //     },
  //     {
  //       title: "3. Development",
  //       desc: "This is the part where I take the designs ideas and transform them into code. Choosing which tools and technologies that were best for the application. Each decision was made to ensure the application was fast, responsive, and easy to maintain"
  //     },
  //     {
  //       title: "4. Deployment",
  //       desc: "After thorough bug bashing and ensuring the application provides excellent user experience and responsive across all device screens. I deployed the application using Vercel. The result is a production ready invoicing tool built for real world use"
  //     }
  //   ],
  //   features:[
  //     "Fully responsive across screen sizes",
  //     "Browse the vase world of anime",
  //     "Search anime titles dynamically",
  //     "Add/remove anime to personal anime list",
  //     "Persistent personal anime list",
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Quizes",
  //   link: "https://quizes-one.vercel.app/",
  //   gitLink: "https://github.com/j0hnnyli/quizes",
  //   tags: ["Typescript", "Vue", "Tailwind", "GSAP"],
  //   desc: "Quiz web application developed to help beginner programmers to test their knowledge on various programming languages.",
  //   img : "/projectpage/quizeslaptop.png",
  //   theCreativeProcess: [
  //     {
  //       title: "1. Discovery",
  //       desc: "The idea for Quizes was born from my interest in helping beginner programmers to test their knowledge through interactive learning. I wanted to create a simple, engaging tool where users could test themselves on programming langauges"
  //     },
  //     {
  //       title: "2. Design",
  //       desc: "The design process for Quizes began from researching other quiz platforms. I aimed to build a clean and user friendly interface with legible typography and smooth transitions"
  //     },
  //     {
  //       title: "3. Development",
  //       desc: "I was very exited for the development phrase for Quizes, it was a chance to transform the designs ideas into code using new technologies. The idea of building something impactful that could help other programmers made the process even more meaningful"
  //     },
  //     {
  //       title: "4. Deployment",
  //       desc: "After thorough bug bashing and ensuring the application provides excellent user experience and responsive across all device screens. I deployed the application using Vercel. The result is a production ready invoicing tool built for real world use"
  //     }
  //   ],
  //   features:[
  //     "Fully responsive across screen sizes",
  //     "Interactive quiz system for programming topics",
  //     "Smooth animations and transitions powered by GSAP",
  //     "Track correct/incorrect answers during quiz flow",
  //     "Engaging, responsive layout tailored for learning",
  //     "Great for beginner programmers testing knowledge"
  //   ]
  // },
  // {
  //    id: 5,
  //   title: "Desserts",
  //   link: "https://desserts-murex.vercel.app/",
  //   gitLink: "https://github.com/j0hnnyli/desserts",
  //   tags: ["NextJS", "Tailwind", "API", "Typescript", "Framer-motion", "Vitest"],
  //   desc: "A small landing page with smooth, eye-catching section transitions that keep things engaging",
  //   img : "/projectpage/dessertslaptop.png",
  //   theCreativeProcess: [
  //      {
  //       title: "1. Discovery",
  //       desc: "The idea for Desserts started as a fun side project to experiment with animation and improve my skills with Framer Motion. The goal was to create a visually pleasing landing page with smooth transitions that made the user experience more engaging."
  //     },
  //     {
  //       title: "2. Design",
  //       desc: "The design process focused on simplicity and visual impact. I created a clean, modern layout with bold typography and smooth section transitions, ensuring the content felt both lightweight and immersive across all devices."
  //     },
  //     {
  //       title: "3. Development",
  //       desc: "This phase was all about transforming the design into code and implementing the animation effects directly through development"
  //     },
  //     {
  //       title: "4. Deployment",
  //       desc: "After testing and refining animations through bug bashing and responsive checks, I deployed the application using Vercel. The result is a polished, lightweight site that showcases both design and animations."
  //     }
  //   ],
  //   features:[
  //     "Fully responsive across screen sizes",
  //     "Visually engaging scroll based section animations",
  //     "Clean and minimalist design for focus on visuals",
  //     "Built with testing"
  //   ]
  // },
]

export default projects;
