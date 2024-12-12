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
      <div className="logo">
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