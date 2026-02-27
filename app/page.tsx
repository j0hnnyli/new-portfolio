import AboutMe from "@/components/homepage/aboutme/AboutMe";
import MyProcess from "@/components/homepage/myprocess/MyProcess";
import Showcase from "@/components/homepage/showcase/Showcase";
import WhyWorkWithMe from "@/components/homepage/whyworkwithme/WhyWorkWithMe";

export default async function Home() {
  
  return (
    <> 
      <Showcase />
      <WhyWorkWithMe />
      <AboutMe />
      <MyProcess />
    </>
  );
}
