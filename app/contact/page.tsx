import React from 'react'
import Form from './Form'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <div className='pt-20 md:pt-24'>
        <div className='flex flex-col md:flex-row justify-between gap-5 py-10 px-5 max_width'>
          <div 
            className="flex flex-col items-start"
          >
            <div 
              className='border border-secondary_color rounded-full flex items-center gap-2 px-2'
            >
              <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
              <p className='text-sm text-secondary_color'>Contact Me</p>
            </div>

            <h2 
              className='text-secondary_color font-playfair italic text-4xl font-bold'
            >
              Let&apos;s Get in Touch
            </h2>
          </div>
          
          <Form/>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default page