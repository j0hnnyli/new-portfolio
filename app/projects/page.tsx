import React from 'react'
import projects from '@/lib/content/projects'
import Carousel from '@/components/Carousel'

const page = () => {
  return (
    <div className='text-white'>
      <h2 className='text-5xl font-bold tracking-widest text-center'>My Projects</h2>
      <Carousel projects={projects}/>
    </div>
  )
}

export default page