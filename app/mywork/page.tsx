'use client'

import { useState } from 'react'
import projects from '@/lib/content/projects'
import mywork from '@/lib/content/mywork'
import MyWorkCard from '@/components/MyWorkCard'
import SectionLabel from '@/components/SectionLabel'
import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'

const MyWorkPage = () => {
  const [ tab, setTab ] = useState<"Professional" | "Personal">("Professional");

  return (
    <div className='mt-24'>
      <div className='px-5 py-10 max_width'>
        <SectionLabel 
          label="Design Meets Code" 
          title="My Work" 
        />

        <div className='flex gap-2 mt-10'>
          <button 
            onClick={() => setTab("Professional")}
            className={
            twMerge('border border-secondary_color p-3 rounded-full group relative overflow-hidden',
              tab === "Professional" && 'bg-third_color text-primary_color'
              )
            }
          >
            <span className='text-sm md:text-md relative z-10 group-hover:text-primary_color duration-500'>
              Professional Work
            </span>
            
            <span 
              className='text-sm ml-2 opacity-80 relative z-10 group-hover:text-primary_color duration-500'
            >
              {mywork.length}
            </span>
            
            {tab !== 'Professional' && (
              <div className="absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-secondary_color z-0"/>
            )}
          </button>

          <button 
            onClick={() => setTab("Personal")}
            className={
              twMerge('border border-secondary_color p-3 rounded-full group relative overflow-hidden',
                tab === "Personal" && 'bg-third_color text-primary_color'
              )
            }
          >
            <span className='text-sm md:text-md relative z-10 group-hover:text-primary_color duration-500'>
              Personal Projects
            </span>

            <span className='text-sm ml-2 opacity-80 relative z-10 group-hover:text-primary_color duration-500'>
              {projects.length}
            </span>
            
            {tab !== 'Personal' && (
              <div className="absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-secondary_color z-0"/>
            )}
          </button>
        </div>
        
        {tab === "Professional" && (
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
        )}
      </div>
    </div>
  )
}

export default MyWorkPage