'use client'

import SectionLabel from '@/components/SectionLabel';
import { testimonials } from '@/lib/content/testimonials';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/lib/motions';
import { usePageTransition } from '@/components/context/PageTransitionContext';

export default function Testimonials() {
  const { isPopState } = usePageTransition();

  return (
    <section className='bg-secondary_color py-16'>
      <div className='max_width px-5'>
        <SectionLabel
          label='What Clients Say'
          title='Testimonials'
          color='primary_color'
        />

        <motion.div 
          variants={staggerContainer(0.2, isPopState ? 1.2 : 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: true, amount: 0.2}}
          className='mt-10 flex justify-center'
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard(testimonial: {
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
      className='relative bg-primary_color p-8 md:p-10 max-w-2xl rounded-3xl shadow-xl'
    >
      <FaQuoteLeft className='text-4xl text-secondary_color/30 absolute top-6 left-6' />

      <p className='font-serif text-lg leading-relaxed mt-10'>
        {testimonial.testimonial}
      </p>

      <div className='w-16 h-1 bg-secondary_color/50 my-6 rounded'></div>

      <div className='flex items-center gap-4 mt-4'>
        <Image
          src={testimonial.img}
          alt={testimonial.name}
          width={50}
          height={50}
          className='rounded-full'
        />
        <div>
          <p className='font-semibold font-playfair'>
            {testimonial.name}
          </p>
          <p className='text-sm italic text-secondary_color/60'>
            {testimonial.title}
          </p>
        </div>
      </div>

      <p className='text-xs text-secondary_color/40 text-right mt-4'>
        {testimonial.date}
      </p>
    </motion.div>
  )
}