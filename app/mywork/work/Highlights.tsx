'use client'

import Link from 'next/link';
import { MdArrowOutward } from "react-icons/md";
import { twMerge } from 'tailwind-merge';
import { MyWork } from '@/lib/types/Project';
import { motion } from "framer-motion";
import { fadeIn } from '@/lib/motions';


type Props = {
  work : MyWork
}

function Highlights({ work } : Props) {
  return (
    <div className='pt-20 flex flex-col lg:flex-row gap-10 relative'>
      <motion.div 
        variants={fadeIn('right', 'spring')}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className='flex flex-col gap-5 w-full lg:w-[70%]'
      >
        <div className="flex items-center gap-5">
          <div className="w-10 h-[2px] bg-third_color"/>
          <p className="uppercase text-sm text-third_color">My Impact</p>
        </div>

        <div className='text-5xl font-fraunces'>
          <h3>Key highlights &</h3>
          <h3 className='text-third_color italic'>contributions</h3>
        </div>

        <div className='border-2 '>
          {work.highlights.map((highlight, index) => (
            <div key={highlight}
              className={twMerge('p-6 flex gap-5 items-center border-b-2 relative group hover:bg-secondary_color/20 transition-all duration-300 ease-in-out', index === work.highlights.length -1 && 'border-b-0')}
            >
              <div className='absolute left-0 w-[3px] bg-third_color h-full scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out'/>
              <span className='text-xs text-third_color'>{`0${index + 1}`}</span>
              <p className='text-sm'>{highlight}</p>
            </div>
          ))}
        </div>
      </motion.div>
    
      <motion.div 
        variants={fadeIn('left', 'spring')}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.25}}
        className='flex flex-col gap-5 w-full lg:w-[30%] lg:sticky lg:top-24 self-start'
      >
        <div className='border bg-white rounded-[5px]'>
          <p className='uppercase p-4 border-b text-xs opacity-70'>Tech Stack</p>
          <div className='p-4 flex flex-wrap gap-2'>
            {work.tags.map((tag) => (
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
              <span className='uppercase opacity-70'>role</span>
              <span className=''>{work.role}</span>
            </p>
            <p className='border-b py-3 flex items-center justify-between text-xs'>
              <span className='uppercase opacity-70'>type</span>
              <span className=''>Client Work </span>
            </p>
            <p className='border-b py-3 flex items-center justify-between text-xs'>
              <span className='uppercase opacity-70'>location</span>
              <span className=''>{work.location}</span>
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
          <Link href={work.link} target='_blank' className="flex items-center justify-between text-xs group">
            <span>Live Website</span>
            <MdArrowOutward size={15} className='group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'/>
          </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Highlights