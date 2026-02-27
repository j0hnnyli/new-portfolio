import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import ShowcaseAnimation from "./homepage/showcase/ShowcaseAnimation";
import ChatBoxLink from "./ChatBoxLink";
import { NavLinkWrapper } from "./NavLink";

const MediaNavbar = () => {
  return (
    <div className="fixed md:hidden top-0 w-full p-5 flex items-center justify-between h-20 z-50 bg-primary_color">
      <NavLinkWrapper href="/">
        <h2 className='font-extrabold font-fraunces text-xl'>
          <span className=''>Johnny</span> 
          <span className='text-third_color ml-1'>Li</span>
          <span className='ml-1'>_</span>
        </h2>
      </NavLinkWrapper>

      <Sheet>
        <SheetTrigger>
          <RiMenu3Fill className="text-2xl" />
        </SheetTrigger>

        <SheetContent className="bg-primary_color">
          <SheetDescription></SheetDescription>
          <div className="flex items-center justify-center">
            <ChatBoxLink isMobile={true} />
          </div>

          <ShowcaseAnimation isMobileMenu={true}/>

          <SheetTitle className="mt-5 text-center font-extrabold font-fraunces text-xl">
            <span className=''>Johnny</span> 
            <span className='text-third_color ml-1'>Li</span>
            <span className='ml-1'>_</span>
          </SheetTitle>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-xl font-fraunces font-extrabold">
            <NavLinkWrapper href="/">
              <SheetClose>Home</SheetClose>
            </NavLinkWrapper>
            <NavLinkWrapper href="/mywork">
              <SheetClose>My Work</SheetClose>
            </NavLinkWrapper>
            <NavLinkWrapper href="/contact">
              <SheetClose>Contact</SheetClose>
            </NavLinkWrapper>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MediaNavbar;
