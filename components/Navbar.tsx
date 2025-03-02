import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoCodeWorking } from "react-icons/io5";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import Link from 'next/link';
import HoverTip from './HoverTip';

const Navbar = () => {
  return (
    <div className='hidden absolute -left-14 bottom-1/2 transform translate-y-1/2 z-50 md:inline'>
      <nav className='flex flex-col items-center gap-3 text-white  p-2 border border-primary_green rounded-full mx-auto bg-black'>
        <h2 className='text-3xl font-bold text-primary_green'>JL</h2>
        <HoverTip
          tip='Home'
        >
          <Link href='/'>
            <FaHouse className='text-3xl p-1 rounded-full hover:text-primary_green'/>
          </Link>
        </HoverTip>
        
        <HoverTip
          tip='Skills'
        >
          <Link href='/skills'>
            <IoCodeWorking className='text-3xl p-1 rounded-full hover:text-primary_green'/>
          </Link>
        </HoverTip>

        <HoverTip 
          tip='Projects'
        >
          <Link href="/projects">
            <LuLayoutPanelLeft className='text-3xl p-1 rounded-full hover:text-primary_green'/>
          </Link>
        </HoverTip>

        <HoverTip
          tip='Contact'
        >
          <Link href="/contact">
            <IoIosContact className='text-3xl p-1 rounded-full hover:text-primary_green'/>
          </Link>
        </HoverTip>
      </nav>
    </div>
  )
}

export default Navbar
