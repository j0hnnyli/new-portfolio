'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const AnimatePageWrapper = ({ children } : { children : ReactNode}) => {
  return (
    <motion.div
      initial={{y: 20, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: .75, ease: 'easeInOut'}}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePageWrapper