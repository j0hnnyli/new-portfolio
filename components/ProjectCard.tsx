import { Projects } from "@/lib/types/Project";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {

  return (
    <div className="flex flex-col lg:flex-row gap-2 group p-2 rounded-xl overflow-hidden relative hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="absolute inset-0 z-0 bg-secondary_color opacity-5 scale-x-0 origin-left transition-transform duration-300 ease-in-out group-hover:scale-x-100" />


      <div className="w-full lg:w-[50%] max-w-[250px] h-[150px] relative z-10">
        <Image 
          src={project.img}
          alt={project.title}
          width={400}
          height={250}
          className="w-full h-full"
        />
      </div>
      
      <div className="w-full lg:w-[50%] p-2 flex flex-col gap-5 z-10">
        <div className="flex gap-1">
          <h2 className="font-playfair text-xl">{project.title}</h2>
          <FiArrowUpRight className="text-md mt-2 group-hover:-mt-[1px] group-hover:ml-1 transition-all duration-300 ease-in-out"/>
        </div>

        <p className="text-sm">{project.desc}</p>

        <div className="flex flex-wrap gap-1">
          {project.tags.map((tag) => (
            <span
              key={tag} 
              className="px-3 py-1 bg-secondary_color bg-opacity-20 text-secondary_color text-xs rounded-full"
            >
            {tag}
          </span>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <Link href={project.gitLink} target='_blank' className="flex items-center gap-1  hover:text-third_color">
            <FaGithub className="text-xl cursor-pointer"/>
            <span className="text-sm">
              GitHub
            </span>
          </Link>

          <Link href={project.link} target='_blank' className="flex items-center gap-1  hover:text-third_color">
            <FiExternalLink className="text-xl cursor-pointer"/>
            <span className="text-sm">
              Demo
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
