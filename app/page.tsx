"use client";
import { time } from "./actions/time";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    time(setCurrentTime);
  }, []);

  return (
    <>
    {/* ต้องทำ component  */}
      <div className="bg-[#0E1111]  font-body w-screen h-screen relative overflow-hidden flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-white flex font-light justify-between text-sm mx-4 sm:mx-10 my-2 absolute top-0 left-0 right-0 z-20">
          <p>MY PORTFOLIO</p>
          <p>LOCAL TIME {currentTime}</p>
          <p>NATTAWUT INTARAPANICH</p>
        </div>

        {/* Main Text */}
        <div className="flex  flex-col font-light items-center justify-center text-center font-body text-white z-10 text-lg sm:text-2xl lg:text-3xl gap-4 mb-20">
          <p>HELLO IM “LIST” I'M A DEVELOPER I BUILD MODERN WEB APPS</p>
          <p>WITH NEXT.JS AND TYPESCRIPT.</p>
        </div>

        {/* Footer Links */}
        {/* ต้องทำ component  */}
        <div className="flex  font-body font-light flex-col sm:flex-row justify-center sm:justify-between z-20 gap-16 pr-20 pl-12 text-white text-xs sm:text-sm absolute bottom-28 font-metrophobic">
          <Link href="/about">ABOUT ME</Link>
          <Link href="/my-project">MY PROJECT</Link>
          <Link href="/contrack">CONTACT</Link>
          {/* <Link href="/resume">RESUME</Link> */}
        </div>

        {/* Overlay and Gradient Circle */}
        <p className="w-screen h-screen bg-black opacity-80 absolute "></p>
        <p className="blur-[180px] w-[300px] sm:w-[500px] lg:w-[630px] h-[300px] sm:h-[500px] lg:h-[630px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-[#00D0FF] to-[#FF007B] z-0 shadow-2xl"></p>
      </div>
    </>
  );
}
