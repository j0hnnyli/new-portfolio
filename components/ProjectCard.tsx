"use client";

import { Projects } from "@/lib/types/Project";
import Image from "next/image";
import { MdAdsClick } from "react-icons/md";
import { NavLinkWrapper } from "./NavLink";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {

  return (
    <NavLinkWrapper href={`/projects/${project.id}`}>
      <div
        className="bg-secondary_color p-5 relative group overflow-hidden hover:-translate-y-2 transition-transform duration-300 ease-in-out hover:shadow-lg hover:shadow-third_color"
      >
        <div className="absolute inset-0 group-hover:bg-gradient-to-br from-third_color/20 via-transparent to-primary_color/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute -inset-1 group-hover:bg-gradient-to-r from-third_color to-primary_color rounded-lg opacity-0 group-hover:opacity-20 blur transition-all duration-500" />

        <div
          className="absolute w-32 h-32 bg-primary_color z-30 flex items-center justify-center rounded-full -bottom-12 -right-12 scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
        >
          <span className="w-1/2 h-1/2 font-playfair font-bold">
            View
          </span>
        </div>

        <div className="flex justify-between items-center">
          <h2 className="text-primary_color font-playfair text-4xl">
            {project.title}
          </h2>
          <MdAdsClick className="text-primary_color" />
        </div>

        <div className="h-[1px] rounded-full w-full bg-primary_color my-5" />

        <div className="relative w-full h-[190px] lg:h-[300px]">
          <Image src={project.img} alt={project.title} priority fill className="" />
        </div>
      </div>
    </NavLinkWrapper>
  );
};

export default ProjectCard;


// Old UI
    // <div
    //   className="flex flex-col lg:flex-row gap-2 group p-2 rounded-xl overflow-hidden relative hover:scale-105 transition-transform duration-300 ease-in-out"
    // >
    //   <div className="absolute inset-0 z-0 bg-secondary_color opacity-5 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />

    //   <div className="w-full lg:w-[50%] max-w-[250px] h-[150px] relative z-10">
    //     <Image
    //       src={project.img}
    //       alt={project.title}
    //       fill
    //       priority
    //     />
    //   </div>

    //   <div className="w-full lg:w-[50%] p-2 flex flex-col gap-5 z-10">
    //     <div className="flex gap-1">
    //       <h2 className="font-playfair text-xl">{project.title}</h2>
    //       <FiArrowUpRight className="text-md mt-2 group-hover:-mt-[1px] group-hover:ml-1 transition-all duration-300 ease-in-out"/>
    //     </div>

    //     <p className="text-sm">{project.desc}</p>

    //     <div className="flex flex-wrap gap-1">
    //       {project.tags.map((tag) => (
    //         <span
    //           key={tag}
    //           className="px-3 py-1 bg-secondary_color bg-opacity-20 text-secondary_color text-xs rounded-full"
    //         >
    //         {tag}
    //       </span>
    //       ))}
    //     </div>

    //     <div className="flex items-center gap-5">
    //       <Link href={project.gitLink} target='_blank' className="flex items-center gap-1  hover:text-third_color">
    //         <FaGithub className="text-xl cursor-pointer"/>
    //         <span className="text-sm">
    //           GitHub
    //         </span>
    //       </Link>

    //       <Link href={project.link} target='_blank' className="flex items-center gap-1  hover:text-third_color">
    //         <FiExternalLink className="text-xl cursor-pointer"/>
    //         <span className="text-sm">
    //           Demo
    //         </span>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
