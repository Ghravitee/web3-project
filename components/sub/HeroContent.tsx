"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex lg:flex-row flex-col items-center justify-center md:px-20 px-8 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start mb-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[15px] border border-[#7042f88b] opacity-[0.9]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 mr-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>

          <h1 className="Welcome-text lg:text-4xl text-2xl">BOOK OF MEME</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-6xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            EVERY
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              PAGE{" "}
            </span>
            IS A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              LAUGH!
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-300 text-2xl my-5 max-w-[600px]"
        >
          A meme coin, a token born from the pages of classical literature and
          infused with the whimsical charm of internet memes.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-3 px-4 md:px-10 button-primary text-center text-white cursor-pointer rounded-lg flex-1"
          >
            TRADE NOW
          </motion.a>
          <motion.a
            href="https://jw.org"
            variants={slideInFromLeft(1)}
            className="py-3 px-4 md:px-10 button-primary text-center text-white cursor-pointer rounded-lg flex-1 w-full"
          >
            TELEGRAM
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/BOMEOB-main-character.png"
          alt="icons"
          height={300}
          width={300}
          className="md:w-[450px] md:h-[450px] mb-10 md:mb-0"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
