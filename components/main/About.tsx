"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop2,
  fadeIn,
  zoomIn,
} from "@/utils/motion";

const About = () => {
  return (
    <div id="about" className="">
      <h2 className="text-center text-3xl lg:text-5xl text-white font-extrabold my-10">
        ABOUT
      </h2>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true}}
        variants={fadeIn("right", "tween", 1, 2)}
        className="grid md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-20 px-8"
      >
        <Image
          src="/BOMEOB-character-profile.png"
          alt="character profile"
          width={300}
          height={300}
          className="md:w-[400px] md:h-[400px] justify-self-center"
        />
        <TextGenerateEffectDemo />
      </motion.div>
    </div>
  );
};

export default About;
