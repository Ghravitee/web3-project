"use client"
import React from "react";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";


const Tokenomics = () => {
 
  return (
    <div id="tokenomics" className="lg:px-20 px-6">
      <h2 className="text-center text-3xl lg:text-5xl text-white font-extrabold mt-10 mb-20 ">
        TOKENOMICS
      </h2>
      {/* <InfiniteMovingCardsDemo /> */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6">
       
          <motion.div
           variants={zoomIn(0.4, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
           className="p-3 md:col-start-1 md:col-end-3 border-[2px] border-[#DBEDFF] rounded-tr-3xl rounded-bl-3xl box-shadow"
          >
            <h3 className="text-4xl lg:text-5xl text-white font-extrabold text-center mb-4">SYMBOL</h3>
            <p className="font1 text-[#DBEDFF] text-lg lg:text-3xl text-center">BOMEOB</p>
          </motion.div>

          <motion.div
           variants={zoomIn(1, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
           className="p-3  md:col-start-3 md:col-end-5 lg:row-start-2 lg:row-end-3 md:row-start-1 md:row-end-2 border-[2px] border-[#DBEDFF] rounded-tl-3xl rounded-br-3xl box-shadow"
          >
            <h3 className="text-4xl lg:text-5xl text-white font-extrabold text-center mb-4">TAX</h3>
            <p className="font1 text-[#DBEDFF] text-lg lg:text-3xl text-center">1/1</p>
          </motion.div>

          <motion.div
           variants={zoomIn(1.5, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
           className="p-3 lg:col-start-1 lg:col-end-3 md:row-start-2 md:row-end-3 lg:row-start-3 lg:row-end-4 md:col-start-2 md:col-end-4 border-[2px] border-[#DBEDFF] rounded-tr-3xl rounded-bl-3xl box-shadow"
          >
            <h3 className="text-4xl lg:text-5xl text-white font-extrabold text-center mb-4">TOTAL SUPPLY</h3>
            <p className="font1 text-[#DBEDFF] text-lg lg:text-3xl text-center">6,888,009,930</p>
          </motion.div>
  
        
      </div>
    </div>
  );
};

export default Tokenomics;
