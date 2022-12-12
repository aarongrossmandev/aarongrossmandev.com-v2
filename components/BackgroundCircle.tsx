import React from 'react'
import { motion } from "framer-motion";
type Props = {}

function BackgroundCircle({}: Props) {
  return (
    <div className="relative flex justify-center items-center hero-2">
        <div className=" absolute border border-[#00FFFF] h-[335px] w-[335px] sm:h-[405px] sm:w-[405px] mt-52 rounded-full bg-gradient-to-r from-white to-teal-500 animate-spin z-5" />
        <div className="absolute border border-[#00FFFF] h-[325px] w-[325px]  sm:h-[390px] sm:w-[390px] mt-52 rounded-full bg-blue-50 z-5"/>
        <div className="absolute border border-[#00FFFF] h-[325px] w-[325px] sm:h-[390px] sm:w-[390px] mt-52 rounded-full bg-gradient-to-r from-red-800 to-yellow-500 animate-spin z-5"/>
        <div className="absolute border border-[#00FFFF] h-[310px] w-[310px] sm:h-[370px] sm:w-[370px] mt-52 rounded-full bg-blue-50 z-5"/>
        <div className="absolute border border-[#00FFFF] h-[310px] w-[310px] sm:h-[370px] sm:w-[370px] mt-52 rounded-full bg-gradient-to-r from-yellow-200 to-blue-500 animate-spin z-5"/>
        <div className="absolute border border-[#00FFFF] h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] mt-52 rounded-full bg-blue-50 z-5"/>
        <div className="absolute border border-[#00FFFF] h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] mt-52 rounded-full bg-gradient-to-r from-teal-400 to-orange-500 animate-spin z-5"/>
        <div className="absolute border border-[#00FFFF] h-[265px] w-[265px] sm:h-[300px] sm:w-[300px] mt-52 rounded-full bg-blue-50 z-5">
            <img src="https://www.uifaces.co/wp-content/uploads/2022/01/mike-avatar-300x300-1.png" className="object-cover"/>
        </div>
    </div>
    
    )
}

export default BackgroundCircle;