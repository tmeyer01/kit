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
      className="grid grid-cols-1 border border-indigo-600"
    >
      <div class="col-span-1 flex flex-col h-48  bg-white border-2 p-4">
        <h2 class="mb-2 font-bold text-2xl">Image</h2>
      </div>
      <div class="col-span-1 flex flex-col bg-white border-2 p-4">
        <h2 class="mb-2 font-bold text-2xl">Card Name</h2>
        <div class="mb-4 flex flex-wrap">
          <span class="mr-2">Link 1</span>
          <span class="mr-2">Link 2</span>
        </div>
        <p class="text-md text-justify">
          Some Description Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Maecenas vel enim lectus.
        </p>
        <div class="flex flex-wrap mt-auto pt-3 text-xs">
          <p class="mr-2 mb-2">Tag #1</p>
          <p class="mr-2 mb-2">Tag #2</p>
        </div>
      </div>
    </motion.div>
  );
};

export default AdventureCard;
