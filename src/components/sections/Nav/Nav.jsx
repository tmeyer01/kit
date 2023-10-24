'use client'

import React, { useState, useEffect } from 'react';

import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';
import { NavContext } from '@/context/NavContext';


import { motion } from 'framer-motion';

const links = [
  {
    href: '/adventures',
    label: 'Adventures',
  },
  {
    href: '/routes',
    label: 'Routes',
  },
  {
    href: '/merchandise',
    label: 'Merchandise',
  },
  {
    href: '/contact',
    label: 'Contact',
  }
];

const Nav = ({containerStyles, linkStyles, watchingScroll}) => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1310px)',
  });

  const [selected, setSelected] = useState('');



  return (
   <nav className={`${containerStyles} justify-between w-4/5`}>
     <Link
        href={'/'}
        className='relative flex  w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0 items-center font-anton tracking-widest text-2xl uppercase'
        onClick={() => setSelected('')}
      >
        gravel and pavé
      </Link>
    {links.map((link, index) => {
      return (
        <Link
          href={link.href}
          className={`${linkStyles} cursor-pointer relative`}
          key={index}
          onClick={() => setSelected(link.href)}
        >
          {link.label}
          {link.href === selected  && (
            <motion.div
              layoutId='underline'
              className={`left-0 block h-[1px] w-full ${watchingScroll ? "bg-white" : "bg-black"}`}
            />
          )}
        </Link>
      );
    })}

   </nav>
  );
};

export default Nav
