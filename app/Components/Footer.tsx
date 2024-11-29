import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <div className="flex  font-body font-light flex-col sm:flex-row justify-center sm:justify-between z-20 gap-16 pr-20 pl-12 text-white text-xs sm:text-sm absolute bottom-28 font-metrophobic">
    <Link href="/about">ABOUT ME</Link>
    <Link href="/my-project">MY PROJECT</Link>
    <Link href="/contrack">CONTACT</Link>
    {/* <Link href="/resume">RESUME</Link> */}
  </div>
  )
}

export default Footer