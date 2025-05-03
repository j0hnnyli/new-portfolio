import Link from 'next/link';
import React from 'react'

type Props = {
  name : string;
  href : string;
}

function NavLink({ name, href } : Props){
  return (
    <Link href={href} className='group relative cursor-pointer'>
      {name}
      <span className='absolute bottom-[-3px] left-0 h-[2px] bg-third_color w-full scale-x-0 group-hover:scale-x-100 origin-left duration-300 ease-in-out'/>
    </Link>
  )
}
export default NavLink