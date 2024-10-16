import React from 'react';
import { Link } from "react-router-dom";


function NavigationMenu() {
  return (
    <nav className="bg-orange-500 w-full flex justify-between items-center p-4 shadow-lg">
    <ul className="flex space-x-6">
      <li className="flex">
        <Link
          to="/"
          className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
        >
          Home
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/Movies"
          className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
        >
          Movies
        </Link>
      </li>
      <li className="flex">
        <Link
          to="/TvShow"
          className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2"
        >
          TV Shows
        </Link>
      </li>
      <li className='flex'>
          <Link to="/Favorite"
          className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2">
          Favorite
          </Link>
        </li>
        </ul>
        <div>
         
        </div>
      <ul className='flex justify-end items-center'>
        <li className='flex'>
          <Link to="/Search"
           className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2">
          Search
          </Link>
        </li>
        <li className='flex'>
          <Link to="/Login"
           className="text-white hover:bg-lime-300 hover:text-black transition duration-300 rounded-lg px-3 py-2">
          Login
          </Link>
        </li>
      </ul>
    
  </nav>
  
  );
}

export default NavigationMenu;

