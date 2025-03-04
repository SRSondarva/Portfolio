import React from 'react';
import { NavLinks, Socials } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from './sidebar/Sidebar';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='w-full top-0 fixed shadow-lg shadow-[#2A0E61]/50 z-50'>

        <div className="items-center py-2 px-8 flex backdrop-blur-md gap-5 justify-between bg-[#03001417]">


        <a href=""> 
            <span className='bg-star font-bold text-[30px]'>
                Sondarva Sanjay
                <span className='text-[9px]'>
                    ⭐
                </span>
            </span>
        </a>


        <div className='text-white border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full lg:flex hidden'>
            <div className='flex flex-row gap-x-9 gap-y-1 flex-wrap justify-evenly'>
                {NavLinks.map((nav) => (
                    <Link
                    className='cursor-pointer'
                    key={nav.title}
                    href={nav.link}
                    >
                        {nav.title}
                    </Link>
                ))}
            </div>
        </div>


        <div className='flex-row gap-5 min-w-[70px] justify-end lg:flex hidden'>
        {Socials.map((social) => (
           <Link
           target='_blank'
           href={social.link}
           key={social.name}
           >
             <Image
            src={social.src}
            alt={social.name}
            width={37}
            height={37}
             />
           </Link>
          ))}
        </div>
        </div>

        <div className='lg:hidden flex'>
            <Sidebar />
        </div>
    </div>
  )
}

export default Navbar