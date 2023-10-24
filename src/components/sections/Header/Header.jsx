'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";



import {motion} from 'framer-motion';

import { useParams } from 'next/navigation';


// components
import Nav from "../Nav/Nav";
import NavMobile from "../Nav/NavMobile/NavMobile";
import MenuBtn from "../../MenuBtn";
import Socials from "../../Socials";



const Header = ({ params }) => {

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
        active ?  'bg-[#030315] py-6 text-white' : 'bg-transparent py-8'
        }`}
    >
      <div className='container mx-auto flex flex-col xl:flex-row items-center justify-between'>
        <Link
          href={'/'}
          className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0 items-center font-anton tracking-widest text-2xl uppercase'
        >
          gravel and pavé
        </Link>
        {/* nav */}
        <Nav containerStyles='hidden xl:flex items-center  gap-x-8' />
        {/* nav mobile */}
        <NavMobile />
        {/* nav button */}
        <div className='absolute right-7 top-9 z-10 xl:hidden'>
          <MenuBtn />
        </div>
        {/* socials  */}
        <Socials
          containerStyles='hidden xl:flex  text-[24px] gap-x-4'
          iconStyles='hover:text-accent transition-all'
        />
      </div>
    </header>
  )
}

export default Header
