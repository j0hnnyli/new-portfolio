import AboutMe from "@/components/homepage/aboutme/AboutMe";
import MyProcess from "@/components/homepage/myprocess/MyProcess";
import Quote from "@/components/homepage/Quote";
import Showcase from "@/components/homepage/showcase/Showcase";
import Testimonials from "@/components/homepage/testimonials/Testimonials";
import WhyWorkWithMe from "@/components/homepage/whyworkwithme/WhyWorkWithMe";

export default async function Home() {
  
  return (
    <> 
      <Showcase />
      <WhyWorkWithMe />
      <AboutMe />
      <Quote />
      <MyProcess />
      <Testimonials />
    </>
  );
}
