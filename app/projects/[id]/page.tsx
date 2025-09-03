'use client'

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motions';
import { ArrowLeft } from 'lucide-react';
import { NavLinkWrapper } from '@/components/NavLink';
import { useParams } from 'next/navigation';
import projects from '@/lib/content/projects';
import Image from 'next/image';
import Footer from '@/components/Footer';
import SectionLabel from '@/components/SectionLabel';
import ProcessSection from './ProcessSection';
import DetailSection from './DetailSection';
import dynamic from 'next/dynamic';
import responsiveAnimationData from '@/assets/responsiveanimation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((project) => project.id === Number(params.id))

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
          <div className='max_width p-5 flex flex-col md:flex-row items-center justify-between'>
            <div className='w-3/4 md:w-full overflow-hidden'>
              <Lottie animationData={responsiveAnimationData} className=''/>
            </div>

            <div className='w-full'>
              <h2 className='text-primary_color font-playfair text-4xl text-center'>
                Features
              </h2>

              <motion.div 
                variants={staggerContainer(0.2, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once : true, amount: 0.2}}
                className='grid grid-cols-1 md:grid-cols-2 gap-5 text-primary_color font-playfair my-5'
              >
                {project.features.map((feat) => (
                  <motion.div
                    key={feat}
                    variants={fadeIn('up', 'spring')}
                    className='flex items-center gap-5 p-2'
                  >
                    <div className='w-3 h-3 bg-third_color rounded-full animate-pulse flex-shrink-0'/>
                    <p>{feat}</p>
                  </motion.div>
                ))}
              </motion.div>  
            </div>
          </div>
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