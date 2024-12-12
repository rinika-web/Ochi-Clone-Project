import { motion } from 'framer-motion'
import React from 'react'

function Header() {

  return (
    <div data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className="pt-[5.7vw]" >


      {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
        return (
          <div key={index} className="main">
            <div className='header flex px-20 py-2 gap- 4 border-t-[#090202] '>
              {index === 1 && (

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.83, 0, 0.17, 1], duration: 0.95 }}
                  className="w-[9vw] h-[5vw] bg-[#004D43] relative" style={{ top: '14px' }}>
                </motion.div>
              )}
              <h1>
                <p className="text-9xl text-[#090202] font-thin font-founders leading-[5.5vw] tracking-normal">
                  {item}
                </p>
              </h1>
            </div>
          </div>
        )
      })}

      <hr className='mt-40 border-[#090202]' />

      <div className="start py-5 flex justify-between font-nemu text-xl">

        <div className="public px-4 py-2">
          For public and private companies
        </div>

        <div className="public px-4 py-2">
          From the first pitch to IPO
        </div>

        <div className="public px-5 py-1 rounded-full">
          <motion.button
            initial={{ backgroundColor: "transparent" }}
            whileHover={{ backgroundColor: "#004d43", color: "#fff" }}
            whileTap={{ scale: 1, backgroundColor: "#003A33" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
            className="relative w-[210px] px-1 py-2 text-lg font-medium text-[#090202] border-[1px] rounded-full overflow-hidden border-[#090202]">
            <motion.span
              className="absolute inset-0 w-full h-full bg-[#004D43] scale-x-0 origin-left"
              whileHover={{ scaleX: 5 }}
              transition={{ duration: 1 }}
            />
            <p>START THE PROJECT</p>
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default Header
