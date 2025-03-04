"use client";
import { motion } from "framer-motion";
import { experiencesData } from "@/constants"
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

type ExperienceItem = {
  date: string;
  icon: React.ReactElement;
  title: string;
  location: string;
  description: string;
};

type Props = {};

const Experience: React.FC<Props> = () => {

  return (
    <div id="experience" className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400 py-10 text-center">
        My Experiences
      </h1>
      <VerticalTimeline lineColor="rgba(255, 255, 255, 0.25)">
        <div>
          {experiencesData.map((item: ExperienceItem, index: number) => (
            <motion.div
              key={index}
              className="py-3"
            >
              <VerticalTimelineElement
                position={index % 2 === 0 ? "left" : "right"}
                visible={true}
                contentStyle={{
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "rgba(255, 255, 255, 0.25)",
                  fontSize: "1.5rem",
                  color: "#fff",
                }}
              >
                <h3 className="font-semibold capitalize text-xl sm:text-2xl leading-6 -mb-2">
                  {item.title}
                </h3>
                <p className="font-normal pl-3 text-sm sm:text-base">--&gt; {item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-sm sm:text-base">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </motion.div>
          ))}
        </div>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
