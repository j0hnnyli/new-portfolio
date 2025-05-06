'use client'

import { fadeIn, staggerContainer } from '@/lib/motions';
import { motion } from 'framer-motion'

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
    </motion.div>
  )
}

export default AboutMeContent