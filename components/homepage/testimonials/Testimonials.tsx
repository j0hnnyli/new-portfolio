'use client'

import SectionLabel from '@/components/SectionLabel';
import { testimonials } from '@/lib/content/testimonials';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/lib/motions';
import { usePageTransition } from '@/components/context/PageTransitionContext';
import TestimonialCard from '@/components/TestimonialCard';

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
          className='mt-10 flex flex-col md:flex-row justify-center gap-5 '
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}