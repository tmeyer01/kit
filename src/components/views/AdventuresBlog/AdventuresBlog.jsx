// import EventBox from './EventBox';
// import SectionHeader from '../SectionHeader';

"use client";

import { useMediaQuery } from "react-responsive";

import Link from "next/link";

//frmaer motion
import { motion } from "framer-motion";

import AdventureCard from "@/components/partials/AdventureCard/AdventureCard";
import GridContainer from "@/components/layouts/GridContainer";

const links = [
  {
    path: "treeTosea",
    image: "/assets/images/adventures/tree2sea/icon.png",
    alt: "tree2sea",
    title: "Tree 2 Sea",
    discription:
      " 1000km, 11 day bikepacking adventure in some of the most remote parts of Vancouver Island",
    background: "treeToSea",
  },
  {
    path: "octet",
    alt: "octet",
    image: "/assets/images/adventures/tree2sea/icon.png",
    title: "Octet",
    discription:
      "8 moutains 5000+ meters of elevation, no fufu, who will survive?",
  },
  {
    path: "threehundred",
    alt: "threehundred",
    image: "/assets/images/adventures/tree2sea/icon.png",
    title: "300KM for Milan San Remo?",
    discription:
      "Start the season off with a bang. Sure hope youve got a bike fit",
  },
  {
    path: "cvn2023",
    alt: "cvn2023",
    title: "Cowichan Valley Nightmare 2023",
    image: "/assets/images/adventures/tree2sea/icon.png",
    discription:
      "200km all road event through the dead of night. Pray for rain",
  },
  {
    path: "underbiking",
    alt: "underbiking",
    image: "/assets/images/adventures/tree2sea/icon.png",
    title: "Underbiking Enthusiats",
    discription:
      "The trail says its a black diamond but are you sure about that?",
  },
];

const AdventureBlog = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });

  return (
    <section className="flex justify-center pt-6 pb-6 bg-accent">
      <GridContainer>
        {links.map((link, index) => (
          <motion.div
            transition={{ delay: index * 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            key={index}
          >
            <AdventureCard key={index} index={index} {...link} />
          </motion.div>
        ))}
      </GridContainer>
    </section>
  );
};

export default AdventureBlog;
