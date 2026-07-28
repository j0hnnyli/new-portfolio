import projects from '@/lib/content/projects';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { NavLinkWrapper } from '@/components/NavLink';
import WorkNavFooter from '../../WorkNavFooter';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Grid from '@/components/Grid';
import { FaGithub } from "react-icons/fa";
import Features from '../Features';
import CreativeProcess from '../CreativeProcess';

type ProjectPageProps = {
  params: Promise<{id: string}>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const id = (await params).id;
  const project = projects.find((project) => project.id === Number(id))
  const currentIndex = projects.findIndex((project) => project.id === Number(id));

  if(!project) return;

  return (
    <>
      <div className='mt-24'>
        <div className='max_width px-5 py-10'>
          <div className='relative'>
            <Grid mode="light"/>
            <div className='relative z-10'> 
              <NavLinkWrapper 
                href="/mywork" 
                className="inline-flex items-center gap-2 text-secondary_color/60 hover:text-third_color transition-colors group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Back to My Work
              </NavLinkWrapper>

              <p className="text-third_color/80 text-xs my-5">Project 0{currentIndex + 1} / 0{projects.length}</p>

              <div className='flex flex-col md:flex-row gap-5 items-start justify-between md:items-end'>
                <h2 className='text-6xl font-playfair'>
                  {project.title}
                </h2>

                <div className='flex gap-5'>
                  <Link href={project.link} target='_blank' className="bg-third_color py-3 px-6 uppercase text-xs text-primary_color flex items-center gap-2 group">
                    <div className="h-[8px] w-[8px] rounded-full bg-green-400 animate-pulse" />
                    <span>live demo</span>
                    <MdArrowOutward size={15} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'/>
                  </Link>
                  <Link href={project.gitLink} className='py-3 px-6 uppercase flex items-center gap-2 text-xs bg-secondary_color/90 text-primary_color hover:bg-secondary_color/100 transition-colors duration-300 ease-in-out'>
                    <FaGithub/>
                    <span>github</span>
                  </Link>
                </div>
              </div>

              <div className='mt-10 rounded-[10px] overflow-hidden border'>
                <div className='flex flex-col md:flex-row '>
                  <div className='p-5 border w-full bg-primary_color'>
                    <p className='uppercase opacity-70 text-xs'>Type</p>
                    <p className='font-fraunces'>Personal Project</p>
                  </div>
                  <div className='p-5 border w-full bg-primary_color'>
                    <p className='uppercase opacity-70 text-xs'>Featured Tech</p>
                    <div className='font-fraunces'>
                      {project.tags.slice(0,3).map((tag, index) => (
                        <span key={tag}>{tag} {index !== project.tags.slice(0,3).length -1 && "· "}</span>
                      ))}
                    </div>
                  </div>
                  <div className='p-5 border w-full bg-primary_color'>
                    <p className='uppercase opacity-70 text-xs'>Status</p>
                    <div className='flex gap-2 items-center uppercase text-green-500 animate-pulse'>
                      <div className="h-[8px] w-[8px] rounded-full bg-green-400 " />
                      <span className='font-fraunces'>live</span>
                    </div>
                  </div>
                </div>
                <div className='w-full relative'>
                  <Image 
                    className='object-contain w-full'
                    src={project.img}
                    alt={project.title}
                    width={700}
                    height={400}
                  />
                  <div 
                    className="bg-primary_color py-3 px-6 uppercase text-xs text-secondary_color flex items-center gap-2 group absolute bottom-5 left-5"
                  >
                    <div className="h-[8px] w-[8px] rounded-full bg-green-400 animate-pulse" />
                    <span>view live site</span>
                  </div>
                </div>
              </div>
            </div>            
          </div>

          <Features project={project}/>
          
          <CreativeProcess theCreativeProcess={project.theCreativeProcess} />
        </div>
      </div>
      <WorkNavFooter myworks={projects} id={id}/>
    </>
  );
}