'use client'

import AnimateOverlay from "@/components/AnimateOverlay";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

let isFirstRender = true;

const AnimatePageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(isFirstRender ? false : true);
  const [showContent, setShowContent] = useState(isFirstRender ? false : true);
  
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false
      return;
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition : { 
        duration: 0.6, 
        delay: isFirstRender ? 0 : 0.8,
        ease: 'easeIn' 
      },
    },
  }

  return (
    <>
      <AnimateOverlay 
        showOverlay={showOverlay}
        showContent={showContent}
        setShowOverlay={setShowOverlay}
        setShowContent={setShowContent}
        pathname={pathname}
      />
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        custom={isFirstRender}
      >
        {children}
      </motion.div>
    </>
  )
}

export default AnimatePageTransition