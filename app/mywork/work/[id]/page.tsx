import React from 'react';
import mywork from '@/lib/content/mywork';
import { NavLinkWrapper } from '@/components/NavLink';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import MyWorkDetailSection from '../MyWorkDetailSection';
import WorkNavFooter from '../../WorkNavFooter';

type MyWorkPage = {
  params : Promise<{ id : string}>
}

export default async function MyWorkPage({ params }: MyWorkPage) {
  const { id } = await params;
  const work = mywork.find((work) => work.id === Number(id));

  if(!work) return null;

  return (
    <>
      <div className='mt-24 '>
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
          </section>

          <MyWorkDetailSection
            work={work}
          />
        </div>

        <WorkNavFooter myworks={mywork} id={id}/>
      </div>
    </>
  );
}