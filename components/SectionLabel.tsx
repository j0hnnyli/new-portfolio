'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/lib/motions';
import { usePageTransition } from './context/PageTransitionContext';

type Props = {
  color? : 'primary_color' | 'secondary_color';
  label : string;
  title: string;
}

const SectionLabel = ({ 
  color = 'secondary_color',
  label, 
  title
} : Props ) => {
  const { isPopState } = usePageTransition();

  return (
    <motion.div 
      variants={staggerContainer(0.2, isPopState ? 1.2 : 0.2)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2}}
      className="flex flex-col items-start"
    >
      <motion.div 
        variants={fadeIn('down', 'spring')}
        className={`border border-${color} rounded-full flex items-center gap-2 px-2`}
      >
        <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
        <p className={`text-sm text-${color}`}>{label}</p>
      </motion.div>

      <motion.h2 
        variants={fadeIn('right', 'spring')}
        className={`text-${color} font-playfair italic text-4xl font-bold`}
      >
        {title}
      </motion.h2>
    </motion.div>
  )
}

export default SectionLabel