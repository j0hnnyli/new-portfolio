'use client'

import { useState } from 'react'
import projects from '@/lib/content/projects'
import mywork from '@/lib/content/mywork'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import Grid from '@/components/Grid'
import MyWorkCard from '@/components/MyWorkCard'
import Image from 'next/image'

const MyWorkPage = () => {
  const [ tab, setTab ] = useState<"Professional" | "Personal">("Professional");

  return (
    <div className='mt-24'>
      <div className='h-[330px] relative flex items-center justify-center overflow-hidden'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" fill="none"
          className='absolute bottom-0 -right-20 md:-right-48 w-[400px] md:w-[1000px] h-auto'
        >
          <text
            x="0"
            y="175"
            fontFamily="Georgia, serif"
            fontSize="200"
            fontWeight="800"
            letterSpacing="-8"
            fill="none"
            stroke="#ddd8cc"
            stroke-width="1.5"
          >WORK</text>
        </svg>
        <Grid mode="light"/>
        <div className='text-left px-5 flex flex-col gap-5 max-w-[500px] relative z-10'>
            <div className="flex items-center gap-5">
              <div className="w-10 h-[2px] bg-third_color"/>
              <p className="uppercase text-sm text-third_color">Design meets code</p>
            </div>
            <h2 className="font-fraunces text-5xl">My <span className="text-third_color italic">Know</span></h2>
            <p className='opacity-70'>A collection of projects I've built from client sites to personal experiments</p>
        </div>
      </div>

      <div className='px-5 py-20 max_width'>
        <div className='p-1 bg-white font-dmMono flex gap-1 border rounded-[5px] w-fit mb-10'>
          <button className={twMerge('py-2 px-5 uppercase rounded-[5px] text-xs', tab === 'Professional' ? 'bg-third_color text-white' : 'hover:bg-gray-200')} onClick={() => setTab('Professional')}>
            Professional Work
            <span className='ml-2 bg-primary_color/20 py-1 px-2 rounded-full'>{mywork.length}</span>
          </button>
          
          <button className={twMerge('py-2 px-5 uppercase rounded-[5px] text-xs', tab === 'Personal' ? 'bg-third_color text-white' : 'hover:bg-gray-200')} onClick={() => setTab('Personal')}>
            Personal Projects
            <span className='ml-2 bg-primary_color/20 py-1 px-2 rounded-full'>{projects.length}</span>
          </button>
        </div>
        
        {tab === "Professional" && (
          <motion.section
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-10 grid grid-cols-1 md:grid-cols-2'  
          >
            {mywork.map((work, index) => (
                <MyWorkCard
                  key={work.title}
                  project={work}
                  href={`/mywork/work/${work.id}`}
                  index={index}
                />
              ))
            }
          </motion.section>
        )}

        {tab === "Personal" && (
          <motion.section 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-10 grid grid-cols-1 md:grid-cols-2' 
          >
            {projects.map((project, index) => (
              <MyWorkCard
                key={project.title}
                project={project}
                href={`/mywork/work/${project.id}`}
                index={index}
              />
            ))}
          </motion.section>
        )}

        {/* {tab === "Professional" && (
          <motion.section
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'  
          >
            {mywork.map((work) => (
              <MyWorkCard
                key={work.title}
                project={work}
                href={`/mywork/work/${work.id}`}
              />
              ))
            }
          </motion.section>
        )}

        {tab === "Personal" && (
          <motion.section 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-5'
          >
            {projects.map((project) => (
              <MyWorkCard
                key={project.title}
                project={project}
                href={`/mywork/project/${project.id}`}
              />
            ))}
          </motion.section>
        )} */}
      </div>
    </div>
  )
}

export default MyWorkPage