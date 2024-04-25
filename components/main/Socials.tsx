"use client";


import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { spring } from "@/utils/motion";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";


const Socials = () => {
  return (
    <div id="socials" className="py-10">
      <h2 className="text-center text-3xl lg:text-5xl text-white font-extrabold mt-10 mb-20">
        SOCIALS
      </h2>
      <div  className="grid gap-6 justify-center md:grid-cols-2 md:gap-10 lg:gap-14 lg:px-20 px-8">
      <motion.div
         variants={spring}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
       
      >
        <Image
          src="/DPENG [png].png"
          alt="thuglife"
          width={300}
          height={300}
          className="md:w-[400px] md:h-[400px] mx-auto"
        />
      
      </motion.div>

      <div className="flex flex-col justify-center">
        <h3 className="text-2xl text-white mb-10 text-center md:text-left">DEPT, The ultimate meme coin On Base</h3>
        <p className="text-lg text-white font1 mb-10 text-center md:text-left">detectivepenguine@gmail.com</p>
        <div className="flex md:justify-start justify-center items-center gap-4">
        
          <Link href="https://t.me/lapd_peng" className="flex justify-center items-center p-6 rounded-full bg-white border-[4px] border-gray-400">
          <BiLogoTelegram color="#769AFF" size={60}/>
          </Link>
          <Link href="https://x.com/dect_peng" className="flex justify-center items-center p-6 rounded-full bg-white border-[4px] border-gray-400">
          <RiTwitterXFill size={60} />
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Socials;
