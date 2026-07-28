import { Projects, MyWork } from "@/lib/types/Project";
import Image from "next/image";
import { NavLinkWrapper } from "./NavLink";
import { FaArrowRight } from 'react-icons/fa'
import { twMerge } from "tailwind-merge";

type Props = {
  project: Projects | MyWork;
  href: string;
  index: number;
};

const MyWorkCard = ({ project, href, index }: Props) => {

  return (
    <NavLinkWrapper href={href} 
      className={twMerge(
      'flex border border-secondary_color/10 group', 
      index % 3 === 0 ? "md:col-span-2 flex-col lg:flex-row" : "col-span-1",
      index % 3 !== 0 && "flex-col "
      )}
    >
      <div className={twMerge('bg-secondary_color/20 relative overflow-hidden',index % 3 === 0 && "lg:w-1/2")}>
        <Image
          src={project.img} 
          alt={project.title} 
          width={500} 
          height={300} 
          className="w-full h-full object-contain lg:object-cover" 
        />
        <div
          className="absolute w-32 h-32 bg-third_color text-primary_color z-30 flex items-center justify-center rounded-full -bottom-12 -right-12 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
        >
          <span className="w-1/2 h-1/2 font-playfair font-bold">
            View
          </span>
        </div>
      </div>

      <div className={twMerge(
      'py-10 px-7 md:p-10 flex flex-col justify-center gap-5 relative', 
      index % 3 === 0 ? "lg:w-1/2" : "w-full",
      )}>
        <div className="absolute top-0 left-0 origin-left w-full h-[3px] bg-third_color scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-30"/>

        <div className="flex items-center gap-3">
          <div className="w-5 h-[1px] bg-third_color"/>
          <p className="uppercase text-xs text-third_color">professional {`0${index + 1}`}</p>
        </div>

        <h2 className="font-fraunces text-4xl group-hover:text-third_color">{project.title}</h2>
        
        <p className='text-sm opacity-70'>
          {project.description}
        </p>

        <div className='flex gap-2'>
          {project.tags.slice(0,3).map((tag, index) => (
            <span key={index} className="text-xs py-1 px-2 bg-third_color/20 text-third_color">
              {tag}
            </span>
          ))}
        </div>

        <p className='uppercase text-xs border-b p-1 w-fit opacity-70 group-hover:opacity-100 group-hover:text-third_color'>
          view case study
          <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
        </p>
      </div>
    </NavLinkWrapper>
  );
};

export default MyWorkCard;


// Old UI
  //  <div
  //       onMouseEnter={replay}
  //       className="bg-secondary_color p-5 relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-third_color rounded-xl"
  //     >
  //       <div className="absolute inset-0 group-hover:bg-gradient-to-br from-third_color/20 via-transparent to-primary_color/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
  //       <div className="absolute -inset-1 group-hover:bg-gradient-to-r from-third_color to-primary_color rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

  //       <div
  //         className="absolute w-32 h-32 bg-primary_color z-30 flex items-center justify-center rounded-full -bottom-12 -right-12 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
  //       >
  //         <span className="w-1/2 h-1/2 font-playfair font-bold">
  //           View
  //         </span>
  //       </div>

  //       <div className="relative w-full h-[190px] lg:h-[230px]">
  //         <Image 
  //           src={project.img} 
  //           alt={project.title} 
  //           priority 
  //           fill 
  //           className="object-contain mx-auto group-hover:-translate-y-2 transition-transform duration-300 ease-in-out" 
  //         />
  //       </div>

  //       <div className="flex justify-between items-center">
  //         <h2 ref={ref} className="text-primary_color font-playfair text-4xl">
  //           {project.title}
  //         </h2>
  //         <MdAdsClick className="text-primary_color" />
  //       </div>
  //     </div>