import TypewriterComponent from "@/components/TypewriterComponent";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div 
          className="rounded-full flex items-center justify-center relative custom-spin-border p-2 overflow-hidden"
        >
          <Image
            src='/developer.jpg'
            alt='developer'
            width={100}
            height={100}
            className='rounded-full h-[150px] w-[150px] md:w-[200px] relative'
          />
        </div>

        <div className="w-full relative">
          <h2 className="text-3xl font-bold">
            <span className="text-primary_green">Hello,</span>
            <span className="text-white mx-2">I&apos;m Johnny Li</span>
          </h2>
          <TypewriterComponent
            strings={["Front-End Developer", "Anime Lover", "A Gym-Goer"]}
          />

          <div className=" text-white flex items-center justify-end gap-3 text-3xl">
            <Link href='https://x.com/jojotech31' target='_blank'
              className="hover:text-primary_green"
            >
              <FaXTwitter/>
            </Link>

            <Link href="https://github.com/j0hnnyli" target="_blank"
              className="hover:text-primary_green"
            >
              <FaGithub/>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full mt-5">
        <h2 className="text-3xl text-primary_green font-bold tracking-widest">About Me</h2>
        <p className="text-white my-5 text-lg">
          Front-End Developer with experience in JavaScript, TypeScript, and frameworks such as React, Next.js, and Vue.js. I enjoy building user-friendly, responsive web applications with engaging animations using Framer-motion and GSAP. I am always eager to expand my skill set and stay updated with the latest technologies in order to build better user experiences. With these skils and tools at my disposal, I&apos;m able to bring your vision and designs to life!
        </p>
        <p className="text-white text-lg">
          Outside of coding, I enjoy staying active and unwinding with some anime or shows. Whether it&apos;s hitting the gym, catching up on my favorite series. I find that both physical activity and relaxation help me recharge. I believe exercise boosts not only physical health but also mental clarity and creativity, while a good show helps me unwind and find inspiration.
        </p>
      </div>
    </div>
  );
}
