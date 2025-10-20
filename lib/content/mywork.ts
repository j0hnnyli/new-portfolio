import { MyWork } from "../types/Project";

const mywork : MyWork[] = [
  {
    id: 1,
    title: 'Cricri Curls',
    role: 'Software Engineer',
    img: '/mywork/cricricurls.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify', 'Framer Motion', 'Vercel', 'GitHub', 'GraphQL', 'ShadcnUI', 'Jira'],
    link:'https://www.cricricurls.com/',
    videoSrc: '/mywork/videos/curls.mp4',
    location: 'New York, NY',
    highlights: [
      "Built with Next.js (14+) and Shopify in a headless CMS setup",
      "Converted Figma designs into fully responsive UIs using Tailwind CSS",
      "Fetched dynamic product data via GraphQL",
      "Added structured data (JSON-LD) to improve SEO",
      "Migrated hardcoded content into Shopify CMS for easier updates",
      "Collaborated on features and proposed dev-focused solutions",
      "Maintained clean code through GitHub pull requests",
      "Set up CI/CD pipeline using GitHub Actions and Vercel",
      "Managed tasks and progress in Jira"
    ],
  },
  {
    id: 2,
    title: 'CPRI',
    role: 'Web Developer',
    tags: ['SquareSpace', 'CSS'],
    location: 'New York, NY',
    img: '/mywork/cpri.png',
    link:'https://www.cpriny.com/',
    videoSrc: '/mywork/videos/cpri.mp4',
    highlights: [
      "Collaborated closely with the founder to align on vision, goals, and brand identity",
      "Redesigned and rebuilt the site using Squarespace with custom CSS for advanced styling",
      "Crafted a clean design tailored to the brand's audience",
      "Improved site structure and user flow for better UX",
      "Delivered a final product the founder was highly satisfied with",
      "Provided ongoing support for easy site management",
    ],
  },
  {
    id: 3,
    title : 'S Jones Portfolio',
    role: 'Sole Developer',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'GitHub', 'Cloudinary', 'ShadcnUI'],
    img: '/mywork/sjones.png',
    link:'https://stephon-portfolio.vercel.app/',
    videoSrc: '/mywork/videos/sjone.mp4',
    location: 'New York, NY',
    highlights: [
      "Developed a fast, responsive portfolio site using Next.js and TypeScript",
      "Built fully responsive layouts with Tailwind CSS and ShadcnUI components",
      "Integrated an audio player to showcase the client's live tracks",
      "Implemented smooth animations with Framer Motion",
      "Used Cloudinary for optimized image and video handling",
      "Designed with a focus on clean UI, strong UX, and performance",
      "Deployed the site with Vercel",
    ],
  }
]

export default mywork;