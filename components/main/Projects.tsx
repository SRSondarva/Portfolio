import React, { useMemo } from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

interface Project {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const Projects: React.FC = () => {
  const projectsData: Project[] = useMemo(
    () => [
      {
        src: "/GF.png",
        title: "GIFT City's One Stop Portal",
        description:
          "Hackathon Project : One stop solution for the residents, employees and managing comittee of our financial city GIFT. This was our Hackathon Project for SSIP",
      },
      {
        src: "/TT.png",
        title: "Customize Your 'T'",
        description:
          "Upload Your Designs and Logo files here and customize your personal T. You can also change the color of your T here. Show your Creativity by generating and applying your AI image directly to the T.",
        link: "https://customize-your-t.vercel.app/",
      },
      {
        src: "/SP.png",
        title: "Space Themed Portfolio",
        description:
          "This is the First Portfolio I created long back. Though imperfect and demanding many improvements i like the space theme so decided to continue using this and focus on building project. Will slowly improve it slowly.",
      },
    ],
    []
  );

  return (
    <div
      className="flex z-30 flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {/* {project.link ? (
              <Link href={project.link} target="_blank" title="click me">
                <ProjectCard {...project} />
              </Link>
            ) : (
              <ProjectCard {...project} />
            )} */}
          </React.Fragment>
        ))}
        {/* <ProjectCard
          src="/GF.png"
          title="GIFT City's One Stop Portal"
          description="Hackathon Project : One stop solution for the residents, employees and managing comittee of our financial city GIFT. This was our Hackathon Project for SSIP
          "
        />
        <Link
          target="_blank"
          href="https://customize-your-t.vercel.app/"
          title="Click me"
        >
          <ProjectCard
            src="/TT.png"
            title="Customize Your 'T'"
            description="Upload Your Designs and Logo files here and customize your personal T. You can also change the color of your T here. Show your Creativity by generating and applying your AI image directly to the T."
          />
        </Link>
        <ProjectCard
          src="/SP.png"
          title="Space Themed Portfolio"
          description="This is the First Portfolio I created long back. Though imperfect and demanding many improvements i like the space theme so decided to continue using this and focus on building project. Will slowly improve it slowly."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
