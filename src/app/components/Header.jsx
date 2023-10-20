'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {motion} from 'framer-motion';



const Header = () => {

  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    }

    // add event listener
    window.addEventListener('scroll', handleScroll);

    //clear event listener
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }

  }, [active]);
  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        active ?  'bg-[#030315] py-6' : 'bg-transparent py-8'
        }`}
    >
      <div className='container mx-auto flex flex-col xl:flex-row items-center justify-between'>
        <Link
          href={'#'}
          className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0 items-center'
        >
          Gravel and Pave
        </Link>
        {/* nav */}
        <nav>nav</nav>
        {/* nav mobile */}
        <nav>nav mobile</nav>
        {/* nav button */}
        <div>
          button
        </div>
        {/* socials  */}
      </div>
    </header>
  )
}

export default Header
