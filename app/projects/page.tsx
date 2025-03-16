import React from 'react'
import projects from '@/lib/content/projects'
import ProjectCard from '@/components/ProjectCard'

const page = () => {
  return (
    <div className='text-white'>
      <h2 className='text-5xl font-bold tracking-widest text-center'>My Projects</h2>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10 p-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project}/>
        ))}
      </div>
    </div>
  )
}

export default page