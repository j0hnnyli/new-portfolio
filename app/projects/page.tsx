import React from 'react'
import projects from '@/lib/content/projects'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div className='max_width pt-20 md:pt-24 '>
      <div className='px-5 py-10'>
        <div className="flex flex-col items-start">
          <div className="border border-secondary_color rounded-full flex items-center gap-2 px-2" >
            <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
            <p className="text-sm text-secondary_color">Design Meets Code</p>
          </div>
          <h2 className="font-playfair text-4xl font-bold italic">
            Projects
          </h2>
        </div>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </section>
      </div>
    </div>
  )
}

export default page