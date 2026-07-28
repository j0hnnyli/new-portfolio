import Grid from '@/components/Grid';
import { NavLinkWrapper } from '@/components/NavLink';
import { MyWork, Projects } from '@/lib/types/Project'
import Image from 'next/image';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";

type WorkNavFooterProps = {
  myworks: MyWork[] | Projects[];
  id: string;
}

const WorkNavFooter = ({ myworks, id }: WorkNavFooterProps) => {
  const index = myworks.findIndex((work) => work.id === Number(id));
  const nextWork = myworks[(index + 1) % myworks.length];

  const isProjects = 'features' in myworks[0];
  const type = isProjects ? 'project' : 'work';

  return (
    <section className="bg-secondary_color relative overflow-hidden group">
      <Grid mode="dark"/>

      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-third_color/20 blur-3xl pointer-events-none" />

      <div className="max_width relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
        <div className="flex flex-col justify-center gap-5 px-5 py-10">
          <div className="flex items-center gap-3">
            <div className="w-5 h-[2px] bg-third_color/70" />
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-third_color/70">
              Next {type}
            </p>
          </div>

          <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight text-primary_color leading-tight">
            {nextWork.title}
          </h2>

          <NavLinkWrapper
            href={`/mywork/${type}/${nextWork.id}`}
            className="group inline-flex items-center gap-3 bg-primary_color text-secondary_color 
              font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-sm w-fit
              hover:bg-third_color hover:text-white transition-all duration-300 group"
          >
            View {type}
            <GoArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </NavLinkWrapper>
        </div>

        <div className="relative overflow-hidden">
          <Image
            src={nextWork.img}
            alt={nextWork.title}
            width={600}
            height={400}
            priority
            className="w-full h-full object-cover saturate-90 
            group-hover:scale-105 transition-all duration-300
            brightness-75 group-hover:brightness-90"
          />
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-secondary_color to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default WorkNavFooter