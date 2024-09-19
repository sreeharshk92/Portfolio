import React from 'react';
import './About.css'
import { FaDownload } from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { FaBriefcase } from 'react-icons/fa';

const About = () => {

  const skills = [
    { name: 'HTML', percentage: 90, },
    { name: 'CSS', percentage: 85 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React', percentage: 80 },
    { name: 'MySQL', percentage: 70 },
    { name: 'PHP', percentage: 85 },
    { name: 'Laravel', percentage: 80 },
  ];

  return (
    <section id="about" className="py-[6rem] bg-customColor  text-white">
      <div className='lg:px-96 md:px-96 px-10 flex flex-col justify-center'>

        <h2 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '900' }} className="text-6xl text-center font-bold mb-[6.4rem] bg-yellow-200">ABOUT <span className='text-yellowColor'>ME</span></h2>
        <h3 className="text-2xl font-bold mb-6 text-start">PERSONEL INFOS</h3>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[16rem] text-start">
          <div className='font-semibold w-72'>
            <p className="mb-4"><span className=" text-slate-400">Full Name : </span>Sreeharsh K</p>
            <p className="mb-4"><span className=" text-slate-400">Age : </span>21</p>
            <p className="mb-4"><span className=" text-slate-400">Nationality : </span>India</p>
            <p className="mb-4"><span className=" text-slate-400">Languages : </span>English | Malayalam</p>
          </div>

          <div className='font-semibold w-72'>
            <p className="mb-4"><span className=" text-slate-400">State : </span>Kerala</p>
            <p className="mb-4"><span className=" text-slate-400">Phone : </span>+ 91 7025984377</p>
            <p className="mb-4"><span className=" text-slate-400">Email : </span>sreeharshk92@gmail.com</p>
            <p className="mb-4"><span className=" text-slate-400">Freelance : </span>Available</p>
          </div>

        </div>
        <button style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '500' }}
          className='flex items-center justify-center border border-yellowColor rounded-3xl py-3 w-[13rem] mt-8 mb-[3.9rem] hover:bg-yellowColor hover:transition duration-500 ease-linear'>
          DOWNLOAD CV <FaDownload className='ml-5' /></button>
      </div>


      <hr className="mx-[31.5rem] border-slate-700 mb-14" />
      <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="text-3xl text-center font-bold mb-16">MY SKILLS</h3>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 s">

        {
          skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center ">
              <div className="mb-4">

                <section className='flex justify-between px-2'>
                  <p>{skill.name}</p>
                  <p>{skill.percentage}%</p>
                </section>


                <div className=" w-[10rem] rounded-full border-2 border-yellowColor flex">
                  <div className='w-[5rem] bg-yellowColor h-6 rounded-full '></div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <section className='py-10'>
        <hr className="mx-[31.5rem] border-slate-700 mb-14" />
        <h3 style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="text-3xl font-bold text-center mb-16">EDUCATION & EXPERIENCE</h3>

        <main className='education-container grid grid-cols-2 md:grid-cols-1 md:gap-3 md:px-10 lg:grid-cols-2'>


          <section className='flex flex-col gap-8'>

            <div className='inline-flex gap-5'>

              <section className='flex flex-col items-center '>
                <div className='yellowCircle'>
                  <FaGraduationCap className='' />
                </div>
                <div className="h-[7rem] border-l-[0.1rem] border-gray-400"></div>
              </section>

              <section className='flex flex-col py-2 w-[25rem] gap-4'>


                <div className='bg-[#212121]  w-[7rem] py-1 justify-center items-center  rounded-xl'>
                  <p className='font-medium text-sm'>2021 - 2023</p>
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
                  <p className='font-medium text-sm'>2019 - 2020</p>
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


                <div className='bg-[#212121]  w-[7rem] py-1 justify-center items-center  rounded-xl'>
                  <p className='font-medium text-sm'>2018</p>
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
                  <p className='font-medium text-sm'>2024 - PRESENT</p>
                </div>

                <h1 className='text-start text-lg'>INTERN <span>- EDUZELL TECHNOLOGIES & SOLUTIONS L L P</span></h1>
                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing dgdfgfdgdfgdfffdg</p>
              </section>

            </div>
          </section>



        </main>
      </section>
    </section>
  );
};

export default About;
