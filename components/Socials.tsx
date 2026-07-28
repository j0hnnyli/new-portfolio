// import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { links } from "@/lib/content/links";

const Socials = () => {
  return (
    <div
      className="flex gap-5 text-3xl"
    > 
      {links.map(({href, label, icon : Icon}) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          aria-label={label}
          className="cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-in-out"
        >
          <Icon />
        </Link>
      ))}
    </div>
  )
}

export default Socials