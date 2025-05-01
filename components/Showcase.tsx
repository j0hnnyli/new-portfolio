import Image from 'next/image'
import React from 'react'
import TypewriterComponent from './TypewriterComponent'
import { FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from 'next/link';


const Showcase = () => {
  return (
    <div className='h-screen max-h-[850px] relative'>
      <div className='pt-20 md:pt-24 px-5 flex flex-col-reverse md:flex-row items-center justify-between'>
        <div className='w-full md:w-[60%] text-5xl md:text-6xl lg:text-7xl flex flex-col gap-5 mt-5 md:mt-0'>
          <h2 className='font-bold'>Hi, I&apos;m Johnny</h2>
          <TypewriterComponent
            strings={["Frontend Developer", "Anime Fan", "Fitness Enthusiast"]}
          />
        </div>

        <div className='overflow-hidden rounded-bl-full rounded-br-full w-[300px] h-[350px] md:h-[70vh] max-h-[600px]'>
          <Image 
            src='/developer.jpg' 
            alt='developer'
            width={300}
            height={500}
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      <div className='absolute bottom-0 w-full flex items-center justify-between p-5'>
        <div className='flex items-center gap-2'>
          <FaArrowDown className='text-2xl animate-bounce'/>
          <p>Scroll Down</p>
        </div>

        <div className='flex gap-5 text-3xl'>
          <Link 
            href='https://github.com/j0hnnyli' 
            target='_blank'
            className='cursor-pointer hover:text-[var(--third-color)]'
          >
            <FaGithub/>
          </Link>

          <Link 
            href='https://www.linkedin.com/in/johnny-li-3a0482331' 
            target='_blank'
            className='cursor-pointer hover:text-[var(--third-color)]'
          >
            <FaLinkedinIn/>
          </Link>

          <Link 
            href='https://x.com/jojotech31' 
            target='_blank'
            className='cursor-pointer hover:text-[var(--third-color)]'
          >
            <FaXTwitter/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Showcase