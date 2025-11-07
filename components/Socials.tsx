import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";


const links = [
  {
    href:"mailto:lijohnny21@gmail.com",
    label: "Email",
    icon : IoMdMail
  },
  {
    href: "https://github.com/j0hnnyli",
    label: "GitHub Profile",
    icon : FaGithub
  },
  // {
  //   href: "https://www.linkedin.com/in/johnny-li-3a0482331",
  //   label: "Linkedin Profile",
  //   icon : FaLinkedinIn
  // },
  {
    href:"https://x.com/jojotech31",
    label: "Twitter/X Profile",
    icon : FaXTwitter
  },
]

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
          className="cursor-pointer hover:text-third_color"
        >
          <Icon />
        </Link>
      ))}
    </div>
  )
}

export default Socials