import Grid from '@/components/Grid'
import Form from './Form'
import { FaMapLocationDot } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { links } from '@/lib/content/links';
import { MdOutlineElectricBolt } from "react-icons/md";
import Link from 'next/link';

const page = () => {
  return (
    <div className='mt-24'>
      <div className='h-[330px] relative flex items-center justify-center overflow-hidden'>
        <svg 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 200" fill="none"
          className='absolute bottom-0 -right-20 md:-right-48 w-[400px] md:w-[1000px] h-auto'
        >
          <text
            x="0"
            y="175"
            fontFamily="Georgia, serif"
            fontSize="200"
            fontWeight="800"
            letterSpacing="-8"
            fill="none"
            stroke="#ddd8cc"
            strokeWidth="1.5"
          >HELLO</text>
        </svg>
        <Grid mode="light"/>
        <div className='text-left px-5 flex flex-col gap-5 max-w-[600px] relative z-10'>
          <div className="flex items-center gap-5">
            <div className="w-10 h-[2px] bg-third_color"/>
            <p className="uppercase text-sm text-third_color">Contact Me</p>
          </div>
          <div className="font-fraunces text-5xl font-bold">
            <h2>Let&apos;s <span className="text-third_color italic">Get</span></h2>
            <h2>In Touch</h2>
          </div>
          <p className='opacity-70 text-xs md:text-sm'>
            Have a project in mind, a question, or just want to say hi? Fill out the form and I&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className='py-20 px-5'>
        <div className='max_width flex flex-col lg:flex-row border-2 rounded-[10px] overflow-hidden'>
          <div className='w-full p-5 md:p-12 relative'>
            <div className='mb-10'>
              <h2 className='text-2xl font-fraunces font-bold'>
                Send me a <span className="text-third_color italic">message</span>
              </h2>
              <p className='opacity-70 text-xs'>Tell me about your project and I&apos;ll be in touch within 24 hours</p>
            </div>

            <Form/>
          </div>
          
          <div className='bg-secondary_color relative w-full p-5 md:p-12'>
            <Grid mode='dark'/>
            <div className='mb-10 text-primary_color text-2xl font-fraunces font-bold'>
              <h2>Ready to build</h2>
              <h2>something <span className="text-third_color italic">great?</span></h2>
            </div>

            <div className='p-6 border border-primary_color border-opacity-20 rounded-[10px] bg-primary_color/10 mb-5'>
              <div className='flex gap-2 items-center text-green-500 mb-3'>
                <div className="h-[8px] w-[8px] rounded-full bg-green-400 animate-pulse" />
                <span className='font-fraunces text-sm'>Available for new projects</span>
              </div>
              <p className='text-xs text-primary_color opacity-70'>
                Currently open to freelance work, contract roles, and full-time opportunities. Let&apos;s talk!
              </p>
            </div>

            <div className='flex flex-col gap-2'>
              {links.map(({href, label, icon : Icon }) => (
                <Link href={href} key={label} className='p-4 flex items-center justify-between border border-primary_color border-opacity-20 rounded-[10px] bg-primary_color/10 text-primary_color gap-5 group hover:bg-third_color/20 transition-colors duration-300 ease-in-out'>
                  <div className='w-12 h-12 flex items-center justify-center rounded-full bg-third_color/30'>
                    <Icon size={25}/> 
                  </div>

                  <div className='text-left w-[80%] text-sm group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>
                    <p className='opacity-70'>{label}</p>
                  </div>

                  <FaLongArrowAltRight size={20} className='opacity-70 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'/>
                </Link>
              ))}
              <div className='p-4 flex items-center justify-between border border-primary_color border-opacity-20 rounded-[10px] bg-primary_color/10 text-primary_color gap-5 group hover:bg-third_color/20 transition-colors duration-300 ease-in-out'>
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-third_color/30'>
                  <FaMapLocationDot size={25}/> 
                </div>

                <div className='text-left w-[80%] text-sm group-hover:translate-x-1 transition-transform duration-300 ease-in-out'>
                  <p className='opacity-70'>Location</p>
                  <p>New York, NY</p>
                </div>

                <FaLongArrowAltRight size={20} className='opacity-70 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'/>
              </div>
            </div>

            <div className='flex items-center gap-2 text-primary_color mt-5'>
              <MdOutlineElectricBolt size={20} className='text-third_color rotate-12'/>
              <div className='text-xs opacity-70'>
                <p>Average response time:</p>
                <p className='opacity-60'>within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default page