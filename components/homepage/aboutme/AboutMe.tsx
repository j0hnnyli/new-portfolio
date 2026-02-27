"use client"

import Grid from "@/components/Grid";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { IoFitness } from "react-icons/io5";
import { GiThrownKnife } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { fadeIn, staggerContainer } from "@/lib/motions";

const aboutMeParagraph1 = `
  I'm a developer with a passion for building
  responsive, user friendly web features and applications. I'm
  always eager to learn, grow, and stay current with the latest
  technologies to deliver the best possible user experiences.
  Let's connect and bring your vision to life together.
`;

const aboutMeParagraph2 = `
  When I'm not developing, I like to be active. Whether it's
  hitting the gym, or exploring new phyical activities. I find that
  being active provides mental clarity and creativity.
`;

const AboutMe = () => {
  return (
    <section className="py-20 bg-secondary_color relative text-primary_color">
     <Grid mode="dark"/>

      <div className="max_width px-5">
        <div className="flex items-center gap-5">
          <div className="w-10 h-[2px] bg-third_color"/>
          <p className="uppercase text-sm text-third_color">Why Choose Me</p>
        </div>

        <div className="mt-5 flex flex-col lg:flex-row gap-10 justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex flex-col gap-5"
          >
            <h2 className="font-fraunces text-5xl">Get to <span className="text-third_color italic">Know</span> Me</h2>
            
            <p className="opacity-70 text-sm">{aboutMeParagraph1}</p>
            <p className="opacity-70 text-sm">{aboutMeParagraph2}</p>
            
            <div className="mt-5 flex items-center gap-5">
              <Link href="/mywork" className="py-3 px-6 uppercase group bg-primary_color text-secondary_color text-sm hover:bg-third_color hover:text-primary_color">
                <span>View My Work</span>
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
              </Link>
              
              <Link href="/contact" className="border-b opacity-70 hover:opacity-100 self-start my-auto text-sm uppercase">
                contact me
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer(0.2, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <motion.div
              variants={fadeIn("up", "spring")}
            >
              <Link href="/juno" className="border border-primary_color/30 bg-primary_color/10 p-8 rounded-[5px] flex items-center justify-between hover:bg-third_color/20 hover:border-third_color/30" >
                <div className="border border-third_color bg-third_color/30 w-[75px] h-[75px] rounded-full flex items-center justify-center">
                  <Image 
                    src="/juno.png"
                    alt="juno-avatar"
                    width={50}
                    height={50}
                    className="rounded-full w-[50px] h-[50px] object-cover object-top"
                  />
                </div>

                <div className="w-[60%] md:w-[75%]" >
                  <h3 className="font-fraunces">Chat With Juno!</h3>
                  <p className="opacity-70 text-xs mt-1">I&apos;m here to help answer any questions you may have about my work or services.</p>
                </div>

                <FaArrowRight className="text-lg"/>
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <motion.div
                variants={fadeIn("up", "spring")} 
                className="border border-primary_color/30 bg-primary_color/10 py-4 px-5 rounded-[5px] flex items-center hover:bg-third_color/20 hover:border-third_color/30 text-sm"
              >
                <FaLaptopCode size={15} className="mr-2"/>
                <p>Web Dev</p>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", "spring")} 
                className="border border-primary_color/30 bg-primary_color/10 py-4 px-5 rounded-[5px] flex items-center hover:bg-third_color/20 hover:border-third_color/30 text-sm"
              >
                <IoFitness size={15} className="mr-2"/>
                <p>Fitness</p>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", "spring")} 
                className="border border-primary_color/30 bg-primary_color/10 py-4 px-5 rounded-[5px] flex items-center hover:bg-third_color/20 hover:border-third_color/30 text-sm"
              >
                <GiThrownKnife size={15} className="mr-2"/>
                <p>Anime Fan</p>
              </motion.div>
              
              <motion.div
                variants={fadeIn("up", "spring")}  
                className="border border-primary_color/30 bg-primary_color/10 py-4 px-5 rounded-[5px] flex items-center hover:bg-third_color/20 hover:border-third_color/30 text-sm"
              >
                <SiBookstack size={15} className="mr-2"/>
                <p>Always Learning</p>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
