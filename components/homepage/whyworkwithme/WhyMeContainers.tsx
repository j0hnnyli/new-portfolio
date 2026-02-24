"use client"

import { fadeIn } from "@/lib/motions";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const iconMapping = {
  "Clear Communication": FaPhoneVolume,
  "User First Approach": FaRocket,
  "Always Learning": FaBrain
};

type Props = {
  title: string;
  desc: string;
  number: string;
};

const WhyMeContainers = ({title, desc, number} : Props) => {
  const Icon = iconMapping[title as keyof typeof iconMapping];

  return (
    <motion.div variants={fadeIn("up", "spring")} className="p-12 border w-full group relative">
      <div className="absolute top-0 left-0 origin-left w-full h-[2px] bg-third_color scale-x-0 group-hover:scale-x-100 transition-transform duration-300"/>

      <div className="absolute left-0 bottom-0 h-full w-full bg-third_color/15 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300"/>

      <p className="text-third_color text-xs">{number}</p>

      <div className="mt-10 border border-secondary_color/30 w-16 h-16 rounded-full flex items-center justify-center group-hover:border-third_color">
        <Icon size={30} className="group-hover:text-third_color group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300"/>
      </div>
      
      <h2 className="mt-5 font-bold font-fraunces text-xl">{title}</h2>

      <p className="mt-5 opacity-70 text-sm">{desc}</p>
    </motion.div>
  )
}

export default WhyMeContainers