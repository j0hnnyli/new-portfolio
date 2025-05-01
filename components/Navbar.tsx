import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden md:flex justify-center items-center fixed w-full top-0 h-24 z-50 bg-[var(--primary-color)]'>
      <nav className='max_width w-full p-5 flex items-center justify-between'>
        <div className='font-bold text-xl'>
          <h2>Johnny</h2>
          <h2>Li _ </h2>
        </div>

        <div className='font-bold flex items-center gap-5 relative'>
          <NavLink name='Home'/>
          <NavLink name='About'/>
          <NavLink name='Projects'/>
          <NavLink name='Contact'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar


function NavLink({ name } : {name : string}){
  return (
    <button className='group relative cursor-pointer'>
      {name}
      <span className='absolute bottom-[-3px] left-0 h-[2px] bg-[var(--secondary-color)] w-full scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out'/>
    </button>
  )
}