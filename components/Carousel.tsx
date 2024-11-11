'use client'

import { Projects } from '@/lib/types/Project'
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

type Props = {
  projects: Projects[];
}

const Carousel = ({ projects } : Props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect={'coverflow'}
      spaceBetween={10}
      slidesPerView={'auto'}
      centeredSlides={true}
      grabCursor={true}
      loop={true}
      coverflowEffect={{
        rotate: 10,
        stretch: 0,
        depth: 100,
        modifier: 2.5,

      }}
      navigation= {{
        nextEl: '.custom-button-next',
        prevEl: '.custom-button-prev',
      }}
      pagination={{el:'.custom-pagination' , clickable: true, type: 'bullets' }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        720: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 2
        }
      }}
      className='mt-10'
    >
      {projects.map((project) => (
        <SwiperSlide key={project.title}>
          <ProjectCard project={project}/>
        </SwiperSlide>  
      ))}

      <div className='flex items-center justify-center mt-10'>
        <div className='flex items-center gap-3 p-2'>
          <button className='custom-button-prev '>
            <FaArrowLeftLong className='text-3xl hover:text-primary_green hover:scale-[1.2]'/>
          </button>
        
          <div className='custom-pagination'></div>
        
          <button className='custom-button-next'>
            <FaArrowRightLong className='text-3xl hover:text-primary_green hover:scale-[1.2]'/>
          </button>
        </div>
      </div>

    </Swiper>
  )
}

export default Carousel