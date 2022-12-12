import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{ opacity: 1}}
    transition={{duration:2.5}}
    className="h-screen flex flex-col relative text-center md:flex-row md:text-left max-w-7xl px-10 items-center justify-evenly mx-auto">
        <h3 className="absolute top-24 uppercase tracking-[15px] justify-center text-teal-500/70 text-2xl font-light">About</h3>

        <motion.img 
        initial={{
            x: -200,
            opacity: 0
        }}
        transition={{
            duration: 1.2
        }}
        whileInView={{ opacity:1, x: 0 }}
        viewport={{once: false}}
        src="https://www.uifaces.co/wp-content/uploads/2022/01/mike-avatar-300x300-1.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] pt-5" />

        <div className="space-y-10 px-0 md:px-10"> 
            <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#008080]">little</span> background</h4>
            <p className="text-base">
                I&apos;m Aaron, I am a self taught web developer. I discovered my passion for web developement around a year ago, and it&apos;s when I realized how much I loved
                every aspect of it from building something from the ground up and watching as it all comes together, or even the frustrating times of trying to fix 
            </p>
        </div>  
    </motion.div>
  )
}