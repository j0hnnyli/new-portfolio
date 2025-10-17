import { MyWork } from "../types/Project";

const mywork : MyWork[] = [
  {
    id: 1,
    title: 'Cricri Curls',
    role: 'Software Engineer',
    img: '/mywork/cricricurls.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shopify', 'Framer Motion', 'Vercel', 'GitHub', 'GraphQL', 'ShadcnUI'],
    link:'https://www.cricricurls.com/',
  },
  {
    id: 2,
    title: 'CPRI',
    role: 'Web Developer',
    tags: ['SquareSpace', 'CSS'],
    img: '/mywork/cpri.png',
    link:'https://www.cpriny.com/',
  },
  {
    id: 3,
    title : 'S Jones Portfolio',
    role: 'Sole Developer',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel', 'GitHub', 'Cloudinary', 'ShadcnUI'],
    img: '/mywork/sjones.png',
    link:'https://stephon-portfolio.vercel.app/',
  }
]

export default mywork;