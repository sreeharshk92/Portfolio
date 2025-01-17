import React from 'react'
import './EduAndExp.css'
import { motion } from 'framer-motion'
import {FaGraduationCap, FaSchool, FaBriefcase,} from 'react-icons/fa'

const EduAndExp = () => {

    const subHeadVariant = {
        hidden: {
          opacity: 0,
          y: -5,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      };

  return (
    <div >
        <section className=''>


<motion.h3
  
   variants={subHeadVariant}
   initial="hidden"
   animate= "visible"

style={{ fontFamily: 'Montserrat,sans-serif', fontWeight: '700' }} className="lg:text-3xl md:text-2xl text-xl font-bold text-center mb-16">EDUCATION & EXPERIENCE</motion.h3>

<main className='education-container grid lg:grid-cols-2 md:grid-cols-1 md:px-10 lg:px-36 px-10 mx-auto lg:gap-0 pb-[7rem] md:gap-0 gap-14  grid-cols-1'>


  <section className='flex flex-col gap-8'>

    <div className='inline-flex gap-5'>

      <section className='flex flex-col items-center '>
        <div className='yellowCircle'>
          <FaGraduationCap />
        </div>
        <div className="lg:h-[6rem] md:h-[6rem] h-[6rem] border-l-[0.1rem] border-gray-400"></div>
      </section>

      <section className='flex flex-col py-2 w-[25rem] gap-4'>


        <div className='bg-[#212121]  w-[7rem] py-1 justify-center items-center  rounded-xl'>
          <p className='year'>2021 - 2023</p>
        </div>

        <h1 className='text-start text-lg '>BACHELOR DEGREE <span>- KANNUR UNIVERSITY</span></h1>
        <p className='text-start'>Pursuing a Bachelor of Degree at Kannur University </p>
      </section>

    </div>

    <div className='inline-flex gap-5 '>

      <section className='flex flex-col items-center '>
        <div className='yellowCircle'>
          <FaSchool />
        </div>
        <div className=" border-l-[0.1rem] border-gray-400 lg:h-[9rem] md:h-[9rem] h-[9rem]"></div>
      </section>

      <section className='flex flex-col py-2 w-[25rem] gap-4'>


        <div className='bg-[#212121] w-[7rem] py-1 justify-center items-center  rounded-xl'>
          <p className='year '>2019 - 2020</p>
        </div>

        <h1 className='text-start text-lg'>HIGHER SECONDARY <span>- GOVT HSS MEENKUNNU</span></h1>
        <p className='text-start'>Completed Higher Secondary education at GOVT HSS, Meenkunnu, with a focus on Commerce and Computer Applications.</p>
      </section>

    </div>

    <div className='inline-flex gap-5 '>

      <section className='flex flex-col items-center '>
        <div className='yellowCircle'><FaSchool /></div>
        <div className="border-l-[0.1rem] border-gray-400 lg:h-[8rem] md:h-[8rem] h-[8rem]"></div>
      </section>

      <section className='flex flex-col py-2 w-[25rem] gap-4'>


        <div className='bg-[#212121] w-[7rem] py-1 justify-center items-center  rounded-xl'>
          <p className='year'>2018</p>
        </div>

        <h1 className='text-start text-lg'>SSLC <span>- AHSS AZHIKODE</span></h1>
        <p className='text-start'>Completed SSLC at AHSS Azhikode, where I developed a strong academic foundation.</p>
      </section>

    </div>


  </section>

  <section className='flex flex-col gap-8'>
    <div className='inline-flex gap-5'>

      <section className='flex flex-col items-center '>
        <div className='yellowCircle '><FaBriefcase /></div>
        <div className="border-l-[0.1rem] border-gray-400 lg:h-[10rem] md:h-[10rem] h-[11rem]"></div>
      </section>

      <section className='flex flex-col py-2 w-[29rem] gap-4'>


        <div className='bg-[#212121]  w-[8rem] py-1 justify-center items-center  rounded-xl'>
          <p className='year'>2024 - PRESENT</p>
        </div>

        <h1 className='text-start text-lg'>INTERN <span>- EDUZELL TECHNOLOGIES & SOLUTIONS L L P</span></h1>
        <p className='text-start'>Currently working as an Intern at Eduzell Technologies & Solutions LLP, where I am gaining hands-on experience in web development, focusing on building responsive and dynamic applications using technologies like Laravel, React.js, and MySQL.</p>
      </section>

    </div>
  </section>



</main>
</section>
    </div>
  )
}

export default EduAndExp