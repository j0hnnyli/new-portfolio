import Image from 'next/image'
import React from 'react'
// import ProgressBarComponent from '@/components/ProgressBarComponent'
import { FaGithub, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import Reveal from '@/components/Reveal'
import SkillIcon from '@/components/SkillIcon';

const page = () => {
  return (
    <div className='my-10'>
      <h2 className='uppercase text-5xl tracking-widest text-center font-bold mb-5 text-white'>Skills</h2> 
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center justify-center p-2'> 
        <SkillIcon title='HTML'>
          <FaHtml5 className='text-8xl text-HTML_color mx-auto'/> 
        </SkillIcon>
        
        <SkillIcon title='CSS'>
          <FaCss3 className='text-8xl text-CSS_color w-full'/> 
        </SkillIcon>

        <SkillIcon title='Javascript'>
          <IoLogoJavascript className='text-8xl text-Javascript_color w-full'/> 
        </SkillIcon>
        
        <SkillIcon title='Typescript'>
          <SiTypescript className='text-8xl text-Typescript_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="ReactJS">
          <FaReact className='text-8xl text-React_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="NextJS">
          <RiNextjsFill className='text-8xl text-Nextjs_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="NodeJS">
          <FaNodeJs className='text-8xl text-Nodejs_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="Tailwind">
          <RiTailwindCssFill className='text-8xl text-Tailwind_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="GitHub">
          <FaGithub className='text-8xl text-Github_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="Supabase">
          <RiSupabaseFill className='text-8xl text-Supabase_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="MongoDB">
          <SiMongodb className='text-8xl text-MongoDB_color w-full'/> 
        </SkillIcon>

        <SkillIcon title="Postgresql">
          <BiLogoPostgresql className='text-8xl text-Postgresql_color w-full'/> 
        </SkillIcon>
      </div>
    </div>
  )
}

export default page