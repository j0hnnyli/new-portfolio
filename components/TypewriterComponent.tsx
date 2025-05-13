'use client'

import Typewriter from 'typewriter-effect'

type Props = {
  strings: string[];
}

const TypewriterComponent = ({strings}: Props) => {
  return (
    <div 
      className='text-3xl lg:text-4xl tracking-widest font-playfair'
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