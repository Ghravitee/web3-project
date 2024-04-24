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
      {/* <h2 className="text-center text-3xl lg:text-5xl text-white font-extrabold my-10">
        ABOUT
      </h2> */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("right", "tween", 1, 2)}
        className="grid lg:grid-cols-3 lg:gap-10 lg:px-20 px-8"
      >
        <div>

          <h2 className="text-center text-3xl lg:text-5xl text-white font-extrabold mt-0 my-10 md:hidden">
            ABOUT
          </h2>
          <h1 className="hidden lg:text-left text-center text-5xl lg:text-6xl text-white font-extrabold my-10 md:grid grid-cols-1">
            ABOUT
          </h1>
          <Image
            src="/BOMEOB-character-profile.png"
            alt="character profile"
            width={300}
            height={300}
            className="md:w-[300px] md:h-[300px] mx-auto"
          />
        </div>

        <p className="text-white text-lg mt-10 self-center text-center font1">
          Detective Penguin is not your average birdbrain. With a beak for clues
          and a wing for adventure, he is the feathered Sherlock Holmes of the
          crypto world. With each trade, you are not just buying into a coin,
          you are joining a gang of crypto detectives who are not afraid to
          waddle into the wildest financial escapades.
        </p>
        <h1 className="hidden text-center md:text-2xl lg:text-6xl text-white font-extrabold my-10 lg:grid grid-cols-1 lg:self-end">
          <span className="mb-4">DETECTIVE</span> PENGUIN
        </h1>
      </motion.div>
    </div>
  );
};

export default About;
