'use client'

import React, { ReactNode } from 'react'
import {motion} from 'framer-motion'

type Props = {
  children: ReactNode
}

const Template = ({children} : Props) => {
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

export default Template