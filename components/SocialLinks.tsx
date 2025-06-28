import { Facebook, Github, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialData = [
  {
    title: "Youtube",
    icon: <Youtube width={20} height={20} />,
    link: "https://www.youtube.com",
  },
  {
    title: "Github",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/mastercodees",
  },
  {
    title: "Linkedin",
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/vladmir-nyataige",
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com",
  },
  {
    title: "Instagram",
    icon: <Instagram width={20} height={20} />,
    link: "https://www.instagram.com/_ladmir",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3">
      {socialData.map((item) => (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={item.title}
        >
          <div
            className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky hoverEffect"
          >
            {item.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;

