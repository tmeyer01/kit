// import EventBox from './EventBox';
// import SectionHeader from '../SectionHeader';

"use client"

import { useMediaQuery } from 'react-responsive';

import Link from 'next/link'

import  AdventureCard  from '@/components/partials/AdventureCard/AdventureCard';
import GridContainer from '@/components/layouts/GridContainer';

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
    <section className='flex justify-center pt-6'>
      <GridContainer>
        {links.map((links, index) =>  {
          return (
              <AdventureCard key={index} index={index} {...links}/>
        )
          })}
      </GridContainer>
    </section>
  );
};

export default AdventureBlog;
