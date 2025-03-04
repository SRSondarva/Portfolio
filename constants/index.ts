import { LuGraduationCap } from "react-icons/lu";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";


export const NavLinks = [
    {
      title: "About Me",
      link: "/#about"
    },
    {
        title: "Skills",
        link: "/#skills"
    },
    {
        title: "Projects",
        link: "/#projects"
    },
    {
        title: "Experience",
        link: "/#experience"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
  ];

  export const Socials = [
    {
      name: "LinkdIn",
      src: "/icons/linkedin.svg",
      link: "https://www.linkedin.com/in/sanjay-ce/"
    },
    {
      name: "GitHub",
      src: "/icons/github.svg",
      link: "https://github.com/SRSondarva"
    },
    
  ];

  export const experiencesData = [
    {
      title: "B.Teh - CE",
      location: "Ganpat University- Mehsana, Gujarat",
      description:
        "Pursuing bachelor's degree in Computer Engineering.",
      icon: React.createElement(LuGraduationCap),
      date: "2021 - 2025",
    },
    
    {
      title: "Full-Stack Developer",
      location: "The Special Character, Ahmedabad, Gujarat",
      description:
        ' We a team of 6, worked diligiently to make a fully complete ecommerce website for fruits,vegetables and everyday groceries which generates orderid also. We used React, Next.js14, Typescript, Tailwind and GitHub for version control and seemless collaboration which gave us a great experience and recognition on the stage among many fellow developers. This project is the fruit of our great Teamwork',
      icon: React.createElement(CgWorkAlt),
      date: "Jan 2025 - ",
    },
 
  ] as const;