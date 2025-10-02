'use client'

import { motion } from 'framer-motion';
import { FaPhoneVolume } from "react-icons/fa";
import { FiBookOpen } from 'react-icons/fi';
import { TbLayoutDashboard } from 'react-icons/tb';


const iconMapping = {
  "Communication": FaPhoneVolume,
  "User Apporach": TbLayoutDashboard,
  "Always Learning": FiBookOpen
};

type Props = {
  title: string;
  desc: string;
};

const WhyMeContainers = ({title, desc} : Props) => {
  const Icon = iconMapping[title as keyof typeof iconMapping];

  return (
    <motion.div
      initial={{ scaleX: 0, originX: 'left' }}
      whileInView={{ scaleX: 1 }} 
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }} 
      viewport={{once: true, amount: 0.3}}
      className="w-full bg-primary_color rounded-xl p-5 h-[300px] relative overflow-hidden group"
    >
      <div className="flex items-center gap-5">
        <Icon className="text-3xl" />
        <h2 className="text-xl font-playfair font-bold">{title}</h2>
      </div>

      <div className="absolute top-20 left-10 h-full w-full border rounded-xl group-hover:left-5 group-hover:top-16 transition-all duration-300 ease-in-out bg-[#7B6D8D] z-0 p-5 text-primary_color font-bold">
        {desc}
      </div>
    </motion.div>
  )
}

export default WhyMeContainers