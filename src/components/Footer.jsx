import React from 'react'

function Footer() {
  const socialLinks = [
    { name: 'My Potfolio (coming soon)', url: '#portfolio' },
    { name: 'GitHub', url: 'https://github.com/rinika-web' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rinika-koley-802406253' },
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
          {socialLinks.map(({ name, url }, index) => (
              <a
                key={index}
                href={url}
                className="relative inline-block font-medium group"
                aria-label={`Visit our ${name}`}
              >
                {name}
                <span className="absolute left-0 bottom-0 h-[2px] w-14 bg-[#010409ee] transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-50"></span>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer