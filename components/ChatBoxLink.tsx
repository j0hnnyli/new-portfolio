'use client';

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { SheetClose } from "./ui/sheet";
import { NavLinkWrapper } from "./NavLink";

type ChatBoxLinkProps = {
  isMobile?: boolean;
}

export default function ChatBoxLink({ isMobile } : ChatBoxLinkProps) {
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);
  
  return (
    <div 
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      className="relative group"
    >
      <div
        className="text-white flex items-center justify-center relative"
      >
        <div className={twMerge(
            "absolute w-[22px] h-[22px] bg-third_color rounded-full animate-ping group-hover:animate-none",
            pathname === '/juno' && "animate-none"
          )}
        />
        <span className="bg-secondary_color relative w-8 h-8 rounded-full flex items-center justify-center">
          <Image
            src="/juno.png"
            alt="juno-avatar"
            fill
            className="rounded-full object-cover object-top"
          />
        </span>
      </div>

      {show && (
        <div 
          className="absolute right-0 border-2 border-black w-[200px] mt-[1px] flex flex-col items-center  gap-5 p-2 rounded-lg bg-primary_color z-50 transition-all duration-300 ease-in-out"
        >
          <div className="flex items-center justify-center">
            <Image 
              src="/juno.png"
              alt="juno-avatar"
              width={200}
              height={200}
              className="rounded-full w-[100px] h-[100px] object-cover object-top"
            />
          </div>

          <div className="text-center">
            <h2 className="text-lg mb-1">Hello, I&apos;m Juno</h2>
            <p className="text-sm font-normal">
            I&apos;m Johnny&apos;s personal AI. Curious about Johnny&apos;s skills, experience, hobbies? I&apos;m ready to provide all the answers!
            </p>
          </div>

          <NavLinkWrapper
            href="/juno"
            onClick={() => setShow(false)}
            className="bg-secondary_color text-white px-4 py-2 rounded-lg hover:bg-third_color transition-colors duration-300 "
          >
            {isMobile ? (<SheetClose>Let&apos;s Chat</SheetClose>) : "Let's Chat"}
          </NavLinkWrapper>
        </div>
      )}
    </div>
  );
}