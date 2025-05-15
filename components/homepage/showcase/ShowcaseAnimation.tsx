'use client'

import Lottie from 'lottie-react';
import desktopAnimationData from '@/assets/laptopanimation.json';

const ShowcaseAnimation = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Lottie animationData={desktopAnimationData} className='scale-[1.2]'/>
    </div>
  )
}

export default ShowcaseAnimation