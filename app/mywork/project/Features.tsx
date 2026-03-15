'use client'

import { Projects } from '@/lib/types/Project';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion'
import { fadeIn } from '@/lib/motions';

type Props = {
  project : Projects
}

function Features({ project } : Props) {
  return (
  <div className='pt-20 flex flex-col lg:flex-row gap-10 relative'>
    <motion.div 
      variants={fadeIn("right", "spring")}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className='flex flex-col gap-16 lg:w-[70%]'
    >
      <div>
        <div className="flex items-center gap-5">
          <div className="w-10 h-[2px] bg-third_color"/>
          <p className="uppercase text-sm text-third_color">Overview</p>
        </div>

        <p className='mt-5 border-l-4 border-third_color pl-5 text-sm'>{project.desc}</p>
      </div>
      
      <div className='flex flex-col gap-5'>
        <div className="flex items-center gap-5">
          <div className="w-10 h-[2px] bg-third_color"/>
          <p className="uppercase text-sm text-third_color">features</p>
        </div>

        <h3 className='text-5xl font-fraunces'>What it <span className='text-third_color italic'>does</span></h3>
        
        <div className="grid grid-cols-1 border">
          {project.features.map((feat, index) => {

            return (
              <div
                key={feat}
                className="p-5 flex gap-5 items-center relative group hover:bg-secondary_color/20 transition-all duration-300 ease-in-out border"
              >
                <div className="absolute left-0 w-[3px] bg-third_color h-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out" />
                <span className="text-xs text-third_color">{`0${index + 1}`}</span>
                <p className="text-sm">{feat}</p>
              </div>
            )
          })}
        </div>
      </div>
    </motion.div>
    
    <motion.div 
      variants={fadeIn("left", "spring")}
      initial="hidden"
      whileInView="show"
      viewport={{once: true, amount: 0.25}}
      className='flex flex-col gap-5 w-full lg:w-[30%] lg:sticky lg:top-24 self-start'
    >
      <div className='border bg-white rounded-[5px]'>
        <p className='uppercase p-4 border-b text-xs opacity-70'>Tech Stack</p>
        <div className='p-4 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs py-1 px-2 bg-third_color/20 text-third_color">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className='border bg-white rounded-[5px]'>
        <p className='uppercase p-4 border-b text-xs opacity-70'>project details</p>
        <div className='p-4'>
          <p className='border-b py-3 flex items-center justify-between text-xs'>
            <span className='uppercase opacity-70'>type</span>
            <span className=''>Personal Project</span>
          </p>
          <div className='border-b py-3 flex items-center justify-between text-xs'>
            <p className='uppercase opacity-70'>status</p>
            <div className='text-green-500 flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse'/>
              <p>Live</p>
            </div>
          </div>
        </div>
      </div>

      <div className='border bg-white rounded-[5px]'>
        <p className='uppercase p-4 border-b text-xs opacity-70'>links</p>
        <div className='p-4'>
        <Link href={project.link} target='_blank' className="flex items-center justify-between text-xs group">
          <span>Live Website</span>
          <MdArrowOutward size={15} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'/>
        </Link>
        </div>
      </div>
    </motion.div>
  </div>
  )
}

export default Features