import React, { useState } from 'react';
import { Link } from "react-router-dom";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-500 w-full p-4 shadow-lg">
      <div className="flex justify-between items-center">
      
        <div className="text-white ">
          <Link to="/">🎭</Link>
        </div>

        
        <button
          className="block lg:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

       
        <ul className={`lg:flex lg:space-x-6 items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <Link
              to="/"
              className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/Movies"
              className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
            >
              Movies
            </Link>
          </li>
          <li>
            <Link
              to="/TvShow"
              className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
            >
              TV Shows
            </Link>
          </li>
          <li>
            <Link
              to="/Favorite"
              className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
            >
              Favorite
            </Link>
          </li>
          <li>
            <Link
              to="/Search"
              className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationMenu;
