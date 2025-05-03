import { HiOutlineLightBulb } from "react-icons/hi";
import { FiBookOpen } from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";


const workWithMe = [
  {
    title: 'Vision to Interface',
    desc: 'I transform ideas, visions or detailed designs into responsive, and interactive web applications',
    icon: HiOutlineLightBulb
  },
  {
    title: 'User Experience',
    desc: 'I alway prioritize users first ensuring they get the best experience with the interface',
    icon: TbLayoutDashboard
  },
  {
    title: 'Always Learning',
    desc: "Technology is always evolving and so am I. I'm always learning new concepts and technologies to stay up to date",
    icon: FiBookOpen
  }
]


const WhyWorkWithMe = () => {
  return (
    <section className="py-10 bg-secondary_color px-5">
      <div className="max_width">
        <div className="flex flex-col items-start">
          <div className="border border-primary_color rounded-full flex items-center gap-2 px-2" >
            <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
            <p className="text-sm text-primary_color">Why Choose Me </p>
          </div>
          <h2 className="text-4xl font-playfair text-primary_color text-center mt-2">Why Work With Me</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-secondary_color mt-5">
          {workWithMe.map(({title, desc, icon: Icon }) => (
            <div 
              key={title}
              className="w-full bg-primary_color rounded-xl p-5 h-[300px] relative overflow-hidden group" 
            >
              <div className="flex items-center gap-5">
                <Icon className="text-4xl"/>                
                <h2 className="text-xl font-playfair">{title}</h2>
              </div>

              <div 
                className="absolute top-20 left-10 h-full w-full border rounded-xl group-hover:left-5 group-hover:top-16 transition-all duration-300 ease-in-out bg-[#7B6D8D] z-0 p-5 text-primary_color font-bold"
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe