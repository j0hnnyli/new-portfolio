'use client';

import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/motions';

export default function TestimonialCard(testimonial: {
  name: string;
  img: string;
  title: string;
  testimonial: string;
  date: string;
} ){
  return (
    <motion.div
      variants={fadeIn('up', 'spring')} 
      key={testimonial.name}
      className='relative bg-primary_color p-8 md:p-10 max-w-2xl rounded-3xl shadow-xl w-full'
    >
      <FaQuoteLeft className='text-4xl text-secondary_color/30 absolute top-6 left-6' />

      <div className='flex items-center gap-4 mt-10'>
        <Image
          src={testimonial.img}
          alt={testimonial.name}
          width={50}
          height={50}
          className='rounded-full w-14 h-14 object-cover'
        />

        <div>
          <p className='font-semibold font-playfair'>
            {testimonial.name}
          </p>

          <p className='text-sm italic text-secondary_color/60'>
            {testimonial.title}
          </p>

          <p className='text-xs text-secondary_color/40 '>
            {testimonial.date}
          </p>
        </div>
      </div>

      <div className='w-16 h-1 bg-secondary_color/50 my-5 rounded'></div>
      
      <p className='font-serif leading-relaxed text-sm md:text-md '>
        {testimonial.testimonial}
      </p>
    </motion.div>
  )
}