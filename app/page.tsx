import TypewriterComponent from "@/components/TypewriterComponent";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

// bg-black bg-opacity-50

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex gap-5 items-center">
        <div className="border-primary_green border-dashed border-2 rounded-full flex items-center justify-center">
          <Image
            src='/developer.jpg'
            alt='developer'
            width={100}
            height={100}
            className='rounded-full h-[150px] w-[200px] m-3'
          />
        </div>

        <div className="w-full p-5 relative">
          <h2 className="text-3xl font-bold">
            <span className="text-primary_green">Hello,</span>
            <span className="text-white mx-2">I&apos;m Johnny Li</span>
          </h2>
          <TypewriterComponent
            strings={["Web Developer", "Anime Lover", "A Gym-Goer"]}
          />

          <div className="absolute bottom-0 right-0 text-white flex gap-3 text-3xl">
            <Link href='https://x.com/Johnnyli31' target='_blank'
              className="hover:text-primary_green"
            >
              <FaXTwitter/>
            </Link>

            <Link href="https://github.com/j0hnnyli" target="_blank"
              className="hover:text-primary_green"
            >
              <FaGithub/>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full p-5">
        <h2 className="text-3xl text-primary_green font-bold tracking-widest">About Me</h2>
        <p className="text-white my-5 text-lg">
          Hello, I&apos;m a self-taught developer on a journey towards a career in software engineering. My coding journey started as an exploration, beginning with HTML and CSS. The markup language and cascading style sheets empowered me to start building static websites. However, this only made me want to learn more and build websites with user interaction. This is where I picked up JavaScript. JavaScript opened the door to frameworks like React and Next.js. With this knowledge and these tools at my disposal, I&apos;m able to build dynamic and user-friendly UI/UX websites. Now I&apos;m learning algorithms and trying to unravel their mysteries
        </p>
        <p className="text-white text-lg">
          Beyond being a web developer, I like staying active and spending time outdoors. Whether it&apos;s going for a hike, or hitting the gym, I find that physical activity is a great way to recharge and clear my mind. I believe that exercise not only boosts physical health but also has a positive impact on mental clarity and creativity.
        </p>
      </div>
    </div>
  );
}
