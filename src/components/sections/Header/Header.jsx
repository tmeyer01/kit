'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";



import {motion} from 'framer-motion';

import { useParams } from 'next/navigation';


// components
import Nav from '@/components/sections/Nav/Nav';
import NavMobile from "@/components/sections/Nav/NavMobile/NavMobile";
import MenuBtn from '@/components/partials/Buttons/MenuBtn';
import Socials from '@/components/Socials';



const Header = ({ params }) => {

  const [activeScroll, setActiveScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActiveScroll(window.scrollY > 100);
    }

    // add event listener
    window.addEventListener('scroll', handleScroll);

    //clear event listener
    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }

  }, [activeScroll]);

  return (
    <header
      className={`fixed z-50 w-full transition-all ${
        activeScroll ?  'bg-[#030315] py-6 text-white' : 'bg-transparent py-8'
        }`}
    >
      <div className='container mx-auto flex flex-col xl:flex-row items-center justify-between'>
        {/* nav */}
        <Nav
          watchingScroll={activeScroll}
          containerStyles='hidden xl:flex items-center  gap-x-8'
        />
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
