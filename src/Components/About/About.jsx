import React, { useRef, useState, useEffect } from 'react';
import './About.css'
import { FaGraduationCap, FaSchool, FaBriefcase, FaDownload} from "react-icons/fa";
import Sidebar from '../SideBar/Sidebar';
import Skill from '../Skill/Skill';
import Loader from '../Loader/Loader';

const About = () => {

  const [isLoading, setIsLoading] = useState(true)

  // const skills = [
  //   { name: 'HTML', percentage: 90, },
  //   { name: 'CSS', percentage: 85 },
  //   { name: 'JavaScript', percentage: 75 },
  //   { name: 'React', percentage: 80 },
  //   { name: 'MySQL', percentage: 70 },
  //   { name: 'PHP', percentage: 85 },
  //   { name: 'Laravel', percentage: 80 },
  // ];

  useEffect(() => {
  const loadingTimer = setTimeout(() => {
    setIsLoading(false);
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


  

  return isLoading ? ( <Loader /> ) : (
    <>
    <Sidebar />
   
    <section id="about" className="py-[6rem]  bg-customColor text-white">
    <h2 className="text-[2.8rem] md:text-5xl lg:text-6xl text-center font-bold mb-24" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }}>
          ABOUT <span className='text-yellowColor'>ME</span>
        </h2>
      <section className='flex md:justify-center    '>

     
       <div className='lg:w-[60rem] md:px-28 px-10 flex flex-col justify-center'>
        
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

       
        <button type="submit" className="text-sm font-bold flex items-center pl-8 border border-yellowColor rounded-3xl justify-between mt-8 lg:mb-10 md:mb-auto mb-[3rem] hover:bg-yellowColor hover:transition duration-500 ease-in-out">
                      DOWNLOAD CV
                      <FaDownload className="ml-5 bg-yellowColor text-[3rem] rounded-full p-[.8rem]" />
                    </button>
        </a>
      </div>
      </section>

      <hr className="mx-auto md:w-[50%] lg:w-[30rem]  w-[18rem] border-slate-700 my-10" />
      {/* Skill */}
     

      <h3 className="lg:text-3xl md:text-2xl text-xl  px-10 text-center  font-bold mb-16" style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }}>MY SKILLS</h3>
    
      <Skill />


      <section className='py-10'>
      <hr className="mx-auto md:w-[50%] lg:w-[30rem] w-[18rem] border-slate-700 mb-14" />
        <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="lg:text-3xl md:text-2xl text-xl font-bold text-center mb-16">EDUCATION & EXPERIENCE</h3>

        <main className='education-container grid lg:grid-cols-2 md:grid-cols-1 md:px-10 lg:px-36 px-10 mx-auto lg:gap-0 md:gap-0 gap-14  grid-cols-1'>


          <section className='flex flex-col gap-8'>

            <div className='inline-flex gap-5'>

              <section className='flex flex-col items-center '>
                <div className='yellowCircle'>
                  <FaGraduationCap />
                </div>
                <div className="h-[7rem] border-l-[0.1rem] border-gray-400"></div>
              </section>

              <section className='flex flex-col py-2 w-[25rem] gap-4'>


                <div className='bg-[#212121]  w-[7rem] py-1 justify-center items-center  rounded-xl'>
                  <p className='year'>2021 - 2023</p>
                </div>

                <h1 className='text-start text-lg '>BACHELOR DEGREE <span>- KANNUR UNIVERSITY</span></h1>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing dgdfgfdgdfgdfffdg</p>
              </section>

            </div>

            <div className='inline-flex gap-5 '>

              <section className='flex flex-col items-center '>
                <div className='yellowCircle'>
                  <FaSchool />
                </div>
                <div className=" border-l-[0.1rem] border-gray-400 h-[7rem]"></div>
              </section>

              <section className='flex flex-col py-2 w-[25rem] gap-4'>


                <div className='bg-[#212121] w-[7rem] py-1 justify-center items-center  rounded-xl'>
                  <p className='year '>2019 - 2020</p>
                </div>

                <h1 className='text-start text-lg'>HIGHER SECONDARY <span>- GOVT HSS MEENKUNNU</span></h1>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing dgdfgfdgdfgdfffdg</p>
              </section>

            </div>

            <div className='inline-flex gap-5 '>

              <section className='flex flex-col items-center '>
                <div className='yellowCircle'><FaSchool /></div>
                <div className="border-l-[0.1rem] border-gray-400 h-[7rem]"></div>
              </section>

              <section className='flex flex-col py-2 w-[25rem] gap-4'>


                <div className='bg-[#212121] w-[7rem] py-1 justify-center items-center  rounded-xl'>
                  <p className='year'>2018</p>
                </div>

                <h1 className='text-start text-lg'>SSLC <span>- AHSS AZHIKODE</span></h1>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing dgdfgfdgdfgdfffdg</p>
              </section>

            </div>


          </section>

          <section className='flex flex-col gap-8'>
            <div className='inline-flex gap-5'>

              <section className='flex flex-col items-center '>
                <div className='yellowCircle '><FaBriefcase /></div>
                <div className="border-l-[0.1rem] border-gray-400 h-[7rem]"></div>
              </section>

              <section className='flex flex-col py-2 w-[29rem] gap-4'>


                <div className='bg-[#212121]  w-[8rem] py-1 justify-center items-center  rounded-xl'>
                  <p className='year'>2024 - PRESENT</p>
                </div>

                <h1 className='text-start text-lg'>INTERN <span>- EDUZELL TECHNOLOGIES & SOLUTIONS L L P</span></h1>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing dgdfgfdgdfgdfffdg</p>
              </section>

            </div>
          </section>



        </main>
      </section>
    </section>
    </>
  );
};

export default About;
