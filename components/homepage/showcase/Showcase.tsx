import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import Socials from "../../Socials";
import ShowcaseContent from "./ShowcaseContent";

const Showcase = () => {
  return (
    <div className="h-screen max-h-[850px] relative mb-10 max_width px-5">
      <div className="pt-20 md:pt-24 flex flex-col-reverse md:flex-row items-center justify-between gap-5">
        <ShowcaseContent />

        <div className="overflow-hidden rounded-bl-full rounded-br-full w-full h-[50vh] md:w-[400px] md:h-[70vh] max-h-[600px] shadow-lg shadow-secondary_color">
          <Image
            src="/developer.jpg"
            alt="developer"
            width={300}
            height={500}
            priority
            className="w-full h-full object-cover"
          />
        </div>
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
