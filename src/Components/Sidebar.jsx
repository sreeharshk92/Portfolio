import React from 'react';
import { FaHome, FaUser, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="w-full md:w-auto lg:w-auto fixed lg:right-0 md:right-0 bottom-0 left-1/2 justify-center lg:left-auto py-3 md:left-auto transform -translate-x-1/2 lg:-translate-x-1/4 flex lg:top-1/2 md:top-1/2 lg:transform md:transform lg:-translate-y-1/2 md:-translate-y-1/2 lg:flex md:flex lg:flex-col md:flex-col lg:items-center lg:justify-center md:items-center md:justify-center z-20">
      <div className='lg:flex lg:w-[7rem] items-end lg:flex-col lg:gap-8 md:flex md:flex-col md:gap-8 flex gap-10'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <FaHome size={20} />
          <span className="nav-text">Home</span>
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <FaUser size={20} />
          <span className="nav-text">About</span>
        </NavLink>
        <NavLink to='/portfolio' className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <FaBriefcase size={20} />
          <span className="nav-text">Portfolio</span>
        </NavLink>
        <NavLink to='/services' className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <FaCogs size={20} />
          <span className="nav-text">Services</span>
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}>
          <FaEnvelope size={20} />
          <span className="nav-text">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
