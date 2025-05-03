import React from 'react'

const MyProcess = () => {
  return (
    <section className="py-10 px-5">
      <div className="flex flex-col md:flex-row justify-between gap-5 max_width">
        <div className="flex flex-col items-start">
          <div className="border border-secondary_color rounded-full flex items-center gap-2 px-2" >
            <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
            <p className="text-sm text-secondary_color">My Process</p>
          </div>
          <h2 className="font-playfair italic text-4xl font-bold">
            My Creative Flow
          </h2>
        </div>

        <div className="w-full md:w-[50%] flex flex-col gap-5">
          <div className="border-b border-secondary_color pb-10">
            <h2 className="text-4xl font-playfair">1. Discovery</h2>
            <p className="mt-5">
              I dive deep into understanding your vision, ideas and dreams. This
              step is all about thorough research and brainstorming that shapes
              foundation of the design process
            </p>
          </div>

          <div className="border-b border-secondary_color pb-10">
            <h2 className="text-4xl font-playfair">2. Design</h2>
            <p className="mt-5">
              I research a wide range design patterns, picking out designs that
              aligns with your vision. This step focusing on transforming your
              vision into story telling visual content.
            </p>
          </div>

          <div className="border-b border-secondary_color pb-10">
            <h2 className="text-4xl font-playfair">3. Development</h2>
            <p className="mt-5">
              I transforms the deisgns pattern into a fully responsvie,
              functional website. This step invovles thorough coding, ultizing
              different technologies to ensure for vision is met across various
              devices.
            </p>
          </div>

          <div className=" pb-10">
            <h2 className="text-4xl font-playfair">4. Deployment</h2>
            <p className="mt-5">
              I thoroughly test the website to make sure all everything works
              prefectly before deploying. This last step is all about sharing
              your dream with the world.
            </p>
          </div>
        </div>
      </div>
  </section>
  )
}

export default MyProcess