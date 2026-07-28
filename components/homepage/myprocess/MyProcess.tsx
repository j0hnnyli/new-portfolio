"use client"

import { FaMagnifyingGlass } from "react-icons/fa6";
import { SiAntdesign } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { MdRocketLaunch } from "react-icons/md";
import { myProcess } from '@/lib/content/myprocess'
import { motion } from "framer-motion";

const MyProcess = () => {
  return (
    <section className="py-20 px-5 flex flex-col justify-center items-center gap-5 max_width overflow-x-hidden">
      <div className="flex items-center gap-5">
        <div className="w-10 h-[2px] bg-third_color"/>
        <p className="uppercase text-sm text-third_color">My Process</p>
      </div>

      <h2 className="text-5xl font-fraunces text-center">
        My Creative 
        <span className="text-third_color italic"> Flow</span>
      </h2>

      <p className="text-center opacity-70 font-fraunces">&ldquo;A good process builds great products&rdquo;</p>

      <p className="text-sm opacity-70 flex flex-col items-center justify-center text-center">
        <span>Here&apos;s how I combine structure and creativity together in my </span>
        <span>workflow</span>
      </p>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
       className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between w-full md:max-w-[90%] gap-5 relative"
      >
        <div className="hidden lg:flex border w-[70%] absolute bg-secondary_color top-10 left-1/2 transform -translate-x-1/2"/>
        {myProcess.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-5 w-full group relative">
            <div 
              className="border-2 h-20 w-20 rounded-full flex items-center justify-center relative group-hover:border-third_color group-hover:scale-110 transition-all duration-300 ease-in-out bg-primary_color"
            >
              {index === 0 && <FaMagnifyingGlass size={30} className="group-hover:-rotate-12 transition-transform duration-300 ease-in-out group-hover:text-third_color" />}
              {index === 1 && <SiAntdesign size={30} className="group-hover:-rotate-12 transition-transform duration-300 ease-in-out group-hover:text-third_color" />}
              {index === 2 && <FaCode size={30} className="group-hover:-rotate-12 transition-transform duration-300 ease-in-out group-hover:text-third_color" />}
              {index === 3 && <MdRocketLaunch size={30} className="group-hover:-rotate-12 transition-transform duration-300 ease-in-out group-hover:text-third_color" />}
              <p className="absolute h-6 w-6 rounded-full bg-third_color flex items-center justify-center text-[10px] text-primary_color top-0 -right-1">
                {`0${index + 1  }`}
              </p>
            </div>

            <h3 className="font-fraunces text-xl font-bold">{item.title}</h3>

            <p className="text-center opacity-70 text-sm">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    
    </section>
  )
}

export default MyProcess