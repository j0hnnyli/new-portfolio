import Image from 'next/image'
import React from 'react'
import ProgressBarComponent from '@/components/ProgressBarComponent'
import { FaGithub, FaHtml5, FaCss3, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiSupabaseFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";


const page = () => {
  return (
    <div className='text-white flex flex-col md:flex-row gap-3 '>
      <div className='w-full p-2'>
        <h2 className='uppercase text-5xl tracking-widest text-center font-bold mb-5'>Skills</h2>
        <Image
          src="/puzzle.png"
          alt="puzzles"
          width={300}
          height={200}
          className='w-full'
        />
      </div>

      <div className='w-full p-2'>
        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-HTMLCSS_mix font-bold tracking-widest text-xl'>HTML/CSS</p>
            <div className='flex items-center gap-3 text-2xl'>
              <FaHtml5 className='text-HTML_color'/>
              <FaCss3 className='text-CSS_color'/>
            </div>
          </div>
          <ProgressBarComponent progress={90} color='#6b7280'/>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-Javascript_color font-bold tracking-widest text-xl'>Javascript</p>
            <IoLogoJavascript className='text-2xl text-Javascript_color'/>
          </div>
          <ProgressBarComponent progress={80} color='#eab308'/>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-Typescript_color font-bold tracking-widest text-xl'>Typescript</p>
            <SiTypescript className='text-2xl text-Typescript_color'/>
          </div>
          <ProgressBarComponent progress={80} color='#1d4ed8'/>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-React_color font-bold tracking-widest text-xl'>React</p>
            <FaReact className='text-2xl text-React_color'/>
          </div>
          <ProgressBarComponent progress={80} color='#38bdf8'/>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-Nextjs_color font-bold tracking-widest text-xl'>NextJs</p>
            <RiNextjsFill className='text-2xl text-Nextjs_color'/>
          </div>
          <ProgressBarComponent progress={80} color='#334155'/>
        </div>
        
        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-Tailwind_color font-bold tracking-widest text-xl'>Tailwind CSS</p>
            <RiTailwindCssFill className='text-2xl text-Tailwind_color'/>
          </div>
          <ProgressBarComponent progress={85} color='#38bdf8'/>
        </div>

        <div className='mb-5'>
          <div className='flex items-center justify-between'>
            <p className='text-Nodejs_color font-bold tracking-widest text-xl'>NodeJS</p>
            <FaNodeJs className='text-2xl text-Nodejs_color'/>
          </div>
          <ProgressBarComponent progress={70} color='#166534'/>
        </div>

        <div>
          <h2 className='uppercase text-3xl tracking-widest font-bold'>Others Skills:</h2>
          <div className='flex gap-3 my-3'>
            <div className='flex flex-col items-center justify-end'>
              <FaGithub className='text-3xl text-slate-600'/>
              <h2>GitHub</h2>
            </div>
            
            <div className='flex flex-col items-center justify-end'>
              <RiSupabaseFill className='text-3xl text-green-500'/>
              <h2>Supabase</h2>
            </div>
            
            <div className='flex flex-col items-center justify-end'>
              <SiMongodb className='text-3xl text-green-700'/>
              <h2>MongoDB</h2>
            </div>
            
            <div className='flex flex-col items-center justify-end'>
              <BiLogoPostgresql className='text-3xl text-blue-500'/>
              <h2>Postgresql</h2>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}

export default page