'use client'

import { NavLinkWrapper } from '@/components/NavLink';
import { fadeIn, staggerContainer } from '@/lib/motions';
import { motion } from 'framer-motion'
import Image from 'next/image';


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
        variants={fadeIn('up', 'spring')}
        className="text-xl"
      >
        {aboutMeParagraph1}
      </motion.p>

      <motion.p 
        variants={fadeIn('up', 'spring')}
        className="text-xl mt-5"
      >
        {aboutMeParagraph2}
      </motion.p>

      <motion.div 
        variants={fadeIn('up', 'spring')}
        className="mt-5 text-xl"
      >
        <p className="mb-2">Wanna know more about me?</p>
        <NavLinkWrapper
          href="/juno"
          className="group flex items-center gap-2 py-3 px-5 rounded-lg border-2 border-secondary_color w-[230px] hover:border-third_color hover:text-third_color"
        >
          <div className="text-white flex items-center justify-center relative">
            <div 
              className="absolute w-[22px] h-[22px] bg-third_color rounded-full animate-ping group-hover:animate-none"
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

          <p className="">Chat with Juno!</p>
        </NavLinkWrapper>
      </motion.div>
    </motion.div>
  )
}

export default AboutMeContent