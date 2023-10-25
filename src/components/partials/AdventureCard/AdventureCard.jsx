"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const AdventureCard = ({ index, title, path, discription, background }) => {
  // console.log(path);

  return (
    <motion.div
      whileHover={{ scale: [1, 1.2, 1.1] }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/adventures/${path}`}>
        <div
          className={`col-span-1 flex flex-col h-48  bg-white border-2 p-4 rounded-t-lg bg-center bg-cover bg-${background}`}
        >
          {/* <h2 className={`mb-2 font-bold text-2xl bg-${background}`}>Image</h2> */}
        </div>
        <div className="col-span-1 flex flex-col h-[35vh] bg-background border-2 p-4 rounded-b-lg">
          <h2 className="mb-2 font-bold text-2xl">{title}</h2>
          <p className="text-md text-justify">{discription}</p>
          <div className="flex flex-wrap mt-auto pt-3 text-xs">
            <button>CLICK ME</button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AdventureCard;
