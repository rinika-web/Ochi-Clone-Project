import React from 'react'

function header (){
  
  {["WE CREATE","EYE-OPENING", "PRESENTATIONS"].map((items,index) => {
  return (
    <div className="main">
      <div className='header px-20 py-8 gap-6 border-t-slate-500 md-2'>
      {index === 1 && (<div className="w-[9vw] h-[5vw] bg-red-500"></div>
            )}
       <h1>(
            <p key={index} className="text-9xl font-semibold font-sans leading-[6.5vw] tracking-tighter">{items}</p>
            
        )
        </h1>  
  
    
    </div>
    <hr/>
    <div className="start py-1 flex justify-between text-lg">
      <div className="public px-4 py-2">
        For public and private companies
      </div>
      <div className="public px-4 py-2">
        From the first pitch to IPO
      </div>
      <div className="public px-4 py-2 border-[2px] border-slate-400 rounded-full">

        <button className='border-solid'>
            START THE PROJECT
        </button>
      </div>
    </div>
    </div>
    
  )
})}}

export default header






import { motion } from 'framer-motion'
import React, { useState } from 'react'


function featured() {

  const [isHovering, setHovering] = useState(false);

  return (
    <div className=' w-full h-full mt-[15vw]'>
      <div className="headline px-[5.5vw] text-[3.8vw] text-justify text-inherit font-light font-sans">
        Featured project
        <hr className='mt-5 border-[#fbcfb860]' />
      </div>
      <div className="bothsCards flex justify-between  px-[3.7vw] py-8 relative">
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}

          className="titles absolute uppercase  text-6xl ml-[4.5vw] top-[17vw] ">
          <h1 className="title font-bold text-[7vw] tracking-tighters text-[#e8fb69]">
            {"Cardboard Spaceship".split('').map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={isHovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                className='inline-block'
              >
                {item}</motion.span>))}
          </h1>
        </div>

        <div className="cards w-[44.8vw] h-[39vw] bg-red-600 rounded-xl">
          <div className="inside w-[40vw] h-[35vw] bg-green-600 mt-7 ml-8 rounded-lg">

          </div>
        </div>
        <div
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}

          className="titles absolute uppercase  text-6xl ml-[12vw] top-[17vw] ">
          <h1 className="title flex font-bold text-[7vw] tracking-tighter text-[#e8fb69]">
            {"AH2 & Matt Horn".split('').map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={isHovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                className='inline-block'
              >
                {item}</motion.span>))}</h1>
        </div>
        <div className="cards w-[44.8vw] h-[39vw] bg-red-600 rounded-xl">
          <div className="inside w-[40vw] h-[35vw] bg-green-600 mt-7 ml-8 rounded-lg"></div>
        </div>
      </div>

    </div>
  )
}

export default featured




import { motion } from 'framer-motion';
import React, { useState } from 'react';
import AH from '../assets/AH.png';
import CS_Website from '../assets/CS_Website.png';


function featured() {

  const [activeTitle, setActiveTitle] = useState(null);

  return (
    <div className="main  flex justify-between">
      <div className=' w-full h-full mt-[15vw]'>
        <div className="headline px-[5.5vw] text-[3.8vw] text-justify text-inherit font-light font-sans">
          Featured project
          <hr className='mt-5 border-[#fbcfb860]' />
        </div>
        <div className="bothsCards flex justify-between  px-[3.7vw] py-8 relative">
          <div
            onMouseEnter={() => setActiveTitle("Cardboard Spaceship")}
            onMouseLeave={() => setActiveTitle(null)}

            className="titles absolute uppercase  text-6xl ml-[4.5vw] top-[17vw] ">
            <h1 className="title flex overflow-hidden font-bold text-[7vw] tracking-tighters text-[#e8fb69]">
              {"Cardboard Spaceship".split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={activeTitle === "Cardboard Spaceship" ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                  className='inline-block'
                >
                  {item}</motion.span>))}
            </h1>
          </div>

          <div className="cards w-[44.8vw] h-[37svw] bg-red-600 rounded-xl">
            <div className="image">
              <img src={CS_Website} alt="CS_Website" />
            </div>


          </div>
        </div>
        <div
          onMouseEnter={() => setActiveTitle("AH2 & Matt Horn")}
          onMouseLeave={() => setActiveTitle(null)}

          className="titles absolute uppercase  text-6xl ml-[12vw] top-[17vw] ">
          <h1 className="title flex overflow-hidden font-bold text-[7vw] tracking-tighter text-[#e8fb69]">
            {"AH2 & Matt Horn".split('').map((item, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={activeTitle === "AH2 & Matt Horn" ? { y: "0" } : { y: "100%" }}
                transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                className='inline-block'
              >
                {item}</motion.span>))}</h1>
        </div>
        <div className="cards w-[44.8vw] h-[37vw] bg-red-600 rounded-xl">
          <div className="image" >
            <img src={AH} alt="AH" className="" />
          </div>

        </div>
      </div>

    </div>


  )
}

export default featured




import React from 'react'
import './index.css'
import Navbar from './componants/navbar'
import Header from "./componants/header"
import Weareochi from './componants/weareochi'
import Greenpage from './componants/greenpage'
import Eyes from './componants/eyes'
import Featured from './componants/featured'
import Cards from './componants/cards'
import Footer from './componants/Footer'

import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-slate-600 text-pink-200'>
      <Navbar />
      <Header />
      <Weareochi />
      <div className="bg-[#a8fd46]">
        <Greenpage />
      </div>

      <div className="w-full min-h-screen ">
        <Eyes />
      </div>
      <div className=" relative bg-[#0b1622ee] rounded-lg">
        <Featured />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>

    </div>
  )
}
export default App





import { motion } from 'framer-motion';
import React, { useState } from 'react';
import AH from '../assets/AH.png';
import CS_Website from '../assets/CS_Website.png';

function Featured() {
  const [activeTitle, setActiveTitle] = useState(null);

  return (
    <div className="main w-full h-full mt-[-10vw]">
      <div className="headline px-[5.5vw] text-[3.8vw] text-justify font-light font-sans">
        Featured Project
        <hr className="mt-5 border-[#fbcfb860]" />
      </div>

      {/* Flexbox container for both cards */}
      <div className="bothCards flex justify-between px-[3.7vw] py-8">
        {/* First Card */}
        <div className="card-wrapper flex flex-col  items-start w-[45%]">
          <div
            onMouseEnter={() => setActiveTitle("Cardboard Spaceship")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles uppercase text-6xl mb-4 flex justify-center items-center h-full"
          >

            <div className="">

              <div className="cards relative w-full h-[34vw] bg-red-6000 rounded-xl">
                <div className="image absolute">
                  <img src={CS_Website} alt="CS_Website" className="w-full h-full object-cover rounded-xl" />
                </div>

                <h1 className="title flex items-center justify-center overflow-hidden font-bold text-[8vw] tracking-tight text-[#e8fb69]">
                  {"Cardboard Spaceship".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={activeTitle === "Cardboard Spaceship" ? { y: "0" } : { y: "100%" }}
                      transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                      className="flex items-center justify-center mt-[13vw] relative"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>


              </div>


            </div>


          </div>

        </div>

        {/* Second Card */}
        <div className="card-wrapper flex flex-col items-start w-[45%]">
          <div
            onMouseEnter={() => setActiveTitle("AH2 & Matt Horn")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles uppercase text-6xl mb-4"
          >
<div className="div">

<div className="cards absolute w-full h-[34vw] bg-red-600 rounded-xl">
            <div className="image absolute">
              <img src={AH} alt="AH" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>

<h1 className="title relative flex overflow-hidden font-bold text-[8vw] ml-[-37vw] tracking-tight text-[#e8fb69]">
              {"AH2 & Matt Horn".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={activeTitle === "AH2 & Matt Horn" ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                  className="inline-block relative mt-[13vw]"
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




import { motion } from 'framer-motion';
import React, { useState } from 'react';
import AH from '../assets/AH.png';
import CS_Website from '../assets/CS_Website.png';

function Featured() {
  const [activeTitle, setActiveTitle] = useState(null);

  return (
    <div className="main w-full h-full mt-[-10vw]">
      <div className="headline px-[5.5vw] text-[3.8vw] text-justify font-light font-sans">
        Featured Project
        <hr className="mt-5 border-[#fbcfb860]" />
      </div>

      {/* Flexbox container for both cards */}
      <div className="bothCards flex justify-between px-[4vw] py-9">


        {/* First Card */}

        <div className="card-wrapper relative flex flex-col  items-start w-[45%]">
          <div
            onMouseEnter={() => setActiveTitle("Cardboard Spaceship")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles relative uppercase text-[3.7vw] mb-4 flex justify-center items-center h-full"
          >
            <div className="cards relative w-[42vw] h-[34vw] bg-red-6000 rounded-xl">
              <div className="image absolute">
                <img src={CS_Website} alt="CS_Website" className="w-full h-full object-cover rounded-xl" />
              </div>
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

        {/* Second Card */}
        <div className="card-wrapper flex flex-col items-start w-[45%]">
          <div
            onMouseEnter={() => setActiveTitle("AH2 & Matt Horn")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles uppercase text-6xl mb-4"
          >
            <div className="div">

              <div className="cards absolute w-[42vw] h-[34vw] bg-red-600 rounded-xl">
                <div className="image absolute">
                  <img src={AH} alt="AH" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>

              <h1 className="title relative flex overflow-hidden font-bold text-[3.7vw] ml-[5.5vw] tracking-tight text-[#fefc5f]">
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


import React from 'react'
import logo from '../assets/logo.svg';
function navbar (){

const [showNavbar,setShowNavbar] = useState(true);
const [lastScrollY,setLastScrollY] = useState(0);

useState (() => {
  const handleScroll = () => {
    if (window.scrollY > )
  }
})


  return (
    <div className='w-full h-2 fixed top-0 bg-white shadow-lg text-xl z-10 px-20 py-5 flex justify-between items-center'>
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
        <div className="links ">
            {["services", "Our work", "About us", "Insights", "Contact us"].map((item,index) => (
                <a key={index} className={`capitalize text-2xl font-sans p-3 ${index === 4 && "ml-32"}`}>{item}</a>
            ))}
        </div>
    </div>

  )
}

export default navbar




module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        founders: ['FoundersGrotesk', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}



import React from 'react';
import { motion } from 'framer-motion';
function weareochi() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="2.1" className='w-full  py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
      <div className="text flex border-t-2 border-b-2 border-zinc-300 uppercase overflow-hidden whitespace-nowrap font-founders">
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity, duration:10 }}
          className="text-[20vw] leading-none pr-40 tracking-normal font-bold pb-8 mb-9 ">we are ochi</motion.h1>

        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat:Infinity, duration:10 }}
          className="text-[20vw] leading-none pr-40 tracking-normal font-bold  pb-8 mb-9 ">we are ochi</motion.h1>
 
      </div>
    </div>
  )
}

export default weareochi


//second line



import React from 'react';
import { motion } from 'framer-motion';

function WeAreOchi() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="2.1" 
    className="w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text  border-t-2 border-b-2 border-zinc-300 uppercase flex overflow-hidden whitespace-nowrap font-founders relative">

          <motion.h1 
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none tracking-normal font-bold pt-10 mr-10 mb-[7vw] ">
            we are ochi
          </motion.h1>
          <motion.h1 
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[20vw] leading-none tracking-normal font-bold pt-10 mr-10 mb-[7vw] ">
            we are ochi
          </motion.h1>

      </div>
    </div>
  );
}

export default WeAreOchi;


<div
data-scroll
data-scroll-section
data-scroll-speeed="1.5"
className="w-full pt-20 py-15 rounded-t-3xl bg-[#004d43] text-white"
>
<div className="movingText border-t-2 border-b-2 border-zinc-300  flex   overflow-hidden whitespace-nowrap ">
  <motion.h1
    initial={{ x: "0" }}
    animate={{ x: "-100%" }}
    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
    className="text-[17.5vw] leading-none font-founders pr-20 pt-10 -mb-[7vw] "
  >
    WE ARE OCHI
  </motion.h1>
  <motion.h1
    initial={{ x: "0" }}
    animate={{ x: "-100%" }}
    transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
    className="text-[17.5vw] leading-none font-founders pr-20 pt-10 -mb-[0vw] "
  >
    WE ARE OCHI
  </motion.h1>
</div>
</div>



import { motion } from "framer-motion";
import React from "react";

function WeAreOchi() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speeed="1.5"
      className="w-full  rounded-t-3xl bg-[#004d43] text-white"
    >
      <div className="movingText border-t-2 border-b-2 border-zinc-300  flex   overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-founders pr-20 pt-10 -mb-[7vw] "
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[17.5vw] leading-none font-founders pr-20 pt-10 -mb-[0vw] "
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default WeAreOchi;




//eyes


import React, { useEffect, useState } from 'react';
import green from '../assets/green.jpg';
import { motion } from 'framer-motion';

function Eyes() {

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className=" bg-[#fac37130]">
      <div className="main w-full h-screen overflow-hidden mt-[-20vw] ">
        <div data-scroll data-scroll-section data-scroll-speed='.5' className=" absolute bg-center">
          <img src={green} alt="green" className="w-full " />
        </div>

        <div className=" relative rounded-3xl inline-flex left-[30vw] top-[19vw] bg-[#1a99937600]">
          <div className="circle flex items-center gap-[3vw] ">
            {/* Left Eye */}
            <div className="w-[18vw] h-[18vw] rounded-full bg-[#f6fbfb]">
              <div className="centerCircle relative flex items-center justify-center w-[10.2vw] h-[10.2vw] rounded-full bg-[#041b1b] mt-[3.5vw] ml-[3.4vw]">
                <div
                  style={{
                    transform: ` translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line  w-[9vw] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="lastCircle w-5 h-5 rounded-full bg-[#f6fbfb] absolute right-0 top-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="w-[18vw] h-[18vw] items-center justify-center rounded-full bg-[#f6fbfb]">
              <div
                className="centerCircle relative flex  w-[10.2vw] h-[10.2vw] rounded-full bg-[#041b1b] mt-[3.5vw] ml-[3.4vw]">
                <div
                  style={{
                    transform: ` translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line  w-[9vw] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="lastCircle w-5 h-5 rounded-full bg-[#f6fbfb] absolute right-0 top-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>




  );
}

export default Eyes;





//green page

import { motion } from 'framer-motion'
import React from 'react'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function greenpage() {
  return (
    <div data-scroll 
    data-scroll-section 
    data-scroll-speed="0.5" 
    className='page relative w-full h-fit rounded-tr-3xl rounded-tl-3xl bg-[#b77647]'>
      
      <div className="text text-[#090202] font-medium font-nemu text-[4.4vw] px-[5.5vw] pt-[6vw] leading-[5.7vw] ">Ochi is a strtegic partner for fast growing tech 
        businesses that need to raise funds,sell products,explain complex ideas,and hire great people.
        </div>
        <hr className='ml-[4.5vw] mr-[4.5vw] border-[#090202] mt-20'/>
        <div className="about flex-row px-20">
          <h1 className='text-[5vw] text-[#090202] font-medium font-nemu mb-3'>Our Approach:</h1>
          <button className="read text-[1.3vw] font-medium font-nemu px-[2vw] py-[1.3vw] bg-[#3a090975] hover:bg-[#3a0909e0] transition duration-200 ease-in-out-cubic uppercase rounded-full">Read More
            <div className="dot rounded-full bg-[#090202] w-3 h-3 inline-block ml-[3vw] transition-all group-hover:hidden"></div>
           <motion.div
           initial={{opacity:0,x:-5}}
           animate={{opacity:1,x:0}}
           exit={{opacity:0,x:5}}
           transition={{duration:0.3, ease:[0.65, 0, 0.35, 1]}}
           className="arrow ml-[3vw] hidden group-hover:flex"

           >
              <ArrowForwardIosIcon  style={{ color: '#090202', fontSize: '1.8vw' }}/>


           </motion.div>
          </button>
          <div className="pic w-[50vw] h-[35vw] rounded-3xl ml-[40vw] -mt-40 mb-9 inline-block bg-[#390b0b75]"></div>
        </div>
    </div>
  )
}

export default greenpage



//new green page


import { motion } from 'framer-motion';
import React from 'react';
import CallMadeIcon from '@mui/icons-material/CallMade';

function GreenPage() {
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
        <button className="read group w-[15vw] h-[4vw]  px-[2vw] py-[0vw] rounded-full
           flex items-center transition duration-200 ease-in-out bg-[#3a090975] hover:bg-[#3a0909d9] ">
          <p className='text-[1.1vw]  uppercase font-medium font-nemu'
          >Read More</p>
          <div className="dot rounded-full bg-[#090202] w-3 h-3 inline-block ml-[2.5vw] transition-all group-hover:hidden"></div>
        <motion.div
            initial={{ opacity:0, x:5, scale:0}}
            animate={{ opacity:1, x: 5, scale:1.3}}
            exit={{ opacity: 0, x: 5, scale:0}}
            transition={{ duration: 0.3, ease: [0.65, 0, 0.35, 1]}}
            className="arrow rounded-full bg-white w-9 h-9 ml-[2vw] hidden group-hover:flex items-center justify-center">
            <CallMadeIcon style={{ color: '#090202', fontSize: '1.5vw'}} />
          </motion.div>
        </button>
      </div>
      <div className="pic w-[50vw] h-[35vw] rounded-3xl ml-[40vw] -mt-40 mb-9 inline-block bg-[#390b0b75]"></div>

    </div>
  );
}

export default GreenPage;




//featured


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

      {/* Flexbox container for both cards */}
      <div className="bothCards flex justify-between font-founders px-[4vw] py-9">


        {/* First Card */}

        <div 
        className="card-wrapper relative flex flex-col  items-start w-[45%]">
          <div
            onMouseEnter={() => setActiveTitle("Cardboard Spaceship")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles relative uppercase text-[6.5vw] mb-4 flex justify-center items-center h-full"
          >
            <div className="cards relative w-[42vw] h-[34vw] bg-red-6000 rounded-xl">
              <motion.div 
              className="image absolute"
              initial={{scale:1.1}}
              whileHover={{scale:1.0}}
              transition={{duration:0.3}}
              >
                <img src={CS_Website} alt="CS_Website" className="w-full h-full object-cover border-4 border-solid hover:border-scale rounded-xl" />
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

        {/* Second Card */}
        <div className="card-wrapper flex flex-col items-start w-[45%]">
          <div
            onMouseEnter={() => setActiveTitle("AH2 & Matt Horn")}
            onMouseLeave={() => setActiveTitle(null)}
            className="titles uppercase text-6xl mb-4"
          >
            <div className="div">

              <div className="cards absolute w-[42vw] h-[34vw] bg-red-600 rounded-xl">
                <motion.div 
                className="image absolute"
                initial={{scale:1.1}}
                whileHover={{scale:1.0}}
                transition={{duration:0.3}}
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


//navbar


import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { motion } from 'framer-motion';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed h-4 top-0 bg-[#fac37130] shadow-lg z-[999] px-20 py-8 flex justify-between items-center transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        {["services", "Our work", "About us", "Insights", "Contact us"].map(
          (item, index) => (
            <motion.a
              key={index}
              href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
              className={`capitalize text-xl text-[#090202] font-nemu font-medium p-3 relative group ${index === 4 && "ml-32"
                }`}
            >
              <motion.span
                className="inline-block"
                whileHover={{
                  y:[0,-5,0],
                  transition: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
                }}
              >
                {item}
              </motion.span>


              <motion.span
                className="absolute left-0 bottom-0 w-full h-[2px] bg-[#090202] scale-x-0 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.span>

            </motion.a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;


//cards

import { motion } from 'framer-motion'
import React from 'react'

function cards ()  {
  return (
    <div className='w-full h-screen px-[10vh] py-[5vh] items-center bg-[#69452c9c] rounded-r-3xl rounded-l-3xl flex gap-5'>
        <div className="cardcontainer relative h-[55vh] w-1/2">
        <div className="cards rounded-xl w-full h-full flex items-center justify-center bg-[#004D43] relative">
            <div className="logo w-44 mr-[85vh] mt-[-8vh]">
                <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            </div>
            <div className="mt-[45vh] -ml-[90vh]">
            <button
             className="absolute bottom-4 left-4 w-[15vh] h-8  rounded-3xl text-[#CDEA68] border-[#CDEA68] border-2 text-base leading-tight">
                &copy;2019-2022
             </button>
            </div>
        </div>
        </div>

        <div className="cards flex relative gap-5 w-1/2 h-[55vh]">
        <div className="card rounded-xl w-1/2 h-full bg-[#102D38]">
        <div className="clutch w-[30vh] h-[30vh] mt-[8vh] ml-[8vh]">
          <img src="https://seeklogo.com/images/C/clutch-co-logo-CE7F48313C-seeklogo.com.png" alt="" />
        </div>
         <div className="mt-[45vh] -ml-[90vh]">
            <motion.button
             className="absolute bottom-4 left-4 w-[15vh] h-8  rounded-3xl text-[#CDEA68] border-[#CDEA68] bg-[#131706]
             border-2 text-base leading-tight"
             >
                &copy;2019-2022
             </motion.button>
            </div>
        </div>
        <div className="card  flex relative rounded-xl w-1/2 h-full bg-[#102D38]">
        <div className="logo mt-[10vh] ml-[10.3vh] w-[25vh]">
          <img src="https://cdn.prod.website-files.com/5d816b07d269385f68dbcab0/5ea29a574423326d48ee3ee9_TFA-Hero-Badge-01-white.svg" alt="" />
        </div>
         <div className="mt-[45vh] -ml-[90vh]">
            <button
             className="absolute bottom-4 left-4 w-[15vh] h-8  rounded-3xl text-[#CDEA68] border-[#CDEA68] border-2 text-base leading-tight">
                &copy;2019-2022
             </button>
            </div>
        </div>

        </div>
    </div>
  )
}

export default cards

//eyes

import React, { useEffect, useState } from 'react';
import green from '../assets/green.jpg';
import { motion } from 'framer-motion';

function Eyes() {

  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className=" bg-[#fac37130]">
      <div className="main w-full h-screen overflow-hidden mt-[-20vw] ">
        <div data-scroll data-scroll-section data-scroll-speed='.5' className=" absolute bg-center">
          <img src={green} alt="green" className="w-full " />
        </div>

        <div className=" relative rounded-3xl inline-flex left-[30vw] top-[19vw] bg-[#1a99937600]">
          <div className="circle flex items-center gap-[3vw] ">
            
            <div className="w-[18vw] h-[18vw] rounded-full bg-[#f6fbfb]">
              <div className="centerCircle relative flex items-center justify-center w-[10.2vw] h-[10.2vw] rounded-full bg-[#041b1b] mt-[3.5vw] ml-[3.4vw]">
                <div
                  style={{
                    transform: ` translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line  w-[9vw] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="lastCircle w-5 h-5 rounded-full bg-[#f6fbfb] absolute right-0 top-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

            
            <div className="w-[18vw] h-[18vw] items-center justify-center rounded-full bg-[#f6fbfb]">
              <div
                className="centerCircle relative flex  w-[10.2vw] h-[10.2vw] rounded-full bg-[#041b1b] mt-[3.5vw] ml-[3.4vw]">
                <div
                  style={{
                    transform: ` translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line  w-[9vw] h-5 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
                >
                  <div className="lastCircle w-5 h-5 rounded-full bg-[#f6fbfb] absolute right-0 top-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>




  );
}

export default Eyes;



//footer

import React from 'react'

function Footer() {
  const socialLinks = [
    { name: 'Instagram', url: '#instagram' },
    { name: 'Facebook', url: '#facebook' },
    { name: 'LinkedIn', url: '#linkedin' },
  ];


  return (
    <div className='w-full h-full '>
      <div className="both flex flex-row w-full justify-between font-founders px-12 gap-[10vw]">
        <div className="eyeopenings w-1/2 ">
          <h1 className="text-[6.5vw] tracking-normal uppercase font-bold text-[#010409ee]">
            eye-
          </h1>
          <h1 className="text-[6.5vw] uppercase tracking-tight mt-[-3.3vw] font-bold text-[#010409ee]">
            opening
          </h1>
        </div>
        <div className="p w-1/2 mr-16 ">
          <h1 className=" font-bold uppercase text-[6.5vw] tracking-tight text-[#010409ee]">presentation</h1>
          <div className="flex flex-col justify-between text-[1.5vw] text-[#010409ee]">
            S:
            {['Instagram', 'Facebook', 'Linkedin'].map((item, index) => (
              <div key={index} className="">
                <a href="#" className="relative inline-block font-medium">
                  {item}
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#010409ee] transform scale-x-0 transition-transform duration-300 ease-in-out origin-left hover:scale-x-100"></span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer


//nav bar

import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.svg';
import { motion } from 'framer-motion';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {

        setShowNavbar(false);
      } else {

        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed h-4 top-0 bg-[#fac37130] shadow-lg z-[999] px-20 py-8 flex justify-between items-center transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="logo w-24 h-auto sm:w-16">
        <img src={logo} alt="logo" />
      </div>
      <div className="links">
        {["services", "Our work", "About us", "Insights", "Contact us"].map(
          (item, index) => (
            <motion.a
              key={index}
              href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
              className={`capitalize text-xl text-[#090202] font-nemu font-medium p-4 relative group ${index === 4 && "ml-32"
                }`}
            >
              <motion.span
                className="inline-block hover:underline"
                initial={{ y: 0 }}
                whileHover={{
                  y: [-2, 2, -2],
                  transition: { duration: 0.5, ease: "easeInOut", repeat: Infinity },
                }}
              >
                {item}
              </motion.span>

            </motion.a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;



const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,woff}',
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['FoundersGrotesk'],
        nemu: ['NeueMontreal'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'FoundersGrotesk',
          src: 'url("/src/fonts/FoundersGrotesk.woff") format("woff")',
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
