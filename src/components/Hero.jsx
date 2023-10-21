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
    <section className='h-[80vh] xl:h-[850px]' id='home'>
      <div className='container mx-auto h-full flex justify-center items-center xl:justify-start'>
      <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1'
          >
            Transforming Dreams <br /> Into {' '}
            <span className="text-accent"> Digital Reality </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 ">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </motion.p>
      </div>
    </section>
  )
};

export default Hero;

