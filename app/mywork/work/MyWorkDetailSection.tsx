'use client'

import { MyWork } from '@/lib/types/Project';
import Link from 'next/link';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from '@/lib/motions';
import { usePageTransition } from '@/components/context/PageTransitionContext';

type DetailSectionProps = {
  work : MyWork
}

export default function MyWorkDetailSection({ work }: DetailSectionProps) {
  const { isPopState } = usePageTransition();
  
  return (
    <motion.section 
      variants={staggerContainer(0.2, isPopState ? 1 : 0.2)}
      initial='hidden'
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col-reverse md:flex-row gap-10'
    >
      <motion.div 
        variants={fadeIn("up", "spring")}
        className='w-full'
      >
        <p className='text-secondary_color/60'>Role</p>
        
        <div className='w-full h-[1px] rounded-full bg-secondary_color my-5'/>

        <p className='text-secondary_color/60'>{work.role}</p>
      </motion.div>
    
      <motion.div 
        variants={fadeIn("up", "spring")}
        className='w-full'
      >
        <p className='text-secondary_color/60'>Technologies</p>
        <div className='w-full h-[1px] rounded-full bg-secondary_color my-5'/>

        <div className="flex flex-wrap gap-1">
          {work.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary_color bg-opacity-20 text-secondary_color/60 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    
      <motion.div 
        variants={fadeIn("up", "spring")}
        className='w-full flex items-center justify-center'
      >
        <Link 
          href={work.link}
          target='_blank'
          className="group w-44 h-44 flex items-center justify-center border rounded-full bg-third_color relative overflow-hidden"
        >
          <div className="absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 bg-secondary_color transition-transform duration-300 ease-in-out z-0"/>

          <h2 className="relative z-10 text-primary_color font-bold font-playfair tracking-wide text-2xl">
            Live Demo
          </h2>
        </Link>
      </motion.div>
    </motion.section>
  );
}