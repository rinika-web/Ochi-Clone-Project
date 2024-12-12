import React, { useEffect, useRef } from 'react'
import './index.css'
import Navbar from './componants/navbar'
import Header from "./componants/header"
import Weareochi from './componants/weareochi'
import Text from './componants/text'
import Eyes from './componants/eyes'
import Featured from './componants/featured'
import Cards from './componants/cards'
import Footer from './componants/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector.main,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };

  }, []);

  return (
    <div ref={scrollRef} className='w-screen h-screen bg-[#b77647]' data-scroll-container>
      <Navbar />

      <Header />

      <div className=' absolute text-[#f0d7cc]'>
        <Weareochi />
      </div>

      <div className=" relative mt-[1.5vw] mb-[-29vw]">
        <Text />
      </div>

      <div className=" w-full h-screen ">
        <Eyes />
      </div>

      <div className=" relative  rounded-lg">
        <Featured />
      </div>

      <div className='bg-[#b77647]'>
        <Cards />
      </div>

      <div className='bg-[#662d13cc] '>
        <Footer />
      </div>

    </div>
  )
}
export default App