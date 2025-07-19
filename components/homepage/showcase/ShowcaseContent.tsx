"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motions";
import TypewriterComponent from "../../TypewriterComponent";

const ShowcaseContent = () => {
  return (
    <motion.div
      variants={staggerContainer(0.2, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full text-5xl md:text-6xl lg:text-7xl flex flex-col gap-5"
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.6)}
        className="flex flex-col items-start"
      >
        <div className="border border-secondary_color rounded-full flex items-center gap-2 px-2">
          <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse" />
          <p className="text-sm text-secondary_color">Now Coding</p>
        </div>
      </motion.div>

      <motion.div variants={fadeIn("right", "spring", 0.6)}>
        <h2 className="font-bold">Hi, I&apos;m Johnny</h2>
      </motion.div>

      <motion.div variants={fadeIn("right", "spring", 0.6)}>
        <TypewriterComponent
          strings={["Web Developer", "Anime Fan", "Fitness Enthusiast"]}
        />
      </motion.div>
    </motion.div>
  );
};

export default ShowcaseContent;
