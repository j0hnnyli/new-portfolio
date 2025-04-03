'use client'
import Typewriter from 'typewriter-effect'

type Props = {
  strings: string[];
}

const TypewriterComponent = ({strings}: Props) => {
  return (
    <div className='text-white text-2xl tracking-widest'>
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