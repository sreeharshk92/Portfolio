import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mypic from "../images/mypic.jpg";
import "./Home.css";
import Sidebar from "../SideBar/Sidebar";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const texts = [
  "Full Stack Developer",
  "PHP Developer",
  "Laravel Developer",
  "React Developer",
  "Freelancer",
  "Web Developer",
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true);
      }, 500); // Wait for fade-out before changing text
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(loadingTimer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  return (
    <>
      <Sidebar />
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="flex justify-center items-center h-screen bg-customColor"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="loader"
              style={{
                width: "3rem",
                height: "3rem",
                border: "10px solid #ffffff",
                borderTop: "4px solid #facc15",
                borderRadius: "50%",
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1 }}
            ></motion.div>
          </motion.div>
        ) : (
          <motion.section
            className="min-h-screen bg-customColor flex items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className="yellowbox absolute left-0 top-0 w-1/2 h-full lg:bg-yellowColor md:bg-yellowColor z-0"
              style={{
                clipPath: "polygon(0 0, 23% 0, 55% 100%, 0% 100%)",
              }}
            ></div>

            <motion.div
              className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-10 px-6 lg:p-12 z-10"
              variants={containerVariants}
            >
              {/* Image Section */}
              <motion.div
                className="imgbox w-full lg:w-1/2 mb-8 lg:mb-0 flex justify-center lg:justify-start"
                variants={imageVariants}
              >
                <img
                  src={mypic}
                  alt="Sreeharsh K"
                  className="image rounded-[2.5rem] border-2 border-black h-[20rem] lg:h-[43rem] z-20"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="textbox text-white w-full lg:w-1/2 md:w-[33rem] lg:mr-[9rem] z-10 text-center lg:text-left"
                variants={textVariants}
              >
                <h1
                  style={{
                    fontFamily: "Montserrat,sans-serif",
                    fontWeight: "800",
                  }}
                  className="text-3xl lg:text-5xl mb-4 text-yellowColor"
                >
                  I'M SREEHARSH K.
                </h1>
                <AnimatePresence mode="wait">
                  {isVisible && (
                    <motion.div
                      key={texts[currentTextIndex]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="lg:text-[2.9rem] text-[1.7rem] font-extrabold text-white tracking-wide uppercase heading"
                      style={{
                        fontFamily: "Montserrat,sans-serif",
                        fontWeight: "800",
                      }}
                    >
                      {texts[currentTextIndex]}
                    </motion.div>
                  )}
                </AnimatePresence>
                <p className="text-lg mt-4 leading-[1.9rem]">
                  I'm a passionate Full Stack Developer, focused on crafting
                  clean and user-friendly experiences. I am dedicated to
                  building excellent software that improves the lives of those
                  around me.
                </p>
                <div className="flex md:justify-center justify-center lg:justify-start">
                  <Link to="/about">
                    <button
                      type="submit"
                      className="text-sm font-bold flex items-center pl-8 border border-yellowColor rounded-3xl justify-between mt-8 lg:mb-10 md:mb-auto mb-[3rem] hover:bg-yellowColor hover:transition duration-500 ease-in-out"
                    >
                      MORE ABOUT ME
                      <FaArrowRight className="ml-5 bg-yellowColor text-[3rem] rounded-full p-[.8rem]" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
