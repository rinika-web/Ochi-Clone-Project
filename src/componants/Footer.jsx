import React from 'react'

function Footer() {
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