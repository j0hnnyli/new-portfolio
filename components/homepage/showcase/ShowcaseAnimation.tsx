'use client'

import Lottie from 'lottie-react';
import desktopAnimationData from '@/assets/laptopanimation.json';

const ShowcaseAnimation = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Lottie animationData={desktopAnimationData}/>
    </div>
  )
}

export default ShowcaseAnimation