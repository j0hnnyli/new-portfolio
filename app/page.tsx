import TypewriterComponent from "@/components/TypewriterComponent";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


export default function Home() {
  return (
    <div className="p-5">
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div 
          className="rounded-full flex items-center justify-center relative custom-spin-border p-2 overflow-hidden"
        >
          <Image
            src='/developer.jpg'
            alt='developer'
            width={100}
            height={100}
            className='rounded-full h-[150px] w-[150px] md:w-[200px] relative'
          />
        </div>

        <div className="w-full relative">
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

      <div className="w-full mt-5">
        <h2 className="text-3xl text-primary_green font-bold tracking-widest">About Me</h2>
        <p className="text-white my-5 text-lg">
          Hello, I&apos;m a self-taught developer on a journey towards a career in software engineering. My coding journey started as an exploration, beginning with HTML and CSS. The markup language and cascading style sheets empowered me to start building static websites. However, this only made me want to learn more and build websites with user interaction. This is where I picked up JavaScript. JavaScript opened the door to frameworks like React and Next.js. With this knowledge and these tools at my disposal, I&apos;m able to build dynamic and user-friendly UI/UX websites. Now I&apos;m learning algorithms and trying to unravel their mysteries
        </p>
        <p className="text-white text-lg">
          Outside of web development, I enjoy staying active and unwinding with some anime or shows. Whether it&apos;s going for a hike, hitting the gym, or binge-watching my favorite series, I find that both physical activity and relaxation help me recharge. I believe exercise boosts not only physical health but also mental clarity and creativity, while a good show helps me unwind and find inspiration.
        </p>
      </div>
    </div>
  );
}
