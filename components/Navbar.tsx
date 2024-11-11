import React from 'react'
import { FaHouse } from "react-icons/fa6";
import { IoCodeWorking } from "react-icons/io5";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import Link from 'next/link';
import HoverTip from './HoverTip';

const Navbar = () => {
  return (
    <div className='fixed top-5 2xl:top-80 z-50 flex items-center justify-center w-full'>
      <nav className='flex items-center gap-3 text-white  py-2 px-6 border border-primary_green rounded-full mx-auto bg-black'>
        <h2 className='text-3xl font-bold text-primary_green'>JL</h2>
        <HoverTip
          tip='Home'
        >
          <Link href='/'>
            <FaHouse className='text-3xl p-1 rounded-full hover:bg-primary_green '/>
          </Link>
        </HoverTip>
        
        <HoverTip
          tip='Skills'
        >
          <Link href='/skills'>
            <IoCodeWorking className='text-3xl p-1 rounded-full hover:bg-primary_green'/>
          </Link>
        </HoverTip>

        <HoverTip 
          tip='Projects'
        >
          <Link href="/projects">
            <LuLayoutPanelLeft className='text-3xl p-1 rounded-full hover:bg-primary_green'/>
          </Link>
        </HoverTip>

        <HoverTip
          tip='Contact'
        >
          <Link href="/contact">
            <IoIosContact className='text-3xl p-1 rounded-full hover:bg-primary_green'/>
          </Link>
        </HoverTip>
      </nav>
    </div>
  )
}

export default Navbar