'use client'

import { Projects } from '@/lib/types/Project';
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motions';

type DetailSectionProps = {
  project : Projects
}

export default function DetailSection({ project }: DetailSectionProps) {
  
  return (
    <motion.section 
      variants={staggerContainer(0.2, 0.2)}
      initial='hidden'
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className='flex flex-col md:flex-row gap-10'
    >
      <motion.div 
        variants={fadeIn("up", "spring")}
        className='w-full'
      >
        <p className='text-secondary_color/60'>Overview</p>
        
        <div className='w-full h-[1px] rounded-full bg-secondary_color my-5'/>

        <p className='text-secondary_color/60'>{project.desc}</p>
      </motion.div>
    
      <motion.div 
        variants={fadeIn("up", "spring")}
        className='w-full'
      >
        <p className='text-secondary_color/60'>Technologies</p>
        <div className='w-full h-[1px] rounded-full bg-secondary_color my-5'/>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
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
        <p className='text-secondary_color/60'>Links</p>
        <div className='w-full h-[1px] rounded-full bg-secondary_color my-5'/>

        <div className="flex items-center gap-5">
          <Link href={project.gitLink} target='_blank' className="flex items-center gap-1  hover:text-third_color">
            <FaGithub className="text-xl cursor-pointer"/>
            <span className="text-lg font-playfair">
              GitHub
            </span>
          </Link>

          <Link href={project.link} target='_blank' className="flex items-center gap-1  hover:text-third_color">
            <FiExternalLink className="text-xl cursor-pointer"/>
            <span className="text-lg font-playfair">
              Live Demo
            </span>
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}