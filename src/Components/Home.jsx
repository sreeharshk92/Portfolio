import React, { useState, useEffect } from 'react';
import mypic from './mypic.jpg';
import './Home.css';
import Sidebar from './Sidebar';

const Home = () => {
  const phrases = [
    'full stack developer',
    'Laravel developer',
    'react developer',
    'freelancer',
  ];

  // Set the initial state to the first phrase
  const [currentWord, setCurrentWord] = useState(phrases[0]);

  const randomizeText = () => {
    const randomNum = (num, max) => {
      let j = Math.floor(Math.random() * max);
      return num === j ? randomNum(num, max) : j; // Avoid repeating the same phrase
    };

    const i = randomNum(-1, phrases.length); // Start with -1 to ensure it picks a new phrase
    const newPhrase = phrases[i];

    setTimeout(() => {
      setCurrentWord(newPhrase);
    }, 400); // Change word after opacity hits 0
  };

  useEffect(() => {
    const interval = setInterval(randomizeText, 4000); // Change every 4s to match animation
    return () => clearInterval(interval); // Clear interval on component unmount
  },);

  return (
    <>
    <Sidebar/>
    
    <section className="min-h-screen bg-customColor flex items-center">
      <div
        className="yellowbox absolute left-0 top-0 w-1/2 h-full lg:bg-yellowColor md:bg-yellowColor z-0"
        style={{ clipPath: 'polygon(0 0, 23% 0, 55% 100%, 0% 100%)', }}
      ></div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-6 lg:p-12 z-10">
        <div className="imgbox w-full  lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start">
          <img src={mypic} alt="Sreeharsh K" className="image rounded-[2.5rem] border-2  border-black h-[20rem]  lg:h-[43rem] z-20" />
          {/* <img src={myimg2} alt="Sreeharsh K" className="rounded-full h-[18rem]" /> */}
        </div>
        <div className="textbox text-white w-full lg:w-1/2 md:w-[33rem] lg:mr-[9rem] z-10 text-center lg:text-left">
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '800' }}className="text-3xl lg:text-5xl font-bold mb-4 text-yellowColor">I'M SREEHARSH K.</h1>
          <h1 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '800' }}
            className="text-3xl lg:text-[2.7rem] font-bold mb-4 random-word uppercase tracking-wider ">{currentWord}
          </h1>
          <p className="text-lg mt-4 leading-[1.9rem]">I'm a passionate Full Stack Developer, focused on crafting clean and user-friendly experiences. I am dedicated to building excellent software that improves the lives of those around me.</p>
          
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;
