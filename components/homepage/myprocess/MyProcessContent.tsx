'use client'

import { fadeIn, staggerContainer } from '@/lib/motions'
import { motion } from 'framer-motion'
import { myProcess } from '@/lib/content/myprocess'
import { twMerge } from 'tailwind-merge'


const MyProcessContent = () => {
  return (
    <motion.div 
      variants={staggerContainer(0.2, 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{once : true, amount: 0.2}}
      className="w-full md:w-[50%] flex flex-col gap-5"
    >
      {myProcess.map(({title, desc}, i) => (
        <motion.div 
          variants={fadeIn('left', 'spring', 0.6)} 
          key={title}
          className={twMerge("border-b border-secondary_color pb-10", myProcess.length - 1 === i && 'border-none')}
        >
          <h2 className="text-4xl font-playfair">{title}</h2>
          <p className="mt-5">
            {desc}
          </p>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default MyProcessContent