"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const paths = {
  "/": "Home",
  "/mywork": "My Work",
  "/contact": "Contact",
  "/juno": "Juno",
  "/mywork/work/1" : "Cricri Curls",
  "/mywork/work/2" : "CPRI",
  "/mywork/work/3" : "S Jones Portfolio",
  "/mywork/project/1": "InvoTracker",
  "/mywork/project/2": "Ascend",
  "/mywork/project/3": "Anime Horizon",
  "/mywork/project/4": "Quizes",
  "/mywork/project/5": "Desserts",
};

const overlayVariants = {
  initial: {
    y: "calc(100vh + 100px)",
    borderTopLeftRadius: "100% 20%",
    borderTopRightRadius: "100% 20%",
    borderBottomLeftRadius: "100% 20%",
    borderBottomRightRadius: "100% 20%",
  },
  animate: {
    y: "-200px",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    y: "calc(-100vh - 400px)",
    borderBottomLeftRadius: "100% 0%",
    borderBottomRightRadius: "100% 0%",
    transition: {
      y: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
      borderBottomLeftRadius: {
        delay: 0.25,
        duration: 0.35,
        ease: 'easeOut',
      },
      borderBottomRightRadius: {
        delay: 0.25,
        duration: 0.35,
        ease: 'easeOut',
      },
    },
  },
};
 
const contentVariants = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.5, 1],
    },
  },
};

type AnimateOverlayProps = {
  showOverlay: boolean;
  pathname: string;
  onExitComplete: () => void;
};

export default function AnimateOverlay({
  showOverlay,
  pathname,
  onExitComplete,
}: AnimateOverlayProps) {
  const [showContent, setShowContent] = useState(true);

  return (
    <AnimatePresence mode="wait" onExitComplete={onExitComplete}>
      {showOverlay && (
        <motion.div
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed top-0 left-0 w-full h-[calc(100vh+400px)] bg-secondary_color z-[100] pointer-events-none flex items-center justify-center"
        >
          {showContent && (
            <motion.div
              key={pathname}
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onAnimationEnd={() => {
                setShowContent(false);
              }}
              className="flex flex-col items-center justify-center h-screen w-full"
            >
              {pathname === "/juno" && (
              <div className="bg-secondary_color relative w-36 h-36 rounded-full flex items-center justify-center border-2 border-primary_color">
                <Image
                  src="/juno.png"
                  alt="juno-avatar"
                  fill
                  className="rounded-full object-cover object-top"
                />
              </div>
            )}

              <div className="flex flex-col-reverse items-center gap-5 w-full justify-center">
                <div className="w-3 h-3 bg-primary_color rounded-full" />
                <p className="text-primary_color text-5xl font-bold font-playfair tracking-widest text-center">
                  {paths[pathname as keyof typeof paths]}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}