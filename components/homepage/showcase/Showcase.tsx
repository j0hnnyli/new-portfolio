import { FaArrowDown } from "react-icons/fa";
import ShowcaseContent from "./ShowcaseContent";
import ShowcaseAnimation from "./ShowcaseAnimation";
import Grid from "@/components/Grid";

const Showcase = () => {
  return (
    <>
      <div className="h-screen max-h-[850px] relative mb-10 max_width px-5 md:flex md:justify-center md:items-center">
        <Grid mode="light"/>

        <div className="relative z-10 pt-20 md:pt-24 flex flex-row items-center justify-between gap-5 md:mb-10 h-full">
          <ShowcaseContent />
          <ShowcaseAnimation />
        </div>


        <div className="absolute bottom-2 left-0 w-full flex items-center justify-center">
          <FaArrowDown className="text-2xl animate-bounce" />
        </div>
      </div>
    </>
  );
};

export default Showcase;
