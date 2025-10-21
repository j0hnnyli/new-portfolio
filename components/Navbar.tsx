import React from 'react'
import NavLink from './NavLink'
import ChatBoxLink from './ChatBoxLink'
import { NavLinkWrapper } from './NavLink'

const Navbar = () => {
  return (
    <div className='hidden md:flex justify-center items-center fixed w-full top-0 h-24 z-50 bg-primary_color'>
      <nav className='max_width w-full p-5 flex items-center justify-between'>
        <NavLinkWrapper href="/">
          <div className='font-bold text-xl'>
            <h2>Johnny</h2>
            <h2>Li _ </h2>
          </div>
        </NavLinkWrapper>

        <div className='font-bold flex items-center gap-5 relative'>
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

