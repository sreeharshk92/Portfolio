import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <nav  className=" fixed lg:right-0 md:right-0 bottom-0 flex lg:top-1/2 md:top-1/2 lg:transform md:transform lg:-translate-y-1/2 md:-translate-y-1/2  lg:px-6  md:px-6 lg:flex md:flex  lg:flex-col md:flex-col lg:items-center lg:justify-center md:items-center md:justify-center z-20">
      <div className='lg:flex lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 flex gap-9'>
      <a href='/' className='text-gray-300 hover:text-yellowColor'><FaHome size={24} /></a>
      <a href='/About' className='text-gray-300 hover:text-yellowColor'><FaUser size={24} /></a>
      <a href='/Portfolio' className='text-gray-300 hover:text-yellowColor'><FaBriefcase size={24} /></a>
      <a href='/Services' className='text-gray-300 hover:text-yellowColor'><FaCogs size={24} /></a>
      <a href='/Contact' className='text-gray-300 hover:text-yellowColor'><FaEnvelope size={24} /></a>
      </div>
    </nav>
  );
};

export default Sidebar;
