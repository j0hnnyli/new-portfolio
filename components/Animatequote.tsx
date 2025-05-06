'use client'

import { staggerContainer } from '@/lib/motions';
import { motion } from 'framer-motion'

type Props = {
  text : string;
}

const Animatequote = ({ text } : Props) => {
  return (
    <motion.div
      variants={staggerContainer(0.02, 0.1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once : false, amount: 0.2 }}
    >
      {text.split('').map((char, i) => (
        <motion.span 
          key={i}
          variants={{
            hidden: { opacity: 0},
            show : {
              opacity: 1,
              transition: { duration: 0.05 }
            }
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default Animatequote