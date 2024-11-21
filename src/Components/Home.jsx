import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

import mypic from './mypic.jpg';
import './Home.css';
import Sidebar from './Sidebar';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const texts = [
  "Full Stack Developer",
  "PHP Developer",
  "Laravel Developer",
  "React Developer",
  "Freelancer",
  "Web Developer"
]


const Home = () => {

  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 500) // Wait for fade-out before changing text
    }, 5000) // Change text every 5 seconds

    return () => clearInterval(intervalId)
  }, [])


  return (
    <>
    <Sidebar/>
    
    <section className="min-h-screen bg-customColor flex items-center">
      <div
        className="yellowbox absolute left-0 top-0 w-1/2 h-full lg:bg-yellowColor md:bg-yellowColor z-0"
        style={{ clipPath: 'polygon(0 0, 23% 0, 55% 100%, 0% 100%)', }}
      ></div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-10 px-6 lg:p-12 z-10">
        <div className="imgbox w-full  lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <img src={mypic} alt="Sreeharsh K" className="image rounded-[2.5rem] border-2  border-black h-[20rem]  lg:h-[43rem] z-20" />
          {/* <img src={myimg2} alt="Sreeharsh K" className="rounded-full h-[18rem]" /> */}
        </div>
        <div className="textbox text-white w-full lg:w-1/2 md:w-[33rem] lg:mr-[9rem] z-10 text-center lg:text-left">
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '800' }}className="text-3xl lg:text-5xl font-bold mb-4 text-yellowColor">I'M SREEHARSH K.</h1>
          <AnimatePresence mode="wait">
          {isVisible && (
            <motion.div
              key={texts[currentTextIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="lg:text-6xl text-[2.3rem] font-extrabold text-white tracking-wide"
              
            >
              {texts[currentTextIndex]}
            </motion.div>
          )}
          </AnimatePresence>
          <p className="text-lg mt-4 leading-[1.9rem]">I'm a passionate Full Stack Developer, focused on crafting clean and user-friendly experiences. I am dedicated to building excellent software that improves the lives of those around me.</p>
          <div className='flex md:justify-center justify-center lg:justify-start'>

         
          <Link to='/about'>
          <button type='submit' className='text-sm font-bold flex items-center pl-8 border  border-yellowColor rounded-3xl justify-between mt-8 mb-10 hover:bg-yellowColor hover:transition duration-500 ease-in-out'>
          MORE ABOUT ME <FaArrowRight className='ml-5 bg-yellowColor text-[3rem] rounded-full p-[.8rem]' />
        </button> 
        </Link>
        </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;







// style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '800' }}
//             className="text-3xl lg:text-[2.7rem] font-bold mb-4 random-word uppercase tracking-wider "