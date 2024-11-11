import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import './WorkingOnIt.css'

const WorkingOnIt = () => {
  return (
    <div className="main  flex flex-col items-center justify-center h-screen bg-customColor text-white text-center" >
      <FaCog className="text-5xl mb-6 animate-spin-slow text-yellowColor" />
      <h1  className="lg:text-5xl font-bold mb-4 md:text-4xl text-[1.2rem] ">🚧 Page Under Construction 🚧</h1>
      <p className="lg:text-lg md:text-lg text-sm mb-8 px-5">
        I’m working hard to bring this page to life. Stay tuned!
      </p>
      <Link to="/">
        <button className="text-white text-sm flex items-center justify-center border border-yellowColor rounded-3xl py-2 px-6 hover:bg-yellowColor hover:transition duration-500 ease-linear">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default WorkingOnIt;
