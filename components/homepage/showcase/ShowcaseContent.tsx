"use client";

import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motions";
import { usePageTransition } from "@/components/context/PageTransitionContext";
import Link from "next/link";

const ShowcaseContent = () => {
  const { isPopState } = usePageTransition()

  return (
    <motion.div
      variants={staggerContainer(0.2, isPopState ? 1.2 : 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex flex-col justify-center gap-8"
    >
      <motion.div
        variants={fadeIn("down", "spring")}
        className="flex flex-col items-start"
      >
        <div className="flex items-center gap-2 px-2">
          <div className="h-[10px] w-[10px] rounded-full bg-green-400 animate-pulse" />
          <p className="text-sm text-secondary_color uppercase opacity-70">Available for new projects</p>
        </div>
      </motion.div>
      
      <div className="font-fraunces flex flex-col gap-2 font-bold text-5xl md:text-6xl lg:text-7xl">
        <motion.h2 variants={fadeIn("up", "spring")}>Building the,</motion.h2>
        <motion.h2 variants={fadeIn("up", "spring")}>Web</motion.h2>
        <motion.h2 variants={fadeIn("up", "spring")}>One <span className="text-third_color font-normal italic">Clean</span></motion.h2>
        <motion.h2 variants={fadeIn("up", "spring")}>Component at a</motion.h2>
        <motion.h2 variants={fadeIn("up", "spring")}>Time.</motion.h2>
      </div>

      <motion.div variants={fadeIn("up", "spring")}>
        <p className="text-sm text-secondary_color opacity-70">
          Hi, I&apos;m Johnny, a web developer who turns ideas into fast, responsive web experiences. Let&apos;s build something great together.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring")} className="text-sm font-dmMono flex items-center gap-3">
        <Link href="/mywork" className="py-4 px-7 uppercase border bg-third_color text-primary_color group">
          <span>see my work</span>
          <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
        </Link>

        <Link href="/contact" className="border-b hover:border-secondary_color/50 hover:text-third_color">
          Let&apos;s Talk
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ShowcaseContent;
