import React from 'react';
import mywork from '@/lib/content/mywork';
import { NavLinkWrapper } from '@/components/NavLink';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import MyWorkDetailSection from '../MyWorkDetailSection';
import WorkNavFooter from '../../WorkNavFooter';
import WorkHighlightSection from '../WorkHighlightSection';
import Link from 'next/link';
import ParallaxScrollContainer from '@/components/ParallaxScrollContainer';

type MyWorkPage = {
  params : Promise<{ id : string}>
}

export default async function MyWorkPage({ params }: MyWorkPage) {
  const { id } = await params;
  const work = mywork.find((work) => work.id === Number(id));

  if(!work) return null;

  return (
    <>
      <div className='mt-24'>
        <div className='max_width px-5 py-10'>
          <NavLinkWrapper 
            href="/mywork" 
            className="inline-flex items-center gap-2 text-secondary_color/60 hover:text-third_color transition-colors mb-5 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to My Work
          </NavLinkWrapper>

          <h2 className='text-6xl font-playfair'>
            {work.title}
          </h2>

          <section
            className="relative h-[200px] max-w-[350px] md:h-[400px] md:max-w-[700px] mx-auto my-10"
          >
            <Image
              src={work.img}
              alt="invo-tracker"
              fill
              priority
            />
            

            <ParallaxScrollContainer className='absolute -bottom-10 right-0 lg:-right-20'>
              <Link 
                href={work.link}
                target='_blank'
                className="group w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-full bg-third_color relative overflow-hidden"
              >
                <div className="absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 bg-secondary_color transition-transform duration-300 ease-in-out z-0"/>

                <h2 className="relative z-10 text-primary_color font-bold font-playfair">
                  Live site
                </h2>
              </Link> 
            </ParallaxScrollContainer>
          </section>

          <MyWorkDetailSection
            work={work}
          />
        </div>

        <div className='bg-secondary_color'>
          <WorkHighlightSection highlights={work.highlights} />
        </div>
        
        {/* <div className="py-10 px-5">
          <div 
            className="mx-auto max-w-4xl aspect-video border-[12px] border-neutral-800 rounded-[1.5rem] shadow-2xl overflow-hidden bg-black"
          >
          <video 
            src={work.videoSrc}
            loop
            autoPlay
            muted
            className='w-full h-auto rounded-lg'
          />
          </div>

          <Link
            href={work.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-third_color hover:bg-third_color transition-colors text-white font-medium px-6 py-3 rounded-full mx-auto block w-fit mt-5 relative group overflow-hidden"
          >
            <span className='relative z-10'>View Live Site</span>

            <div className="absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 bg-secondary_color transition-transform duration-300 ease-in-out z-0"/>

          </Link>
        </div> */}

        <WorkNavFooter myworks={mywork} id={id}/>
      </div>
    </>
  );
}