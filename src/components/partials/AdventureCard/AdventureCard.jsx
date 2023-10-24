"use client";

import { AnimatePresence, motion } from "framer-motion";

const AdventureCard = ({ index, title, discription }) => {
  return (
    <motion.div
      transition={{ delay: index * 0.1 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="flex flex-col items-center border border-indigo-600 rounded-md"
    >
      <div className="px-6 md:px-0 w-full  border-8 border-yellow-500 bg-black h-48 text-white">
        IMAGE
      </div>
      <div
        className={`md:w-3/4 md:rounded-md bg-blue-50 dark:bg-violet-50 dark:bg-opacity-10 `}
      >
        <h1 className="header-30 md:header-48 md:pr-20 pt-12 text-blue-950 dark:text-violet-200">
          {title}
        </h1>
        <p className="paragraph-20 pt-8 pb-12 text-blue-950 dark:text-violet-200">
          {discription}
        </p>
      </div>
    </motion.div>
  );
};

export default AdventureCard;
