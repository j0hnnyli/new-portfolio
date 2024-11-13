"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoCodeWorking } from "react-icons/io5";
import { LuLayoutPanelLeft } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import Link from "next/link";

const MediaNavbar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="fixed md:hidden top-3 left-3 z-50 p-2 border-2 flex items-center justify-center border-primary_green rounded-full bg-black">
      <button
        onClick={() => setShow(true)}
        className="text-xl font-bold text-primary_green"
      >
        JL
      </button>

      <AnimatePresence>
        {show && (
          <motion.div 
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0, opacity: 0}}
            transition={{ease: 'easeInOut', duration: .3}}
            className="absolute h-[1000px] w-[1000px] bg-black flex items-center justify-center border border-primary_green rounded-full"
          >
            <button
              onClick={() => setShow(false)}
              className="text-xl font-bold text-primary_green border-2 border-primary_green p-2 rounded-full fixed z-30"
            >
              <FaTimes />
            </button>

            <div className=" h-[60%] w-[45%] flex items-center justify-center relative">

              <div className="absolute bottom-0 right-0">
                <h2 className="text-5xl font-bold text-primary_green text-center mb-5">JL</h2>

                <Link href="/" onClick={() => setShow(false)} className="text-white flex items-center mb-5">
                  <FaHouse className="text-2xl text-primary_green"/>
                  <p className="ml-4 text-lg">Home</p>
                </Link>
                
                <Link href="/skills" onClick={() => setShow(false)}  className="text-white flex items-center mb-5">
                  <IoCodeWorking className="text-2xl text-primary_green"/>
                  <p className="mx-4 text-lg">Skills</p>
                </Link>
                
                <Link href="/projects" onClick={() => setShow(false)}  className="text-white flex items-center mb-5">
                  <LuLayoutPanelLeft className="text-2xl text-primary_green"/>
                  <p className="mx-4 text-lg">Projects</p>
                </Link>
                
                <Link href="/contact" onClick={() => setShow(false)}  className="text-white flex items-center mb-5">
                  <IoIosContact className="text-2xl text-primary_green"/>
                  <p className="mx-4 text-lg">Contact Me</p>
                </Link>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default MediaNavbar;
