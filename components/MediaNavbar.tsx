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
      <NavLinkWrapper href="/" className="font-bold text-lg">
        <h2>Johnny</h2>
        <h2>Li _ </h2>
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
          <ShowcaseAnimation />

          <SheetTitle className="font-bold text-xl mt-5 text-center">
            Johnny Li _
          </SheetTitle>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-xl">
            <NavLinkWrapper href="/">
              <SheetClose>Home</SheetClose>
            </NavLinkWrapper>
            <NavLinkWrapper href="/projects">
              <SheetClose>Projects</SheetClose>
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
