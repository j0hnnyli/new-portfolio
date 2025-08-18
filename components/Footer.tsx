import ScrollTop from "./ScrollTop";
import Socials from "./Socials";

const Footer = () => {

  return (
    <footer 
      className='py-10 px-5 border-t border-secondary_color'
    >
      <div className="flex flex-col justify-center items-center max_width gap-5 relative">
        <ScrollTop />

        <div className='p-10 rounded-xl text-center w-full md:w-[70%] font-playfair bg-secondary_color text-primary_color mx-auto'>
          <div className="flex gap-2 items-center justify-center border border-primary_color rounded-full w-[180px] mx-auto">
            <div className="h-[10px] w-[10px] rounded-full bg-third_color animate-pulse"/>
            <p className="text-sm">Your idea starts here </p>
          </div>
          <h2 className="text-xl md:text-4xl mt-5">Let&apos;s Turn Your Vision into Reality</h2>
        </div>

        <Socials />
      </div>
    </footer>
  )
}

export default Footer