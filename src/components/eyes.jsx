import React, { useEffect, useState } from 'react';
import green from '../assets/green.jpg';

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
          <img src={green} alt="background green image" className="w-full " />
        </div>

        <div className=" relative rounded-3xl inline-flex left-[30vw] top-[19vw] bg-[#1a99937600]">
          <div className="circle flex items-center gap-[3vw] ">

            <div className="w-[18vw] h-[18vw] rounded-full bg-[#f6fbfb]">
              <div className="centerCircle relative flex items-center justify-center w-[10.2vw] h-[10.2vw] rounded-full bg-[#041b1b] mt-[3.5vw] ml-[3.4vw]">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
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
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
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
