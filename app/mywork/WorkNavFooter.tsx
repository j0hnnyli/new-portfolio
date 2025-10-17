import { NavLinkWrapper } from '@/components/NavLink';
import { MyWork, Projects } from '@/lib/types/Project'
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";

type WorkNavFooterProps = {
  myworks: MyWork[] | Projects[];
  id : string;
}

const WorkNavFooter = ({ myworks, id } : WorkNavFooterProps) => {
  const index = myworks.findIndex((work) => work.id === Number(id));
  const nextWork = myworks[(index + 1) % myworks.length];
  
  const isProjects = 'features' in myworks[0];
  const type = isProjects ? 'project' : 'work';

  return (
    <div className='py-20 px-5 bg-secondary_color'>
      <div className='max_width text-primary_color flex flex-col items-center justify-center'>
        <p>Next Up</p>
        <h3 className='text-4xl font-bold font-playfair mt-10'>{nextWork.title}</h3> 

        <div
          className="relative h-[200px] w-full max-w-[350px] md:h-[300px] md:max-w-[500px] mx-auto"
        >
          <Image
            src={nextWork.img}
            alt={nextWork.title}
            fill
            priority
          />
        </div>

        <div className='h-[1px] rounded-full w-full max-w-[750px] mx-auto bg-primary_color'/>

        <NavLinkWrapper 
          href={`/mywork/${type}/${nextWork.id}`} 
          className='mt-10 flex items-center gap-2 group border p-5 rounded-full relative overflow-hidden group'
        >
          <h2 className='relative z-10'>Next</h2>
          <span className='relative z-10 group-hover:translate-x-1 transition-transform duration-300 ease-in-out'><GoArrowRight size={25}/></span>

          <div className="absolute inset-0 scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-300 ease-in-out bg-third_color z-0"/>
        </NavLinkWrapper>
      </div>  
    </div>
  )
}

export default WorkNavFooter