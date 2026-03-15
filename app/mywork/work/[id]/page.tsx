import mywork from '@/lib/content/mywork';
import { NavLinkWrapper } from '@/components/NavLink';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import WorkNavFooter from '../../WorkNavFooter';
import Link from 'next/link';
import Grid from '@/components/Grid';
import { MdArrowOutward } from "react-icons/md";
import Highlights from '../Highlights';

type MyWorkPage = {
  params : Promise<{ id : string}>
}

export default async function MyWorkPage({ params }: MyWorkPage) {
  const { id } = await params;
  const work = mywork.find((work) => work.id === Number(id));
  const currentIndex = mywork.findIndex((work) => work.id === Number(id));

  if(!work) return null;

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

              <p className="text-third_color/80 text-xs my-5">Project 0{currentIndex + 1} / 0{mywork.length}</p>

              <div className='flex flex-col md:flex-row gap-5 items-start justify-between md:items-end'>
                <h2 className='text-6xl font-playfair'>
                  {work.title}
                </h2>
                <Link href={work.link} target='_blank' className="bg-third_color py-3 px-6 uppercase text-xs text-primary_color flex items-center gap-2 group">
                  <div className="h-[8px] w-[8px] rounded-full bg-green-400 animate-pulse" />
                  <span>view live site</span>
                  <MdArrowOutward size={15} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'/>
                </Link>
              </div>

              <div className='mt-10 rounded-[10px] overflow-hidden border'>
                <div className='flex flex-col md:flex-row '>
                  <div className='p-5 border w-full bg-primary_color'>
                    <p className='uppercase opacity-70 text-xs'>Role</p>
                    <p className='font-fraunces'>{work.role}</p>
                  </div>
                  <div className='p-5 border w-full bg-primary_color'>
                    <p className='uppercase opacity-70 text-xs'>Location</p>
                    <p className='font-fraunces'>{work.location}</p>
                  </div>
                  <div className='p-5 border w-full bg-primary_color'>
                    <p className='uppercase opacity-70 text-xs'>Type</p>
                    <p className='font-fraunces'>Professional · Client Work</p>
                  </div>
                </div>
                <div className='w-full relative'>
                  <Image 
                    className='object-contain w-full'
                    src={work.img}
                    alt={work.title}
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

          <Highlights work={work}/>

          <div className='py-20'>
            <div className='flex flex-col items-start justify-between'>
              <div className="flex items-center gap-5">
                <div className="w-10 h-[2px] bg-third_color"/>
                <p className="uppercase text-sm text-third_color">In Action</p>
              </div>
              <p className='font-fraunces text-5xl'>
                <span>Project</span>
                <span className='text-third_color italic'> Walkthrough</span>
              </p>
            </div>
            
            <div className='mt-6'>
              <video 
                src={work.videoSrc}
                loop
                autoPlay
                muted
                className='w-full h-auto rounded-lg'
              />
            </div>
          </div>

        </div>
      </div>
      <WorkNavFooter myworks={mywork} id={id}/>
    </>
  );
}