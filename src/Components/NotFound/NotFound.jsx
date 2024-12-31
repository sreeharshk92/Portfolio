import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { TiArrowBackOutline } from "react-icons/ti";

import './NotFound.css'
const NotFound = () => {
  return (
    <div className="main flex flex-col items-center justify-center h-screen bg-customColor text-white text-center">
      {/* Animated Magnifying Glass Icon */}
      <BiSearchAlt className="text-8xl mb-4 text-yellowColor animate-search" />
      
      {/* Bouncing 404 Message */}
      <h1 className="text-6xl font-bold mb-4 animate-bounce-slow ">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Oops! Page Not Found.</h2>
      <p className="text-lg mb-8">
        Looks like the page you’re looking for doesn’t exist. Let's help you find the way!
      </p>
      
      {/* Back to Home Button */}
      <Link to="/">
      <button className='text-sm  font-bold flex items-center pl-8 border border-yellowColor rounded-3xl justify-between  w-[15rem] md:w-[13rem]  mt-8 mb-10 hover:bg-yellowColor hover:transition duration-500 ease-in-out'>
          BACK TO HOME <TiArrowBackOutline className=' bg-yellowColor text-[2.4rem] rounded-full p-2' />
        </button>      
        </Link>
    </div>
  );
};

export default NotFound;
