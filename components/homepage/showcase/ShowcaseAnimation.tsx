'use client'

import dynamic from 'next/dynamic';
import desktopAnimationData from '@/assets/laptopanimation.json';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const ShowcaseAnimation = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Lottie animationData={desktopAnimationData} className='scale-[1.2]'/>
    </div>
  )
}

export default ShowcaseAnimation