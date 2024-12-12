import { motion } from 'framer-motion';
import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';

function Text() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.5"
      className='page relative w-full h-fit rounded-tr-3xl rounded-tl-3xl bg-[#b77647]'
    >
      <div className="text text-[#090202] font-medium font-nemu text-[4.4vw] px-[5.5vw] pt-[6vw] leading-[5.7vw]">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </div>
      <hr className='ml-[4.5vw] mr-[4.5vw] border-[#090202] mt-20' />
      <div className="about flex-row px-20">
        <h1 className='text-[5vw] text-[#090202] font-medium font-nemu mb-3'>Our Approach:</h1>
        <button className="read group w-[14.5vw] h-[4.8vw]  px-[1.5vw] py-[2vw] rounded-full
           flex items-center transition duration-200 ease-in-out bg-[#3a090975] hover:bg-[#3a0909d9] ">
          <p className='text-[1.1vw]  uppercase font-medium font-nemu'
          >Read More</p>
          <div className="dot rounded-full bg-[#090202] w-3 h-3 inline-block ml-[3vw] transition-all group-hover:hidden"></div>
          <motion.div
            initial={{ opacity: 0, x: 5, scale: 0 }}
            animate={{ opacity: 2, x: 5, scale: 1.5 }}
            exit={{ opacity: 2, x: 5, scale: 5 }}
            transition={{ duration: 5, ease: [0.33, 1, 0.68, 1] }}
            className="arrow rounded-full bg-[#090202] w-9 h-9 ml-[2vw] hidden group-hover:flex items-center justify-center">
            <CallMadeIcon style={{ color: '#FFFFFF', fontSize: '1.5vw' }} />
          </motion.div>
        </button>

        <div className="pic w-[50vw] h-[35vw] rounded-3xl ml-[40vw] -mt-40 mb-9 inline-block bg-[#390b0b75]"></div>

      </div>
    </div>
  );
}

export default Text;
