'use client'

import { fadeIn, staggerContainer } from "@/lib/motions";
import { motion } from "framer-motion";

type Prop = {
  theCreativeProcess: {
    tag : string;
    title : string;
    desc : string;
  }[];
}

const CreativeProcess = ({ theCreativeProcess } : Prop) => {
  return (
    <div className='py-20'>
      <div className="flex items-center gap-5">
        <div className="w-10 h-[2px] bg-third_color"/>
        <p className="uppercase text-sm text-third_color">the creative process</p>
      </div>

      <h3 className='text-5xl font-fraunces my-5'>How it was <span className='text-third_color italic'>built</span></h3>

      <motion.div 
        variants={fadeIn('up', 'spring')}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount : 0.25}}
        className='grid grid-cols-1 lg:grid-cols-2 border'
      >
        {theCreativeProcess.map((process, index) => {
          return (
            <div
              key={process.title}
              className="p-10 border flex flex-col gap-3 relative"
            >
              <p className='absolute top-2 right-2 text-third_color text-6xl opacity-40'>
                {`0${index + 1}`}
              </p>

              <div className="flex items-center gap-2">
                <div className="w-3 h-[2px] bg-third_color" />
                <p className="uppercase text-xs text-third_color">{process.tag}</p>
              </div>

              <p className='font-bold font-fraunces text-xl'>{process.title}</p> 

              <p className='text-xs leading-5'>{process.desc}</p>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default CreativeProcess