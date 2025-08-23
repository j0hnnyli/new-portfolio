"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const paths = {
  "/": "Home",
  "/projects": "Projects",
  "/contact": "Contact",
  "/juno": "Juno",
};

const overlayVariants = {
  initial: {
    top: "calc(100% + 100px)",
    borderTopLeftRadius: "100%",
    borderTopRightRadius: "100%",
  },
  animate: {
    top: "-200px",
    borderTopLeftRadius: "0",
    borderTopRightRadius: "0",
    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: {
    top: "calc(-100% - 300px)",
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    transition: {
      duration: 0.8,
      delay: 0.04,
      ease: [0.25, 1, 0.5, 1],
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
  showContent: boolean;
  setShowOverlay: (bool: boolean) => void;
  setShowContent: (bool: boolean) => void;
  pathname: string;
};

export default function AnimateOverlay({
  showOverlay,
  showContent,
  setShowContent,
  setShowOverlay,
  pathname,
}: AnimateOverlayProps) {

  return (
    <AnimatePresence mode="wait">
      {showOverlay && (
        <motion.div
          key={pathname}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onAnimationComplete={() => {
            setShowOverlay(false);
          }}
          className="fixed top-0 left-0 w-full h-[calc(100vh+200px)] bg-secondary_color z-[100] pointer-events-none flex items-center justify-center"
        >
          {showContent && (
            <motion.div
              variants={contentVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onAnimationComplete={() => {
                setShowContent(false);
              }}
              className="flex flex-col items-center justify-center  h-screen w-full mt-[200px]"
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

              <div className="flex items-center gap-5 w-full justify-center">
                <div className="w-3 h-3 bg-primary_color rounded-full" />
                <p className="text-primary_color text-5xl font-bold font-playfair tracking-widest">
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
