import React from 'react'
import projects from '@/lib/content/projects'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'
import SectionLabel from '@/components/SectionLabel'

const page = () => {
  return (
    <>
      <div className='mt-24'>
        <div className='px-5 py-10 max_width'>
          <SectionLabel 
            label="Design Meets Code" 
            title="Projects" 
          />

          <section 
            className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
              />
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page