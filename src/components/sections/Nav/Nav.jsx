'use client'
import React, { useContext } from 'react';

import Link from 'next/link'
import { useMediaQuery } from 'react-responsive';
import { NavContext } from '@/context/NavContext';

const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/adventures',
    name: 'Adventures',
  },
  {
    path: 'routes',
    name: 'Routes',
  },
  {
    path: 'merchandise',
    name: 'Merchandise',
  },
  {
    path: 'contact',
    name: 'Contact',
  },
];

const Nav = ({containerStyles, linkStyles}) => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1310px)',
  });

  const { isOpen, setIsOpen } = useContext(NavContext);

  return (
   <nav className={`${containerStyles}`}>
    {links.map((link, index) => {
      return (
        <Link
          href={link.path}
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
          key={index}
          smooth={!isDesktop ? false : true}
          spy
          offset={-50}
          activeClass='active'
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      );
    })}
   </nav>
  );
};

export default Nav
