'use client'

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
  children : ReactNode;
  duration: number;
}

const Reveal = ({children, duration} : Props) => {
  return (
    <motion.div
      initial={{opacity: 0, scale: 0}}
      animate={{opacity: 1, scale: 1}}
      transition={{ease: 'easeInOut', duration: [duration]}}
    > 
      {children}
    </motion.div>
  )
}

export default Reveal