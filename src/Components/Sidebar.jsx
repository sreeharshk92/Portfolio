import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';


const Sidebar = () => {
  return (

   <nav  className="bg-[#111111] w-full md:w-auto lg:w-auto fixed lg:right-0 md:right-0 bottom-0 left-1/2 justify-center lg:left-auto py-3 md:left-auto  transform -translate-x-1/2 flex lg:top-1/2 md:top-1/2  lg:transform md:transform lg:-translate-y-1/2 md:-translate-y-1/2 lg:px-3 md:px-2 lg:flex md:flex  lg:flex-col md:flex-col lg:items-center lg:justify-center md:items-center md:justify-center z-20">
      <div className='lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 flex gap-10'>
      <a href='/' className='text-gray-300 hover:text-yellowColor'><FaHome size={24} /></a>
      <a href='/about' className='text-gray-300 hover:text-yellowColor'><FaUser size={24} /></a>
      <a href='/portfolio' className='text-gray-300 hover:text-yellowColor'><FaBriefcase size={24} /></a>
      <a href='/services' className='text-gray-300 hover:text-yellowColor'><FaCogs size={24} /></a>
      <a href='/contact' className='text-gray-300 hover:text-yellowColor'><FaEnvelope size={24} /></a>
      </div>
    </nav>

  );
};

export default Sidebar;
