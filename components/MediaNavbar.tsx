import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import Image from "next/image";
import Link from "next/link";

const MediaNavbar = () => {

  return (
    <div className='fixed md:hidden top-0 w-full p-5 flex items-center justify-between h-20 z-50 bg-primary_color'>
      <div className='font-bold text-lg'>
        <h2>Johnny</h2>
        <h2>Li _ </h2>
      </div>

      <Sheet>
        <SheetTrigger>
          <RiMenu3Fill className='text-2xl'/> 
        </SheetTrigger>
        <SheetContent className='bg-primary_color'>
          <SheetDescription></SheetDescription>
            <div className='overflow-hidden rounded-full mt-5 w-[200px] h-[200px] mx-auto shadow-lg shadow-secondary_color'>
              <Image 
                src='/developer.jpg' 
                alt='developer'
                width={300}
                height={500}
                className='w-full h-full object-cover'
              />
            </div>
          <SheetTitle className='font-bold text-xl mt-5 text-center'>
            Johnny Li _ 
          </SheetTitle>
          
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-xl">
            <Link href='/' >
              <SheetClose>Home</SheetClose>
            </Link>
            <Link href='/projects'>
              <SheetClose>Projects</SheetClose>
            </Link>
            <Link href='/contact'>
              <SheetClose>Contact</SheetClose>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MediaNavbar;
