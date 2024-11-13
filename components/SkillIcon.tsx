'use client'

import { ReactNode, useEffect, useState} from 'react'
import ReactCardFlip from 'react-card-flip'

type Props = {
  children: ReactNode,
  title: string,
}

const SkillIcon = ({children, title} : Props) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipped(true)
      setTimeout(() => setIsFlipped(false), 500)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      className='w-full h-[100px]'
    >
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
        <div>
          {children}
        </div>

        <div className='flex items-center justify-center h-[100px] w-full'>
          <h2 className='text-white font-bold tracking-wide text-3xl'>{title}</h2>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default SkillIcon