import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import { motion } from "framer-motion";

type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name's Aaron",
      "Making Amazing Experiences.tsx",
      "<Solving Problems with code />"
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-20">
      <h1 className="z-20 pb-16 sm:pb-32 md:pb-32 text-3xl md:text-4xl uppercase tracking-[10px] text-teal-500/70 opacity-70 md:ml-5 font-light">Web Developer</h1>
      <BackgroundCircle />
      
      <h2 className="text-[#FF7F50] z-50 pt-64 md:pt-80 text-3xl md:text-7xl">
        <span>{text}</span>
      <Cursor cursorColor='#FF7F50' />
      </h2>

        <motion.div className="hero-buttons flex sm:flex-row justify-between mx-auto pt-6"
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
        transition={{ duration: 1.5 }}>
        <button className="cv-btn mr-4">Download CV</button>
        <button className="work-btn">My Work</button>
        </motion.div>
    </div>
  )
}