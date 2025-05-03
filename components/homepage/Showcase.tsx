import Image from "next/image";
import React from "react";
import TypewriterComponent from "../TypewriterComponent";
import { FaArrowDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";

const Showcase = () => {
  return (
    <div className="h-screen max-h-[850px] relative mb-10 max_width px-5">
      <div className="pt-20 md:pt-24 flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <div className="w-full text-5xl md:text-6xl lg:text-7xl flex flex-col gap-5">
          <div className="flex flex-col items-start">
            <div className="border border-secondary_color rounded-full flex items-center gap-2 px-2" >
              <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
              <p className="text-sm text-secondary_color">Avaiable for work</p>
            </div>
            <h2 className="font-bold">Hi, I&apos;m Johnny</h2>
          </div>
          <TypewriterComponent
            strings={["Frontend Developer", "Anime Fan", "Fitness Enthusiast"]}
          />
        </div>

        <div className="overflow-hidden rounded-bl-full rounded-br-full w-full h-[50vh] md:w-[400px] md:h-[70vh] max-h-[600px] shadow-lg shadow-secondary_color">
          <Image
            src="/developer.jpg"
            alt="developer"
            width={300}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-2 left-0 w-full flex items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <FaArrowDown className="text-2xl animate-bounce" />
        </div>

        <div className="flex gap-5 text-3xl">
          <Link
            href="mailto:lijohnny21@gmail.com"
            target="_blank"
            aria-label="Email"
            className="cursor-pointer hover:text-third_color"
          >
            <IoMdMail />
          </Link>
          
          <Link
            href="https://github.com/j0hnnyli"
            target="_blank"
            aria-label="GitHub Profile"
            className="cursor-pointer hover:text-third_color"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/johnny-li-3a0482331"
            target="_blank"
            aria-label="Linkedin Profile"
            className="cursor-pointer hover:text-third_color"
          >
            <FaLinkedinIn />
          </Link>

          <Link
            href="https://x.com/jojotech31"
            target="_blank"
            aria-label="Twitter/X Profile"
            className="cursor-pointer hover:text-third_color"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
