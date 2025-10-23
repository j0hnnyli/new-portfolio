'use client'

import { MyWork } from '@/lib/types/Project';
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
      className='flex flex-col md:flex-row gap-10'
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
        className='w-full'
      >
        <p className='text-secondary_color/60'>Location</p>
        <div className='w-full h-[1px] rounded-full bg-secondary_color my-5'/>
        <p className='text-secondary_color/60'>{work.location}</p>
      </motion.div>
    </motion.section>
  );
}