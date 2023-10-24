"use client"

//next image
import Image from "next/image"

//components
// import PariclesContainer from "../components/ParticlesContainer"
// import ProjectsBtn from "../components/ProjectsBtn"
// import Avatar from "../components/Avatar"

//frmaer motion
import { motion } from 'framer-motion';

import { usePathname } from 'next/navigation'

//variants
import { fadeIn } from '../../variants'



const Hero = () => {

  const pathname = usePathname()

  const pathnameToString = (pathname) => {
    const nameToArray = pathname.split('/').pop()
    return nameToArray
  }

  pathnameToString(pathname)

  return (
    <motion.section
      className='relative bg-heroBackground bg-fixed   bg-cover w-full bg-center bg-no-repeat h-[60vh] bg-black'
    >
      <motion.div
        transition={{delay:0.7}}
        initial={{opacity:0, x:20}}
        animate={{opacity:1, x:0}}
        exit={{opacity:0, x:20}}
        class=" absolute bottom-3 right-4 text-white uppercase text-3xl"
      >
        {pathnameToString(pathname)}
      </motion.div>
    </motion.section>
  )
};

export default Hero;


