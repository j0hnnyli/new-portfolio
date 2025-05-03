'use client'

import { div } from "framer-motion/client";
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
      className="absolute bottom-0 right-0 hover:text-third_color" 
    >
      <FaChevronUp className="text-2xl"/>
    </button>
  )
}

export default ScrollTop