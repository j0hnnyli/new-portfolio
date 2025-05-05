import React from 'react'
import Form from './Form'
import SectionLabel from '@/components/SectionLabel'

const page = () => {
  return (
    <div className='pt-20 md:pt-24'>
      <div className='flex flex-col md:flex-row justify-between gap-5 py-10 px-5 max_width'>
        <SectionLabel
          label="Contact Me"
          title="Let's Get in Touch"
        />
        
        <Form/>
      </div>
    </div>
  )
}

export default page