"use client";
import React from "react";
import { time } from "../actions/time";
import { useEffect, useState } from "react";
import Link from "next/link";

function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    time(setCurrentTime);
  }, []);
  return (
    <div className="text-white flex font-light justify-between text-sm mx-4 sm:mx-10 my-2 absolute top-0 left-0 right-0 z-20">
      <Link href="/" className="cursor-pointer">
        MY PORTFOLIO
      </Link>
      <p className="ml-10">LOCAL TIME {currentTime}</p>
      <p>NATTAWUT INTARAPANICH</p>
    </div>
  );
}

export default Navbar;
