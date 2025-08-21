'use client'

import AnimateOverlay from "@/components/AnimateOverlay";
import { motion } from "framer-motion";
import { ReactNode } from "react";


const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition : { 
      duration: 0.6, 
      delay: 0.8,
      ease: 'easeIn' 
    },
  },
}

const AnimatePageTransition = ({ children }: { children: ReactNode }) => {

  return (
    <>
      <AnimateOverlay />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.div>
    </>
  )
}

export default AnimatePageTransition