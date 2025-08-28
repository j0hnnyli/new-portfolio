'use client'

import { usePageTransition } from "@/components/context/PageTransitionContext";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: (popState : boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: popState ? 1 : 0,
      ease: 'easeIn',
    },
  }),
};

const AnimatePage = ({ children }: { children: ReactNode }) => {
  const { isPopState } = usePageTransition()

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      custom={isPopState}
    >
      {children}
    </motion.div>
  )
}

export default AnimatePage;