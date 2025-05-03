import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import ScrollTop from "./ScrollTop";

const Footer = () => {
  return (
    <footer 
      className='py-10 px-5 border-t border-secondary_color'
    >
      <div className="flex flex-col justify-center max_width gap-5 relative">
        <ScrollTop />

        <div className='p-10 rounded-xl text-center w-full md:w-[70%] font-playfair bg-secondary_color text-primary_color mx-auto'>
          <div className="flex gap-2 items-center justify-center border border-primary_color rounded-full w-[180px] mx-auto">
            <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
            <p className="text-sm">Your idea starts here </p>
          </div>
          <h2 className="text-xl md:text-4xl mt-5">Let&apos;s Turn Your Vision into Reality</h2>
        </div>

        <div className="flex items-center justify-center gap-5 text-3xl">
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
    </footer>
  )
}

export default Footer