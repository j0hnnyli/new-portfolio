'use client'

import { fadeIn, staggerContainer } from '@/lib/motions';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  aboutMeParagraph1 : string;
  aboutMeParagraph2 : string;
}

const AboutMeContent = ({aboutMeParagraph1, aboutMeParagraph2} : Props) => {
  return (
    <motion.div 
      variants={staggerContainer(0.2, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once: true, amount : 0.2}}
      className="w-full md:w-[50%]"
    >
      <motion.p 
        variants={fadeIn('up', 'spring', 0.6)}
        className="text-xl"
      >
        {aboutMeParagraph1}
      </motion.p>

      <motion.p 
        variants={fadeIn('up', 'spring', 0.6)}
        className="text-xl mt-5"
      >
        {aboutMeParagraph2}
      </motion.p>

      <motion.div 
        variants={fadeIn('up', 'spring', 0.6)}
        className="mt-5 text-xl"
      >
        <p className="mb-2">Wanna know more about me?</p>
        <Link
          href="/juno"
          className="group flex items-center gap-2 py-3 px-5 rounded-lg border-2 border-secondary_color w-[230px] hover:border-third_color transition-colors duration-300 ease-in-out"
        >
          <div className="text-white flex items-center justify-center relative">
            <div 
              className="absolute w-[22px] h-[22px] bg-secondary_color rounded-full animate-ping group-hover:animate-none"
            />
            <span className="bg-secondary_color relative w-8 h-8 rounded-full flex items-center justify-center">
              <Image
                src="/juno.png"
                alt="juno-avatar"
                fill
                className="rounded-full object-cover object-top"
              />
            </span>
          </div>

          <p className="group-hover:hidden">Chat with Juno!</p>
          <p className=" hidden group-hover:inline">Hi, Let&apos;s Chat!</p>
        </Link>
      </motion.div>

    </motion.div>
  )
}

export default AboutMeContent