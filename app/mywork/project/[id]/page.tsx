import projects from '@/lib/content/projects';
import Image from 'next/image';
import SectionLabel from '@/components/SectionLabel';
import ProcessSection from '../ProcessSection';
import DetailSection from '../DetailSection';
import FeatureSection from '../FeatureSection';
import { ArrowLeft } from 'lucide-react';
import { NavLinkWrapper } from '@/components/NavLink';
import WorkNavFooter from '../../WorkNavFooter';
import ParallaxScrollContainer from '@/components/ParallaxScrollContainer';
import Link from 'next/link';

type ProjectPageProps = {
  params: Promise<{id: string}>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const id = (await params).id
  const project = projects.find((project) => project.id === Number(id))

  if(!project) return;

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
            {project.title}
          </h2>

          <section
            className="relative h-[200px] max-w-[350px] md:h-[400px] md:max-w-[700px] mx-auto my-10"
          >
            <Image
              src={project.img}
              alt="invo-tracker"
              fill
              priority
            />

            <ParallaxScrollContainer className='absolute -bottom-10 right-0 lg:-right-20'>
              <Link
                href={project.link}
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

          <DetailSection
            project={project}
          />
        </div>

        <section className='bg-secondary_color'>
          <FeatureSection features={project.features}/>
        </section>

        <section className='flex flex-col md:flex-row justify-between gap-5 overflow-hidden max_width py-10 px-5'>
          <SectionLabel
            label="The Process"
            title="The Creative Flow"
          />

          <ProcessSection
            myProcess={project.theCreativeProcess}
          />
        </section>

        <WorkNavFooter id={id} myworks={projects}/>
      </div>
    </>
  );
}