"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    const [active, setActive] = React.useState<string | null>(null);

    const toggleNavbar = () : void => {
        setActive(!active ? "active" : null);
    }
  return (
    <nav className="bg-[#372699] w-full py-4 border-b-transparent fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-3xl z-50 px-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-around h-6">
          <div className="flex items-center">
            <div className="flex items-center justify-center flex-shrink-0 gap-4">
             <Link href="/">
               <Image
               src="/BOMEOB character profile-1.png"
               alt="logo"
               width={40}
               height={40}
               className="md:w-[45px] md:h-[45px]"
               />
             </Link>
             <p className="text-white text-lg">BOMEOB</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-10">
                <a href="/" className="text-white text-lg lg:text-2xl p-3 hover:text-gray-300 rounded-lg">
                    Home
                </a>
                <a href="#about" className="text-white text-lg lg:text-2xl p-3 hover:text-gray-300 rounded-lg">
                    About
                </a>
                <a href="#tokenomics" className="text-white text-lg lg:text-2xl p-3 hover:text-gray-300 rounded-lg">
                    Tokenomics
                </a>
                <a href="#faq" className="text-white text-lg lg:text-2xl hover:text-gray-300 rounded-lg">
                    FAQs
                </a>
                <a href="#socials" className="text-white text-lg lg:text-2xl p-3 hover:text-gray-300 rounded-lg">
                    Socials
                </a>
            </div>
          </div>
          <div className="md:hidden flex items-center ">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-inset focus:ring-white"
            onClick={toggleNavbar}>
                {active ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}
            </button>
          </div>
        </div>
      </div>
      {active && (
        <div className="md-hidden">
            <div className="flex flex-col justify-center items-center p-5 gap-4 sm:px-3">
            <a href="/" className="text-white hover:border-[1px] hover:border-[#DBEDFF] p-3 rounded-2xl w-full text-center">
                    Home
                </a>
                <a href="#about" className="text-white hover:border-[1px] hover:border-[#DBEDFF] p-3 rounded-2xl w-full text-center">
                    About
                </a>
                <a href="#tokenomics" className="text-white hover:border-[1px] hover:border-[#DBEDFF] p-3 rounded-2xl w-full text-center">
                    Tokenomics
                </a>
                <a href="#faq" className="text-white hover:border-[1px] hover:border-[#DBEDFF] p-3 rounded-2xl w-full text-center">
                    FAQs
                </a>
                <a href="#socials" className="text-white hover:border-[1px] hover:border-[#DBEDFF] p-3 rounded-2xl w-full text-center">
                    Socials
                </a>
            </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

