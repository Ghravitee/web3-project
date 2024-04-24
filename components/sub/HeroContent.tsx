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
      className="flex lg:flex-row flex-col md:flex-row items-center justify-center md:px-20 px-8 my-20 w-full z-[20]"
    >
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/BOMEOB-main-character.png"
          alt="icons"
          height={250}
          width={250}
          className="md:w-[450px] md:h-[450px] mt-16 mb-10 md:mb-0"
        />
      </motion.div>
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start mb-10">
        <motion.div variants={slideInFromTop} className="opacity-[0.9]">
          <h1 className="text-white text-6xl lg:text-7xl text-center leading-[1.2]">
            Detective Penguin
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 lg:text-4xl text-4xl text-center font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            THE
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              ULTIMATE{" "}
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r text-white">
              MEME COIN!
            </span>
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-gray-300 text-2xl my-5 max-w-[600px] font1 text-center"
        >
          Introducing Detective Penguin Meme Coin: Where the hunt for profits is
          as wacky as a penguin in a tuxedo!
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.a
          href=""
            variants={slideInFromLeft(1)}
            className="py-3 px-4 md:px-10 button-primary text-center text-white cursor-pointer rounded-lg flex-1"
          >
            TRADE NOW
          </motion.a>
          <motion.a
            href="https://t.me/lapd_peng"
            variants={slideInFromLeft(1)}
            className="py-3 px-4 md:px-10 button-primary text-center text-white cursor-pointer rounded-lg flex-1 w-full"
          >
            TELEGRAM
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
