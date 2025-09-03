'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motions';
import { twMerge } from 'tailwind-merge';

type ProcessSectionProps = {
  myProcess : {title : string, desc : string}[]
}

export default function ProcessSection({ myProcess }: ProcessSectionProps) {
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
          variants={fadeIn('left', 'spring')} 
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
  );
}