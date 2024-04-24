"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const FAQ = () => {
  return (
    <div id="faq" className="lg:px-20 px-6">
      <h2 className="text-center text-3xl lg:text-5xl text-white font-extrabold mt-10 mb-20 ">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:grid-rows-2 gap-10 py-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("right", "tween", 0.5, 2)}
          viewport={{ once: true }}
          className="border-[3px] border-[#DBEDFF] p-6 lg:first-box rounded-2xl"
        >
          <h3 className="text-3xl text-white mb-4">What is DEPT?</h3>
          <p className="font1 text-[#DBEDFF]">
            Detective Penguin is a fun and innovative meme coin built on the
            Base blockchain. Our mission is to create a vibrant community of
            penguin lovers while offering exciting opportunities for holders
            through our unique tokenomics.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("up", "tween", 1, 2)}
          viewport={{ once: true }}
          className="border-[3px] border-[#DBEDFF] p-6 lg:second-box rounded-2xl"
        >
          <h3 className="text-3xl text-white mb-4">
            How do I import the Base RPC into Metamask?
          </h3>
          <p className="font1 text-[#DBEDFF]">
            Enter The Following Details
            <br />
            Network Name: BASE New RPC URL: https://Mainnet.Base.Org ‍Chain ID:
            84531
            <br />
            Symbol: ETH Block Explorer
            <br />
            <a href="https://Basescan.Org">https://Basescan.Org</a>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("down", "tween", 1.5, 2)}
          viewport={{ once: true }}
          className="border-[3px] border-[#DBEDFF] p-6 lg:third-box rounded-2xl"
        >
          <h3 className="text-3xl text-white mb-4">
            Where can I trade DEPT?
          </h3>
          <p className="font1 text-[#DBEDFF]">
            DEPT Can Be Traded On Decentralized Exchanges (DEXs) That Support
            The Base Blockchain. Some Popular DEXs Include Uniswap, SushiSwap,
            And 1inch. Make Sure To Connect Your Wallet To The Base Network
            Before Trading.
          </p>
        </motion.div>
        <motion.div
          //  initial="hidden"
          //  whileInView="show"
          //  variants={fadeIn("left", "tween", 2, 2)}
          //  viewport={{ once: true}}
          className="border-[3px] border-[#DBEDFF] p-6 lg:fourth-box rounded-2xl"
        >
          <h3 className="text-3xl text-white mb-4">
            Is there a Tax on DEPT transactions?
          </h3>
          <p className="font1 text-[#DBEDFF]">
            Yes, DEPT Operates On A 1% Tax Round Trip, That Will Be Used For
            Project Development As Dev Is Super Poor. This Allows For Seamless
            And Cost-Effective Trading Of BOMEOB Tokens
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
