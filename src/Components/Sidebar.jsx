import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="bg-[#111111] w-full md:w-auto lg:w-auto fixed lg:right-0 md:right-0 bottom-0 left-1/2 justify-center lg:left-auto py-3 md:left-auto transform -translate-x-1/2 lg:-translate-x-1/4 flex lg:top-1/2 md:top-1/2 lg:transform md:transform lg:-translate-y-1/2 md:-translate-y-1/2 lg:flex md:flex lg:flex-col md:flex-col lg:items-center lg:justify-center md:items-center md:justify-center z-20">
      <div className='lg:flex lg:w-[7rem] md:w-[1rem]  items-end  lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 flex gap-6'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'bg-yellowColor rounded-full p-3 flex items-center justify-end gap-3 nav-item hover:w-[6rem]' : 'hover:w-[6rem] bg-[#222222]  rounded-full p-3  flex justify-end nav-item gap-3'}>
        <span className='nav-text  '>HOME</span>
          <FaHome size={20} />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'bg-yellowColor rounded-full p-3  flex items-center justify-end nav-item gap-3 hover:w-[6.5rem]' : 'hover:w-[6.5rem] bg-[#222222] rounded-full p-3   flex justify-end nav-item gap-3'}>
        <span className='nav-text'>ABOUT</span>

          <FaUser size={20} />
        </NavLink>
        <NavLink to='/portfolio' className={({ isActive }) => isActive ? 'bg-yellowColor rounded-full p-3  flex items-center justify-end nav-item gap-3 hover:w-[8.5rem]' : 'hover:w-[8.5rem]  bg-[#222222] rounded-full p-3   flex justify-end nav-item gap-3'}>
        <span className='nav-text'>PORTIFOLIO</span>

          <FaBriefcase size={20} />
        </NavLink>
        <NavLink to='/services' className={({ isActive }) => isActive ? 'bg-yellowColor  rounded-full p-3 flex items-center justify-end nav-item gap-3 hover:w-[7.3rem]' : 'hover:w-[7.3rem] bg-[#222222] rounded-full p-3   flex justify-end nav-item gap-3'}>
        <span className='nav-text'>SERVICES</span>

          <FaCogs size={20} />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'bg-yellowColor rounded-full p-3  flex items-center justify-end nav-item  gap-3 hover:w-[7.9rem]' : 'hover:w-[7.9rem] bg-[#222222] rounded-full p-3   flex justify-end nav-item gap-3'}>
        <span className='nav-text'>CONTACT</span>

          <FaEnvelope size={20} />
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
