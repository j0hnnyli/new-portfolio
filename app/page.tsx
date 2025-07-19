import AnimatePageWrapper from "@/components/AnimatePageWrapper";
import AboutMe from "@/components/homepage/aboutme/AboutMe";
import MyProcess from "@/components/homepage/myprocess/MyProcess";
import Quote from "@/components/homepage/Quote";
import Showcase from "@/components/homepage/showcase/Showcase";
import WhyWorkWithMe from "@/components/homepage/whyworkwithme/WhyWorkWithMe";

export default async function Home() {
  
  return (
    <AnimatePageWrapper> 
      <Showcase />
      <WhyWorkWithMe />
      <AboutMe />
      <Quote />
      <MyProcess />
    </AnimatePageWrapper>
  );
}
