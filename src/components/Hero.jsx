"use client"

//next image
import Image from "next/image"

//components
// import PariclesContainer from "../components/ParticlesContainer"
// import ProjectsBtn from "../components/ProjectsBtn"
// import Avatar from "../components/Avatar"

//frmaer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants'

const Hero = () => {
  return (
    <motion.section
      // variants={fadeIn('down', 0.3)}
      // initial='hidden'
      // animate='show'
      // exit='hidden'
      className='bg-heroBackground bg-fixed   bg-cover w-full bg-center bg-no-repeat h-[80vh] ' id='home'>
      {/* <div className=' mx-auto h-full flex justify-center items-center  '>
      </div> */}
    </motion.section>
  )
};

export default Hero;


