'use client'


import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

type ParallaxScrollContainerProps = {
  children : React.ReactNode;
  className?: string;
  scrollRange?: [number, number];
  translateRange?: [number, number];
}

const ParallaxScrollContainer = ( {
  children, 
  className,
  scrollRange = [0, 500],
  translateRange = [0, -60]
} : ParallaxScrollContainerProps ) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, scrollRange, translateRange);
  
  return (
    <motion.div 
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default ParallaxScrollContainer