import React from 'react';
import { motion } from 'framer-motion';

function WeAreOchi() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="2.6"
      className="w-screen h-screen pt-16  bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text  border-t-2 border-b-2 border-zinc-300  flex overflow-hidden whitespace-nowrap ">

        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[28vw] leading-none uppercase font-founders font-bold pr-20 -mt-9 ">
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 15 }}
          className="text-[28vw] leading-none uppercase font-founders font-bold pr-20 -mt-9 ">
          we are ochi
        </motion.h1>

      </div>
    </div>
  );
}

export default WeAreOchi;