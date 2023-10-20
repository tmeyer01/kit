"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {motion} from 'framer-motion';



const Header = () => {
  return (
    <header className="fixed z-50 w-full">
      <div className="container mx-auto">
        <Link>
        Gravel and Pave
        </Link>
      </div>
    </header>
  )
}

export default Header
