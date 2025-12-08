'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motions';
import { BsPersonCircle } from "react-icons/bs";

export default function TestimonialCard({
  name,
  img,
  title,
  feedback,
  date
}: {
  name: string;
  img: string | null;
  title: string;
  feedback: string;
  date: string;
} ){
  return (
    <motion.div
      variants={fadeIn('up', 'spring')} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: 0.25 }}
      className='py-10 px-6 relative rounded-lg shadow-lg bg-gradient-to-br from-primary_color/90 to-primary_color/60 border border-secondary_color/20 overflow-hidden'
    >  
      <h3
        className="absolute top-10 -right-14 rotate-45 bg-third_color text-primary_color text-xs uppercase py-1 px-10 shadow-md"
      >
        What the client said
      </h3>

      <div className='flex items-center gap-4'>
        {img ? (
          <Image
            src={img}
            alt={name}
            width={56}
            height={56}
            className='rounded-full w-14 h-14 object-cover shadow-md'
          />
        ) : (
          <BsPersonCircle className='w-14 h-14 rounded-full text-secondary_color/40' />
        )}

        <div>
          <p className='font-semibold font-playfair text-lg'>
            {name}
          </p>

          <p className='text-sm italic text-secondary_color/70'>
            {title}
          </p>

          <p className='text-xs text-secondary_color/40'>
            {date}
          </p>
        </div>
      </div>

      <FaQuoteLeft className='text-4xl text-third_color/70 my-6' />

      <p className='text-base text-secondary_color/90'>
        {feedback}
      </p>
    </motion.div>
  )
}