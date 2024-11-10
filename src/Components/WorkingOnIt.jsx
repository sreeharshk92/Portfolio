import React from 'react';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import './WorkingOnIt.css'

const WorkingOnIt = () => {
  return (
    <div className="main flex flex-col items-center justify-center h-screen bg-customColor text-white text-center" >
      <FaCog className="text-5xl mb-6 animate-spin-slow text-yellowColor" />
      <h1  className="text-5xl font-bold mb-4">🚧 Page Under Construction 🚧</h1>
      <p className="text-lg mb-8">
        I’m working hard to bring this page to life. Stay tuned!
      </p>
      <Link to="/">
        <button className="text-white flex items-center justify-center border border-yellowColor rounded-3xl py-3 w-[15rem] md:w-[13rem] mt-8 mb-10 hover:bg-yellowColor hover:transition duration-500 ease-linear">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default WorkingOnIt;
