"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';


const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex md:flex-row items-center justify-center -mt-56 sm:px-3 md:px-8 lg:px-12 xl:px-16 w-full z-10 flex-col px-3 gap-5'
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
            <h1 className='Welcome-text text-[13px]'>FullStack Developer Portfolio</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto z-0'
        >
            <span>
            <span className='text-transparent bg-clip-text bg-gradient-to-l from-purple-500 to-cyan-500'> {" "} Learning {" "}</span>
                More Ways to be
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> {" "} Cool. {" "}</span>
                
            </span>            
        </motion.div>

        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px] '>
        I&apos;m a Full Stack Software Engineer With experience in Website
        and Software development. Check out my projects and skills.
        </motion.p>

        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] duration-500  z-10'
        >
         <a href="/SunnyCV.pdf" download={true} className='flex items-center cursor-pointer justify-center ml-2'>
          Download CV  
          <ArrowDownTrayIcon className='w-5 h-5 ml-3' />
         </a> 
        </motion.a>
      </div>
      
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center z-10'
      >
        <Image
            src="/darkiconss.svg"
            alt="work icons"
            height={650}
            width={650}
        />
      </motion.div>

    </motion.div>
  )
}

export default HeroContent
