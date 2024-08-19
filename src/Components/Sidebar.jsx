import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';


const Sidebar = () => {
  return (
    <nav  className="fixed lg:right-0 md:right-0 bottom-0 flex  lg:top-1/2 md:top-1/2 transform lg:transform md:transform -translate-x-1/2 lg:-translate-y-1/2 md:-translate-y-1/2  lg:px-6  md:px-6 lg:flex md:flex  lg:flex-col md:flex-col items-center justify-center lg:space-y-8 md:space-y-8 z-20">
      <a href='/' className='text-gray-300 hover:text-yellowColor'><FaHome size={24} /></a>
      <a href='/About' className='text-gray-300 hover:text-yellowColor'><FaUser size={24} /></a>
      <a href='/Portfolio' className='text-gray-300 hover:text-yellowColor'><FaBriefcase size={24} /></a>
      <a href='/Services' className='text-gray-300 hover:text-yellowColor'><FaCogs size={24} /></a>
      <a href='/Contact' className='text-gray-300 hover:text-yellowColor'><FaEnvelope size={24} /></a>
    </nav>
  );
};

export default Sidebar;
