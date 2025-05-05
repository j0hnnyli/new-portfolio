'use client'

import Typewriter from 'typewriter-effect'

type Props = {
  strings: string[];
}

const TypewriterComponent = ({strings}: Props) => {
  return (
    <div 
      className='text-3xl md:text-4xl lg:text-5xl tracking-widest font-playfair'
    >
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true
        }}
      />
    </div>
  )
}

export default TypewriterComponent