import { FaArrowDown } from "react-icons/fa";
import Socials from "../../Socials";
import ShowcaseContent from "./ShowcaseContent";
import ShowcaseAnimation from "./ShowcaseAnimation";

const Showcase = () => {
  return (
    <div className="h-screen max-h-[850px] relative mb-10 max_width px-5 md:flex md:justify-center md:items-center">
      <div className="pt-20 md:pt-24 flex flex-col-reverse md:flex-row items-center justify-between gap-5 md:mb-10">
        <ShowcaseContent />
        <ShowcaseAnimation />
      </div>

      <div className="absolute bottom-2 left-0 w-full flex items-center justify-between px-5">
        <div className="flex items-center gap-2">
          <FaArrowDown className="text-2xl animate-bounce" />
        </div>

        <Socials />
      </div>
    </div>
  );
};

export default Showcase;
