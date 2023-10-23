// import EventBox from './EventBox';
// import SectionHeader from '../SectionHeader';

"use client"

import { useMediaQuery } from 'react-responsive';

import Link from 'next/link'


const links = [
  {
    path: 'tree2sea',
    title: 'Tree 2 Sea',
    discription: '11 day bikepacking adventure',
  },
  {
    path: 'octet',
    title: 'Octet',
    discription: '8 moutains 5000+ meters of elevation',
  },
  {
    path: 'threehundred',
    title: '300Km for Milan San Remo',
    discription: 'Start the season off with a bang',
  },
  {
    path: 'cvn2023',
    title: 'Cowichan Valley Nightmare 2023',
    discription: '11 day bikepacking adventure',
  },
  {
    path: 'underbiking',
    title: 'Underbiking Enthusiats',
    discription: 'The trail says its a black diamond but are you sure about that?',
  },
];



const AdventureBlog = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1310px)',
  });


  return (
    <section className='flex justify-center'>

    <div className='adventures grid gap-4 grid-cols-2 w-3/4 justify-center' id='tours'>

      {links.map((link, index) => {
      return (
        <div className='flex flex-row items-center border border-indigo-600 '>
          <div className='px-6 md:px-0 w-full md:w-1/4'>
            {/* <div className={`h-[24.125rem] md:h-[37.875rem] bg-no-repeat bg-contain bg-center ${imageClass} ${imageClassDark}`} /> */}
            IMAGE
          </div>

          <div className={`md:w-3/4 md:rounded-md bg-blue-50 dark:bg-violet-50 dark:bg-opacity-10 `}>
            <h1 className='header-30 md:header-48 md:pr-20 pt-12 text-blue-950 dark:text-violet-200'>
            {link.title}
            </h1>
            <p className='paragraph-20 pt-8 pb-12 text-blue-950 dark:text-violet-200'>
            {link.discription}
            </p>
          </div>
        </div>
      );
    })}



    </div>
    </section>
  );
};

export default AdventureBlog;
