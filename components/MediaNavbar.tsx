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

const MediaNavbar = () => {

  return (
    <div className='fixed md:hidden top-0 w-full p-5 flex items-center justify-between h-20 z-50 bg-[var(--primary-color)]'>
      <div className='font-bold text-lg'>
        <h2>Johnny</h2>
        <h2>Li _ </h2>
      </div>

      <Sheet>
        <SheetTrigger>
          <RiMenu3Fill className='text-2xl'/> 
        </SheetTrigger>
        <SheetContent className='bg-[var(--primary-color)]'>
          <div className='overflow-hidden rounded-full mt-5 w-[200px] h-[200px] mx-auto'>
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
          <SheetDescription></SheetDescription>
          
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-xl">
            <SheetClose className="text-left">Home</SheetClose>
            <SheetClose className="text-left">About</SheetClose>
            <SheetClose className="text-left">Projects</SheetClose>
            <SheetClose className="text-left">Contact</SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MediaNavbar;
