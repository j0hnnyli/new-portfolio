'use client'

import dynamic from 'next/dynamic';
import desktopAnimationData from '@/assets/laptopanimation.json';
import { twMerge } from 'tailwind-merge';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

type props = {
  isMobileMenu?: boolean;
}

const ShowcaseAnimation = ({isMobileMenu = false}: props) => {
  return (
    <div className={twMerge('w-full overflow-hidden lg:flex', isMobileMenu ? '' : 'hidden')}>
      <Lottie animationData={desktopAnimationData} className='scale-[1.2]'/>
    </div>
  )
}

export default ShowcaseAnimation