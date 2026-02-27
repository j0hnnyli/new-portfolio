'use client';

import { twMerge } from "tailwind-merge";
import ScrollTop from "./ScrollTop";
import Socials from "./Socials";
import { usePathname } from "next/navigation";
import Grid from "./Grid";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={twMerge('pt-20 bg-secondary_color ', pathname === '/juno' && 'hidden')}
    >
        <div
          className="relative flex flex-col justify-center items-center px-5 mb-20"
        >
          <Grid mode="dark"/>
          <div className="flex items-center gap-5">
            <div className="w-10 h-[2px] bg-third_color"/>
            <p className="uppercase text-sm text-third_color">your idea starts here</p>
          </div>

          <div className="mt-5">
            <h2 className="text-5xl font-fraunces text-center text-primary_color">
              Let&apos;s Turn Your
            </h2>
            <h2 className="text-5xl font-fraunces text-center text-primary_color">
              Vision into
              <span className="text-third_color italic"> Realty</span>
            </h2>
          </div>

          <p className="text-primary_color mt-5 flex flex-col items-center justify-center text-center opacity-70 text-sm">
            <span>Have a project in mind? I&apos;d love to hear about it.</span>
            <span>Let&apos;s connect and build something great together.</span>
          </p>

          <div className="mt-10 flex items-center justify-center gap-5">
            <Link href="/contact" className="py-4 px-7 bg-third_color text-primary_color uppercase text-sm group">
              start a project
              <span>
                <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"/></span>
            </Link>
            <Link href="/mywork" className="border-b pb-2 opacity-70 hover:opacity-100 my-auto text-sm uppercase text-primary_color self-end">
              contact me
            </Link>
          </div>
        </div>
      <div className="bg-[#2A2F36]">
        <div className="max_width flex items-center justify-between text-primary_color py-8 px-5">
          <h2 className='font-extrabold font-fraunces text-xl text-primary_color'>
            <span className=''>Johnny</span> 
            <span className='text-third_color ml-1'>Li</span>
            <span className='ml-1'>_</span>
          </h2>
          <Socials />
          <ScrollTop />
        </div>
      </div>
    </footer>
  )
}

export default Footer