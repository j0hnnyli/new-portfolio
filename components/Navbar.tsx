import React from 'react'
import NavLink from './NavLink'
import ChatBoxLink from './ChatBoxLink'
import { NavLinkWrapper } from './NavLink'

const Navbar = () => {
  return (
    <div className='hidden md:flex justify-center items-center fixed w-full top-0 h-24 z-50 bg-primary_color'>
      <nav className='max_width w-full p-5 flex items-center justify-between'>
        <NavLinkWrapper href="/">
          <h2 className='font-extrabold font-fraunces text-xl'>
            <span className=''>Johnny</span> 
            <span className='text-third_color ml-1'>Li</span>
            <span className='ml-1'>_</span>
          </h2>
        </NavLinkWrapper>

        <div className='font-bold flex items-center gap-5 relative font-fraunces'>
          <NavLink name='Home' href='/'/>
          <NavLink name='My Work' href='/mywork'/>
          <NavLink name='Contact' href='/contact'/>
          <ChatBoxLink />
        </div>
      </nav>
    </div>
  )
}

export default Navbar

