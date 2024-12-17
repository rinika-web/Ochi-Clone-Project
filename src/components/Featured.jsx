import { motion } from 'framer-motion';
import React, { useState } from 'react';
import AH from '../assets/AH.png';
import CS_Website from '../assets/CS_Website.png';

function Featured() {
  const [activeTitle, setActiveTitle] = useState(null);

  return (
    <div className="main w-full h-full mt-[-10vw] bg-[#d07f46f3]">
      <div className="headline px-[5.5vw] text-[3.8vw] text-justify font-light font-nemu">
        Featured Project
        <hr className="mt-5 border-[#090202]" />
      </div>

      <div className="bothCards flex justify-between font-founders px-[4vw] py-9">

        <div
          className="card-wrapper relative flex flex-col  items-start w-[45%]">
          <div className="dot ml-[-1.8vw] w-3 h-3 rounded-full bg-[#090202]"></div>
          <p className='mt-[-1.6vw] ml-[-0.1vw] text-[1.5vw] font-nemu font-medium tracking-tight text-[#090202]'>
            Cardboard Spaceship</p>

          <div
            onMouseEnter={() => setActiveTitle("Cardboard Spaceship")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles relative uppercase text-[6.5vw] mb-4 flex justify-center items-center h-full"
          >
            <div
              className="cards relative w-[42vw] h-[34vw] mt-[3vw] bg-red-6000 rounded-xl"
            >


              <motion.div
                className="image absolute"
                initial={{ scale: 1.1 }}
                whileHover={{ scale: 1.0 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={CS_Website}
                  alt="CS_Website"
                  className="w-full h-full object-cover rounded-xl" />

              </motion.div>
              <h1 className="title flex items-center justify-center overflow-hidden font-bold  tracking-tight text-[#f5f24c]">
                {"Cardboard Spaceship".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={activeTitle === "Cardboard Spaceship" ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    className="flex items-center justify-center mt-[3vw] relative "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
        </div>


        <div className="card-wrapper flex flex-col items-start w-[45%]">

          <div className="dot ml-[-1.8vw] w-3 h-3 rounded-full bg-[#090202]"></div>
          <p className='mt-[-1.6vw] ml-[-0.1vw] text-[1.5vw] font-nemu font-medium tracking-tight text-[#090202]'>
            AH2 & Matt Horn</p>

          <div
            onMouseEnter={() => setActiveTitle("AH2 & Matt Horn")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles uppercase text-6xl mb-4"
          >
            <div className="div">

              <div className="cards absolute w-[42vw] h-[34vw] mt-[3vw] bg-red-600 rounded-xl">
                <motion.div
                  className="image absolute"
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={AH} alt="AH" className="w-full h-full object-cover rounded-xl" />
                </motion.div>
              </div>

              <h1 className="title relative flex overflow-hidden font-bold text-[6vw] ml-[5.5vw] tracking-tight text-[#fefc5f]">
                {"AH2 & Matt Horn".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={activeTitle === "AH2 & Matt Horn" ? { y: "0" } : { y: "100%" }}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                    className="inline-block relative mt-[3vw]"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
