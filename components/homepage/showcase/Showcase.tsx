import { FaArrowDown } from "react-icons/fa";
import ShowcaseContent from "./ShowcaseContent";
import ShowcaseAnimation from "./ShowcaseAnimation";

const Showcase = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none -z-10">
      </div>

      <div className="h-screen max-h-[850px] relative mb-10 max_width px-5 md:flex md:justify-center md:items-center">

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
