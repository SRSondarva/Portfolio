import { motion } from "framer-motion";
import { NavLinks } from '@/constants';

import Link from 'next/link';
import Linkedind from "@/public/icons/linkedind.svg"
import Githubd from "@/public/icons/githubd.svg"
import Image from "next/image";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links z-50" variants={variants}>
      {NavLinks.map((nav) => (
        <motion.a
          key={nav.title}
          href={nav.link}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {nav.title}
        </motion.a>
      ))}
      <div className='flex-row flex gap-5 mt-3 underline'>
           <Link
           target='_blank'
           href="https://www.linkedin.com/in/sanjay-ce/"
           >
            <Image
            src={Linkedind}
            alt="Linkedind"
            width={38}
            height={38}
             />
           </Link>

           <Link
           target='_blank'
           href="https://github.com/SRSondarva"
           >
            <Image
            src={Githubd}
            alt="Githubd"
            width={38}
            height={38}
             />
           </Link>
        </div>
    </motion.div>
  );
};

export default Links;
