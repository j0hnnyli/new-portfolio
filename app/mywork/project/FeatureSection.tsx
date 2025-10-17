'use client'

import React from 'react';
import dynamic from 'next/dynamic';
import responsiveAnimationData from '@/assets/responsiveanimation.json';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motions';
import { usePageTransition } from '@/components/context/PageTransitionContext';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type FeatureSectionProps = {
  features : string[];
}

export default function FeatureSection( { features } : FeatureSectionProps) {
  const { isPopState } = usePageTransition();

  return (
    <div className='max_width p-5 flex flex-col md:flex-row items-center justify-between'>
      <div className='w-3/4 md:w-full overflow-hidden'>
        <Lottie animationData={responsiveAnimationData} className=''/>
      </div>

      <div className='w-full'>
        <h2 className='text-primary_color font-playfair text-4xl text-center'>
          Features
        </h2>

        <motion.div 
          variants={staggerContainer(0.2, isPopState ? 1 :0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once : true, amount: 0.2}}
          className='grid grid-cols-1 md:grid-cols-2 gap-5 text-primary_color font-playfair my-5'
        >
          {features.map((feat) => (
            <motion.div
              key={feat}
              variants={fadeIn('up', 'spring')}
              className='flex items-center gap-5 p-2'
            >
              <div className='w-3 h-3 bg-third_color rounded-full animate-pulse flex-shrink-0'/>
              <p>{feat}</p>
            </motion.div>
          ))}
        </motion.div>  
      </div>
    </div>
  );
}

{/* className='scale-[1.2]' */}