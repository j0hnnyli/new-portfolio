import SectionLabel from '@/components/SectionLabel';
import { testimonials } from '@/lib/content/testimonials';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonial = testimonials[0];

  return (
    <section className='bg-secondary_color py-16'>
      <div className='max_width px-5'>
        <SectionLabel
          label='What Clients Say'
          title='Testimonials'
          color='primary_color'
        />

        <div className='mt-10 flex justify-center'>
          <div className='relative bg-primary_color p-8 md:p-10 max-w-2xl rounded-3xl shadow-xl'>
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
          </div>
        </div>
      </div>
    </section>
  );
}
