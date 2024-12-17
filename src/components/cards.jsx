import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen px-[10vh] py-[5vh] items-center bg-[#69452c9c] rounded-r-3xl rounded-l-3xl flex gap-5'>
      <div className="cardcontainer relative h-[55vh] w-1/2">
        <motion.div className="cards rounded-xl w-full h-full flex items-center justify-center bg-[#004D43] relative"
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="logo w-44 mr-[85vh] mt-[-8vh]">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt='ochi logo' />
          </div>
          <div className="mt-[45vh] -ml-[90vh]">
            <button
              className="absolute bottom-4 left-4 w-[15vh] h-8  rounded-3xl text-[#CDEA68] border-[#CDEA68] hover:bg-[#7b2734] border-2 text-base leading-tight">
              &copy;2019-2022
            </button>
          </div>
        </motion.div>
      </div>

      <div className="cards flex relative gap-5 w-1/2 h-[55vh]">
        <motion.div className="card rounded-xl w-1/2 h-full bg-[#102D38]"
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="clutch w-[30vh] h-[30vh] mt-[8vh] ml-[8vh]">
            <img src="https://seeklogo.com/images/C/clutch-co-logo-CE7F48313C-seeklogo.com.png" 
            alt='clutch logo' />
          </div>
          <div className="mt-[45vh] -ml-[90vh]">
            <button
              className="absolute bottom-4 left-4 w-[15vh] h-8  rounded-3xl text-[#CDEA68] border-[#CDEA68] hover:bg-[#7b2734] border-2 text-base leading-tight overflow-hidden">
              &copy;2019-2022
            </button>

          </div>
        </motion.div>

        <motion.div className="card  flex relative rounded-xl w-1/2 h-full bg-[#102D38]"
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <div className="logo mt-[10vh] ml-[10.3vh] w-[25vh]">
            <img src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" 
            alt='TFA logo' />
          </div>
          <div className="mt-[45vh] -ml-[90vh]">
            <button
              className="absolute bottom-4 left-4 w-[15vh] h-8  rounded-3xl text-[#CDEA68] border-[#CDEA68] hover:bg-[#7b2734] border-2 text-base leading-tight"
            >
              &copy;2019-2022
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Cards