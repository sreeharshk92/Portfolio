import React, { useRef, useState, useEffect } from 'react';
import './About.css'
import { FaDownload} from "react-icons/fa";
import Sidebar from '../SideBar/Sidebar';
import Skill from './Skill/Skill';
import PageLoad from '../Loader/PageLoad';
import { motion } from 'framer-motion';
import EduAndExp from './Education&Experience/EduAndExp';
import { headingVariant, letterVariant, contactVariant } from '../Animations/AnimationVarients';

const About = () => {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
  const loadingTimer = setTimeout(() => {
    setLoading(false);
  }, 2000);
  return () => clearTimeout(loadingTimer);
  }, [])


  

  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  



 
  



 


  const heading = 'ABOUT ME'

  

  return loading ? ( <PageLoad /> ) : (
    <>
    <Sidebar />
   
    <section id="about" className="space-y-20  bg-customColor text-white">
    <motion.h2
      variants={headingVariant}
      initial="hidden"
      animate="visible"
      className="text-[2.8rem] pt-24  md:text-5xl lg:text-6xl text-center font-bold" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }}
    >
      {heading.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariant}
          className={char === 'M' || char === 'E' ? 'text-yellowColor' : ''}
        >
          {char}
        </motion.span>
      ))}
    </motion.h2>
      <section className='flex md:justify-center'>

     
       <motion.div
       variants={contactVariant}
       initial="hidden"
       animate="visible" 
       className='lg:w-[60rem] md:px-28 px-10 flex flex-col justify-center'>
        
        <h3 className="text-2xl font-bold mb-6 text-start">PERSONAL INFOS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-[15rem] gap-10 text-start">
          <div className='font-semibold '>
            <p className="mb-4"><span className=" text-slate-400">Full Name : </span>Sreeharsh K</p>
            <p className="mb-4"><span className=" text-slate-400">Age : </span>21</p>
            <p className="mb-4"><span className=" text-slate-400">Nationality : </span>India</p>
            <p className="mb-4"><span className=" text-slate-400">Languages : </span>English | Malayalam</p>
          </div>
          <div className='font-semibold '>
            <p className="mb-4"><span className=" text-slate-400">State : </span>Kerala</p>
            <p className="mb-4"><span className=" text-slate-400">Phone : </span>+91 7025984377</p>
            <p className="mb-4"><span className=" text-slate-400">Email : </span>sreeharshk92@gmail.com</p>
            <p className="mb-4"><span className=" text-slate-400">Freelance : </span>Available</p>
          </div>
        </div>
        <a href="/resume.pdf" download="Sreeharsh_k_resume.pdf">

       
        <button type="submit" className="text-sm mt-5 font-bold flex items-center pl-8 border border-yellowColor rounded-3xl justify-between hover:bg-yellowColor hover:transition duration-500 ease-in-out">
                      DOWNLOAD CV
                      <FaDownload className="ml-5 bg-yellowColor text-[3rem] rounded-full p-[.8rem]" />
                    </button>
        </a>
      </motion.div>
      </section>

      <hr className="mx-auto md:w-[50%] lg:w-[30rem]  w-[85%] border-slate-700 " />
      {/* Skill */}
     

    
      <Skill />

      <hr className="mx-auto md:w-[50%] lg:w-[30rem] w-[85%] border-slate-700 " />
<EduAndExp />
      
    </section>
    </>
  );
};

export default About;
