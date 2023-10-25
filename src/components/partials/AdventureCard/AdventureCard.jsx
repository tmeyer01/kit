"use client";

import { AnimatePresence, motion } from "framer-motion";

const AdventureCard = ({ index, title, discription }) => {
  return (
    <motion.div
      // transition={{ delay: index * 0.1 }}
      // initial={{ opacity: 0, y: 20 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: 20 }}
      // className="flex flex-col h-5/6 items-center border border-indigo-600 rounded-md "
      className=" "
    >
      <div class="col-span-1 flex flex-col h-48  bg-white border-2 p-4 rounded-t-lg">
        <h2 class="mb-2 font-bold text-2xl">Image</h2>
      </div>
      <div class="col-span-1 flex flex-col h-[50vh] bg-background border-2 p-4 rounded-b-lg">
        <h2 class="mb-2 font-bold text-2xl">{title}</h2>
        <p class="text-md text-justify">{discription}</p>
        <div class="flex flex-wrap mt-auto pt-3 text-xs">
          <p class="mr-2 mb-2">Tag #1</p>
          <p class="mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AdventureCard;
