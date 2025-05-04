import React from 'react'

const aboutMeParagraph1 = `
  I'm a frontend developer with a passion for building
  responsive, user-friendly web features and applications. I'm
  always eager to learn, grow, and stay current with the latest
  technologies to deliver the best possible user experiences.
  Let's connect and bring your vision to life together.
`

const aboutMeParagraph2 = `
  When I'm not developing, I like to be active. Whether it's
  hitting the gym, or exploring new phyical activities. I find that
  being active provides mental clarity and creativity.
`

const AboutMe = () => {
  return (
    <section className="py-10 px-5">
      <div className="max_width flex flex-col md:flex-row justify-between gap-5">
        <div className="flex flex-col items-start">
          <div className="border border-secondary_color rounded-full flex items-center gap-2 px-2" >
            <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
            <p className="text-sm text-secondary_color">About Me</p>
          </div>
          <h2 className="font-playfair italic text-4xl font-bold">Get to Know Me</h2>
        </div>
        

        <div className="w-full md:w-[50%] ">
          <p className="text-xl">
            {aboutMeParagraph1}
          </p>
          
          <p className="text-xl mt-5">
            {aboutMeParagraph2}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe