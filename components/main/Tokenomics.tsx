"use client"
import React from "react";
import { motion } from "framer-motion";
import { zoomIn, fadeIn } from "@/utils/motion";
import Image from "next/image";


const Tokenomics = () => {
 
  return (
    <div id="tokenomics" className="lg:px-20 px-6 relative">
      <motion.h2
      
      className="text-center text-3xl lg:text-5xl text-white font-extrabold mt-10 mb-20 ">
        TOKENOMICS
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-6">
      <Image
            src="/DPENG.png"
            alt="character profile"
            width={120}
            height={120}
            className="lg:w-[300px] lg:h-[300px] md:w-[160px] md:h-[160px] sm:w-[150px] sm:h-[150px] absolute right-0 top-10 sm:right-24 md:right-36 lg:top-10 lg:right-52 lg:block"
          />
          <motion.div
           variants={zoomIn(0.4, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
           className="p-3 md:col-start-1 md:col-end-3 border-[2px] border-[#DBEDFF] rounded-tr-3xl rounded-bl-3xl box-shadow"
          >
            <h3 className="text-4xl lg:text-5xl text-white font-extrabold text-center mb-4">SYMBOL</h3>
            <p className="font1 text-[#DBEDFF] text-lg lg:text-3xl text-center">DEPT</p>
          </motion.div>

          <motion.div
           variants={zoomIn(1, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
           className="p-3  md:col-start-3 md:col-end-5 lg:row-start-2 lg:row-end-3 md:row-start-1 md:row-end-2 border-[2px] border-[#DBEDFF] rounded-tl-3xl rounded-br-3xl box-shadow"
          >
            <h3 className="text-4xl lg:text-5xl text-white font-extrabold text-center mb-4">TAX</h3>
            <p className="font1 text-[#DBEDFF] text-lg lg:text-3xl text-center">Detective Penguine says &quot;No&#33;&quot;</p>
          </motion.div>

          <motion.div
           variants={zoomIn(1.5, 1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true}}
           className="p-3 lg:col-start-1 lg:col-end-3 md:row-start-2 md:row-end-3 lg:row-start-3 lg:row-end-4 md:col-start-2 md:col-end-4 border-[2px] border-[#DBEDFF] rounded-tr-3xl rounded-bl-3xl box-shadow"
          >
            <h3 className="text-4xl lg:text-5xl text-white font-extrabold text-center mb-4">TOTAL SUPPLY</h3>
            <p className="font1 text-[#DBEDFF] text-lg lg:text-3xl text-center">1,000,000,000</p>
          </motion.div>
  
        
      </div>
    </div>
  );
};

export default Tokenomics;
