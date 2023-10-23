"use client"

//next image
import Image from "next/image"



//frmaer motion
import { motion } from 'framer-motion';

//variants
import { fadeIn } from '../../variants'

const LandingHero = () => {
  return (
    <section className='bg-heroBackground bg-fixed   bg-cover w-full bg-center bg-no-repeat h-[80vh] xl:h-screen' id='home'>
      <div className=' mx-auto h-full flex justify-center items-center text-white'>
      <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h1 pr-8 text-4xl font-anton '
          >
            Illegitimi  <br /> non {' '}carborundum
            {/* <span className="text-accent"> carborundum </span> */}
          </motion.h1>
          {/* subtitle */}
          <motion.p
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           animate='show'
           exit='hidden'
           className=" "
          //  className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 border-4 border-sky-500 "
          >
            Don't let the bastards grind you down <br /> and {' '}
            <span className="text-rose-600 text-xl"> Keep it loud! </span>
      </motion.p>
      </div>
    </section>
  )
};

export default LandingHero;

