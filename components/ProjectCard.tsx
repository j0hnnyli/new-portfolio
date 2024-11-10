"use client";

import { Projects } from "@/lib/types/Project";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaPlay } from "react-icons/fa";

type Props = {
  project: Projects;
};

const ProjectCard = ({ project }: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      key={project.title}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="h-[300px] w-full relative"
    >
      <h2 className="absolute top-0 bg-black py-2 px-4 rounded-bl-2xl rounded-br-2xl font-bold tracking-wider text-primary_green left-1/2 -translate-x-1/2 shadow-xl shadow-black">
        {project.title}
      </h2>
      <Image
        src={project.img}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-full object-cover"
      />

      {isHover && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="bg-black absolute inset-0 w-full z-10"
        >
          <h2 className="text-primary_green font-bold tracking-widest text-center text-2xl my-2">
            {project.title}
          </h2>
          <div className="flex flex-wrap items-center gap-1 justify-center p-1 w-[80%] mx-auto">
            {project.tags.map((tag) => (
              <p
                key={tag}
                className="py-1 px-2 bg-gray-300 rounded-2xl text-sm text-black"
              >
                {tag}
              </p>
            ))}
          </div>

          <Link
            href={project.gitLink}
            target="_blank"
            className="z-20 absolute bottom-5 left-5"
          >
            <FaGithub className="text-2xl text-white hover:text-primary_green" />
          </Link>

          <Link
            href={project.link}
            target="_blank"
            className="z-20 absolute bottom-5 right-5 flex items-center justify-center gap-1 hover:text-primary_green hover:underline"
          >
            <FaPlay className="text-xl" />
            <span>{project.type === "website" ? "View" : "Play"}</span>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
