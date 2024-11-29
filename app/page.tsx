"use client";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      {/* ต้องทำ component  */}
      <div className="bg-[#0E1111]  font-body w-screen h-screen relative overflow-hidden flex flex-col justify-center items-center">
        {/* Header */}
        <Navbar/>
        {/* Main Text */}
        <div className="flex  flex-col font-light items-center justify-center text-center font-body text-white z-10 text-lg sm:text-2xl lg:text-3xl gap-4 mb-20">
          <p>HELLO IM “LIST” IM A DEVELOPER I BUILD MODERN WEB APPS</p>
          <p>WITH NEXT.JS AND TYPESCRIPT.</p>
        </div>

        {/* Footer Links */}
        {/* ต้องทำ component  */}
        <Footer/>

        {/* Overlay and Gradient Circle */}
        <p className="w-screen h-screen bg-black opacity-80 absolute "></p>
        <p className="blur-[180px] w-[300px] sm:w-[500px] lg:w-[630px] h-[300px] sm:h-[500px] lg:h-[630px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-[#00D0FF] to-[#FF007B] z-0 shadow-2xl"></p>
      </div>
    </>
  );
}
