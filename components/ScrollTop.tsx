'use client'

import { FaChevronUp } from "react-icons/fa";

const ScrollTop = () => {

  const handleScrollTop = () => {
    scrollTo({
      top: 0,
      behavior : 'smooth'
    })
  }

  return (
    <button 
      onClick={handleScrollTop}
      className="group" 
    >
      <FaChevronUp className="text-2xl group-hover:-translate-y-1 duration-300 transition-transform ease-in-out"/>
    </button>
  )
}

export default ScrollTop