"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'>
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
            <h1 className='Welcome-text text-[13px]'>Think better with Next js 13</h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className=''
        >
          <h1 className="xl:text-[50px] lg:text-[40px] text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-3 text-center ">
          Technologies with hands on Experience
      </h1>
            
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className=' cursive text-[20px] text-gray-200 mb-10 text-center'
        >
            and learning ...
        </motion.div>
    </div>
  )
}

export default SkillText
