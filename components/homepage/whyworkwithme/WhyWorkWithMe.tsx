"use client"

import { motion } from 'framer-motion';
import WhyMeContainers from "./WhyMeContainers";
import { workWithMe } from "@/lib/content/workwithme";
import { fadeIn, staggerContainer } from '@/lib/motions';
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import Link from 'next/link';


const WhyWorkWithMe = () => {
  return (
    <section className="py-20  relative">
      <div className="max_width px-5">
        <div className="flex items-center gap-5">
          <div className="w-10 h-[2px] bg-third_color"/>
          <p className="uppercase text-sm text-third_color">Why Choose Me</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-5">
          <div className="font-fraunces text-5xl">
            <h2>The developer who</h2>
            <h2><span className="text-third_color italic">actually</span> shows up.</h2>
          </div>  

          <div className="text-sm self-end text-right">
            <p>Three things I bring to every</p>
            <p>projects.</p>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer(0.2, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10"
        >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {workWithMe.map((item, index) => (
              <WhyMeContainers key={index} title={item.title} desc={item.desc} number={`0${index + 1}`}/>
            ))}
            <div className='bg-secondary_color/20 hidden md:flex lg:hidden'/>
          </div>
          
          <motion.div variants={fadeIn("up", "spring")} className='flex flex-col lg:flex-row mt-1'>
            <div className='bg-third_color py-9 px-12 text-primary_color w-full lg:w-[75%] flex gap-5 font-fraunces'>
              <FaQuoteLeft size={30} className='text-primary_color/20'/>
              <p className='mt-5 text-lg italic mx-auto'>It&apos;s about solving problems and building things that feel great to use</p>
            </div>

            <motion.div variants={fadeIn("up", "spring")}  className='mt-5 lg:mt-0 md:w-[25%] flex flex-col justify-center lg:pl-5'>
              <p className='opacity-70 text-sm '>Ready To Start?</p>

              <Link href="/contact" className="py-3 px-7 border self-start mt-1 bg-third_color text-primary_color group flex items-center justify-center">
                <span>Let&apos;s Talk </span>
                 <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default WhyWorkWithMe;
