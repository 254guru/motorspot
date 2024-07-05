import React, { useState, useEffect } from "react";
import Inputfield from "./Inputfield";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    // Check if the menu should be scrollable based on menu height
    const menu = document.getElementById("menu");
    if (menu && menu.scrollHeight > menu.clientHeight) {
      setIsScrollable(true);
    } else {
      setIsScrollable(false);
    }

    // Event listener to toggle scrollable state based on menu scroll
    const handleScroll = () => {
      if (menu.scrollTop > 0) {
        setIsScrollable(true);
      } else {
        setIsScrollable(false);
      }
    };

    menu.addEventListener("scroll", handleScroll);

    return () => {
      menu.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-20 md:h-28 bg-orange-400 flex flex-col md:flex-row items-center justify-between px-4 md:px-8 relative">
      <div className="flex items-center justify-between w-full md:w-auto">
        <h1 className="text-white text-xl md:text-2xl">Motor<span className="text-4xl md:text-6xl text-black">Spot</span></h1>
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      <ul
        id="menu"
        className={`fixed inset-0 flex-col md:flex-row items-center space-x-0 md:space-x-20 mt-20 md:mt-0 bg-orange-400 bg-opacity-75 ${
          isOpen ? "flex z-50 overflow-hidden" : "hidden md:flex z-auto"
        } md:static ${isScrollable ? "overflow-y-auto" : ""}`}
        style={{ scrollbarWidth: "none" }} // Hide the scrollbar in Firefox
      >
        <div className="w-full flex justify-end md:hidden px-2 py-2">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <li className="text-white text-sm md:text-xl cursor-pointer hover:animate-pulse">Home</li>
        <li className="text-white text-sm md:text-xl cursor-pointer hover:animate-pulse">About</li>
        <li className="text-white text-sm md:text-xl cursor-pointer hover:animate-pulse">Services</li>
        <li className="text-white text-sm md:text-xl cursor-pointer hover:animate-pulse">Gallery</li>
        <li className={`${isOpen ? "block" : "hidden"} md:block`}><Inputfield /></li>
      </ul>
    </div>
  );
};

export default Header;