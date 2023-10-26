"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

import Link from "next/link";
import Image from "next/image";

const AdventureCard = ({
  index,
  title,
  path,
  discription,
  background,
  image,
  alt,
}) => {
  // console.log("Adventure Card background", image);

  return (
    <motion.div
      whileHover={{ scale: [1, 1.2, 1.1] }}
      transition={{ duration: 0.4 }}
      className="flex justify-center items-stretch"
    >
      <Link href={`/adventures/${path}`}>
        <div className="max-w-md overflow-hidden rounded-2xl shadow-lg h">
          <Image
            src={image}
            blurDataURL={image}
            alt={alt}
            width={300}
            height={100}
            className="w-full "
          />
          <div className="bg-white h-80 px-6 py-4 lg:h-52">
            <span className="text-xl mb-1 font-anton">{title}</span>
            <div className="pt-6">
              <p className="font-small ">{discription}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AdventureCard;
