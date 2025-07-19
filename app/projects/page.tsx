import React from 'react'
import projects from '@/lib/content/projects'
import ProjectCard from '@/components/ProjectCard'
import SectionLabel from '@/components/SectionLabel'
import AnimatePageWrapper from '@/components/AnimatePageWrapper'

const page = () => {
  return (
    <AnimatePageWrapper>
      <div className='max_width pt-20 md:pt-24 '>
        <div className='px-5 py-10'>
          <SectionLabel
            label="Design Meets Code"
            title="Projects"
          />

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
    </AnimatePageWrapper>
  )
}

export default page