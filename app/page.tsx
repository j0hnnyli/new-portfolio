import AboutMe from "@/components/homepage/aboutme/AboutMe";
import MyProcess from "@/components/homepage/myprocess/MyProcess";
import Quote from "@/components/homepage/Quote";
import Showcase from "@/components/homepage/showcase/Showcase";
import WhyWorkWithMe from "@/components/homepage/whyworkwithme/WhyWorkWithMe";

export default function Home() {
  return (
    <div className="">
      <Showcase />
      <WhyWorkWithMe />
      <AboutMe />
      <Quote />
      <MyProcess />
    </div>
  );
}
