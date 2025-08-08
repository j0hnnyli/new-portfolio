import React from 'react'
import NavLink from './NavLink'
import ChatBoxLink from './ChatBoxLink'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden md:flex justify-center items-center fixed w-full top-0 h-24 z-50 bg-primary_color'>
      <nav className='max_width w-full p-5 flex items-center justify-between'>
        <Link href="/">
          <div className='font-bold text-xl'>
            <h2>Johnny</h2>
            <h2>Li _ </h2>
          </div>
        </Link>

        <div className='font-bold flex items-center gap-5 relative'>
          <NavLink name='Home' href='/'/>
          <NavLink name='Projects' href='/projects'/>
          <NavLink name='Contact' href='/contact'/>
          <ChatBoxLink />
        </div>
      </nav>
    </div>
  )
}

export default Navbar

