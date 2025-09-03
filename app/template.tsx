'use client'

import { usePageTransition } from "@/components/context/PageTransitionContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (isPopState : boolean) =>  ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: isPopState ? 1 : 0,
      ease: "easeIn",
    },
  })
};

const AnimatePage = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const { isPopState, setShowOverlay } = usePageTransition();

  return (
    <motion.div
      key={pathname} 
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit=""
      custom={isPopState}
      onAnimationStart={() => {
        if(!isPopState){
          setShowOverlay(false)
        }
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePage;