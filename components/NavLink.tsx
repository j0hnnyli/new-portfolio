'use client'

import Link from 'next/link';
import { usePageTransition } from './context/PageTransitionContext'; 
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  name : string;
  href : string;
}

export default function NavLink({ name, href } : Props){
  const { startTransition } = usePageTransition();

  return (
    <Link 
      href={href} 
      onClick={(e) => {
        e.preventDefault();
        startTransition(href);
      }}
      className='group relative cursor-pointer'
    >
      {name}
      <span className='absolute bottom-[-3px] left-0 h-[2px] bg-third_color w-full scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out'/>
    </Link>
  )
}

type NavLinkWrapperProps = {
  children : ReactNode, 
  href : string, 
  className ?: string
  onClick? : () => void;
}

export function NavLinkWrapper({ children, href, className, onClick } : NavLinkWrapperProps){
  const { startTransition } = usePageTransition();
  return (
    <Link 
    href={href} 
    onClick={(e) => {
        e.preventDefault();
        onClick?.();
        startTransition(href);
      }}
      className={twMerge('cursor-pointer', className)}
    >
      {children}
    </Link>
  )
}