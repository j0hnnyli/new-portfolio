import { RiMenu3Fill } from "react-icons/ri";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from "next/link";
import ShowcaseAnimation from "./homepage/showcase/ShowcaseAnimation";
import ChatBoxLink from "./ChatBoxLink";

const MediaNavbar = () => {
  return (
    <div className="fixed md:hidden top-0 w-full p-5 flex items-center justify-between h-20 z-50 bg-primary_color">
      <Link href="/" className="font-bold text-lg">
        <h2>Johnny</h2>
        <h2>Li _ </h2>
      </Link>

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
            <Link href="/">
              <SheetClose>Home</SheetClose>
            </Link>
            <Link href="/projects">
              <SheetClose>Projects</SheetClose>
            </Link>
            <Link href="/contact">
              <SheetClose>Contact</SheetClose>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MediaNavbar;
