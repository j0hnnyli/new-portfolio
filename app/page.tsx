import AboutMe from "@/components/homepage/AboutMe";
import MyProcess from "@/components/homepage/MyProcess";
import Showcase from "@/components/homepage/Showcase";
import WhyWorkWithMe from "@/components/homepage/WhyWorkWithMe";
import { FaChevronDown } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <Showcase />
      <WhyWorkWithMe />
      <AboutMe/>
      <section className="py-20 px-5 text-center bg-secondary_color text-primary_color">
        <div className="max_width">
          <h2 className="text-2xl italic font-playfair mb-3">“A good process builds great products.”</h2>
          <p className="text-sm">Here&apos;s how I combine structure and creativity together in my workflow.</p>
          <FaChevronDown className="mx-auto text-2xl mt-5 animate-bounce"/>
        </div>
      </section>
      <MyProcess />
    </div>
  );
}
