"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const ShowcaseContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col gap-8 border"
    >
      <div
        className="flex flex-col items-start"
      >
        <div className="flex items-center gap-2 px-2">
          <div className="h-[10px] w-[10px] rounded-full bg-green-400 animate-pulse" />
          <p className="text-sm text-secondary_color uppercase opacity-70">Available for new projects</p>
        </div>
      </div>
      
      <div className="font-fraunces flex flex-col gap-2 font-bold text-4xl md:text-6xl lg:text-7xl">
        <h2>Building the,</h2>
        <h2>Web</h2>
        <h2>One <span className="text-third_color font-normal italic">Clean</span></h2>
        <h2>Component at a</h2>
        <h2>Time.</h2>
      </div>

      <p className="text-sm text-secondary_color opacity-70 max-w-[500px]">
        Hi, I&apos;m Johnny, a web developer who turns ideas into fast, responsive web experiences. Let&apos;s build something great together.
      </p>

      <div className="text-sm font-dmMono flex items-center gap-3">
        <Link href="/mywork" className="py-4 px-7 uppercase border bg-third_color text-primary_color group">
          <span>see my work</span>
          <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
        </Link>

        <Link href="/contact" className="border-b hover:border-secondary_color/50 hover:text-third_color">
          Let&apos;s Talk
        </Link>
      </div>
    </motion.div>
  );
};

export default ShowcaseContent;
