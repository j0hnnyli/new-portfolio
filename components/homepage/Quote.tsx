'use client'

import { fadeIn, staggerContainer } from '@/lib/motions';
import { motion } from 'framer-motion';
import { FaChevronDown } from "react-icons/fa";

const Quote = () => {
  return (
    <section 
      className="py-20 px-5 text-center bg-secondary_color text-primary_color"
    >
      <motion.div 
        variants={staggerContainer(0.2, 0.2)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className="max_width"
      >
        <motion.h2 
          variants={fadeIn('up', 'spring')}
          className="text-2xl italic font-playfair mb-3"
        >
          <q>
            A good process builds great products
          </q>
        </motion.h2>
        <motion.p 
          variants={fadeIn('up', 'spring')}
          className="text-sm"
        >
          Here&apos;s how I combine structure and creativity together in my
          workflow.
        </motion.p>

        <motion.div variants={fadeIn('up', 'spring')}>
          <FaChevronDown className="mx-auto text-2xl mt-5 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Quote