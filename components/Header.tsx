import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Squash as Hamburger } from 'hamburger-react'
import { useState } from "react";
import Link from "next/link";


type Props = {};

export default function Header({}: Props) {
  // const [isOpen, setOpen] = useState(false)
   
  // const toggleMenu = Hamburger;
  // if toggleMenu = useState(false){

  // }

  return (
    <header className="sticky top-0 flex items-center justify-between max-w-7xl mx-auto z-50 p-5">
      
    {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
    {/* <Hamburger className="absolute top-0 left-0" onToggle={toggled => {
    if (toggled) {
     // open a menu

    } else {
     // close a menu
      }
      }} /> */}

      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        <ul className="flex flex-row items-center active">
          <li className="header-link">
            <Link href="#about">About</Link>
          </li>
          <li className="header-link">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="header-link">
            <Link href="#work">Work</Link>
          </li>
        </ul>
      </motion.div>

      
      <motion.div
        className="flex flex-row items-center cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
       >
        
        <SocialIcon
          className="cursor-pointer pr-0 sm:p-8"
          network="email"
          fgColor="white"
          bgColor="transparent"
          url="#contact"
         />
          <Link href="#contact">
        <p className="uppercase hidden md:inline-flex text-xl">
          Get in touch
        </p>
        </Link>
      </motion.div>
      
    </header>
  );
}

// <SocialIcon
// url="https://github.com/aarongrossmandev"
// fgColor="teal"
// bgColor="transparent"
// />
// <SocialIcon
// url="https://www.linkedin.com/in/aaron-grossman-820ab3245"
// fgColor="teal"
// bgColor="transparent"
// />
// <SocialIcon
// url="https://github.com/aarongrossmandev"
// fgColor="teal"
// bgColor="transparent"
// />
