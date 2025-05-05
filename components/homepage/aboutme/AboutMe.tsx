import React from "react";
import SectionLabel from "../../SectionLabel";
import AboutMeContent from "./AboutMeContent";

const aboutMeParagraph1 = `
  I'm a frontend developer with a passion for building
  responsive, user-friendly web features and applications. I'm
  always eager to learn, grow, and stay current with the latest
  technologies to deliver the best possible user experiences.
  Let's connect and bring your vision to life together.
`;

const aboutMeParagraph2 = `
  When I'm not developing, I like to be active. Whether it's
  hitting the gym, or exploring new phyical activities. I find that
  being active provides mental clarity and creativity.
`;

const AboutMe = () => {
  return (
    <section className="py-10 px-5">
      <div className="max_width flex flex-col md:flex-row justify-between gap-5">
        <SectionLabel label="About Me" title="Get to Know Me" />

        <AboutMeContent
          aboutMeParagraph1={aboutMeParagraph1}
          aboutMeParagraph2={aboutMeParagraph2}
        />
      </div>
    </section>
  );
};

export default AboutMe;
