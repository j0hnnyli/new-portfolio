import projects from '@/lib/content/projects';
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import ProcessSection from './ProcessSection';
import DetailSection from './DetailSection';
import FeatureSection from './FeatureSection';
import { ArrowLeft } from 'lucide-react';
import { NavLinkWrapper } from '@/components/NavLink';

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
            href="/projects" 
            className="inline-flex items-center gap-2 text-secondary_color/60 hover:text-third_color transition-colors mb-5 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </NavLinkWrapper>

          <h2 className='text-6xl font-playfair'>
            {project.title}
          </h2>

          <section
            className="relative h-[200px] md:h-[400px] max-w-[700px] mx-auto my-10"
          >
            <Image
              src={project.laptopImg}
              alt="invo-tracker"
              fill
              priority
            />
          </section>

          <DetailSection
            project={project}
          />
        </div>

        <section className='bg-secondary_color my-10'>
          <FeatureSection features={project.features}/>
        </section>

        <section className='flex flex-col md:flex-row justify-between gap-5 overflow-hidden max_width px-5'>
          <SectionLabel
            label="The Process"
            title="The Creative Flow"
          />

          <ProcessSection
            myProcess={project.theCreativeProcess}
          />
        </section>
      </div>
      <Footer />
    </>
  );
}