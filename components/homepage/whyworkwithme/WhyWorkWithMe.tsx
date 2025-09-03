import SectionLabel from "../../SectionLabel";
import WhyMeContainers from "./WhyMeContainers";
import { workWithMe } from "@/lib/content/workwithme";

const WhyWorkWithMe = () => {
  return (
    <section className="py-10 bg-secondary_color relative">
      <div className="max_width px-5">
        <SectionLabel
          color="primary_color"
          label="Why Choose Me"
          title="Why Work With Me"
        />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-secondary_color mt-5">
          {workWithMe.map(({ title, desc }) => (
            <WhyMeContainers
              key={title}
              title={title}
              desc={desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
